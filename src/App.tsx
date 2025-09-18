import { Document, Page, StyleSheet, Text, View, pdf } from "@react-pdf/renderer";
import "./App.css";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    border: '3px solid red',
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text debug>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const handleDownload = async () => {
  const blob = await pdf(<MyDocument />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "document.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

function App() {
  return <button onClick={handleDownload}>Download PDF</button>;
}

export default App;

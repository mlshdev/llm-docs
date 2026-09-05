> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.extractfromfile.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/core-nodes/n8n-nodes-base.extractfromfile.md)

# Extract From File <a id="extract-from-file"></a>

A common pattern in n8n workflows is to receive a file, either from an [HTTP Request node][] (for files you are fetching from a website), a [Webhook Node][] (for files which are sent to your workflow from elsewhere), or from a local source. Data obtained in this way is often in a binary format, for example a spreadsheet or PDF.

The Extract From File node extracts data from a binary format file and converts it to JSON, which can then be easily manipulated by the rest of your workflow. For converting JSON back into a binary file type, please see the [Convert to File](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.converttofile) node.

## Operations <a id="operations"></a>

Use the **Operations** drop-down to select the format of the source file to extract data from.

- **Extract From CSV**: The "Comma Separated Values" file type is commonly used for tabulated data.
- **Extract From HTML**: Extract fields from standard web page HTML format files.
- **Extract From JSON**: Extract JSON data from a binary file.
- **Extract From ICS**: Extract fields from iCalendar format files.
- **Extract From ODS**: Extract fields from ODS spreadsheet files.
- **Extract From PDF**: Extract fields from Portable Document Format files.
- **Extract From RTF**: Extract fields from Rich Text Format files.
- **Extract From Text File**: Extract fields from a standard text file format.
- **Extract From XLS**: Extract fields from a Microsoft Excel file (older format).
- **Extract From XLSX**: Extract fields from a Microsoft Excel file.
- **Move File to Base64 String**: Converts binary data to a text-friendly [base64][] format.

## Example workflow <a id="example-workflow"></a>

In this example, a Webhook node is used to trigger the workflow. When a CSV file is sent to the webhook address, the file data is output and received by the Extract From File node.

**Workflow example**

```json
{
  "name": "Extract from file example",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "06696ea7-9dc7-464a-873b-3feb095b0874",
        "options": {
          "rawBody": true
        }
      },
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2,
      "position": [
        -380,
        -80
      ],
      "id": "dfbd51af-6050-47c5-a26c-74cba77f65f7",
      "name": "Webhook",
      "webhookId": "06696ea7-9dc7-464a-873b-3feb095b0874"
    },
    {
      "parameters": {
        "options": {
          "headerRow": false
        }
      },
      "type": "n8n-nodes-base.extractFromFile",
      "typeVersion": 1,
      "position": [
        -160,
        -80
      ],
      "id": "1b1e4643-8269-402b-83af-dfd90fd6a0b5",
      "name": "Extract from File"
    }
  ],
  "pinData": {},
  "connections": {
    "Webhook": {
      "main": [
        [
          {
            "node": "Extract from File",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": true,
  "settings": {
    "executionOrder": "v1"
  },
  "versionId": "dd2bf7f1-692a-41a8-9c2e-7931de57fa13",
  "meta": {
    "instanceId": "1060f46e51fc7902c377ab29d7cbfb87696ddf6b3c5c27cbbb65c3cb36e21baf"
  },
  "id": "9i3iDZf5MpjlJ2sh",
  "tags": []
}
```

Set to operate as 'Extract from CSV', the node then outputs the data as a series of JSON 'row' objects:

```
{
  "row": {
  "0": "apple",
  "1": "1",
  "2": "2",
  "3": "3"
  }
  ...
```

> **Info**
> **Receiving files with a webhook**
>
> Select the Webhook Node's **Add Options** button and select **Raw body**, then enable that setting to get the node to output the binary file that the subsequent node is expecting.

## Node parameters <a id="node-parameters"></a>

### Input Binary Field <a id="input-binary-field"></a>

Enter the name of the field from the node input data that contains the binary file. The default is 'data'.

### Destination Output Field <a id="destination-output-field"></a>

Enter the name of the field in the node output that will contain the extracted data.

This parameter is only available for these operations:

- Extract From JSON
- Extract From ICS
- Extract From Text File
- Move File to Base64 String

## Templates and examples <a id="templates-and-examples"></a>

[Browse Extract From File integration templates](https://n8n.io/integrations/extract-from-file) or [search all templates](https://n8n.io/workflows/)

[HTTP Request Node]: n8n-nodes-base.httprequest/README.md

[Webhook Node]: n8n-nodes-base.webhook/README.md

[base64]: https://datatracker.ietf.org/doc/html/rfc4648#section-4

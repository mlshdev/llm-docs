> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/tablecellselector](https://developer.apple.com/documentation/applenewsformat/tablecellselector)

# TableCellSelector

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The object for defining conditions that apply a conditional style to a cell.

## Declaration

```
object TableCellSelector
```

## Properties

- `columnIndex` — `integer`: Specifies a column index. The leftmost column of data has an index of `0`.
- `descriptor` — `string`: Specifies the `identifier` of a specific data descriptor. All cells for this data descriptor will be selected. See [DataDescriptor](datadescriptor.md).
- `evenColumns` — `boolean`: When `true`, selects the cells in even columns.
- `evenRows` — `boolean`: When `true`, selects the cells in even rows.
- `oddColumns` — `boolean`: When `true`, selects the cells in odd columns.
- `oddRows` — `boolean`: When `true`, selects the cells in odd rows.
- `rowIndex` — `integer`: Specifies a row index. The topmost row of data has an index of `0`.

<a id="Discussion"></a>

## Discussion

Use the `TableCellSelector` object to set the criteria for applying conditional styles to rows. For example, you could set criteria to select a cell at a specific location or to select cells for a certain data descriptor.

You can use this object in  [ConditionalTableCellStyle](conditionaltablecellstyle.md).

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "datatable",
      "style": "bookTableStyle",
      "showDescriptorLabels": true,
      "sortBy": [
        {
          "descriptor": "id-publication-date",
          "direction": "ascending"
        }
      ],
      "data": {
        "descriptors": [
          {
            "identifier": "id-publication-date",
            "key": "publicationDate",
            "label": "Date",
            "dataType": "string"
          },
          {
            "identifier": "id-title",
            "key": "title",
            "label": "Title",
            "dataType": "string"
          },
          {
            "identifier": "id-publisher",
            "key": "publisher",
            "label": "Publisher",
            "dataType": "string"
          }
        ],
        "records": [
          {
            "title": "Mardi",
            "publicationDate": "1849",
            "publisher": "Harper & Brothers"
          },
          {
            "title": "Typee",
            "publicationDate": "1846",
            "publisher": "Wiley and Putnam"
          },
          {
            "title": "White-Jacket",
            "publicationDate": "1850",
            "publisher": "Harper & Brothers"
          },
          {
            "title": "Omoo",
            "publicationDate": "1847",
            "publisher": "Harper & Brothers"
          },
          {
            "title": "Redburn",
            "publicationDate": "1849",
            "publisher": "Harper & Brothers"
          },
          {
            "title": "Moby-Dick",
            "publicationDate": "1851",
            "publisher": "Harper & Brothers"
          }
        ]
      }
    }
  ],
  "componentStyles": {
    "bookTableStyle": {
      "tableStyle": {
        "headerCells": {
          "padding": 5,
          "textStyle": {
            "fontWeight": "bold",
            "fontStyle": "normal"
          }
        },
        "cells": {
          "padding": 2,
          "conditional": [
            {
              "selectors": [
                {
                  "oddRows": true
                }
              ],
              "backgroundColor": "#eeeeee"
            }
          ]
        }
      }
    }
  }
}
```

## See Also

### Table Styles

- [Defining and Using Table Styles](../applenews/defining-and-using-table-styles.md): Apply table styles, such as borders and backgrounds, to the rows, columns, and cells in your HTML and JSON tables.
- [TableStyle](tablestyle.md): The object for defining a style for rows, columns, cells, and headers in a table.
- [TableRowStyle](tablerowstyle.md): The object for applying styles to rows in a table.
- [ConditionalTableRowStyle](conditionaltablerowstyle.md): The object for applying styles to table rows that meet certain conditions.
- [TableRowSelector](tablerowselector.md): The object for defining conditions that apply a conditional style to a row.
- [TableColumnStyle](tablecolumnstyle.md): The object for applying styles to columns in a table.
- [ConditionalTableColumnStyle](conditionaltablecolumnstyle.md): The object for applying styles to table columns that meet certain conditions.
- [TableColumnSelector](tablecolumnselector.md): The object for defining conditions that apply a conditional style to a column.
- [TableCellStyle](tablecellstyle.md): The object for applying styles to cells in a table.
- [ConditionalTableCellStyle](conditionaltablecellstyle.md): The object for applying a style to table cells that meet certain conditions.
- [TableBorder](tableborder.md): The object for setting borders for tables.
- [TableStrokeStyle](tablestrokestyle.md): The object for defining the color, width, and style of a stroke in a table.
- [Padding](padding.md): The object for defining space around the content in a table cell.
- [FormattedText](formattedtext.md): The object for specifying formatted text content and styling for captions in table cells.

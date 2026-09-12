> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/tableborder](https://developer.apple.com/documentation/applenewsformat/tableborder)

# TableBorder

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.8+

The object for setting borders for tables.

## Declaration

```
object TableBorder
```

## Properties

- `all` — `TableStrokeStyle`: Defines the stroke properties of the border. You can’t set stroke properties for each side; you can only disable or enable the border for each side.
- `bottom` — `boolean`: Indicates whether Apple News applies the border to the bottom.
  **Default:** `true`
- `left` — `boolean`: Indicates whether Apple News applies the border to the left side.
  **Default:** `true`
- `right` — `boolean`: Indicates whether Apple News applies the border to the right side.
  **Default:** `true`
- `top` — `boolean`: Indicates whether Apple News applies the border to the top.
  **Default:** `true`

<a id="Discussion"></a>

## Discussion

The `TableBorder` object defines a table cell border. The border style is the same for all sides of the table cell. Use a value of `false` for any side of a border that you don’t want to show.

<a id="Example"></a>

### Example

```json
{
  "componentStyles": {
    "exampleStyle": {
      "tableStyle": {
        "cells": {
          "border": {
            "all": {
              "width": 2,
              "color": "#ddd",
              "style": "solid"
            },
            "left": false,
            "right": false
          }
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
- [TableCellSelector](tablecellselector.md): The object for defining conditions that apply a conditional style to a cell.
- [TableStrokeStyle](tablestrokestyle.md): The object for defining the color, width, and style of a stroke in a table.
- [Padding](padding.md): The object for defining space around the content in a table cell.
- [FormattedText](formattedtext.md): The object for specifying formatted text content and styling for captions in table cells.

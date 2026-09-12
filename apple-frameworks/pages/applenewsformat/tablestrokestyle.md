> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/tablestrokestyle](https://developer.apple.com/documentation/applenewsformat/tablestrokestyle)

# TableStrokeStyle

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.8+

The object for defining the color, width, and style of a stroke in a table.

## Declaration

```
object TableStrokeStyle
```

## Properties

- `color` — `Color`: The stroke color. The value defaults to `#000` (black).
- `style` — `string`: The style of the stroke.
  **Allowed values:** `solid`
- `width` — `(SupportedUnits | number)`: The width of the stroke line.
  **Default:** `1`  
  **Allowed types:** `SupportedUnits`, `number`

<a id="Discussion"></a>

## Discussion

You can specify the `color`, `style` (`solid`), and `width` of a stroke in a table. For example, apply style to divider lines between rows.

<a id="Example"></a>

### Example

```json
{
  "componentStyles": {
    "exampleStyle": {
      "tableStyle": {
        "rows": {
          "backgroundColor": "#fff",
          "divider": {
            "width": 1,
            "color": "#ddd"
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
- [TableBorder](tableborder.md): The object for setting borders for tables.
- [Padding](padding.md): The object for defining space around the content in a table cell.
- [FormattedText](formattedtext.md): The object for specifying formatted text content and styling for captions in table cells.

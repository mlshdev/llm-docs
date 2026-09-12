> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenews/defining-and-using-table-styles](https://developer.apple.com/documentation/applenews/defining-and-using-table-styles)

# Defining and Using Table Styles

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Article

Apply table styles, such as borders and backgrounds, to the rows, columns, and cells in your HTML and JSON  tables.

<a id="overview"></a>

## Overview

Apple News Format lets you apply styles to individual rows, columns, and cells in your HTML and JSON data tables. In addition, you can apply text styles to text in table cells. In an HTML table, you format the text using HTML. In a JSON table, you use [FormattedText](../applenewsformat/formattedtext.md) as the value of a key-value pair in a record in [RecordStore](../applenewsformat/recordstore.md). The [DataDescriptor](../applenewsformat/datadescriptor.md) for that record must have a `dataType` of `text`.

To set the style for the rows, columns, and cells in a table, you use the [TableStyle](../applenewsformat/tablestyle.md) object in the [ComponentStyle](../applenewsformat/componentstyle.md) the table uses.

The following table lists the styles that you can apply to the rows, columns, and cells in tables. All can be conditional styles that Apple News Format applies to parts of the table that meet certain criteria, such as odd-numbered rows or a cell in a specific location.

| **Parts of the table** | **Style options** |
| --- | --- |
| Rows and row headers | Background color or fill, divider lines, row height |
| Columns and column headers | Background color or fill, divider lines, minimum column width, column width |
| Cells and cell headers | Background color or fill, border, cell height, horizontal alignment, minimum width, cell padding, vertical alignment, cell width |

## See Also

### Table Styles

- [TableStyle](../applenewsformat/tablestyle.md): The object for defining a style for rows, columns, cells, and headers in a table.
- [TableRowStyle](../applenewsformat/tablerowstyle.md): The object for applying styles to rows in a table.
- [ConditionalTableRowStyle](../applenewsformat/conditionaltablerowstyle.md): The object for applying styles to table rows that meet certain conditions.
- [TableRowSelector](../applenewsformat/tablerowselector.md): The object for defining conditions that apply a conditional style to a row.
- [TableColumnStyle](../applenewsformat/tablecolumnstyle.md): The object for applying styles to columns in a table.
- [ConditionalTableColumnStyle](../applenewsformat/conditionaltablecolumnstyle.md): The object for applying styles to table columns that meet certain conditions.
- [TableColumnSelector](../applenewsformat/tablecolumnselector.md): The object for defining conditions that apply a conditional style to a column.
- [TableCellStyle](../applenewsformat/tablecellstyle.md): The object for applying styles to cells in a table.
- [ConditionalTableCellStyle](../applenewsformat/conditionaltablecellstyle.md): The object for applying a style to table cells that meet certain conditions.
- [TableCellSelector](../applenewsformat/tablecellselector.md): The object for defining conditions that apply a conditional style to a cell.
- [TableBorder](../applenewsformat/tableborder.md): The object for setting borders for tables.
- [TableStrokeStyle](../applenewsformat/tablestrokestyle.md): The object for defining the color, width, and style of a stroke in a table.
- [Padding](../applenewsformat/padding.md): The object for defining space around the content in a table cell.
- [FormattedText](../applenewsformat/formattedtext.md): The object for specifying formatted text content and styling for captions in table cells.

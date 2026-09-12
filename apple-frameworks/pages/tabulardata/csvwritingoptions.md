> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvwritingoptions](https://developer.apple.com/documentation/tabulardata/csvwritingoptions)

# CSVWritingOptions

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A set of CSV file-writing options.

## Declaration

```swift
struct CSVWritingOptions
```

## Topics

### Initializers

- [init()](csvwritingoptions/init%28%29.md): Creates the default set of options for writing a CSV file.
- [init(includesHeader:dateFormat:nilEncoding:trueEncoding:falseEncoding:newline:delimiter:)](csvwritingoptions/init%28includesheader_dateformat_nilencoding_trueencoding_falseencoding_newline_delimiter_%29.md): Deprecated. Creates a set of options for writing a CSV file.
- [init(includesHeader:nilEncoding:trueEncoding:falseEncoding:newline:delimiter:)](csvwritingoptions/init%28includesheader_nilencoding_trueencoding_falseencoding_newline_delimiter_%29.md): Creates a set of options for writing a CSV file.

### Instance Properties

- [dateFormat](csvwritingoptions/dateformat.md): Deprecated. The format the CSV file generator uses to create date strings.
- [dateFormatter](csvwritingoptions/dateformatter.md): A closure that maps dates to their string representations.
- [delimiter](csvwritingoptions/delimiter.md): The character the CSV file generator uses to separate data fields in a CSV file.
- [falseEncoding](csvwritingoptions/falseencoding.md): The string the CSV file generator uses to represent false Boolean values.
- [includesHeader](csvwritingoptions/includesheader.md): A Boolean value that indicates whether to write a header with the column names.
- [newline](csvwritingoptions/newline.md): The string the CSV file generator uses to represent a newline sequence.
- [nilEncoding](csvwritingoptions/nilencoding.md): The string the CSV file generator uses to represent nil values.
- [trueEncoding](csvwritingoptions/trueencoding.md): The string the CSV file generator uses to represent true Boolean values.

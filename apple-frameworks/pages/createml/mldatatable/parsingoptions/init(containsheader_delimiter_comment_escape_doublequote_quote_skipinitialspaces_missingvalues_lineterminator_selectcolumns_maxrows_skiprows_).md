> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/parsingoptions/init(containsheader:delimiter:comment:escape:doublequote:quote:skipinitialspaces:missingvalues:lineterminator:selectcolumns:maxrows:skiprows:)](https://developer.apple.com/documentation/createml/mldatatable/parsingoptions/init(containsheader:delimiter:comment:escape:doublequote:quote:skipinitialspaces:missingvalues:lineterminator:selectcolumns:maxrows:skiprows:))

# init(containsHeader:delimiter:comment:escape:doubleQuote:quote:skipInitialSpaces:missingValues:lineTerminator:selectColumns:maxRows:skipRows:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates CSV parsing options.

## Declaration

```swift
init(containsHeader: Bool = true, delimiter: String = ",", comment: String = "", escape: String = "\\", doubleQuote: Bool = true, quote: String = "\"", skipInitialSpaces: Bool = true, missingValues: [String] = ["NA"], lineTerminator: String = "\n", selectColumns: [String]? = nil, maxRows: Int? = nil, skipRows: Int = 0)
```

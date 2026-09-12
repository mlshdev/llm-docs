> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumnbuilder/buildeither(first:)](https://developer.apple.com/documentation/swiftui/tablecolumnbuilder/buildeither(first:))

# buildEither(first:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · visionOS 1.1+

Creates a column result for the first of two column content alternatives.

## Declaration

```swift
@export(implementation) static func buildEither<T, F>(first: T) -> _ConditionalContent<T, F> where RowValue == T.TableRowValue, Sort == T.TableColumnSortComparator, T : TableColumnContent, F : TableColumnContent, T.TableColumnSortComparator == F.TableColumnSortComparator, T.TableRowValue == F.TableRowValue
```

<a id="discussion"></a>

## Discussion

This method provides support for “if” statements in multi-statement closures, producing conditional content for the “then” branch.

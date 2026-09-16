> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/tablecolumnbuilder/buildif(_:)

# buildIf(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · visionOS 1.1+

## Declaration

```swift
@export(implementation) static func buildIf<C>(_ content: C?) -> C? where RowValue == C.TableRowValue, C : TableColumnContent, C.TableColumnSortComparator == Never
```

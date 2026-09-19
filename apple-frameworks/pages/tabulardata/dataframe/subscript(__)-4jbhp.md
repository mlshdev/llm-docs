> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/dataframe/subscript(_:)-4jbhp

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Accesses a result column by its typed descriptor.

## Declaration

```swift
subscript<T>(column: ResultColumn<T>) -> Column<T> { get }
```

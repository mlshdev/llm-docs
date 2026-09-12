> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/columnconcatenator/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/columnconcatenator/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Combines every numerical column in a data frame into to a shaped array for each row.

## Declaration

```swift
func applied(to input: DataFrame, eventHandler: EventHandler? = nil) throws -> DataFrame
```

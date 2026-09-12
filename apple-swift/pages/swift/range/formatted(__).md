> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/range/formatted(_:)](https://developer.apple.com/documentation/swift/range/formatted(_:))

# formatted(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Formats the date range using the specified style.

## Declaration

```swift
func formatted<S>(_ style: S) -> S.FormatOutput where S : FormatStyle, S.FormatInput == Range<Date>
```

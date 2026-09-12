> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/binaryinteger/formatted(_:)-73k3e](https://developer.apple.com/documentation/swift/binaryinteger/formatted(_:)-73k3e)

# formatted(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Format `self` with the given format. `self` is first converted to `S.FormatInput` type, then format with the given format.

## Declaration

```swift
func formatted<S>(_ format: S) -> S.FormatOutput where S : FormatStyle, S.FormatInput : BinaryInteger
```

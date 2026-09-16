> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/binaryinteger/formatted(_:)-4qd73

# formatted(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Format `self` with the given format.

## Declaration

```swift
func formatted<S>(_ format: S) -> S.FormatOutput where Self == S.FormatInput, S : FormatStyle
```

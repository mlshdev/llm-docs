> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/datecomponents/init(_:strategy:)-62hv8

# init(\_:strategy:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a new `DateComponents` by parsing the given string representation.

## Declaration

```swift
init<T, Value>(_ value: Value, strategy: T) throws where T : ParseStrategy, Value : StringProtocol, T.ParseInput == String, T.ParseOutput == DateComponents
```

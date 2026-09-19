> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/init(_:strategy:)-6cq9s

# init(\_:strategy:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
init<T, Value>(_ value: Value, strategy: T) throws where T : ParseStrategy, Value : StringProtocol, T.ParseInput == String, T.ParseOutput == Date
```

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/subject/send(_:)

# send(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sends a value to the subscriber.

## Declaration

```swift
func send(_ value: Self.Output)
```

## Parameters

- `value`: The value to send.

## See Also

### Delivering elements to subscribers

- [send()](send%28%29.md): Conforms when `Output` is `()`. Sends a void value to the subscriber.

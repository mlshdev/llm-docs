> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/connectablepublisher/connect()](https://developer.apple.com/documentation/combine/connectablepublisher/connect())

# connect()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Connects to the publisher, allowing it to produce elements, and returns an instance with which to cancel publishing.

## Declaration

```swift
func connect() -> any Cancellable
```

<a id="return-value"></a>

## Return Value

A [Cancellable](../cancellable.md) instance that you use to cancel publishing.

## Mentioned In

- [Controlling Publishing with Connectable Publishers](../controlling-publishing-with-connectable-publishers.md)
- [Replacing Foundation Timers with Timer Publishers](../replacing-foundation-timers-with-timer-publishers.md)

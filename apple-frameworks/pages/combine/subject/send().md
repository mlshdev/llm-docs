> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subject/send()](https://developer.apple.com/documentation/combine/subject/send())

# send()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sends a void value to the subscriber.

## Declaration

```swift
func send()
```

## Mentioned In

- [Using Combine for Your App’s Asynchronous Code](../using-combine-for-your-app-s-asynchronous-code.md)

<a id="discussion"></a>

## Discussion

Use `Void` inputs and outputs when you want to signal that an event has occurred, but don’t need to send the event itself.

## See Also

### Delivering elements to subscribers

- [send(\_:)](send%28__%29.md): Sends a value to the subscriber.

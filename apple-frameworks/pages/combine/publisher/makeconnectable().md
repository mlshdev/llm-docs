> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/makeconnectable()](https://developer.apple.com/documentation/combine/publisher/makeconnectable())

# makeConnectable()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a connectable wrapper around the publisher.

## Declaration

```swift
func makeConnectable() -> Publishers.MakeConnectable<Self>
```

<a id="return-value"></a>

## Return Value

A [ConnectablePublisher](../connectablepublisher.md) wrapping this publisher.

## Mentioned In

- [Controlling Publishing with Connectable Publishers](../controlling-publishing-with-connectable-publishers.md)

<a id="discussion"></a>

## Discussion

In the following example, [makeConnectable()](makeconnectable%28%29.md) wraps its upstream publisher (an instance of [Publishers.Share](../publishers/share.md)) with a [ConnectablePublisher](../connectablepublisher.md). Without this, the first sink subscriber would receive all the elements from the sequence publisher and cause it to complete before the second subscriber attaches. By making the publisher connectable, the publisher doesn’t produce any elements until after the [connect()](../connectablepublisher/connect%28%29.md) call.

```swift
 let subject = Just<String>("Sent")
 let pub = subject
     .share()
     .makeConnectable()
 cancellable1 = pub.sink { print ("Stream 1 received: \($0)")  }

 // For example purposes, use DispatchQueue to add a second subscriber
 // a second later, and then connect to the publisher a second after that.
 DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
     self.cancellable2 = pub.sink { print ("Stream 2 received: \($0)") }
 }
 DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
     self.connectable = pub.connect()
 }
 // Prints:
 // Stream 2 received: Sent
 // Stream 1 received: Sent
```

> **Note**

> The [connect()](../connectablepublisher/connect%28%29.md) operator returns a [Cancellable](../cancellable.md) instance that you must retain. You can also use this instance to cancel publishing.

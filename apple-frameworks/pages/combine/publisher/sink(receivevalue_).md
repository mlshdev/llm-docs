> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/sink(receivevalue:)](https://developer.apple.com/documentation/combine/publisher/sink(receivevalue:))

# sink(receiveValue:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Attaches a subscriber with closure-based behavior to a publisher that never fails.

## Declaration

```swift
func sink(receiveValue: @escaping (Self.Output) -> Void) -> AnyCancellable
```

## Parameters

- `receiveValue`: The closure to execute on receipt of a value.

<a id="return-value"></a>

## Return Value

A cancellable instance, which you use when you end assignment of the received value. Deallocation of the result will tear down the subscription stream.

## Mentioned In

- [Processing Published Elements with Subscribers](../processing-published-elements-with-subscribers.md)
- [Using Combine for Your App’s Asynchronous Code](../using-combine-for-your-app-s-asynchronous-code.md)
- [Controlling Publishing with Connectable Publishers](../controlling-publishing-with-connectable-publishers.md)
- [Replacing Foundation Timers with Timer Publishers](../replacing-foundation-timers-with-timer-publishers.md)

<a id="discussion"></a>

## Discussion

Use [sink(receiveValue:)](sink%28receivevalue_%29.md) to observe values received by the publisher and print them to the console. This operator can only be used when the stream doesn’t fail, that is, when the publisher’s [Failure](failure.md) type is [Never](https://developer.apple.com/documentation/swift/never).

In this example, a [Range](https://developer.apple.com/documentation/swift/range) publisher publishes integers to a [sink(receiveValue:)](sink%28receivevalue_%29.md) operator’s `receiveValue` closure that prints them to the console:

```swift
let integers = (0...3)
integers.publisher
    .sink { print("Received \($0)") }

// Prints:
//  Received 0
//  Received 1
//  Received 2
//  Received 3
```

This method creates the subscriber and immediately requests an unlimited number of values, prior to returning the subscriber. The return value should be held, otherwise the stream will be canceled.

## See Also

### Connecting simple subscribers

- [assign(to:on:)](assign%28to_on_%29.md): Conforms when `Failure` is `Never`. Assigns each element from a publisher to a property on an object.
- [assign(to:)](assign%28to_%29.md): Conforms when `Failure` is `Never`. Republishes elements received from a publisher, by assigning them to a property marked as a publisher.
- [sink(receiveCompletion:receiveValue:)](sink%28receivecompletion_receivevalue_%29.md): Attaches a subscriber with closure-based behavior.

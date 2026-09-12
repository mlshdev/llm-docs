> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/sink(receivecompletion:receivevalue:)](https://developer.apple.com/documentation/combine/publisher/sink(receivecompletion:receivevalue:))

# sink(receiveCompletion:receiveValue:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Attaches a subscriber with closure-based behavior.

## Declaration

```swift
func sink(receiveCompletion: @escaping (Subscribers.Completion<Self.Failure>) -> Void, receiveValue: @escaping (Self.Output) -> Void) -> AnyCancellable
```

## Parameters

- `receiveValue`: The closure to execute on receipt of a value.

<a id="return-value"></a>

## Return Value

A cancellable instance, which you use when you end assignment of the received value. Deallocation of the result will tear down the subscription stream.

## Mentioned In

- [Receiving and Handling Events with Combine](../receiving-and-handling-events-with-combine.md)

<a id="discussion"></a>

## Discussion

Use [sink(receiveCompletion:receiveValue:)](sink%28receivecompletion_receivevalue_%29.md) to observe values received by the publisher and process them using a closure you specify.

In this example, a [Range](https://developer.apple.com/documentation/swift/range) publisher publishes integers to a [sink(receiveCompletion:receiveValue:)](sink%28receivecompletion_receivevalue_%29.md) operator’s `receiveValue` closure that prints them to the console. Upon completion the [sink(receiveCompletion:receiveValue:)](sink%28receivecompletion_receivevalue_%29.md) operator’s `receiveCompletion` closure indicates the successful termination of the stream.

```swift
let myRange = (0...3)
cancellable = myRange.publisher
    .sink(receiveCompletion: { print ("completion: \($0)") },
          receiveValue: { print ("value: \($0)") })

// Prints:
//  value: 0
//  value: 1
//  value: 2
//  value: 3
//  completion: finished
```

This method creates the subscriber and immediately requests an unlimited number of values, prior to returning the subscriber. The return value should be held, otherwise the stream will be canceled.

## See Also

### Connecting simple subscribers

- [assign(to:on:)](assign%28to_on_%29.md): Conforms when `Failure` is `Never`. Assigns each element from a publisher to a property on an object.
- [assign(to:)](assign%28to_%29.md): Conforms when `Failure` is `Never`. Republishes elements received from a publisher, by assigning them to a property marked as a publisher.
- [sink(receiveValue:)](sink%28receivevalue_%29.md): Conforms when `Failure` is `Never`. Attaches a subscriber with closure-based behavior to a publisher that never fails.

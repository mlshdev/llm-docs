> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/anysubscriber/init(receivesubscription:receivevalue:receivecompletion:)](https://developer.apple.com/documentation/combine/anysubscriber/init(receivesubscription:receivevalue:receivecompletion:))

# init(receiveSubscription:receiveValue:receiveCompletion:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a type-erasing subscriber that executes the provided closures.

## Declaration

```swift
init(receiveSubscription: ((any Subscription) -> Void)? = nil, receiveValue: ((Input) -> Subscribers.Demand)? = nil, receiveCompletion: ((Subscribers.Completion<Failure>) -> Void)? = nil)
```

## Parameters

- `receiveSubscription`: A closure to execute when the subscriber receives the initial subscription from the publisher.
- `receiveValue`: A closure to execute when the subscriber receives a value from the publisher.
- `receiveCompletion`: A closure to execute when the subscriber receives a completion callback from the publisher.

## See Also

### Creating a type-erased subscriber

- [init(\_:)](init%28__%29-2dbfs.md): Creates a type-erasing subscriber to wrap an existing subscriber.
- [init(\_:)](init%28__%29-3t3eh.md): Creates a type-erasing subscriber to wrap an existing subscriber.

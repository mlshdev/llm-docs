> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/anysubscriber/init(_:)-3t3eh](https://developer.apple.com/documentation/combine/anysubscriber/init(_:)-3t3eh)

# init(\_:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a type-erasing subscriber to wrap an existing subscriber.

## Declaration

```swift
init<S>(_ s: S) where Input == S.Output, Failure == S.Failure, S : Subject
```

## Parameters

- `s`: The subscriber to type-erase.

## See Also

### Creating a type-erased subscriber

- [init(\_:)](init%28__%29-2dbfs.md): Creates a type-erasing subscriber to wrap an existing subscriber.
- [init(receiveSubscription:receiveValue:receiveCompletion:)](init%28receivesubscription_receivevalue_receivecompletion_%29.md): Creates a type-erasing subscriber that executes the provided closures.

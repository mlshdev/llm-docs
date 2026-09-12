> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers/sink](https://developer.apple.com/documentation/combine/subscribers/sink)

# Subscribers.Sink

**Framework:** Combine  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A simple subscriber that requests an unlimited number of values upon subscription.

## Declaration

```swift
final class Sink<Input, Failure> where Failure : Error
```

## Mentioned In

- [Processing Published Elements with Subscribers](../processing-published-elements-with-subscribers.md)

## Topics

### Creating a sink subscriber

- [init(receiveCompletion:receiveValue:)](sink/init%28receivecompletion_receivevalue_%29.md): Initializes a sink with the provided closures.

### Inspecting subscriber properties

- [receiveValue](sink/receivevalue.md): The closure to execute on receipt of a value.
- [receiveCompletion](sink/receivecompletion.md): The closure to execute on completion.

## Relationships

### Conforms To

- [Cancellable](../cancellable.md)
- [CustomCombineIdentifierConvertible](../customcombineidentifierconvertible.md)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Subscriber](../subscriber.md)

## See Also

### Using convenience subscribers

- [Subscribers.Assign](assign.md): A simple subscriber that assigns received elements to a property indicated by a key path.

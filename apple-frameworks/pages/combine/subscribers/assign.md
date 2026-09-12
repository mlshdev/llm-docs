> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers/assign](https://developer.apple.com/documentation/combine/subscribers/assign)

# Subscribers.Assign

**Framework:** Combine  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A simple subscriber that assigns received elements to a property indicated by a key path.

## Declaration

```swift
final class Assign<Root, Input>
```

## Mentioned In

- [Processing Published Elements with Subscribers](../processing-published-elements-with-subscribers.md)

## Topics

### Creating an assign subscriber

- [init(object:keyPath:)](assign/init%28object_keypath_%29.md): Creates a subscriber to assign the value of a property indicated by a key path.

### Receiving elements

- [receive(\_:)](assign/receive%28__%29.md): Tells the subscriber that the publisher has produced an element.

### Receiving life cycle events

- [receive(subscription:)](assign/receive%28subscription_%29.md): Tells the subscriber that it has successfully subscribed to the publisher and may request items.
- [receive(completion:)](assign/receive%28completion_%29.md): Tells the subscriber that the publisher has completed publishing, either normally or with an error.

### Inspecting the assigned property

- [object](assign/object.md): The object that contains the property to assign.
- [keyPath](assign/keypath.md): The key path that indicates the property to assign.

### Supporting Debugging

- [customMirror](assign/custommirror.md): A mirror that reflects the subscriber.
- [description](assign/description.md): A textual representation of this subscriber.
- [playgroundDescription](assign/playgrounddescription.md): A custom playground description for this subscriber.

### Instance Methods

- [cancel()](assign/cancel%28%29.md): Cancel the activity.

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

- [Subscribers.Sink](sink.md): A simple subscriber that requests an unlimited number of values upon subscription.

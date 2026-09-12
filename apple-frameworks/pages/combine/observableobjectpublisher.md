> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/observableobjectpublisher](https://developer.apple.com/documentation/combine/observableobjectpublisher)

# ObservableObjectPublisher

**Framework:** Combine  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that publishes changes from observable objects.

## Declaration

```swift
final class ObservableObjectPublisher
```

## Topics

### Creating an observable object publisher

- [init()](observableobjectpublisher/init%28%29.md): Creates an observable object publisher instance.

### Delivering elements to subscribers

- [send()](observableobjectpublisher/send%28%29.md): Sends the changed value to the downstream subscriber.

## Relationships

### Conforms To

- [Publisher](publisher.md)

## See Also

### Observable Objects

- [ObservableObject](observableobject.md): A type of object with a publisher that emits before the object has changed.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/anycancellable/init(_:)-48fh3](https://developer.apple.com/documentation/combine/anycancellable/init(_:)-48fh3)

# init(\_:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
init<C>(_ canceller: C) where C : Cancellable
```

## See Also

### Creating a type-erased cancellable

- [init(\_:)](init%28__%29-3icn3.md): Initializes the cancellable object with the given cancel-time closure.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/anycancellable/init(_:)-3icn3](https://developer.apple.com/documentation/combine/anycancellable/init(_:)-3icn3)

# init(\_:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes the cancellable object with the given cancel-time closure.

## Declaration

```swift
init(_ cancel: @escaping () -> Void)
```

## Parameters

- `cancel`: A closure that the `cancel()` method executes.

## See Also

### Creating a type-erased cancellable

- [init(\_:)](init%28__%29-48fh3.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelactor()](https://developer.apple.com/documentation/swiftdata/modelactor())

# ModelActor()

**Framework:** SwiftData  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Converts a Swift actor into a model actor by generating boilerplate code that fulfills the requirements of the associated protocol.

## Declaration

```swift
@attached(member, names: named(modelExecutor), named(modelContainer), named(init)) @attached(extension, conformances: ModelActor) macro ModelActor()
```

## See Also

### Model actors

- [ModelActor](modelactor.md): An interface for providing mutually-exclusive access to the attributes of a conforming model.

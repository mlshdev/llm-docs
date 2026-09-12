> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentobject/wrapper](https://developer.apple.com/documentation/swiftui/environmentobject/wrapper)

# EnvironmentObject.Wrapper

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A wrapper of the underlying environment object that can create bindings to its properties using dynamic member lookup.

## Declaration

```swift
@MainActor @dynamicMemberLookup @frozen @preconcurrency struct Wrapper
```

## Topics

### Getting a binding value

- [subscript(dynamicMember:)](wrapper/subscript%28dynamicmember_%29.md): Returns a binding to the resulting value of a given key path.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the value

- [wrappedValue](wrappedvalue.md): The underlying value referenced by the environment object.
- [projectedValue](projectedvalue.md): A projection of the environment object that creates bindings to its properties using dynamic member lookup.

> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/observedobject/wrapper](https://developer.apple.com/documentation/swiftui/observedobject/wrapper)

# ObservedObject.Wrapper

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A wrapper of the underlying observable object that can create bindings to its properties.

## Declaration

```swift
@MainActor @dynamicMemberLookup @preconcurrency @frozen struct Wrapper
```

## Topics

### Subscripts

- [subscript(dynamicMember:)](wrapper/subscript%28dynamicmember_%29.md): Gets a binding to the value of a specified key path.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the value

- [wrappedValue](wrappedvalue.md): The underlying value that the observed object references.
- [projectedValue](projectedvalue.md): A projection of the observed object that creates bindings to its properties.

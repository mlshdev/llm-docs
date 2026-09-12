> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focusedobject/wrapper](https://developer.apple.com/documentation/swiftui/focusedobject/wrapper)

# FocusedObject.Wrapper

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A wrapper around the underlying focused object that can create bindings to its properties using dynamic member lookup.

## Declaration

```swift
@MainActor @preconcurrency @dynamicMemberLookup @frozen struct Wrapper
```

## Topics

### Accessing members

- [subscript(dynamicMember:)](wrapper/subscript%28dynamicmember_%29.md): Returns a binding to the value of a given key path.

## See Also

### Getting the value

- [projectedValue](projectedvalue.md): A projection of the focused object that creates bindings to its properties using dynamic member lookup.
- [wrappedValue](wrappedvalue.md): The underlying value referenced by the focused object.

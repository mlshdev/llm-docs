> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentobject/projectedvalue](https://developer.apple.com/documentation/swiftui/environmentobject/projectedvalue)

# projectedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A projection of the environment object that creates bindings to its properties using dynamic member lookup.

## Declaration

```swift
@MainActor @preconcurrency var projectedValue: EnvironmentObject<ObjectType>.Wrapper { get }
```

<a id="discussion"></a>

## Discussion

Use the projected value to pass an environment object down a view hierarchy.

## See Also

### Getting the value

- [wrappedValue](wrappedvalue.md): The underlying value referenced by the environment object.
- [EnvironmentObject.Wrapper](wrapper.md): A wrapper of the underlying environment object that can create bindings to its properties using dynamic member lookup.

> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/binding/init(projectedvalue:)](https://developer.apple.com/documentation/swiftui/binding/init(projectedvalue:))

# init(projectedValue:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a binding from the value of another binding.

## Declaration

```swift
@export(implementation) init(projectedValue: Binding<Value>)
```

## See Also

### Creating a binding

- [init(\_:)](init%28__%29.md): Creates a binding by projecting the base value to a hashable value.
- [init(get:set:)](init%28get_set_%29.md): Creates a binding with closures that read and write the binding value.
- [constant(\_:)](constant%28__%29.md): Creates a binding with an immutable value.

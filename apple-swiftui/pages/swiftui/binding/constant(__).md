> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/binding/constant(_:)](https://developer.apple.com/documentation/swiftui/binding/constant(_:))

# constant(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a binding with an immutable value.

## Declaration

```swift
static func constant(_ value: Value) -> Binding<Value>
```

## Parameters

- `value`: An immutable value.

<a id="discussion"></a>

## Discussion

Use this method to create a binding to a value that cannot change. This can be useful when using a [PreviewProvider](../previewprovider.md) to see how a view represents different values.

```swift
// Example of binding to an immutable value.
PlayButton(isPlaying: Binding.constant(true))
```

## See Also

### Creating a binding

- [init(\_:)](init%28__%29.md): Creates a binding by projecting the base value to a hashable value.
- [init(projectedValue:)](init%28projectedvalue_%29.md): Creates a binding from the value of another binding.
- [init(get:set:)](init%28get_set_%29.md): Creates a binding with closures that read and write the binding value.

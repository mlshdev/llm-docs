> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/observedobject/projectedvalue](https://developer.apple.com/documentation/swiftui/observedobject/projectedvalue)

# projectedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A projection of the observed object that creates bindings to its properties.

## Declaration

```swift
@MainActor @preconcurrency var projectedValue: ObservedObject<ObjectType>.Wrapper { get }
```

<a id="discussion"></a>

## Discussion

Use the projected value to get a [Binding](../binding.md) to a property of an observed object. To access the projected value, prefix the property variable with a dollar sign (`$`). For example, you can get a binding to a model’s `isEnabled` Boolean so that a [Toggle](../toggle.md) can control its value:

```swift
struct MySubView: View {
    @ObservedObject var model: DataModel

    var body: some View {
        Toggle("Enabled", isOn: $model.isEnabled)
    }
}
```

> **Important**

> A `Binding` created by the projected value must only be read from, or written to by the main actor. Failing to do so may result in undefined behavior, or data loss. When this occurs, SwiftUI will issue a runtime warning. In a future release, a crash will occur instead.

## See Also

### Getting the value

- [wrappedValue](wrappedvalue.md): The underlying value that the observed object references.
- [ObservedObject.Wrapper](wrapper.md): A wrapper of the underlying observable object that can create bindings to its properties.

> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/tag(_:includeoptional:)](https://developer.apple.com/documentation/swiftui/view/tag(_:includeoptional:))

# tag(\_:includeOptional:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the unique tag value of this view.

## Declaration

```swift
@export(implementation) nonisolated func tag<V>(_ tag: V, includeOptional: Bool = true) -> some View where V : Hashable

```

## Parameters

- `tag`: A [Hashable](https://developer.apple.com/documentation/swift/hashable) value to use as the view’s tag.
- `includeOptional`: If the tag value for `Optional<V>` should also be set.

<a id="return-value"></a>

## Return Value

A view with the specified tag set.

<a id="discussion"></a>

## Discussion

Use this modifier to differentiate among certain selectable views, like the possible values of a [Picker](../picker.md) or the tabs of a [TabView](../tabview.md). Tag values can be of any type that conforms to the [Hashable](https://developer.apple.com/documentation/swift/hashable) protocol.

This modifier will write the tag value for the type `V`, as well as `Optional<V>` if `includeOptional` is enabled. Containers checking for tags of either type will see the value as set.

In the example below, the [ForEach](../foreach.md) loop in the [Picker](../picker.md) view builder iterates over the `Flavor` enumeration. It extracts the string value of each enumeration element for use in constructing the row label, and uses the enumeration value as input to the `tag(_:)` modifier.

```swift
struct FlavorPicker: View {
    enum Flavor: String, CaseIterable, Identifiable {
        case chocolate, vanilla, strawberry
        var id: Self { self }
    }

    @State private var selectedFlavor: Flavor? = nil

    var body: some View {
        Picker("Flavor", selection: $selectedFlavor) {
            ForEach(Flavor.allCases) { flavor in
                Text(flavor.rawValue)
                    .tag(flavor)
            }
        }
    }
}
```

The selection type of the [Picker](../picker.md) is an `Optional<Flavor>` and so it will look for tags on its contents of `Optional<Flavor>` type. Since the tag modifier defaults to having `includeOptional` enabled, even though the tag for each option is a non-optional `Flavor`, the tag modifier writes values for both the non-optional, and optional versions of the value, allowing the contents to be selectable by the [Picker](../picker.md).

A [ForEach](../foreach.md) automatically applies a default tag to each enumerated view using the `id` parameter of the corresponding element. If the element’s `id` parameter and the picker’s `selection` input have exactly the same type, or the same type but optional, you can omit the explicit tag modifier.

To see examples that don’t require an explicit tag, see [Picker](../picker.md).

## See Also

### Managing the view hierarchy

- [id(\_:)](id%28__%29.md): Binds a view’s identity to the given proxy value.
- [equatable()](equatable%28%29.md): Conforms when `Self` conforms to `Equatable`. Prevents the view from updating its child view when its new value is the same as its old value.

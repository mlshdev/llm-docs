> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/searchfocused(_:equals:)](https://developer.apple.com/documentation/swiftui/view/searchfocused(_:equals:))

# searchFocused(\_:equals:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Modifies this view by binding the focus state of the search field associated with the nearest searchable modifier to the given value.

## Declaration

```swift
nonisolated func searchFocused<V>(_ binding: FocusState<V>.Binding, equals value: V) -> some View where V : Hashable

```

## Parameters

- `binding`: The state binding to register. When focus moves to the associated search field, the binding sets the bound value to the corresponding match value. If a caller sets the state value programmatically to the matching value, then focus moves to the search field. When focus leaves the search field, the binding sets the bound value to `nil`. If a caller sets the value to `nil`, SwiftUI automatically dismisses focus.
- `value`: The value to match against when determining whether the binding should change.

<a id="return-value"></a>

## Return Value

The modified view.

<a id="discussion"></a>

## Discussion

To control focus by matching a simple boolean condition, use the [searchFocused(\_:)](searchfocused%28__%29.md) modifier instead.

For more information about using searchable modifiers, refer to [Adding a search interface to your app](../adding-a-search-interface-to-your-app.md).

## See Also

### Managing focus state

- [focused(\_:equals:)](focused%28__equals_%29.md): Modifies this view by binding its focus state to the given state value.
- [focused(\_:)](focused%28__%29.md): Modifies this view by binding its focus state to the given Boolean state value.
- [isFocused](../environmentvalues/isfocused.md): Returns whether the nearest focusable ancestor has focus.
- [FocusState](../focusstate.md): A property wrapper type that can read and write a value that SwiftUI updates as the placement of focus within the scene changes.
- [FocusedValue](../focusedvalue.md): A property wrapper for observing values from the focused view or one of its ancestors.
- [Entry()](../entry%28%29.md): Creates an environment values, transaction, container values, or focused values entry.
- [FocusedValueKey](../focusedvaluekey.md): A protocol for identifier types used when publishing and observing focused values.
- [FocusedBinding](../focusedbinding.md): A convenience property wrapper for observing and automatically unwrapping state bindings from the focused view or one of its ancestors.
- [searchFocused(\_:)](searchfocused%28__%29.md): Modifies this view by binding the focus state of the search field associated with the nearest searchable modifier to the given Boolean value.

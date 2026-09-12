> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focusedvaluekey](https://developer.apple.com/documentation/swiftui/focusedvaluekey)

# FocusedValueKey

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A protocol for identifier types used when publishing and observing focused values.

## Declaration

```swift
protocol FocusedValueKey
```

<a id="overview"></a>

## Overview

Unlike [EnvironmentKey](environmentkey.md), `FocusedValueKey` has no default value requirement, because the default value for a key is always `nil`.

Use the `Entry` macro to create custom focused values by extending `FocusedValues` with new properties:

```swift
extension FocusedValues {
    @Entry var selectedItem: Item?
}
```

Alternatively it is possible to create a focused value key by manually creating a type that conforms to this protocol:

```swift
struct SelectedItemKey: FocusedValueKey {
    typealias Value = Item
}
```

Then extend [FocusedValues](focusedvalues.md) to add a computed property for your key:

```swift
extension FocusedValues {
    var selectedItem: Item? {
        get { self[SelectedItemKey.self] }
        set { self[SelectedItemKey.self] = newValue }
    }
}
```

## Topics

### Specifying the value type

- [Value](focusedvaluekey/value.md)

## See Also

### Managing focus state

- [focused(\_:equals:)](view/focused%28__equals_%29.md): Modifies this view by binding its focus state to the given state value.
- [focused(\_:)](view/focused%28__%29.md): Modifies this view by binding its focus state to the given Boolean state value.
- [isFocused](environmentvalues/isfocused.md): Returns whether the nearest focusable ancestor has focus.
- [FocusState](focusstate.md): A property wrapper type that can read and write a value that SwiftUI updates as the placement of focus within the scene changes.
- [FocusedValue](focusedvalue.md): A property wrapper for observing values from the focused view or one of its ancestors.
- [Entry()](entry%28%29.md): Creates an environment values, transaction, container values, or focused values entry.
- [FocusedBinding](focusedbinding.md): A convenience property wrapper for observing and automatically unwrapping state bindings from the focused view or one of its ancestors.
- [searchFocused(\_:)](view/searchfocused%28__%29.md): Modifies this view by binding the focus state of the search field associated with the nearest searchable modifier to the given Boolean value.
- [searchFocused(\_:equals:)](view/searchfocused%28__equals_%29.md): Modifies this view by binding the focus state of the search field associated with the nearest searchable modifier to the given value.

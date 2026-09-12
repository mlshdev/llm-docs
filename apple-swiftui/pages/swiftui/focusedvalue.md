> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focusedvalue](https://developer.apple.com/documentation/swiftui/focusedvalue)

# FocusedValue

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A property wrapper for observing values from the focused view or one of its ancestors.

## Declaration

```swift
@propertyWrapper struct FocusedValue<Value>
```

## Mentioned In

- [Building and customizing the menu bar with SwiftUI](building-and-customizing-the-menu-bar-with-swiftui.md)

<a id="overview"></a>

## Overview

If multiple views publish values using the same key, the wrapped property will reflect the value from the view closest to focus.

## Topics

### Creating the value

- [init(\_:)](focusedvalue/init%28__%29.md): A new property wrapper for the given key path.

### Getting the value

- [wrappedValue](focusedvalue/wrappedvalue.md): The value for the focus key given the current scope and state of the focused view hierarchy.

## Relationships

### Conforms To

- [DynamicProperty](dynamicproperty.md)

## See Also

### Managing focus state

- [focused(\_:equals:)](view/focused%28__equals_%29.md): Modifies this view by binding its focus state to the given state value.
- [focused(\_:)](view/focused%28__%29.md): Modifies this view by binding its focus state to the given Boolean state value.
- [isFocused](environmentvalues/isfocused.md): Returns whether the nearest focusable ancestor has focus.
- [FocusState](focusstate.md): A property wrapper type that can read and write a value that SwiftUI updates as the placement of focus within the scene changes.
- [Entry()](entry%28%29.md): Creates an environment values, transaction, container values, or focused values entry.
- [FocusedValueKey](focusedvaluekey.md): A protocol for identifier types used when publishing and observing focused values.
- [FocusedBinding](focusedbinding.md): A convenience property wrapper for observing and automatically unwrapping state bindings from the focused view or one of its ancestors.
- [searchFocused(\_:)](view/searchfocused%28__%29.md): Modifies this view by binding the focus state of the search field associated with the nearest searchable modifier to the given Boolean value.
- [searchFocused(\_:equals:)](view/searchfocused%28__equals_%29.md): Modifies this view by binding the focus state of the search field associated with the nearest searchable modifier to the given value.

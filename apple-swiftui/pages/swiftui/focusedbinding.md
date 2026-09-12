> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focusedbinding](https://developer.apple.com/documentation/swiftui/focusedbinding)

# FocusedBinding

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A convenience property wrapper for observing and automatically unwrapping state bindings from the focused view or one of its ancestors.

## Declaration

```swift
@propertyWrapper struct FocusedBinding<Value>
```

<a id="overview"></a>

## Overview

If multiple views publish bindings using the same key, the wrapped property will reflect the value of the binding from the view closest to focus.

## Topics

### Creating the binding

- [init(\_:)](focusedbinding/init%28__%29.md): A new property wrapper for the given key path.

### Getting the value

- [projectedValue](focusedbinding/projectedvalue.md): A binding to the optional value.
- [wrappedValue](focusedbinding/wrappedvalue.md): The unwrapped value for the focus key given the current scope and state of the focused view hierarchy.

## Relationships

### Conforms To

- [DynamicProperty](dynamicproperty.md)

## See Also

### Managing focus state

- [focused(\_:equals:)](view/focused%28__equals_%29.md): Modifies this view by binding its focus state to the given state value.
- [focused(\_:)](view/focused%28__%29.md): Modifies this view by binding its focus state to the given Boolean state value.
- [isFocused](environmentvalues/isfocused.md): Returns whether the nearest focusable ancestor has focus.
- [FocusState](focusstate.md): A property wrapper type that can read and write a value that SwiftUI updates as the placement of focus within the scene changes.
- [FocusedValue](focusedvalue.md): A property wrapper for observing values from the focused view or one of its ancestors.
- [Entry()](entry%28%29.md): Creates an environment values, transaction, container values, or focused values entry.
- [FocusedValueKey](focusedvaluekey.md): A protocol for identifier types used when publishing and observing focused values.
- [searchFocused(\_:)](view/searchfocused%28__%29.md): Modifies this view by binding the focus state of the search field associated with the nearest searchable modifier to the given Boolean value.
- [searchFocused(\_:equals:)](view/searchfocused%28__equals_%29.md): Modifies this view by binding the focus state of the search field associated with the nearest searchable modifier to the given value.

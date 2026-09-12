> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/isfocused](https://developer.apple.com/documentation/swiftui/environmentvalues/isfocused)

# isFocused

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns whether the nearest focusable ancestor has focus.

## Declaration

```swift
var isFocused: Bool { get }
```

<a id="discussion"></a>

## Discussion

If there is no focusable ancestor, the value is `false`.

## See Also

### Managing focus state

- [focused(\_:equals:)](../view/focused%28__equals_%29.md): Modifies this view by binding its focus state to the given state value.
- [focused(\_:)](../view/focused%28__%29.md): Modifies this view by binding its focus state to the given Boolean state value.
- [FocusState](../focusstate.md): A property wrapper type that can read and write a value that SwiftUI updates as the placement of focus within the scene changes.
- [FocusedValue](../focusedvalue.md): A property wrapper for observing values from the focused view or one of its ancestors.
- [Entry()](../entry%28%29.md): Creates an environment values, transaction, container values, or focused values entry.
- [FocusedValueKey](../focusedvaluekey.md): A protocol for identifier types used when publishing and observing focused values.
- [FocusedBinding](../focusedbinding.md): A convenience property wrapper for observing and automatically unwrapping state bindings from the focused view or one of its ancestors.
- [searchFocused(\_:)](../view/searchfocused%28__%29.md): Modifies this view by binding the focus state of the search field associated with the nearest searchable modifier to the given Boolean value.
- [searchFocused(\_:equals:)](../view/searchfocused%28__equals_%29.md): Modifies this view by binding the focus state of the search field associated with the nearest searchable modifier to the given value.

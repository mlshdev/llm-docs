> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/pickerdidfocus(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/pickerdidfocus(_:))

# pickerDidFocus(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Called to let you know that the specified picker is now receiving input from the Digital Crown.

## Declaration

```swift
func pickerDidFocus(_ picker: WKInterfacePicker)
```

<a id="Discussion"></a>

## Discussion

A picker becomes focused when the user taps it or when you call the [focus()](../wkinterfacepicker/focus%28%29.md) method of the picker itself. When a picker is focused, input from the Digital Crown updates the selected item.

The default implementation of this method does nothing. Subclasses can override it and use it to perform actions related to the picker receiving focus. You do not need to call `super` in your implementation.

## See Also

### Managing pickers

- [pickerDidResignFocus(\_:)](pickerdidresignfocus%28__%29.md): Called to let you know that the specified picker is no longer receiving input from the Digital Crown.
- [pickerDidSettle(\_:)](pickerdidsettle%28__%29.md): Called to let you know when the user settles on a value in a picker.

# pickerDidFocus: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Called to let you know that the specified picker is now receiving input from the Digital Crown.

## Declaration

```objectivec
- (void) pickerDidFocus:(WKInterfacePicker *) picker;
```

<a id="Discussion"></a>

## Discussion

A picker becomes focused when the user taps it or when you call the [focus](../wkinterfacepicker/focus%28%29.md) method of the picker itself. When a picker is focused, input from the Digital Crown updates the selected item.

The default implementation of this method does nothing. Subclasses can override it and use it to perform actions related to the picker receiving focus. You do not need to call `super` in your implementation.

## See Also

### Managing pickers

- [pickerDidResignFocus:](pickerdidresignfocus%28__%29.md): Called to let you know that the specified picker is no longer receiving input from the Digital Crown.
- [pickerDidSettle:](pickerdidsettle%28__%29.md): Called to let you know when the user settles on a value in a picker.

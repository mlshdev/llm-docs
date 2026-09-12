> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/pickerdidresignfocus(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/pickerdidresignfocus(_:))

# pickerDidResignFocus(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Called to let you know that the specified picker is no longer receiving input from the Digital Crown.

## Declaration

```swift
func pickerDidResignFocus(_ picker: WKInterfacePicker)
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it and use it to perform actions related to the picker losing focus. You do not need to call `super` in your implementation.

## See Also

### Managing pickers

- [pickerDidFocus(\_:)](pickerdidfocus%28__%29.md): Called to let you know that the specified picker is now receiving input from the Digital Crown.
- [pickerDidSettle(\_:)](pickerdidsettle%28__%29.md): Called to let you know when the user settles on a value in a picker.

# pickerDidResignFocus: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Called to let you know that the specified picker is no longer receiving input from the Digital Crown.

## Declaration

```objectivec
- (void) pickerDidResignFocus:(WKInterfacePicker *) picker;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it and use it to perform actions related to the picker losing focus. You do not need to call `super` in your implementation.

## See Also

### Managing pickers

- [pickerDidFocus:](pickerdidfocus%28__%29.md): Called to let you know that the specified picker is now receiving input from the Digital Crown.
- [pickerDidSettle:](pickerdidsettle%28__%29.md): Called to let you know when the user settles on a value in a picker.

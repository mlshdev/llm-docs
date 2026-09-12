> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:willshow:foritems:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:willshow:foritems:))

# textView(\_:willShow:forItems:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Returns a sharing service picker for the current selection.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, willShow servicePicker: NSSharingServicePicker, forItems items: [Any]) -> NSSharingServicePicker?
```

## Parameters

- `textView`: The text view.
- `servicePicker`: The service picker.
- `items`: The ranges of the items to share.

<a id="return-value"></a>

## Return Value

An [NSSharingServicePicker](../nssharingservicepicker.md) instance. The original sharing picker or a new sharing picker instance can be returned.

<a id="Discussion"></a>

## Discussion

Returns a sharing service picker created for items right before shown to the screen when the `orderFrontSharingServicePicker:` method. Return `nil` to remove the Share item from the menu.

The delegate is specified as the delegate for the `NSSharingServicePicker` instance.

# textView:willShowSharingServicePicker:forItems: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Returns a sharing service picker for the current selection.

## Declaration

```objectivec
- (NSSharingServicePicker *) textView:(NSTextView *) textView willShowSharingServicePicker:(NSSharingServicePicker *) servicePicker forItems:(NSArray *) items;
```

## Parameters

- `textView`: The text view.
- `servicePicker`: The service picker.
- `items`: The ranges of the items to share.

<a id="return-value"></a>

## Return Value

An [NSSharingServicePicker](../nssharingservicepicker.md) instance. The original sharing picker or a new sharing picker instance can be returned.

<a id="Discussion"></a>

## Discussion

Returns a sharing service picker created for items right before shown to the screen when the `orderFrontSharingServicePicker:` method. Return `nil` to remove the Share item from the menu.

The delegate is specified as the delegate for the `NSSharingServicePicker` instance.

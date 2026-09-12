> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/orderfrontsharingservicepicker(_:)](https://developer.apple.com/documentation/appkit/nstextview/orderfrontsharingservicepicker(_:))

# orderFrontSharingServicePicker(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Creates and displays a new instance of the sharing service picker.

## Declaration

```swift
@IBAction func orderFrontSharingServicePicker(_ sender: Any?)
```

## Parameters

- `sender`: The sender.

<a id="Discussion"></a>

## Discussion

Creates a new instance of [NSSharingServicePicker](../nssharingservicepicker.md) based on the current selection and shows to the screen. The items passed to the [NSSharingServicePicker](../nssharingservicepicker.md) initializer are determined using the delegate method `textView:willShowSharingServicePicker:forItems:`.

When the current selection is 0 length, the whole document is passed to the method.

# orderFrontSharingServicePicker: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Creates and displays a new instance of the sharing service picker.

## Declaration

```objectivec
- (void) orderFrontSharingServicePicker:(id) sender;
```

## Parameters

- `sender`: The sender.

<a id="Discussion"></a>

## Discussion

Creates a new instance of [NSSharingServicePicker](../nssharingservicepicker.md) based on the current selection and shows to the screen. The items passed to the [NSSharingServicePicker](../nssharingservicepicker.md) initializer are determined using the delegate method `textView:willShowSharingServicePicker:forItems:`.

When the current selection is 0 length, the whole document is passed to the method.

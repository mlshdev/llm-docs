> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/capturetextfromcamera(_:)](https://developer.apple.com/documentation/uikit/uiresponder/capturetextfromcamera(_:))

# captureTextFromCamera(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Starts scanning text using the device’s camera.

## Declaration

```swift
func captureTextFromCamera(_ sender: Any?)
```

## Parameters

- `sender`: The object that invokes this method.

<a id="Discussion"></a>

## Discussion

To receive callbacks from the data scanner, the responder should conform to either the [UIKeyInput](../uikeyinput.md) or [UITextInput](../uitextinput.md) protocol. If it conforms to [UIKeyInput](../uikeyinput.md), the scanner calls the [insertText:](https://developer.apple.com/documentation/appkit/nstextinput/inserttext:) protocol method. If it conforms to [UITextInput](../uitextinput.md), the scanner calls the [setMarkedText(\_:selectedRange:)](../uitextinput/setmarkedtext%28__selectedrange_%29.md) and [unmarkText()](../uitextinput/unmarktext%28%29.md) protocol methods.

To determine whether the data scanner runs on the user’s device, pass [captureTextFromCamera(\_:)](capturetextfromcamera%28__%29.md) to the [canPerformAction(\_:withSender:)](canperformaction%28__withsender_%29.md) method.

## See Also

### Related Documentation

- [Scanning data with the camera](../../visionkit/scanning-data-with-the-camera.md): Enable Live Text data scanning of text and codes that appear in the camera’s viewfinder.

# captureTextFromCamera: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Starts scanning text using the device’s camera.

## Declaration

```objectivec
- (void) captureTextFromCamera:(id) sender;
```

## Parameters

- `sender`: The object that invokes this method.

<a id="Discussion"></a>

## Discussion

To receive callbacks from the data scanner, the responder should conform to either the [UIKeyInput](../uikeyinput.md) or [UITextInput](../uitextinput.md) protocol. If it conforms to [UIKeyInput](../uikeyinput.md), the scanner calls the [insertText:](https://developer.apple.com/documentation/appkit/nstextinput/inserttext:) protocol method. If it conforms to [UITextInput](../uitextinput.md), the scanner calls the [setMarkedText:selectedRange:](../uitextinput/setmarkedtext%28__selectedrange_%29.md) and [unmarkText](../uitextinput/unmarktext%28%29.md) protocol methods.

To determine whether the data scanner runs on the user’s device, pass [captureTextFromCamera:](capturetextfromcamera%28__%29.md) to the [canPerformAction:withSender:](canperformaction%28__withsender_%29.md) method.

## See Also

### Related Documentation

- [Scanning data with the camera](../../visionkit/scanning-data-with-the-camera.md): Enable Live Text data scanning of text and codes that appear in the camera’s viewfinder.

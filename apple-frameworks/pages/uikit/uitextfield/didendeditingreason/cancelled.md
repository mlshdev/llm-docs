> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/didendeditingreason/cancelled](https://developer.apple.com/documentation/uikit/uitextfield/didendeditingreason/cancelled)

# UITextField.DidEndEditingReason.cancelled (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** tvOS 10.0+

The text field changes were aborted.

## Declaration

```swift
case cancelled
```

<a id="Discussion"></a>

## Discussion

On tvOS, text field changes become cancelled when the user dismisses the text entry interface by pressing the Menu button.

## See Also

### Constants

- [UITextField.DidEndEditingReason.committed](committed.md): The text field changes were accepted by the user.

# UITextFieldDidEndEditingReasonCancelled (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** tvOS 10.0+

The text field changes were aborted.

## Declaration

```objectivec
UITextFieldDidEndEditingReasonCancelled
```

<a id="Discussion"></a>

## Discussion

On tvOS, text field changes become cancelled when the user dismisses the text entry interface by pressing the Menu button.

## See Also

### Constants

- [UITextFieldDidEndEditingReasonCommitted](committed.md): The text field changes were accepted by the user.

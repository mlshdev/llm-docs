> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/presenterror(_:)](https://developer.apple.com/documentation/appkit/nsresponder/presenterror(_:))

# presentError(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Presents an error alert to the user as an application-modal dialog.

## Declaration

```swift
func presentError(_ error: any Error) -> Bool
```

## Parameters

- `error`: An object containing information about an error.

<a id="Discussion"></a>

## Discussion

The alert displays information found in the [NSError](https://developer.apple.com/documentation/foundation/nserror) object `error`; this information can include error description, recovery suggestion, failure reason, and button titles (all localized). The method returns [true](https://developer.apple.com/documentation/swift/true) if error recovery succeeded and [false](https://developer.apple.com/documentation/swift/false) otherwise. For error recovery to be attempted, an recovery-attempter object (that is, an object conforming to the `NSErrorRecoveryAttempting` informal protocol) must be associated with `error`.

The default implementation of this method sends [willPresentError(\_:)](willpresenterror%28__%29.md) to `self`. By doing this, `NSResponder` gives subclasses an opportunity to customize error presentation. It then forwards the message, passing any customized error object, to the next responder; if there is no next responder, it passes the error object to `NSApp`, which displays a document-modal error alert. When the user dismisses the alert, any recovery attempter associated with the error object is given a chance to recover from the error. See the class description for the precise route up the responder chain (plus document and controller objects) this message might travel.

It is not recommended that you attempt to override this method. If you wish to customize the error presentation, override [willPresentError(\_:)](willpresenterror%28__%29.md) instead.

## See Also

### Presenting and Customizing Error Information

- [presentError(\_:modalFor:delegate:didPresent:contextInfo:)](presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a document-modal sheet attached to document window.
- [willPresentError(\_:)](willpresenterror%28__%29.md): Returns a custom version of the supplied error object that’s more suitable for presentation in alert sheets and dialogs.

# presentError: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Presents an error alert to the user as an application-modal dialog.

## Declaration

```objectivec
- (BOOL) presentError:(NSError *) error;
```

## Parameters

- `error`: An object containing information about an error.

<a id="Discussion"></a>

## Discussion

The alert displays information found in the [NSError](https://developer.apple.com/documentation/foundation/nserror) object `error`; this information can include error description, recovery suggestion, failure reason, and button titles (all localized). The method returns [true](https://developer.apple.com/documentation/swift/true) if error recovery succeeded and [false](https://developer.apple.com/documentation/swift/false) otherwise. For error recovery to be attempted, an recovery-attempter object (that is, an object conforming to the `NSErrorRecoveryAttempting` informal protocol) must be associated with `error`.

The default implementation of this method sends [willPresentError:](willpresenterror%28__%29.md) to `self`. By doing this, `NSResponder` gives subclasses an opportunity to customize error presentation. It then forwards the message, passing any customized error object, to the next responder; if there is no next responder, it passes the error object to `NSApp`, which displays a document-modal error alert. When the user dismisses the alert, any recovery attempter associated with the error object is given a chance to recover from the error. See the class description for the precise route up the responder chain (plus document and controller objects) this message might travel.

It is not recommended that you attempt to override this method. If you wish to customize the error presentation, override [willPresentError:](willpresenterror%28__%29.md) instead.

## See Also

### Presenting and Customizing Error Information

- [presentError:modalForWindow:delegate:didPresentSelector:contextInfo:](presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a document-modal sheet attached to document window.
- [willPresentError:](willpresenterror%28__%29.md): Returns a custom version of the supplied error object that’s more suitable for presentation in alert sheets and dialogs.

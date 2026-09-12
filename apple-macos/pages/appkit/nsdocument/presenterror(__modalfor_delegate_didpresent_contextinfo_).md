> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/presenterror(_:modalfor:delegate:didpresent:contextinfo:)](https://developer.apple.com/documentation/appkit/nsdocument/presenterror(_:modalfor:delegate:didpresent:contextinfo:))

# presentError(\_:modalFor:delegate:didPresent:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Presents an error alert to the user as a modal panel.

## Declaration

```swift
func presentError(_ error: any Error, modalFor window: NSWindow, delegate: Any?, didPresent didPresentSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `error`: The error object encapsulating the information to present to the user.
- `window`: The window to which the modal alert belongs.
- `delegate`: The delegate to which the selector message is sent.
- `didPresentSelector`: The selector of the message sent to the delegate.
- `contextInfo`: Object passed with the callback to provide any additional context information.

<a id="Discussion"></a>

## Discussion

When the user dismisses the alert and any recovery possible for the error and chosen by the user has been attempted, sends the message `didPresentSelector` to the specified `delegate`.

The `NSDocument` default implementation of this method is equivalent to that of `NSResponder` and treats the shared `NSDocumentController` object as the next responder and forwards these messages to it. The default implementations of several `NSDocument` methods invoke this method.

The default implementation of this method invokes [willPresentError(\_:)](willpresenterror%28__%29.md) to give subclasses an opportunity to customize error presentation. You should not override this method but should instead override [willPresentError(\_:)](willpresenterror%28__%29.md).

The method selected by `didPresentSelector` must have the same signature as:

```objc
- (void)didPresentErrorWithRecovery:(BOOL)didRecover contextInfo:(void  *)contextInfo
```

## See Also

### Displaying Errors to the User

- [presentError(\_:)](presenterror%28__%29.md): Presents an error alert to the user as a modal panel.
- [willPresentError(\_:)](willpresenterror%28__%29.md): Called when the receiver is about to present an error.
- [willNotPresentError(\_:)](willnotpresenterror%28__%29.md): Confirms that the error object is not to be presented to the user and the error cannot be recovered from, so cleanup can be done.

# presentError:modalForWindow:delegate:didPresentSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Presents an error alert to the user as a modal panel.

## Declaration

```objectivec
- (void) presentError:(NSError *) error modalForWindow:(NSWindow *) window delegate:(id) delegate didPresentSelector:(SEL) didPresentSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `error`: The error object encapsulating the information to present to the user.
- `window`: The window to which the modal alert belongs.
- `delegate`: The delegate to which the selector message is sent.
- `didPresentSelector`: The selector of the message sent to the delegate.
- `contextInfo`: Object passed with the callback to provide any additional context information.

<a id="Discussion"></a>

## Discussion

When the user dismisses the alert and any recovery possible for the error and chosen by the user has been attempted, sends the message `didPresentSelector` to the specified `delegate`.

The `NSDocument` default implementation of this method is equivalent to that of `NSResponder` and treats the shared `NSDocumentController` object as the next responder and forwards these messages to it. The default implementations of several `NSDocument` methods invoke this method.

The default implementation of this method invokes [willPresentError:](willpresenterror%28__%29.md) to give subclasses an opportunity to customize error presentation. You should not override this method but should instead override [willPresentError:](willpresenterror%28__%29.md).

The method selected by `didPresentSelector` must have the same signature as:

```objc
- (void)didPresentErrorWithRecovery:(BOOL)didRecover contextInfo:(void  *)contextInfo
```

## See Also

### Displaying Errors to the User

- [presentError:](presenterror%28__%29.md): Presents an error alert to the user as a modal panel.
- [willPresentError:](willpresenterror%28__%29.md): Called when the receiver is about to present an error.
- [willNotPresentError:](willnotpresenterror%28__%29.md): Confirms that the error object is not to be presented to the user and the error cannot be recovered from, so cleanup can be done.

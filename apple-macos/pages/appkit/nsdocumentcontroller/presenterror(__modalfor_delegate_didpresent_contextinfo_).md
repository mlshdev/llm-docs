> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/presenterror(_:modalfor:delegate:didpresent:contextinfo:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/presenterror(_:modalfor:delegate:didpresent:contextinfo:))

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

- `error`: The error to present.
- `window`: The window to present the error.
- `delegate`: The object to receive the selector.
- `didPresentSelector`: The selector to send to the delegate.
- `contextInfo`: A pointer to user-supplied data.

<a id="Discussion"></a>

## Discussion

When the user dismisses the alert and any recovery possible for the error and chosen by the user has been attempted, sends the message `didPresentSelector` to the specified `delegate`. The method selected by `didPresentSelector` must have the same signature as:

```objc
- (void)didPresentErrorWithRecovery:(BOOL)didRecover contextInfo:(void  *)contextInfo;
```

The default `NSDocumentController` implementation of this method is equivalent to that of `NSResponder` while treating the application object as the next responder and forwarding error presentation messages to it. (The default `NSDocument` implementation of this method treats the shared `NSDocumentController` instance as the next responder and forwards these messages to it.)

The default implementation of this method calls [willPresentError(\_:)](willpresenterror%28__%29.md) to give subclasses an opportunity to customize error presentation. You should not override this method but should instead override [willPresentError(\_:)](willpresenterror%28__%29.md).

## See Also

### Handling Errors

- [presentError(\_:)](presenterror%28__%29.md): Presents an error alert to the user as a modal panel.
- [willPresentError(\_:)](willpresenterror%28__%29.md): Indicates an error condition and provides the opportunity to return the same or a different error.

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

- `error`: The error to present.
- `window`: The window to present the error.
- `delegate`: The object to receive the selector.
- `didPresentSelector`: The selector to send to the delegate.
- `contextInfo`: A pointer to user-supplied data.

<a id="Discussion"></a>

## Discussion

When the user dismisses the alert and any recovery possible for the error and chosen by the user has been attempted, sends the message `didPresentSelector` to the specified `delegate`. The method selected by `didPresentSelector` must have the same signature as:

```objc
- (void)didPresentErrorWithRecovery:(BOOL)didRecover contextInfo:(void  *)contextInfo;
```

The default `NSDocumentController` implementation of this method is equivalent to that of `NSResponder` while treating the application object as the next responder and forwarding error presentation messages to it. (The default `NSDocument` implementation of this method treats the shared `NSDocumentController` instance as the next responder and forwards these messages to it.)

The default implementation of this method calls [willPresentError:](willpresenterror%28__%29.md) to give subclasses an opportunity to customize error presentation. You should not override this method but should instead override [willPresentError:](willpresenterror%28__%29.md).

## See Also

### Handling Errors

- [presentError:](presenterror%28__%29.md): Presents an error alert to the user as a modal panel.
- [willPresentError:](willpresenterror%28__%29.md): Indicates an error condition and provides the opportunity to return the same or a different error.

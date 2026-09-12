> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/presenterror(_:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/presenterror(_:))

# presentError(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Presents an error alert to the user as a modal panel.

## Declaration

```swift
func presentError(_ error: any Error) -> Bool
```

## Parameters

- `error`: An object containing the error to present.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if error recovery was done; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method does not return until the user dismisses the alert and, if the error has recovery options and a recovery delegate, the error’s recovery delegate is sent an `attemptRecoveryFromError:optionIndex:` message.

The default `NSDocumentController` implementation of this method is equivalent to that of `NSResponder` while treating the application object as the next responder and forwarding error presentation messages to it. (The default `NSDocument` implementation of this method treats the shared `NSDocumentController` instance as the next responder and forwards these messages to it.) The default implementations of several `NSDocumentController` methods call this method.

The default implementation of this method calls [willPresentError(\_:)](willpresenterror%28__%29.md) to give subclasses an opportunity to customize error presentation. You should not override this method but should instead override [willPresentError(\_:)](willpresenterror%28__%29.md).

## See Also

### Handling Errors

- [presentError(\_:modalFor:delegate:didPresent:contextInfo:)](presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a modal panel.
- [willPresentError(\_:)](willpresenterror%28__%29.md): Indicates an error condition and provides the opportunity to return the same or a different error.

# presentError: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Presents an error alert to the user as a modal panel.

## Declaration

```objectivec
- (BOOL) presentError:(NSError *) error;
```

## Parameters

- `error`: An object containing the error to present.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if error recovery was done; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method does not return until the user dismisses the alert and, if the error has recovery options and a recovery delegate, the error’s recovery delegate is sent an `attemptRecoveryFromError:optionIndex:` message.

The default `NSDocumentController` implementation of this method is equivalent to that of `NSResponder` while treating the application object as the next responder and forwarding error presentation messages to it. (The default `NSDocument` implementation of this method treats the shared `NSDocumentController` instance as the next responder and forwards these messages to it.) The default implementations of several `NSDocumentController` methods call this method.

The default implementation of this method calls [willPresentError:](willpresenterror%28__%29.md) to give subclasses an opportunity to customize error presentation. You should not override this method but should instead override [willPresentError:](willpresenterror%28__%29.md).

## See Also

### Handling Errors

- [presentError:modalForWindow:delegate:didPresentSelector:contextInfo:](presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a modal panel.
- [willPresentError:](willpresenterror%28__%29.md): Indicates an error condition and provides the opportunity to return the same or a different error.

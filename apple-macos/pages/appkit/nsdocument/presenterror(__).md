> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/presenterror(_:)](https://developer.apple.com/documentation/appkit/nsdocument/presenterror(_:))

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

- `error`: The error object encapsulating the information to present to the user.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if error recovery was done; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method does not return until the user dismisses the alert and, if the error has recovery options and a recovery delegate, the error’s recovery delegate  is sent an [attemptRecovery(fromError:optionIndex:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/attemptrecovery%28fromerror:optionindex:%29) message.

The `NSDocument` default implementation of this method is equivalent to that of `NSResponder` and treats the shared `NSDocumentController` as the next responder and forwards these messages to it.

The default implementation of this method invokes [willPresentError(\_:)](willpresenterror%28__%29.md) to give subclasses an opportunity to customize error presentation. You should not override this method but should instead override [willPresentError(\_:)](willpresenterror%28__%29.md).

## See Also

### Displaying Errors to the User

- [presentError(\_:modalFor:delegate:didPresent:contextInfo:)](presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a modal panel.
- [willPresentError(\_:)](willpresenterror%28__%29.md): Called when the receiver is about to present an error.
- [willNotPresentError(\_:)](willnotpresenterror%28__%29.md): Confirms that the error object is not to be presented to the user and the error cannot be recovered from, so cleanup can be done.

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

- `error`: The error object encapsulating the information to present to the user.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if error recovery was done; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method does not return until the user dismisses the alert and, if the error has recovery options and a recovery delegate, the error’s recovery delegate  is sent an [attemptRecoveryFromError:optionIndex:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/attemptrecovery%28fromerror:optionindex:%29) message.

The `NSDocument` default implementation of this method is equivalent to that of `NSResponder` and treats the shared `NSDocumentController` as the next responder and forwards these messages to it.

The default implementation of this method invokes [willPresentError:](willpresenterror%28__%29.md) to give subclasses an opportunity to customize error presentation. You should not override this method but should instead override [willPresentError:](willpresenterror%28__%29.md).

## See Also

### Displaying Errors to the User

- [presentError:modalForWindow:delegate:didPresentSelector:contextInfo:](presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a modal panel.
- [willPresentError:](willpresenterror%28__%29.md): Called when the receiver is about to present an error.
- [willNotPresentError:](willnotpresenterror%28__%29.md): Confirms that the error object is not to be presented to the user and the error cannot be recovered from, so cleanup can be done.

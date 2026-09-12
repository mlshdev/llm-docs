> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/willpresenterror(_:)](https://developer.apple.com/documentation/appkit/nsdocument/willpresenterror(_:))

# willPresentError(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called when the receiver is about to present an error.

## Declaration

```swift
func willPresentError(_ error: any Error) -> any Error
```

## Parameters

- `error`: The error object that is about to be presented to the user.

<a id="return-value"></a>

## Return Value

The error that should actually be presented.

<a id="Discussion"></a>

## Discussion

The default implementation of this method merely returns the passed-in error. The returned error may simply be forwarded to the document controller.

You can override this method to customize the presentation of errors by examining the passed-in error and, for example, returning more specific information. When you override this method always check the `NSError` object’s domain and code to discriminate between errors whose presentation you want to customize and those you don’t. For errors you don’t want to customize, call the superclass implementation, passing the original error.

## See Also

### Displaying Errors to the User

- [presentError(\_:modalFor:delegate:didPresent:contextInfo:)](presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a modal panel.
- [presentError(\_:)](presenterror%28__%29.md): Presents an error alert to the user as a modal panel.
- [willNotPresentError(\_:)](willnotpresenterror%28__%29.md): Confirms that the error object is not to be presented to the user and the error cannot be recovered from, so cleanup can be done.

# willPresentError: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called when the receiver is about to present an error.

## Declaration

```objectivec
- (NSError *) willPresentError:(NSError *) error;
```

## Parameters

- `error`: The error object that is about to be presented to the user.

<a id="return-value"></a>

## Return Value

The error that should actually be presented.

<a id="Discussion"></a>

## Discussion

The default implementation of this method merely returns the passed-in error. The returned error may simply be forwarded to the document controller.

You can override this method to customize the presentation of errors by examining the passed-in error and, for example, returning more specific information. When you override this method always check the `NSError` object’s domain and code to discriminate between errors whose presentation you want to customize and those you don’t. For errors you don’t want to customize, call the superclass implementation, passing the original error.

## See Also

### Displaying Errors to the User

- [presentError:modalForWindow:delegate:didPresentSelector:contextInfo:](presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a modal panel.
- [presentError:](presenterror%28__%29.md): Presents an error alert to the user as a modal panel.
- [willNotPresentError:](willnotpresenterror%28__%29.md): Confirms that the error object is not to be presented to the user and the error cannot be recovered from, so cleanup can be done.

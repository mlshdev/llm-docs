> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/willnotpresenterror(_:)](https://developer.apple.com/documentation/appkit/nsdocument/willnotpresenterror(_:))

# willNotPresentError(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Confirms that the error object is not to be presented to the user and the error cannot be recovered from, so cleanup can be done.

## Declaration

```swift
func willNotPresentError(_ error: any Error)
```

## Parameters

- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) object returned by another `NSDocument` method.

<a id="Discussion"></a>

## Discussion

Some `NSDocument` methods, like those involved in writing, may not immediately delete temporary files if there is a chance that the error can be recovered from and the operation can continue. To make sure that cleanup is always done, you should invoke this method with `NSDocument` errors that are not going to be passed to one of the `presentError:...` methods. For example, the `NSDocument` implementation of the `NSFilePresenter` method [savePresentedItemChanges(completionHandler:)](https://developer.apple.com/documentation/foundation/nsfilepresenter/savepresenteditemchanges%28completionhandler:%29) invokes this method when it invokes [autosave(withImplicitCancellability:completionHandler:)](autosave%28withimplicitcancellability_completionhandler_%29.md) and the completion handler is passed an `NSError` object, because it does not present the error to the user.

## See Also

### Displaying Errors to the User

- [presentError(\_:modalFor:delegate:didPresent:contextInfo:)](presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a modal panel.
- [presentError(\_:)](presenterror%28__%29.md): Presents an error alert to the user as a modal panel.
- [willPresentError(\_:)](willpresenterror%28__%29.md): Called when the receiver is about to present an error.

# willNotPresentError: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Confirms that the error object is not to be presented to the user and the error cannot be recovered from, so cleanup can be done.

## Declaration

```objectivec
- (void) willNotPresentError:(NSError *) error;
```

## Parameters

- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) object returned by another `NSDocument` method.

<a id="Discussion"></a>

## Discussion

Some `NSDocument` methods, like those involved in writing, may not immediately delete temporary files if there is a chance that the error can be recovered from and the operation can continue. To make sure that cleanup is always done, you should invoke this method with `NSDocument` errors that are not going to be passed to one of the `presentError:...` methods. For example, the `NSDocument` implementation of the `NSFilePresenter` method [savePresentedItemChangesWithCompletionHandler:](https://developer.apple.com/documentation/foundation/nsfilepresenter/savepresenteditemchanges%28completionhandler:%29) invokes this method when it invokes [autosaveWithImplicitCancellability:completionHandler:](autosave%28withimplicitcancellability_completionhandler_%29.md) and the completion handler is passed an `NSError` object, because it does not present the error to the user.

## See Also

### Displaying Errors to the User

- [presentError:modalForWindow:delegate:didPresentSelector:contextInfo:](presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a modal panel.
- [presentError:](presenterror%28__%29.md): Presents an error alert to the user as a modal panel.
- [willPresentError:](willpresenterror%28__%29.md): Called when the receiver is about to present an error.

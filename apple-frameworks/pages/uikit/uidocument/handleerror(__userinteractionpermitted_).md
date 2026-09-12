> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/handleerror(_:userinteractionpermitted:)](https://developer.apple.com/documentation/uikit/uidocument/handleerror(_:userinteractionpermitted:))

# handleError(\_:userInteractionPermitted:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handles an error that occurs during an attempt to read, save, or revert a document.

## Declaration

```swift
func handleError(_ error: any Error, userInteractionPermitted: Bool)
```

## Parameters

- `error`: An object encapsulating information about an error encountered in an attempt to open, save, or revert a document. The error domain is [NSCocoaErrorDomain](../../foundation/nscocoaerrordomain.md). The error code is one of the `enum` constants declared in `FoundationErrors.h`.
- `userInteractionPermitted`: If [false](https://developer.apple.com/documentation/swift/false), no attempt is (or should be) made to present a modal view to the user. This value can be [false](https://developer.apple.com/documentation/swift/false) in cases such as when a save operation fails while the application is being suspended. If this parameter is [true](https://developer.apple.com/documentation/swift/true), UIKit or your override may present error information to the user in a modal view and (optionally) allow the user to resolve the error.

<a id="Discussion"></a>

## Discussion

Typical [UIDocument](../uidocument.md) subclasses don’t need to call or override this method. Instead, they can observe the [stateChangedNotification](statechangednotification.md) notification to be notified of changes in document state. In their notification handler, they can check the value of the [documentState](documentstate.md) property and proceed accordingly. See [Resolve conflicts and handle errors](../uidocument.md#Resolve-conflicts-and-handle-errors) for a discussion of this.

If you’re using managed documents (instances of the [UIManagedDocument](../uimanageddocument.md) subclass), you must subclass this method and, if desired, the [finishedHandlingError(\_:recovered:)](finishedhandlingerror%28__recovered_%29.md) method. Subclassing allows your app to observe errors in saving or validation. The [stateChangedNotification](statechangednotification.md) notification doesn’t contain a `userInfo` dictionary and so doesn’t convey specific error information.

If you directly call any of the advanced reading and writing methods that have an error-object parameter (for example, [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md)) and that call returns an [NSError](../../foundation/nserror.md) object by indirection, you should call this method ([handleError(\_:userInteractionPermitted:)](handleerror%28__userinteractionpermitted_%29.md)), passing in the error object.

This method is called by the default implementations of [open(completionHandler:)](open%28completionhandler_%29.md) and [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md) when [UIDocument](../uidocument.md) encounters a reading or writing error, respectively.

If you override this method and don’t invoke the superclass implementation (`super`), you’re responsible for the following:

- Calling [finishedHandlingError(\_:recovered:)](finishedhandlingerror%28__recovered_%29.md) when you’re finished handling the error — for example, when the application doesn’t require any additional user feedback about the error.
- Implementing [userInteractionNoLongerPermitted(forError:)](userinteractionnolongerpermitted%28forerror_%29.md) to conclude error handling immediately. If `userInteractionPermitted` is [false](https://developer.apple.com/documentation/swift/false), you should immediately handle the error and call [finishedHandlingError(\_:recovered:)](finishedhandlingerror%28__recovered_%29.md) within the context of the [handleError(\_:userInteractionPermitted:)](handleerror%28__userinteractionpermitted_%29.md).

## See Also

### Resolving conflicts and handling errors

- [finishedHandlingError(\_:recovered:)](finishedhandlingerror%28__recovered_%29.md): Tells UIKit that you finished handling the error.
- [userInteractionNoLongerPermitted(forError:)](userinteractionnolongerpermitted%28forerror_%29.md): Indicates when it’s no longer safe to proceed without immediately handling the error.

# handleError:userInteractionPermitted: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handles an error that occurs during an attempt to read, save, or revert a document.

## Declaration

```objectivec
- (void) handleError:(NSError *) error userInteractionPermitted:(BOOL) userInteractionPermitted;
```

## Parameters

- `error`: An object encapsulating information about an error encountered in an attempt to open, save, or revert a document. The error domain is [NSCocoaErrorDomain](../../foundation/nscocoaerrordomain.md). The error code is one of the `enum` constants declared in `FoundationErrors.h`.
- `userInteractionPermitted`: If [false](https://developer.apple.com/documentation/swift/false), no attempt is (or should be) made to present a modal view to the user. This value can be [false](https://developer.apple.com/documentation/swift/false) in cases such as when a save operation fails while the application is being suspended. If this parameter is [true](https://developer.apple.com/documentation/swift/true), UIKit or your override may present error information to the user in a modal view and (optionally) allow the user to resolve the error.

<a id="Discussion"></a>

## Discussion

Typical [UIDocument](../uidocument.md) subclasses don’t need to call or override this method. Instead, they can observe the [UIDocumentStateChangedNotification](statechangednotification.md) notification to be notified of changes in document state. In their notification handler, they can check the value of the [documentState](documentstate.md) property and proceed accordingly. See [Resolve conflicts and handle errors](../uidocument.md#Resolve-conflicts-and-handle-errors) for a discussion of this.

If you’re using managed documents (instances of the [UIManagedDocument](../uimanageddocument.md) subclass), you must subclass this method and, if desired, the [finishedHandlingError:recovered:](finishedhandlingerror%28__recovered_%29.md) method. Subclassing allows your app to observe errors in saving or validation. The [UIDocumentStateChangedNotification](statechangednotification.md) notification doesn’t contain a `userInfo` dictionary and so doesn’t convey specific error information.

If you directly call any of the advanced reading and writing methods that have an error-object parameter (for example, [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md)) and that call returns an [NSError](../../foundation/nserror.md) object by indirection, you should call this method ([handleError:userInteractionPermitted:](handleerror%28__userinteractionpermitted_%29.md)), passing in the error object.

This method is called by the default implementations of [openWithCompletionHandler:](open%28completionhandler_%29.md) and [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md) when [UIDocument](../uidocument.md) encounters a reading or writing error, respectively.

If you override this method and don’t invoke the superclass implementation (`super`), you’re responsible for the following:

- Calling [finishedHandlingError:recovered:](finishedhandlingerror%28__recovered_%29.md) when you’re finished handling the error — for example, when the application doesn’t require any additional user feedback about the error.
- Implementing [userInteractionNoLongerPermittedForError:](userinteractionnolongerpermitted%28forerror_%29.md) to conclude error handling immediately. If `userInteractionPermitted` is [false](https://developer.apple.com/documentation/swift/false), you should immediately handle the error and call [finishedHandlingError:recovered:](finishedhandlingerror%28__recovered_%29.md) within the context of the [handleError:userInteractionPermitted:](handleerror%28__userinteractionpermitted_%29.md).

## See Also

### Resolving conflicts and handling errors

- [finishedHandlingError:recovered:](finishedhandlingerror%28__recovered_%29.md): Tells UIKit that you finished handling the error.
- [userInteractionNoLongerPermittedForError:](userinteractionnolongerpermitted%28forerror_%29.md): Indicates when it’s no longer safe to proceed without immediately handling the error.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/userinteractionnolongerpermitted(forerror:)](https://developer.apple.com/documentation/uikit/uidocument/userinteractionnolongerpermitted(forerror:))

# userInteractionNoLongerPermitted(forError:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates when it’s no longer safe to proceed without immediately handling the error.

## Declaration

```swift
func userInteractionNoLongerPermitted(forError error: any Error)
```

## Parameters

- `error`: An error object encapsulating information about the error.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when it’s no longer safe to proceed without immediately handling the error, such as when the application is being suspended. Subclasses that override this method must immediately end error handling (including dismissing any interactive user interface) and call [finishedHandlingError(\_:recovered:)](finishedhandlingerror%28__recovered_%29.md) before returning. It’s only necessary to override this method if you override [handleError(\_:userInteractionPermitted:)](handleerror%28__userinteractionpermitted_%29.md) without invoking the superclass implementation (`super`).

## See Also

### Resolving conflicts and handling errors

- [handleError(\_:userInteractionPermitted:)](handleerror%28__userinteractionpermitted_%29.md): Handles an error that occurs during an attempt to read, save, or revert a document.
- [finishedHandlingError(\_:recovered:)](finishedhandlingerror%28__recovered_%29.md): Tells UIKit that you finished handling the error.

# userInteractionNoLongerPermittedForError: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates when it’s no longer safe to proceed without immediately handling the error.

## Declaration

```objectivec
- (void) userInteractionNoLongerPermittedForError:(NSError *) error;
```

## Parameters

- `error`: An error object encapsulating information about the error.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when it’s no longer safe to proceed without immediately handling the error, such as when the application is being suspended. Subclasses that override this method must immediately end error handling (including dismissing any interactive user interface) and call [finishedHandlingError:recovered:](finishedhandlingerror%28__recovered_%29.md) before returning. It’s only necessary to override this method if you override [handleError:userInteractionPermitted:](handleerror%28__userinteractionpermitted_%29.md) without invoking the superclass implementation (`super`).

## See Also

### Resolving conflicts and handling errors

- [handleError:userInteractionPermitted:](handleerror%28__userinteractionpermitted_%29.md): Handles an error that occurs during an attempt to read, save, or revert a document.
- [finishedHandlingError:recovered:](finishedhandlingerror%28__recovered_%29.md): Tells UIKit that you finished handling the error.

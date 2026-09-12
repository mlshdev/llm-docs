> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/finishedhandlingerror(_:recovered:)](https://developer.apple.com/documentation/uikit/uidocument/finishedhandlingerror(_:recovered:))

# finishedHandlingError(\_:recovered:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells UIKit that you finished handling the error.

## Declaration

```swift
func finishedHandlingError(_ error: any Error, recovered: Bool)
```

## Parameters

- `error`: An error object encapsulating information about the error.
- `recovered`: [true](https://developer.apple.com/documentation/swift/true) if you recovered from the error, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is called by default when handling of an error (including any user interaction) is complete. Subclasses need to call this method only if they override [handleError(\_:userInteractionPermitted:)](handleerror%28__userinteractionpermitted_%29.md) and do not call the superclass implementation (`super`). If you override this method, you must call `super`.

## See Also

### Resolving conflicts and handling errors

- [handleError(\_:userInteractionPermitted:)](handleerror%28__userinteractionpermitted_%29.md): Handles an error that occurs during an attempt to read, save, or revert a document.
- [userInteractionNoLongerPermitted(forError:)](userinteractionnolongerpermitted%28forerror_%29.md): Indicates when it’s no longer safe to proceed without immediately handling the error.

# finishedHandlingError:recovered: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells UIKit that you finished handling the error.

## Declaration

```objectivec
- (void) finishedHandlingError:(NSError *) error recovered:(BOOL) recovered;
```

## Parameters

- `error`: An error object encapsulating information about the error.
- `recovered`: [true](https://developer.apple.com/documentation/swift/true) if you recovered from the error, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is called by default when handling of an error (including any user interaction) is complete. Subclasses need to call this method only if they override [handleError:userInteractionPermitted:](handleerror%28__userinteractionpermitted_%29.md) and do not call the superclass implementation (`super`). If you override this method, you must call `super`.

## See Also

### Resolving conflicts and handling errors

- [handleError:userInteractionPermitted:](handleerror%28__userinteractionpermitted_%29.md): Handles an error that occurs during an attempt to read, save, or revert a document.
- [userInteractionNoLongerPermittedForError:](userinteractionnolongerpermitted%28forerror_%29.md): Indicates when it’s no longer safe to proceed without immediately handling the error.

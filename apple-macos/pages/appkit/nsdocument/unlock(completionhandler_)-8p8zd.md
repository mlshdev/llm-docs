> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/unlock(completionhandler:)-8p8zd](https://developer.apple.com/documentation/appkit/nsdocument/unlock(completionhandler:)-8p8zd)

# unlock(completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Allows the user to make modifications to the document.

## Declaration

```swift
func unlock(completionHandler: ((Bool) -> Void)? = nil)
```

```swift
func unlock() async -> Bool
```

## Parameters

- `completionHandler`: The completion handler block object passed in to be invoked after unlocking is completed, regardless of success or failure.

<a id="Discussion"></a>

## Discussion

By default, this method invokes the [unlock(completionHandler:)](unlock%28completionhandler_%29-6m7rh.md) method to unlock the document. This method disables autosaving safety checking, meaning that [checkAutosavingSafety()](checkautosavingsafety%28%29.md) will no longer be invoked on this document. When unlocking succeeds, the [isLocked](islocked.md) method will begin returning [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Locking the Document

- [lock(\_:)](lock%28__%29.md): Locks the document in response to the user choosing the Lock menu item.
- [unlock(\_:)](unlock%28__%29.md): Unlocks the document in response to the user choosing the Unlock menu item.
- [lock(completionHandler:)](lock%28completionhandler_%29-6zuhh.md): Prevents the user from making further changes to the document.
- [lock(completionHandler:)](lock%28completionhandler_%29-161qv.md): Prevents the user from making changes to the document’s file.
- [unlock(completionHandler:)](unlock%28completionhandler_%29-6m7rh.md): Allows the user to make modifications to the document’s file.
- [isLocked](islocked.md): A Boolean value that indicates whether or not the file can be written to.

# unlockDocumentWithCompletionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Allows the user to make modifications to the document.

## Declaration

```objectivec
- (void) unlockDocumentWithCompletionHandler:(void (^)(BOOL didUnlock)) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler block object passed in to be invoked after unlocking is completed, regardless of success or failure.

<a id="Discussion"></a>

## Discussion

By default, this method invokes the [unlockWithCompletionHandler:](unlock%28completionhandler_%29-6m7rh.md) method to unlock the document. This method disables autosaving safety checking, meaning that [checkAutosavingSafetyAndReturnError:](checkautosavingsafety%28%29.md) will no longer be invoked on this document. When unlocking succeeds, the [locked](islocked.md) method will begin returning [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Locking the Document

- [lockDocument:](lock%28__%29.md): Locks the document in response to the user choosing the Lock menu item.
- [unlockDocument:](unlock%28__%29.md): Unlocks the document in response to the user choosing the Unlock menu item.
- [lockDocumentWithCompletionHandler:](lock%28completionhandler_%29-6zuhh.md): Prevents the user from making further changes to the document.
- [lockWithCompletionHandler:](lock%28completionhandler_%29-161qv.md): Prevents the user from making changes to the document’s file.
- [unlockWithCompletionHandler:](unlock%28completionhandler_%29-6m7rh.md): Allows the user to make modifications to the document’s file.
- [locked](islocked.md): A Boolean value that indicates whether or not the file can be written to.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/unlock(completionhandler:)-6m7rh](https://developer.apple.com/documentation/appkit/nsdocument/unlock(completionhandler:)-6m7rh)

# unlock(completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Allows the user to make modifications to the document’s file.

## Declaration

```swift
func unlock(completionHandler: (((any Error)?) -> Void)? = nil)
```

```swift
func unlock() async throws
```

## Parameters

- `completionHandler`: The completion handler block object passed in to be invoked after unlocking is completed, regardless of success or failure.

<a id="Discussion"></a>

## Discussion

By default, this method tries to clear the “user immutable” flag and, if necessary, add write permissions to the file itself.

## See Also

### Locking the Document

- [lock(\_:)](lock%28__%29.md): Locks the document in response to the user choosing the Lock menu item.
- [unlock(\_:)](unlock%28__%29.md): Unlocks the document in response to the user choosing the Unlock menu item.
- [lock(completionHandler:)](lock%28completionhandler_%29-6zuhh.md): Prevents the user from making further changes to the document.
- [lock(completionHandler:)](lock%28completionhandler_%29-161qv.md): Prevents the user from making changes to the document’s file.
- [unlock(completionHandler:)](unlock%28completionhandler_%29-8p8zd.md): Allows the user to make modifications to the document.
- [isLocked](islocked.md): A Boolean value that indicates whether or not the file can be written to.

# unlockWithCompletionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Allows the user to make modifications to the document’s file.

## Declaration

```objectivec
- (void) unlockWithCompletionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler block object passed in to be invoked after unlocking is completed, regardless of success or failure.

<a id="Discussion"></a>

## Discussion

By default, this method tries to clear the “user immutable” flag and, if necessary, add write permissions to the file itself.

## See Also

### Locking the Document

- [lockDocument:](lock%28__%29.md): Locks the document in response to the user choosing the Lock menu item.
- [unlockDocument:](unlock%28__%29.md): Unlocks the document in response to the user choosing the Unlock menu item.
- [lockDocumentWithCompletionHandler:](lock%28completionhandler_%29-6zuhh.md): Prevents the user from making further changes to the document.
- [lockWithCompletionHandler:](lock%28completionhandler_%29-161qv.md): Prevents the user from making changes to the document’s file.
- [unlockDocumentWithCompletionHandler:](unlock%28completionhandler_%29-8p8zd.md): Allows the user to make modifications to the document.
- [locked](islocked.md): A Boolean value that indicates whether or not the file can be written to.

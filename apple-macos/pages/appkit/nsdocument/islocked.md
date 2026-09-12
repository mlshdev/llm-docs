> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/islocked](https://developer.apple.com/documentation/appkit/nsdocument/islocked)

# isLocked (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

A Boolean value that indicates whether or not the file can be written to.

## Declaration

```swift
var isLocked: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property may contain the value [true](https://developer.apple.com/documentation/swift/true) because the user lacks the appropriate write permissions, the “user immutable” flag was raised, the parent directory or volume is read only, or the [checkAutosavingSafety()](checkautosavingsafety%28%29.md) method returned [false](https://developer.apple.com/documentation/swift/false). Do not override this property.

## See Also

### Locking the Document

- [lock(\_:)](lock%28__%29.md): Locks the document in response to the user choosing the Lock menu item.
- [unlock(\_:)](unlock%28__%29.md): Unlocks the document in response to the user choosing the Unlock menu item.
- [lock(completionHandler:)](lock%28completionhandler_%29-6zuhh.md): Prevents the user from making further changes to the document.
- [lock(completionHandler:)](lock%28completionhandler_%29-161qv.md): Prevents the user from making changes to the document’s file.
- [unlock(completionHandler:)](unlock%28completionhandler_%29-8p8zd.md): Allows the user to make modifications to the document.
- [unlock(completionHandler:)](unlock%28completionhandler_%29-6m7rh.md): Allows the user to make modifications to the document’s file.

# locked (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

A Boolean value that indicates whether or not the file can be written to.

## Declaration

```objectivec
@property (readonly, getter=isLocked) BOOL locked;
```

<a id="Discussion"></a>

## Discussion

This property may contain the value [true](https://developer.apple.com/documentation/swift/true) because the user lacks the appropriate write permissions, the “user immutable” flag was raised, the parent directory or volume is read only, or the [checkAutosavingSafetyAndReturnError:](checkautosavingsafety%28%29.md) method returned [false](https://developer.apple.com/documentation/swift/false). Do not override this property.

## See Also

### Locking the Document

- [lockDocument:](lock%28__%29.md): Locks the document in response to the user choosing the Lock menu item.
- [unlockDocument:](unlock%28__%29.md): Unlocks the document in response to the user choosing the Unlock menu item.
- [lockDocumentWithCompletionHandler:](lock%28completionhandler_%29-6zuhh.md): Prevents the user from making further changes to the document.
- [lockWithCompletionHandler:](lock%28completionhandler_%29-161qv.md): Prevents the user from making changes to the document’s file.
- [unlockDocumentWithCompletionHandler:](unlock%28completionhandler_%29-8p8zd.md): Allows the user to make modifications to the document.
- [unlockWithCompletionHandler:](unlock%28completionhandler_%29-6m7rh.md): Allows the user to make modifications to the document’s file.

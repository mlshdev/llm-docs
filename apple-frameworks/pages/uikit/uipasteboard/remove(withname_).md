> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/remove(withname:)](https://developer.apple.com/documentation/uikit/uipasteboard/remove(withname:))

# remove(withName:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Invalidates the designated app pasteboard.

## Declaration

```swift
class func remove(withName pasteboardName: UIPasteboard.Name)
```

## Parameters

- `pasteboardName`: The name of the pasteboard to be invalidated.

<a id="Discussion"></a>

## Discussion

Invalidation of an app pasteboard frees up all resources used by it. Once a pasteboard is invalidated, you cannot use the it; `UIPasteboard` ignores any calls to it. The method has no effect if called with the name of a system pasteboard.

## See Also

### Getting and removing pasteboards

- [general](general.md): The systemwide general pasteboard, which you use for general copy-paste operations.
- [init(name:create:)](init%28name_create_%29.md): Returns a pasteboard that you identify by name, optionally creating it if it doesn’t exist.
- [withUniqueName()](withuniquename%28%29.md): Returns an app pasteboard that you identify by a unique system-generated name.

# removePasteboardWithName: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Invalidates the designated app pasteboard.

## Declaration

```objectivec
+ (void) removePasteboardWithName:(UIPasteboardName) pasteboardName;
```

## Parameters

- `pasteboardName`: The name of the pasteboard to be invalidated.

<a id="Discussion"></a>

## Discussion

Invalidation of an app pasteboard frees up all resources used by it. Once a pasteboard is invalidated, you cannot use the it; `UIPasteboard` ignores any calls to it. The method has no effect if called with the name of a system pasteboard.

## See Also

### Getting and removing pasteboards

- [generalPasteboard](general.md): The systemwide general pasteboard, which you use for general copy-paste operations.
- [pasteboardWithName:create:](init%28name_create_%29.md): Returns a pasteboard that you identify by name, optionally creating it if it doesn’t exist.
- [pasteboardWithUniqueName](withuniquename%28%29.md): Returns an app pasteboard that you identify by a unique system-generated name.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/general](https://developer.apple.com/documentation/uikit/uipasteboard/general)

# general (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The systemwide general pasteboard, which you use for general copy-paste operations.

## Declaration

```swift
class var general: UIPasteboard { get }
```

<a id="return-value"></a>

## Return Value

A shared system pasteboard object with the name of [general](name-swift.struct/general.md).

<a id="Discussion"></a>

## Discussion

You may use the general pasteboard for copying and pasting text, images, URLs, colors, and other data within an app or between apps. The general pasteboard is persistent across device restarts and app uninstalls.

## See Also

### Getting and removing pasteboards

- [init(name:create:)](init%28name_create_%29.md): Returns a pasteboard that you identify by name, optionally creating it if it doesn’t exist.
- [withUniqueName()](withuniquename%28%29.md): Returns an app pasteboard that you identify by a unique system-generated name.
- [remove(withName:)](remove%28withname_%29.md): Invalidates the designated app pasteboard.

# generalPasteboard (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The systemwide general pasteboard, which you use for general copy-paste operations.

## Declaration

```objectivec
@property (class, nonatomic, readonly) UIPasteboard * generalPasteboard;
```

<a id="return-value"></a>

## Return Value

A shared system pasteboard object with the name of [UIPasteboardNameGeneral](name-swift.struct/general.md).

<a id="Discussion"></a>

## Discussion

You may use the general pasteboard for copying and pasting text, images, URLs, colors, and other data within an app or between apps. The general pasteboard is persistent across device restarts and app uninstalls.

## See Also

### Getting and removing pasteboards

- [pasteboardWithName:create:](init%28name_create_%29.md): Returns a pasteboard that you identify by name, optionally creating it if it doesn’t exist.
- [pasteboardWithUniqueName](withuniquename%28%29.md): Returns an app pasteboard that you identify by a unique system-generated name.
- [removePasteboardWithName:](remove%28withname_%29.md): Invalidates the designated app pasteboard.

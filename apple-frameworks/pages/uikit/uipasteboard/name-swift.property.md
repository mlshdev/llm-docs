> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/name-swift.property](https://developer.apple.com/documentation/uikit/uipasteboard/name-swift.property)

# name (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The name of the pasteboard.

## Declaration

```swift
var name: UIPasteboard.Name { get }
```

<a id="Discussion"></a>

## Discussion

Names of app pasteboard objects should be unique across installed apps. If the object is a system pasteboard, this property returns one of the constants described in [Pasteboard Names](../pasteboard-names.md).

## See Also

### Related Documentation

- [init(name:create:)](init%28name_create_%29.md): Returns a pasteboard that you identify by name, optionally creating it if it doesn’t exist.
- [withUniqueName()](withuniquename%28%29.md): Returns an app pasteboard that you identify by a unique system-generated name.

### Getting and setting pasteboard attributes

- [changeCount](changecount.md): The number of times the pasteboard’s contents change.

# name (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The name of the pasteboard.

## Declaration

```objectivec
@property (nonatomic, readonly) UIPasteboardName name;
```

<a id="Discussion"></a>

## Discussion

Names of app pasteboard objects should be unique across installed apps. If the object is a system pasteboard, this property returns one of the constants described in [Pasteboard Names](../pasteboard-names.md).

## See Also

### Related Documentation

- [pasteboardWithName:create:](init%28name_create_%29.md): Returns a pasteboard that you identify by name, optionally creating it if it doesn’t exist.
- [pasteboardWithUniqueName](withuniquename%28%29.md): Returns an app pasteboard that you identify by a unique system-generated name.

### Getting and setting pasteboard attributes

- [changeCount](changecount.md): The number of times the pasteboard’s contents change.

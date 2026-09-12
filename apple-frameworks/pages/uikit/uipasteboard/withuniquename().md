> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/withuniquename()](https://developer.apple.com/documentation/uikit/uipasteboard/withuniquename())

# withUniqueName() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an app pasteboard that you identify by a unique system-generated name.

## Declaration

```swift
class func withUniqueName() -> UIPasteboard
```

<a id="return-value"></a>

## Return Value

An app pasteboard object with a unique name.

<a id="Discussion"></a>

## Discussion

Obtain the value of the [name](name-swift.property.md) property to discover the name of the returned pasteboard. App pasteboards returned by this method are not persistent, existing only until the app quits. Starting in iOS 10, persistent named pasteboards are deprecated. Instead use a shared container, as described in the overview for the [UIPasteboard](../uipasteboard.md) class.

## See Also

### Getting and removing pasteboards

- [general](general.md): The systemwide general pasteboard, which you use for general copy-paste operations.
- [init(name:create:)](init%28name_create_%29.md): Returns a pasteboard that you identify by name, optionally creating it if it doesn’t exist.
- [remove(withName:)](remove%28withname_%29.md): Invalidates the designated app pasteboard.

# pasteboardWithUniqueName (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an app pasteboard that you identify by a unique system-generated name.

## Declaration

```objectivec
+ (UIPasteboard *) pasteboardWithUniqueName;
```

<a id="return-value"></a>

## Return Value

An app pasteboard object with a unique name.

<a id="Discussion"></a>

## Discussion

Obtain the value of the [name](name-swift.property.md) property to discover the name of the returned pasteboard. App pasteboards returned by this method are not persistent, existing only until the app quits. Starting in iOS 10, persistent named pasteboards are deprecated. Instead use a shared container, as described in the overview for the [UIPasteboard](../uipasteboard.md) class.

## See Also

### Getting and removing pasteboards

- [generalPasteboard](general.md): The systemwide general pasteboard, which you use for general copy-paste operations.
- [pasteboardWithName:create:](init%28name_create_%29.md): Returns a pasteboard that you identify by name, optionally creating it if it doesn’t exist.
- [removePasteboardWithName:](remove%28withname_%29.md): Invalidates the designated app pasteboard.

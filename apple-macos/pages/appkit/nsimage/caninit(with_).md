> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/caninit(with:)](https://developer.apple.com/documentation/appkit/nsimage/caninit(with:))

# canInit(with:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Tests whether the image can create an instance of itself using pasteboard data.

## Declaration

```swift
class func canInit(with pasteboard: NSPasteboard) -> Bool
```

## Parameters

- `pasteboard`: The pasteboard containing the image data.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver knows how to handle the data on the pasteboard; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method uses the `NSImageRep` class method [imageUnfilteredPasteboardTypes()](../nsimagerep/imageunfilteredpasteboardtypes%28%29.md) to find a class that can handle the data in the specified pasteboard. If you create your own `NSImageRep` subclasses, override the [imageUnfilteredPasteboardTypes()](../nsimagerep/imageunfilteredpasteboardtypes%28%29.md) method to notify `NSImage` of the pasteboard types your class supports.

## See Also

### Related Documentation

- [imagePasteboardTypes()](imagepasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.

### Determining Supported Types of Images

- [imageTypes](imagetypes.md): Returns an array of UTI strings identifying the image types supported by the registered image representation objects, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the registered image representation objects.

# canInitWithPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Tests whether the image can create an instance of itself using pasteboard data.

## Declaration

```objectivec
+ (BOOL) canInitWithPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `pasteboard`: The pasteboard containing the image data.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver knows how to handle the data on the pasteboard; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method uses the `NSImageRep` class method [imageUnfilteredPasteboardTypes](../nsimagerep/imageunfilteredpasteboardtypes%28%29.md) to find a class that can handle the data in the specified pasteboard. If you create your own `NSImageRep` subclasses, override the [imageUnfilteredPasteboardTypes](../nsimagerep/imageunfilteredpasteboardtypes%28%29.md) method to notify `NSImage` of the pasteboard types your class supports.

## See Also

### Related Documentation

- [imagePasteboardTypes](imagepasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.

### Determining Supported Types of Images

- [imageTypes](imagetypes.md): Returns an array of UTI strings identifying the image types supported by the registered image representation objects, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the registered image representation objects.

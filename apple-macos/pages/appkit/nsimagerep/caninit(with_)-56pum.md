> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/caninit(with:)-56pum](https://developer.apple.com/documentation/appkit/nsimagerep/caninit(with:)-56pum)

# canInit(with:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the receiver can initialize itself from the data on the specified pasteboard.

## Declaration

```swift
class func canInit(with pasteboard: NSPasteboard) -> Bool
```

## Parameters

- `pasteboard`: The pasteboard containing the image data.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver understands the format of the specified data and can use it to initialize itself; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method invokes the [imageUnfilteredPasteboardTypes()](imageunfilteredpasteboardtypes%28%29.md) class method and checks the list of types returned by that method against the data types in `pasteboard`. If it finds a match, it returns [true](https://developer.apple.com/documentation/swift/true). When creating a subclass of `NSImageRep` that accepts image data from a non-default pasteboard type, override the [imageUnfilteredPasteboardTypes()](imageunfilteredpasteboardtypes%28%29.md) method to assure this method returns the correct response.

## See Also

### Determining Types for Images

- [canInit(with:)](caninit%28with_%29-6zv56.md): Returns a Boolean value that indicates whether the image representation can initialize itself from the specified data.
- [imageTypes](imagetypes.md): Returns an array of UTI strings identifying the image types supported by the image representation, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the ime representation.
- [imageFileTypes()](imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.
- [imagePasteboardTypes()](imagepasteboardtypes%28%29.md): Deprecated. Returns the pasteboard types supported by the image representation class or one of its subclasses.
- [imageUnfilteredFileTypes()](imageunfilteredfiletypes%28%29.md): Deprecated. Returns the list of file types supported directly by the image representation.
- [imageUnfilteredPasteboardTypes()](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns the list of pasteboard types supported directly by the image representation.

# canInitWithPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the receiver can initialize itself from the data on the specified pasteboard.

## Declaration

```objectivec
+ (BOOL) canInitWithPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `pasteboard`: The pasteboard containing the image data.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver understands the format of the specified data and can use it to initialize itself; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method invokes the [imageUnfilteredPasteboardTypes](imageunfilteredpasteboardtypes%28%29.md) class method and checks the list of types returned by that method against the data types in `pasteboard`. If it finds a match, it returns [true](https://developer.apple.com/documentation/swift/true). When creating a subclass of `NSImageRep` that accepts image data from a non-default pasteboard type, override the [imageUnfilteredPasteboardTypes](imageunfilteredpasteboardtypes%28%29.md) method to assure this method returns the correct response.

## See Also

### Determining Types for Images

- [canInitWithData:](caninit%28with_%29-6zv56.md): Returns a Boolean value that indicates whether the image representation can initialize itself from the specified data.
- [imageTypes](imagetypes.md): Returns an array of UTI strings identifying the image types supported by the image representation, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the ime representation.
- [imageFileTypes](imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.
- [imagePasteboardTypes](imagepasteboardtypes%28%29.md): Deprecated. Returns the pasteboard types supported by the image representation class or one of its subclasses.
- [imageUnfilteredFileTypes](imageunfilteredfiletypes%28%29.md): Deprecated. Returns the list of file types supported directly by the image representation.
- [imageUnfilteredPasteboardTypes](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns the list of pasteboard types supported directly by the image representation.

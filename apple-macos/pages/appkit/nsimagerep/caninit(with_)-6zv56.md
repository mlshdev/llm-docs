> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/caninit(with:)-6zv56](https://developer.apple.com/documentation/appkit/nsimagerep/caninit(with:)-6zv56)

# canInit(with:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the image representation can initialize itself from the specified data.

## Declaration

```swift
class func canInit(with data: Data) -> Bool
```

## Parameters

- `data`: The image data.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver understands the format of the specified data and can use it to initialize itself; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method should be overridden by subclasses. Note that this method does not need to do a comprehensive check of the image data; it should return [false](https://developer.apple.com/documentation/swift/false) only if it knows it cannot initialize itself from the data.

## See Also

### Determining Types for Images

- [canInit(with:)](caninit%28with_%29-56pum.md): Returns a Boolean value that indicates whether the receiver can initialize itself from the data on the specified pasteboard.
- [imageTypes](imagetypes.md): Returns an array of UTI strings identifying the image types supported by the image representation, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the ime representation.
- [imageFileTypes()](imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.
- [imagePasteboardTypes()](imagepasteboardtypes%28%29.md): Deprecated. Returns the pasteboard types supported by the image representation class or one of its subclasses.
- [imageUnfilteredFileTypes()](imageunfilteredfiletypes%28%29.md): Deprecated. Returns the list of file types supported directly by the image representation.
- [imageUnfilteredPasteboardTypes()](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns the list of pasteboard types supported directly by the image representation.

# canInitWithData: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the image representation can initialize itself from the specified data.

## Declaration

```objectivec
+ (BOOL) canInitWithData:(NSData *) data;
```

## Parameters

- `data`: The image data.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver understands the format of the specified data and can use it to initialize itself; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method should be overridden by subclasses. Note that this method does not need to do a comprehensive check of the image data; it should return [false](https://developer.apple.com/documentation/swift/false) only if it knows it cannot initialize itself from the data.

## See Also

### Determining Types for Images

- [canInitWithPasteboard:](caninit%28with_%29-56pum.md): Returns a Boolean value that indicates whether the receiver can initialize itself from the data on the specified pasteboard.
- [imageTypes](imagetypes.md): Returns an array of UTI strings identifying the image types supported by the image representation, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the ime representation.
- [imageFileTypes](imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.
- [imagePasteboardTypes](imagepasteboardtypes%28%29.md): Deprecated. Returns the pasteboard types supported by the image representation class or one of its subclasses.
- [imageUnfilteredFileTypes](imageunfilteredfiletypes%28%29.md): Deprecated. Returns the list of file types supported directly by the image representation.
- [imageUnfilteredPasteboardTypes](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns the list of pasteboard types supported directly by the image representation.

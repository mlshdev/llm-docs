> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/cgimage](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/cgimage)

# cgImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Core Graphics image object based on the bitmap image representation’s data.

## Declaration

```swift
var cgImage: CGImage? { get }
```

<a id="Discussion"></a>

## Discussion

The autoreleased [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) opaque type in this property has pixel dimensions that are identical to those of the bitmap image rep object. If an existing [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) opaque type is not available, accessing this property creates a new one. If you change the bitmap image rep’s contents later, accessing this property again might return a different [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) opaque type.

## See Also

### Related Documentation

- [init(cgImage:)](init%28cgimage_%29-7o5tz.md): Returns a bitmap image representation from a Core Graphics image object.

# CGImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Core Graphics image object based on the bitmap image representation’s data.

## Declaration

```objectivec
@property (readonly, nullable) CGImageRef CGImage;
```

<a id="Discussion"></a>

## Discussion

The autoreleased [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) opaque type in this property has pixel dimensions that are identical to those of the bitmap image rep object. If an existing [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) opaque type is not available, accessing this property creates a new one. If you change the bitmap image rep’s contents later, accessing this property again might return a different [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) opaque type.

## See Also

### Related Documentation

- [initWithCGImage:](init%28cgimage_%29-7o5tz.md): Returns a bitmap image representation from a Core Graphics image object.

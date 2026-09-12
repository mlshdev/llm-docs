> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailrepresentation/contentrect](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailrepresentation/contentrect)

# contentRect (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The rectangle within the thumbnail image of the document that represents its contents.

## Declaration

```swift
var contentRect: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

In icon mode, the content rectangle is the undecorated rectangle, or frame, that the image sits in.

## See Also

### Thumbnail Images

- [cgImage](cgimage.md): A thumbnail in the form of a Core Graphics image object.
- [nsImage](nsimage.md): A thumbnail in the form of an AppKit image object.
- [uiImage](uiimage.md): A thumbnail in the form of a UIKit image object.
- [type](type.md): The type of thumbnail.
- [QLThumbnailRepresentation.RepresentationType](representationtype.md): The different types of thumbnails that you can create.

# contentRect (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The rectangle within the thumbnail image of the document that represents its contents.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect contentRect;
```

<a id="Discussion"></a>

## Discussion

In icon mode, the content rectangle is the undecorated rectangle, or frame, that the image sits in.

## See Also

### Thumbnail Images

- [CGImage](cgimage.md): A thumbnail in the form of a Core Graphics image object.
- [NSImage](nsimage.md): A thumbnail in the form of an AppKit image object.
- [UIImage](uiimage.md): A thumbnail in the form of a UIKit image object.
- [type](type.md): The type of thumbnail.
- [QLThumbnailRepresentationType](representationtype.md): The different types of thumbnails that you can create.

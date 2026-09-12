> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlfilethumbnailrequest/maximumsize](https://developer.apple.com/documentation/quicklookthumbnailing/qlfilethumbnailrequest/maximumsize)

# maximumSize (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The maximum accepted size of a thumbnail.

## Declaration

```swift
var maximumSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

The `maximumSize` accepted is also the preferred size of the thumbnail that you need to create. Your generated thumbnail’s width or height should match the `width` or `height` of the `maximumSize`, or, ideally, both.

## See Also

### Describing the Requested Thumbnail

- [minimumSize](minimumsize.md): The minimum accepted size of a thumbnail.
- [scale](scale.md): The scale of the requested thumbnail.
- [fileURL](fileurl.md): The URL of the image file to use for the thumbnail.

# maximumSize (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The maximum accepted size of a thumbnail.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize maximumSize;
```

<a id="Discussion"></a>

## Discussion

The `maximumSize` accepted is also the preferred size of the thumbnail that you need to create. Your generated thumbnail’s width or height should match the `width` or `height` of the `maximumSize`, or, ideally, both.

## See Also

### Describing the Requested Thumbnail

- [minimumSize](minimumsize.md): The minimum accepted size of a thumbnail.
- [scale](scale.md): The scale of the requested thumbnail.
- [fileURL](fileurl.md): The URL of the image file to use for the thumbnail.

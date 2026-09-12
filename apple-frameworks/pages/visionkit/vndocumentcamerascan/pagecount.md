> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/vndocumentcamerascan/pagecount](https://developer.apple.com/documentation/visionkit/vndocumentcamerascan/pagecount)

# pageCount (Swift)

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of pages in the scanned document.

## Declaration

```swift
var pageCount: Int { get }
```

## See Also

### Reading the scanned document

- [title](title.md): The title of the scanned document.
- [imageOfPage(at:)](imageofpage%28at_%29.md): Requests the image of a page at a specified index.

# pageCount (Objective-C)

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of pages in the scanned document.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger pageCount;
```

## See Also

### Reading the scanned document

- [title](title.md): The title of the scanned document.
- [imageOfPageAtIndex:](imageofpage%28at_%29.md): Requests the image of a page at a specified index.

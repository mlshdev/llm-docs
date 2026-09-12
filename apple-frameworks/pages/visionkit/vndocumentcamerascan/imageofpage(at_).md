> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/vndocumentcamerascan/imageofpage(at:)](https://developer.apple.com/documentation/visionkit/vndocumentcamerascan/imageofpage(at:))

# imageOfPage(at:) (Swift)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Requests the image of a page at a specified index.

## Declaration

```swift
func imageOfPage(at index: Int) -> UIImage
```

## Parameters

- `index`: The index of the image in the scanned document you’d like to return. Page 1 is at index 0.

<a id="return-value"></a>

## Return Value

The image of the page at the specified index. If `index` is out of bounds, the framework throws an exception.

## See Also

### Reading the scanned document

- [title](title.md): The title of the scanned document.
- [pageCount](pagecount.md): The number of pages in the scanned document.

# imageOfPageAtIndex: (Objective-C)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Requests the image of a page at a specified index.

## Declaration

```objectivec
- (UIImage *) imageOfPageAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of the image in the scanned document you’d like to return. Page 1 is at index 0.

<a id="return-value"></a>

## Return Value

The image of the page at the specified index. If `index` is out of bounds, the framework throws an exception.

## See Also

### Reading the scanned document

- [title](title.md): The title of the scanned document.
- [pageCount](pagecount.md): The number of pages in the scanned document.

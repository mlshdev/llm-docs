> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspdfrenderercontext/seturl(_:for:)](https://developer.apple.com/documentation/uikit/uigraphicspdfrenderercontext/seturl(_:for:))

# setURL(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a link to an external resource defined by a URL

## Declaration

```swift
func setURL(_ url: URL, for rect: CGRect)
```

## Parameters

- `url`: The external URL that the user is directed to on clicking the link.
- `rect`: The region of the current page that becomes the active link area, specified in points in the PDF coordinate space.

<a id="Discussion"></a>

## Discussion

Use this method to create links to external resources in the current page of a PDF. The URL is interpreted by the PDF viewer.

> **Note**

>  Specify the `rect` value in the PDF coordinate space, not the Core Graphics context coordinate space. This means that the origin is in the bottom-left rather than the top-left, and the y-axis increases in an upwards direction. Use the [userSpaceToDeviceSpaceTransform](../../coregraphics/cgcontext/userspacetodevicespacetransform.md) property on [CGContext](../../coregraphics/cgcontext.md) to map between the two.

To create internal links within the current PDF document, use [addDestination(withName:at:)](adddestination%28withname_at_%29.md) and [setDestinationWithName(\_:for:)](setdestinationwithname%28__for_%29.md).

## See Also

### Managing destinations

- [addDestination(withName:at:)](adddestination%28withname_at_%29.md): Creates a named destination point in the current PDF page.
- [setDestinationWithName(\_:for:)](setdestinationwithname%28__for_%29.md): Creates a link rectangle in the current page that jumps the PDF viewer to the named destination when clicked.

# setURL:forRect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a link to an external resource defined by a URL

## Declaration

```objectivec
- (void) setURL:(NSURL *) url forRect:(CGRect) rect;
```

## Parameters

- `url`: The external URL that the user is directed to on clicking the link.
- `rect`: The region of the current page that becomes the active link area, specified in points in the PDF coordinate space.

<a id="Discussion"></a>

## Discussion

Use this method to create links to external resources in the current page of a PDF. The URL is interpreted by the PDF viewer.

> **Note**

>  Specify the `rect` value in the PDF coordinate space, not the Core Graphics context coordinate space. This means that the origin is in the bottom-left rather than the top-left, and the y-axis increases in an upwards direction. Use the [CGContextGetUserSpaceToDeviceSpaceTransform](../../coregraphics/cgcontext/userspacetodevicespacetransform.md) property on [CGContextRef](../../coregraphics/cgcontext.md) to map between the two.

To create internal links within the current PDF document, use [addDestinationWithName:atPoint:](adddestination%28withname_at_%29.md) and [setDestinationWithName:forRect:](setdestinationwithname%28__for_%29.md).

## See Also

### Managing destinations

- [addDestinationWithName:atPoint:](adddestination%28withname_at_%29.md): Creates a named destination point in the current PDF page.
- [setDestinationWithName:forRect:](setdestinationwithname%28__for_%29.md): Creates a link rectangle in the current page that jumps the PDF viewer to the named destination when clicked.

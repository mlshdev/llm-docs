> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspdfrenderercontext/adddestination(withname:at:)](https://developer.apple.com/documentation/uikit/uigraphicspdfrenderercontext/adddestination(withname:at:))

# addDestination(withName:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a named destination point in the current PDF page.

## Declaration

```swift
func addDestination(withName name: String, at point: CGPoint)
```

## Parameters

- `name`: The name of the destination, used as a reference by the [setDestinationWithName(\_:for:)](setdestinationwithname%28__for_%29.md) method.
- `point`: The location of the destination point, in the PDF coordinate space.

<a id="Discussion"></a>

## Discussion

Use this method in conjunction with the [setDestinationWithName(\_:for:)](setdestinationwithname%28__for_%29.md) method to create internal links within a PDF. This method represents the creation of the points to which the PDF viewer will jump when a user clicks a link.

> **Note**

>  Specify the `point` value in the PDF coordinate space, not the Core Graphics context coordinate space. This means that the origin is in the bottom-left corner of the context rather than the top-left, and the y-axis increases in an upwards direction. Use the [userSpaceToDeviceSpaceTransform](../../coregraphics/cgcontext/userspacetodevicespacetransform.md) property on [CGContext](../../coregraphics/cgcontext.md) to map between the two.

For an example of how to use internal links, including mapping between coordinate spaces, see  [Creating internal links](../uigraphicspdfrenderer.md#Creating-internal-links) in [UIGraphicsPDFRenderer](../uigraphicspdfrenderer.md).

## See Also

### Managing destinations

- [setDestinationWithName(\_:for:)](setdestinationwithname%28__for_%29.md): Creates a link rectangle in the current page that jumps the PDF viewer to the named destination when clicked.
- [setURL(\_:for:)](seturl%28__for_%29.md): Creates a link to an external resource defined by a URL

# addDestinationWithName:atPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a named destination point in the current PDF page.

## Declaration

```objectivec
- (void) addDestinationWithName:(NSString *) name atPoint:(CGPoint) point;
```

## Parameters

- `name`: The name of the destination, used as a reference by the [setDestinationWithName:forRect:](setdestinationwithname%28__for_%29.md) method.
- `point`: The location of the destination point, in the PDF coordinate space.

<a id="Discussion"></a>

## Discussion

Use this method in conjunction with the [setDestinationWithName:forRect:](setdestinationwithname%28__for_%29.md) method to create internal links within a PDF. This method represents the creation of the points to which the PDF viewer will jump when a user clicks a link.

> **Note**

>  Specify the `point` value in the PDF coordinate space, not the Core Graphics context coordinate space. This means that the origin is in the bottom-left corner of the context rather than the top-left, and the y-axis increases in an upwards direction. Use the [CGContextGetUserSpaceToDeviceSpaceTransform](../../coregraphics/cgcontext/userspacetodevicespacetransform.md) property on [CGContextRef](../../coregraphics/cgcontext.md) to map between the two.

For an example of how to use internal links, including mapping between coordinate spaces, see  [Creating internal links](../uigraphicspdfrenderer.md#Creating-internal-links) in [UIGraphicsPDFRenderer](../uigraphicspdfrenderer.md).

## See Also

### Managing destinations

- [setDestinationWithName:forRect:](setdestinationwithname%28__for_%29.md): Creates a link rectangle in the current page that jumps the PDF viewer to the named destination when clicked.
- [setURL:forRect:](seturl%28__for_%29.md): Creates a link to an external resource defined by a URL

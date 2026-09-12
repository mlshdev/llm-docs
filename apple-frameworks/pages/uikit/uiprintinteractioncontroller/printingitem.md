> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/printingitem](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/printingitem)

# printingItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A single ready-to-print object.

## Declaration

```swift
var printingItem: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

The object must be an instance of the [NSURL](../../foundation/nsurl.md), [NSData](../../foundation/nsdata.md), or [UIImage](../uiimage.md) class. An object of the first two types must reference or contain image data or PDF data. `NSURL` objects must use the `file:` or any scheme that can return an [NSData](../../foundation/nsdata.md) object with a registered protocol. Image data (including that encapsulated by [UIImage](../uiimage.md)) must be in a format supported by the Image I/O framework; see [UIImage](../uiimage.md) for more information. The object is released at the end of the print job. The default value is `nil`.

If you set this property, `UIPrintInteractionController` sets the [printingItems](printingitems.md), [printPageRenderer](printpagerenderer.md), and [printFormatter](printformatter.md) properties to `nil`. (You can only set one of these properties for a print job).

If this property is set and the [showsPageRange](showspagerange.md) property is set to [true](https://developer.apple.com/documentation/swift/true)—and the printing item is a PDF document of more than one page—the printing options include the control for selecting a page range.

## See Also

### Providing the source of printable content

- [printingItems](printingitems.md): An array of ready-to-print objects.
- [printPageRenderer](printpagerenderer.md): An object that draws pages of printable content when UIKit requests it.
- [printFormatter](printformatter.md): An object that lays out the content of pages according to the kind of content.

# printingItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A single ready-to-print object.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) id printingItem;
```

<a id="Discussion"></a>

## Discussion

The object must be an instance of the [NSURL](../../foundation/nsurl.md), [NSData](../../foundation/nsdata.md), or [UIImage](../uiimage.md) class. An object of the first two types must reference or contain image data or PDF data. `NSURL` objects must use the `file:` or any scheme that can return an [NSData](../../foundation/nsdata.md) object with a registered protocol. Image data (including that encapsulated by [UIImage](../uiimage.md)) must be in a format supported by the Image I/O framework; see [UIImage](../uiimage.md) for more information. The object is released at the end of the print job. The default value is `nil`.

If you set this property, `UIPrintInteractionController` sets the [printingItems](printingitems.md), [printPageRenderer](printpagerenderer.md), and [printFormatter](printformatter.md) properties to `nil`. (You can only set one of these properties for a print job).

If this property is set and the [showsPageRange](showspagerange.md) property is set to [true](https://developer.apple.com/documentation/swift/true)—and the printing item is a PDF document of more than one page—the printing options include the control for selecting a page range.

## See Also

### Providing the source of printable content

- [printingItems](printingitems.md): An array of ready-to-print objects.
- [printPageRenderer](printpagerenderer.md): An object that draws pages of printable content when UIKit requests it.
- [printFormatter](printformatter.md): An object that lays out the content of pages according to the kind of content.

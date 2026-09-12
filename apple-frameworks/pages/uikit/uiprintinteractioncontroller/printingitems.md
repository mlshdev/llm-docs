> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/printingitems](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/printingitems)

# printingItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of ready-to-print objects.

## Declaration

```swift
var printingItems: [Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

The array must contain [NSURL](../../foundation/nsurl.md), [NSData](../../foundation/nsdata.md), [UIImage](../uiimage.md), or [ALAsset](https://developer.apple.com/documentation/assetslibrary/alasset) objects in any combination. Objects of the first two types must reference or contain image data or PDF data. `NSURL` objects must use the `file:` or `assets-library:` scheme or any scheme that can return an [NSData](../../foundation/nsdata.md) object with a registered protocol. Image data (including that encapsulated by [UIImage](../uiimage.md) and [ALAsset](https://developer.apple.com/documentation/assetslibrary/alasset) objects) must be in a format supported by the Image I/O framework; see [UIImage](../uiimage.md) for more information. An [ALAsset](https://developer.apple.com/documentation/assetslibrary/alasset) object must be of type [ALAssetTypePhoto](https://developer.apple.com/documentation/assetslibrary/alassettypephoto). Items are printed in array-index order. The array is released at the end of the print job. The default value is `nil`.

If you set this property, `UIPrintInteractionController` sets the [printingItem](printingitem.md), [printPageRenderer](printpagerenderer.md), and [printFormatter](printformatter.md) properties to `nil`. (Only one of these properties can be set for a print job.)

If this property is set, the printing options do not include the control for selecting a page range, even if the [showsPageRange](showspagerange.md) property is set to [true](https://developer.apple.com/documentation/swift/true). If you want page-range selection, you should use the [printingItem](printingitem.md) property instead.

## See Also

### Providing the source of printable content

- [printingItem](printingitem.md): A single ready-to-print object.
- [printPageRenderer](printpagerenderer.md): An object that draws pages of printable content when UIKit requests it.
- [printFormatter](printformatter.md): An object that lays out the content of pages according to the kind of content.

# printingItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of ready-to-print objects.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray * printingItems;
```

<a id="Discussion"></a>

## Discussion

The array must contain [NSURL](../../foundation/nsurl.md), [NSData](../../foundation/nsdata.md), [UIImage](../uiimage.md), or [ALAsset](https://developer.apple.com/documentation/assetslibrary/alasset) objects in any combination. Objects of the first two types must reference or contain image data or PDF data. `NSURL` objects must use the `file:` or `assets-library:` scheme or any scheme that can return an [NSData](../../foundation/nsdata.md) object with a registered protocol. Image data (including that encapsulated by [UIImage](../uiimage.md) and [ALAsset](https://developer.apple.com/documentation/assetslibrary/alasset) objects) must be in a format supported by the Image I/O framework; see [UIImage](../uiimage.md) for more information. An [ALAsset](https://developer.apple.com/documentation/assetslibrary/alasset) object must be of type [ALAssetTypePhoto](https://developer.apple.com/documentation/assetslibrary/alassettypephoto). Items are printed in array-index order. The array is released at the end of the print job. The default value is `nil`.

If you set this property, `UIPrintInteractionController` sets the [printingItem](printingitem.md), [printPageRenderer](printpagerenderer.md), and [printFormatter](printformatter.md) properties to `nil`. (Only one of these properties can be set for a print job.)

If this property is set, the printing options do not include the control for selecting a page range, even if the [showsPageRange](showspagerange.md) property is set to [true](https://developer.apple.com/documentation/swift/true). If you want page-range selection, you should use the [printingItem](printingitem.md) property instead.

## See Also

### Providing the source of printable content

- [printingItem](printingitem.md): A single ready-to-print object.
- [printPageRenderer](printpagerenderer.md): An object that draws pages of printable content when UIKit requests it.
- [printFormatter](printformatter.md): An object that lays out the content of pages according to the kind of content.

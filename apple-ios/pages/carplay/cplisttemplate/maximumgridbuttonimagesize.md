> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/maximumgridbuttonimagesize

# maximumGridButtonImageSize (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The expected image size for any grid buttons you add to the header.

## Declaration

```swift
class var maximumGridButtonImageSize: CGSize { get }
```

<a id="discussion"></a>

## Discussion

This property specifies the size of the image in points. The trait collection in your [CPInterfaceController](../cpinterfacecontroller.md) provides the scale factor to apply to this size to get the image’s dimensions in pixels.

## See Also

### Getting the configuration limits

- [maximumSectionCount](maximumsectioncount.md): The maximum number of sections the template can display.
- [maximumItemCount](maximumitemcount.md): The maximum number of items, across all sections, that the template can display.
- [maximumHeaderGridButtonCount](maximumheadergridbuttoncount.md): The maximum number of grid buttons you can display in the header.

# maximumGridButtonImageSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The expected image size for any grid buttons you add to the header.

## Declaration

```objectivec
@property (class, nonatomic, readonly) CGSize maximumGridButtonImageSize;
```

<a id="discussion"></a>

## Discussion

This property specifies the size of the image in points. The trait collection in your [CPInterfaceController](../cpinterfacecontroller.md) provides the scale factor to apply to this size to get the image’s dimensions in pixels.

## See Also

### Getting the configuration limits

- [maximumSectionCount](maximumsectioncount.md): The maximum number of sections the template can display.
- [maximumItemCount](maximumitemcount.md): The maximum number of items, across all sections, that the template can display.
- [maximumHeaderGridButtonCount](maximumheadergridbuttoncount.md): The maximum number of grid buttons you can display in the header.

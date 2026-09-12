> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimageview/defaultpreferredimagedynamicrange](https://developer.apple.com/documentation/appkit/nsimageview/defaultpreferredimagedynamicrange)

# defaultPreferredImageDynamicRange (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 14.0+

The default preferred image dynamic range.

## Declaration

```swift
class var defaultPreferredImageDynamicRange: NSImage.DynamicRange { get set }
```

<a id="Discussion"></a>

## Discussion

This property defaults to [NSImage.DynamicRange.constrainedHigh](../nsimage/dynamicrange/constrainedhigh.md) on macOS 14 and higher, and [NSImage.DynamicRange.standard](../nsimage/dynamicrange/standard.md) otherwise. Set this property to another [NSImage.DynamicRange](../nsimage/dynamicrange.md) value to change the default for all subsequently created image views in your app.

## See Also

### Specifying the dynamic range

- [imageDynamicRange](imagedynamicrange.md): The resolved dynamic range of the fully resolved image content.
- [preferredImageDynamicRange](preferredimagedynamicrange.md): The preferred dynamic range when displaying an image in the receiving image view.

# defaultPreferredImageDynamicRange (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 14.0+

The default preferred image dynamic range.

## Declaration

```objectivec
@property (class) NSImageDynamicRange defaultPreferredImageDynamicRange;
```

<a id="Discussion"></a>

## Discussion

This property defaults to [NSImageDynamicRangeConstrainedHigh](../nsimage/dynamicrange/constrainedhigh.md) on macOS 14 and higher, and [NSImageDynamicRangeStandard](../nsimage/dynamicrange/standard.md) otherwise. Set this property to another [NSImageDynamicRange](../nsimage/dynamicrange.md) value to change the default for all subsequently created image views in your app.

## See Also

### Specifying the dynamic range

- [imageDynamicRange](imagedynamicrange.md): The resolved dynamic range of the fully resolved image content.
- [preferredImageDynamicRange](preferredimagedynamicrange.md): The preferred dynamic range when displaying an image in the receiving image view.

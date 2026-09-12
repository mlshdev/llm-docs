> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimageview/imagedynamicrange](https://developer.apple.com/documentation/appkit/nsimageview/imagedynamicrange)

# imageDynamicRange (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The resolved dynamic range of the fully resolved image content.

## Declaration

```swift
var imageDynamicRange: NSImage.DynamicRange { get }
```

<a id="Discussion"></a>

## Discussion

This property returns [NSImage.DynamicRange.unspecified](../nsimage/dynamicrange/unspecified.md) if the image view can’t resolve the image content or the image view hasn’t displayed.

## See Also

### Specifying the dynamic range

- [preferredImageDynamicRange](preferredimagedynamicrange.md): The preferred dynamic range when displaying an image in the receiving image view.
- [defaultPreferredImageDynamicRange](defaultpreferredimagedynamicrange.md): The default preferred image dynamic range.

# imageDynamicRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The resolved dynamic range of the fully resolved image content.

## Declaration

```objectivec
@property (readonly) NSImageDynamicRange imageDynamicRange;
```

<a id="Discussion"></a>

## Discussion

This property returns [NSImageDynamicRangeUnspecified](../nsimage/dynamicrange/unspecified.md) if the image view can’t resolve the image content or the image view hasn’t displayed.

## See Also

### Specifying the dynamic range

- [preferredImageDynamicRange](preferredimagedynamicrange.md): The preferred dynamic range when displaying an image in the receiving image view.
- [defaultPreferredImageDynamicRange](defaultpreferredimagedynamicrange.md): The default preferred image dynamic range.

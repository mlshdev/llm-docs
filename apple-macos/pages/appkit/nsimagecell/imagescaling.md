> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsimagecell/imagescaling

# imageScaling (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scaling mode used to fit the receiver’s image into the frame.

## Declaration

```swift
var imageScaling: NSImageScaling { get set }
```

<a id="Discussion"></a>

## Discussion

For a list of possible values, see [NSImageScaling](../nsimagescaling.md). The default value is [NSImageScaling.scaleProportionallyDown](../nsimagescaling/scaleproportionallydown.md).

## See Also

### Aligning and Scaling the Image

- [imageAlignment](imagealignment.md): The alignment of the receiver’s image relative to its frame.

# imageScaling (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scaling mode used to fit the receiver’s image into the frame.

## Declaration

```objectivec
@property NSImageScaling imageScaling;
```

<a id="Discussion"></a>

## Discussion

For a list of possible values, see [NSImageScaling](../nsimagescaling.md). The default value is [NSImageScaleProportionallyDown](../nsimagescaling/scaleproportionallydown.md).

## See Also

### Aligning and Scaling the Image

- [imageAlignment](imagealignment.md): The alignment of the receiver’s image relative to its frame.

> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsciimagerep/imagerepwithciimage:

# imageRepWithCIImage:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a representation of an image initialized to the specified Core Image instance.

## Declaration

```objectivec
+ (instancetype) imageRepWithCIImage:(CIImage *) image;
```

## Parameters

- `image`: The [CIImage](https://developer.apple.com/documentation/coreimage/ciimage) instance.

<a id="return-value"></a>

## Return Value

An initialized [NSCIImageRep](../nsciimagerep.md) object, or `nil` if the object could not be initialized.

## See Also

### Creating Representations of Core Image Objects

- [initWithCIImage:](init%28ciimage_%29-60ghw.md): Returns a representation of an image initialized to the specified Core Image instance.

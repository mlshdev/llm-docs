> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/professional_video_applications/compressorextensioncolorspaces/supportedcolorspaces()

# supportedColorSpaces() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Returns the supported color spaces in an extension.

## Declaration

```swift
func supportedColorSpaces() -> [NSNumber]!
```

<a id="return-value"></a>

## Return Value

An array of supported color spaces from the [eCEColorSpace](../ececolorspace.md) enumeration.

<a id="discussion"></a>

## Discussion

If there is no implementation for this method, the Compressor app assumes [eCEColorSpaceDeviceRGB](../ececolorspacedevicergb.md), [eCEColorSpace601NTSC](../ececolorspace601ntsc.md), and [eCEColorSpace709](../ececolorspace709.md) for the supported color spaces.

## See Also

### Supporting Color Spaces

- [eCEColorSpace](../ececolorspace.md): The list of color spaces an encoder extension can support.

# supportedColorSpaces (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the supported color spaces in an extension.

## Declaration

```objectivec
- (NSArray<NSNumber *> *) supportedColorSpaces;
```

<a id="return-value"></a>

## Return Value

An array of supported color spaces from the [eCEColorSpace](../ececolorspace.md) enumeration.

<a id="discussion"></a>

## Discussion

If there is no implementation for this method, the Compressor app assumes [eCEColorSpaceDeviceRGB](../ececolorspacedevicergb.md), [eCEColorSpace601NTSC](../ececolorspace601ntsc.md), and [eCEColorSpace709](../ececolorspace709.md) for the supported color spaces.

## See Also

### Supporting Color Spaces

- [eCEColorSpace](../ececolorspace.md): The list of color spaces an encoder extension can support.

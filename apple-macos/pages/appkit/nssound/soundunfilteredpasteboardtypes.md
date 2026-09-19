> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssound/soundunfilteredpasteboardtypes

# soundUnfilteredPasteboardTypes

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Provides a list of the pasteboard types that the `NSSound` class can accept.

> Use [name](name-swift.property.md).

## Declaration

```objectivec
+ (NSArray *) soundUnfilteredPasteboardTypes;
```

<a id="return-value"></a>

## Return Value

Array of pasteboard types that the `NSSound` class can accept.

## See Also

### Deprecated

- [channelMapping](channelmapping.md): Deprecated. Provides the receiver’s channel map.
- [setChannelMapping:](setchannelmapping_.md): Deprecated. Specifies the receiver’s channel map.
- [soundUnfilteredFileTypes](soundunfilteredfiletypes.md): Deprecated. Provides the list of file types the [NSSound](../nssound.md) class understands.

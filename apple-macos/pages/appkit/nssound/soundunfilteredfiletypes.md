> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/soundunfilteredfiletypes](https://developer.apple.com/documentation/appkit/nssound/soundunfilteredfiletypes)

# soundUnfilteredFileTypes

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Provides the list of file types the [NSSound](../nssound.md) class understands.

> Use [name](name-swift.property.md).

## Declaration

```objectivec
+ (NSArray *) soundUnfilteredFileTypes;
```

<a id="return-value"></a>

## Return Value

Array of strings representing the file types the [NSSound](../nssound.md) class understands.

<a id="Discussion"></a>

## Discussion

The returned array may be passed directly to the [runModalForTypes:](../nsopenpanel/runmodalfortypes_.md) method of the  [NSOpenPanel](../nsopenpanel.md) class.

## See Also

### Deprecated

- [channelMapping](channelmapping.md): Deprecated. Provides the receiver’s channel map.
- [setChannelMapping:](setchannelmapping_.md): Deprecated. Specifies the receiver’s channel map.
- [soundUnfilteredPasteboardTypes](soundunfilteredpasteboardtypes.md): Deprecated. Provides a list of the pasteboard types that the `NSSound` class can accept.

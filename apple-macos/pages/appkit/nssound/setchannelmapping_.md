> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/setchannelmapping:](https://developer.apple.com/documentation/appkit/nssound/setchannelmapping:)

# setChannelMapping:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.9)

Specifies the receiver’s channel map.

## Declaration

```objectivec
- (void) setChannelMapping:(NSArray *) channelMapping;
```

## Parameters

- `channelMapping`: Audio-channel—to—device–channel mappings for the receiver.

## See Also

### Deprecated

- [channelMapping](channelmapping.md): Deprecated. Provides the receiver’s channel map.
- [soundUnfilteredFileTypes](soundunfilteredfiletypes.md): Deprecated. Provides the list of file types the [NSSound](../nssound.md) class understands.
- [soundUnfilteredPasteboardTypes](soundunfilteredpasteboardtypes.md): Deprecated. Provides a list of the pasteboard types that the `NSSound` class can accept.

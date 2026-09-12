> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioformatflags/formatflagisbigendian](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioformatflags/formatflagisbigendian)

# FormatFlagIsBigEndian

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

A flag to indicate whether samples use big-endian values.

## Declaration

```objectivec
FormatFlagIsBigEndian
```

<a id="Discussion"></a>

## Discussion

Set this flag for big-endian values; clear it for little-endian.

## See Also

### Endianness Flags

- [LinearPCMFormatFlagIsBigEndian](linearpcmformatflagisbigendian.md): A flag to indicate whether PCM samples use big-endian values.
- [FormatFlagsNativeEndian](formatflagsnativeendian.md): A flag to indicate whether samples use the platform’s native endianness for its values.

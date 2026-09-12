> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream/discontinuityflags/unknown](https://developer.apple.com/documentation/coremediaio/cmioextensionstream/discontinuityflags/unknown)

# unknown (Swift)

**Framework:** Core Media I/O  
**Kind:** Type Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A flag that indicates a stream discontinuity due to an unknown reason.

## Declaration

```swift
static var unknown: CMIOExtensionStream.DiscontinuityFlags { get }
```

## See Also

### Discontinuity Flags

- [time](time.md): A flag that indicates a time discontinuity in the stream.
- [sampleDropped](sampledropped.md): A flag that indicates a discontinuity in the stream due to a dropped frame.

# CMIOExtensionStreamDiscontinuityFlagUnknown (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A flag that indicates a stream discontinuity due to an unknown reason.

## Declaration

```objectivec
CMIOExtensionStreamDiscontinuityFlagUnknown
```

## See Also

### Discontinuity Flags

- [CMIOExtensionStreamDiscontinuityFlagNone](../../cmioextensionstreamdiscontinuityflags/cmioextensionstreamdiscontinuityflagnone.md): A flag that indicates there’s no discontinuity in the stream.
- [CMIOExtensionStreamDiscontinuityFlagTime](time.md): A flag that indicates a time discontinuity in the stream.
- [CMIOExtensionStreamDiscontinuityFlagSampleDropped](sampledropped.md): A flag that indicates a discontinuity in the stream due to a dropped frame.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream/discontinuityflags/time](https://developer.apple.com/documentation/coremediaio/cmioextensionstream/discontinuityflags/time)

# time (Swift)

**Framework:** Core Media I/O  
**Kind:** Type Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A flag that indicates a time discontinuity in the stream.

## Declaration

```swift
static var time: CMIOExtensionStream.DiscontinuityFlags { get }
```

## See Also

### Discontinuity Flags

- [unknown](unknown.md): A flag that indicates a stream discontinuity due to an unknown reason.
- [sampleDropped](sampledropped.md): A flag that indicates a discontinuity in the stream due to a dropped frame.

# CMIOExtensionStreamDiscontinuityFlagTime (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A flag that indicates a time discontinuity in the stream.

## Declaration

```objectivec
CMIOExtensionStreamDiscontinuityFlagTime
```

## See Also

### Discontinuity Flags

- [CMIOExtensionStreamDiscontinuityFlagNone](../../cmioextensionstreamdiscontinuityflags/cmioextensionstreamdiscontinuityflagnone.md): A flag that indicates there’s no discontinuity in the stream.
- [CMIOExtensionStreamDiscontinuityFlagUnknown](unknown.md): A flag that indicates a stream discontinuity due to an unknown reason.
- [CMIOExtensionStreamDiscontinuityFlagSampleDropped](sampledropped.md): A flag that indicates a discontinuity in the stream due to a dropped frame.

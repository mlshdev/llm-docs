> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetdiagnosticcreatewithstreams(_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfnetdiagnosticcreatewithstreams(_:_:_:))

# CFNetDiagnosticCreateWithStreams(\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a network diagnostic object from a pair of CFStreams.

## Declaration

```swift
func CFNetDiagnosticCreateWithStreams(_ alloc: CFAllocator?, _ readStream: CFReadStream?, _ writeStream: CFWriteStream?) -> Unmanaged<CFNetDiagnostic>
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `readStream`: Reference to a read stream whose connection has failed, or `NULL` if you do not want the CFNetDiagnosticRef to have a read stream.
- `writeStream`: Reference to a write stream whose connection has failed, or `NULL` if you do not want the CFNetDiagnosticRef to have a write stream.

<a id="Discussion"></a>

## Discussion

This function uses references to a read steam and a write stream (or just a read stream or just a write stream) to create a reference to an instance of a CFNetDiagnostic object. You can pass the reference to [CFNetDiagnosticDiagnoseProblemInteractively(\_:)](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md) to open a Network Diagnostics window or to [CFNetDiagnosticCopyNetworkStatusPassively(\_:\_:)](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md) to get a description of the connection referenced by `readStream` and `writeStream`.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe as long as another thread does not alter the same CFNetDiagnosticRef at the same time.

## See Also

### Network Diagnostics

- [CFNetDiagnostic](cfnetdiagnostic.md): An opaque reference representing a CFNetDiagnostic.
- [CFNetDiagnosticStatusValues](cfnetdiagnosticstatusvalues.md): Deprecated. Constants for diagnostic status values.
- [CFNetDiagnosticCopyNetworkStatusPassively(\_:\_:)](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md): Deprecated. Gets a network status value.
- [CFNetDiagnosticCreateWithURL(\_:\_:)](cfnetdiagnosticcreatewithurl%28____%29.md): Deprecated. Creates a CFNetDiagnosticRef from a CFURLRef.
- [CFNetDiagnosticDiagnoseProblemInteractively(\_:)](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md): Deprecated. Opens a Network Diagnostics window.
- [CFNetDiagnosticSetName(\_:\_:)](cfnetdiagnosticsetname%28____%29.md): Deprecated. Overrides the displayed application name.

# CFNetDiagnosticCreateWithStreams (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a network diagnostic object from a pair of CFStreams.

## Declaration

```objectivec
extern CFNetDiagnosticRefCFNetDiagnosticCreateWithStreams(CFAllocatorRef alloc, CFReadStreamRef readStream, CFWriteStreamRef writeStream);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `readStream`: Reference to a read stream whose connection has failed, or `NULL` if you do not want the CFNetDiagnosticRef to have a read stream.
- `writeStream`: Reference to a write stream whose connection has failed, or `NULL` if you do not want the CFNetDiagnosticRef to have a write stream.

<a id="Discussion"></a>

## Discussion

This function uses references to a read steam and a write stream (or just a read stream or just a write stream) to create a reference to an instance of a CFNetDiagnostic object. You can pass the reference to [CFNetDiagnosticDiagnoseProblemInteractively](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md) to open a Network Diagnostics window or to [CFNetDiagnosticCopyNetworkStatusPassively](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md) to get a description of the connection referenced by `readStream` and `writeStream`.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe as long as another thread does not alter the same CFNetDiagnosticRef at the same time.

## See Also

### Network Diagnostics

- [CFNetDiagnosticRef](cfnetdiagnostic.md): An opaque reference representing a CFNetDiagnostic.
- [CFNetDiagnosticStatusValues](cfnetdiagnosticstatusvalues.md): Deprecated. Constants for diagnostic status values.
- [CFNetDiagnosticCopyNetworkStatusPassively](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md): Deprecated. Gets a network status value.
- [CFNetDiagnosticCreateWithURL](cfnetdiagnosticcreatewithurl%28____%29.md): Deprecated. Creates a CFNetDiagnosticRef from a CFURLRef.
- [CFNetDiagnosticDiagnoseProblemInteractively](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md): Deprecated. Opens a Network Diagnostics window.
- [CFNetDiagnosticSetName](cfnetdiagnosticsetname%28____%29.md): Deprecated. Overrides the displayed application name.

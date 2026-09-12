> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetdiagnosticcreatewithurl(_:_:)](https://developer.apple.com/documentation/cfnetwork/cfnetdiagnosticcreatewithurl(_:_:))

# CFNetDiagnosticCreateWithURL(\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a CFNetDiagnosticRef from a CFURLRef.

## Declaration

```swift
func CFNetDiagnosticCreateWithURL(_ alloc: CFAllocator, _ url: CFURL) -> Unmanaged<CFNetDiagnostic>
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `url`: CFURLRef that refers to the failed connection.

<a id="return-value"></a>

## Return Value

CFNetDiagnosticRef that you can pass to [CFNetDiagnosticDiagnoseProblemInteractively(\_:)](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md) or [CFNetDiagnosticCopyNetworkStatusPassively(\_:\_:)](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md). Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function uses a URL to create a reference to an instance of a CFNetDiagnostic object. You can pass the reference to [CFNetDiagnosticDiagnoseProblemInteractively(\_:)](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md) to open a Network Diagnostics window or to [CFNetDiagnosticCopyNetworkStatusPassively(\_:\_:)](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md) to get a description of the connection referenced by `readStream` and `writeStream`.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe as long as another thread does not alter the same CFNetDiagnosticRef at the same time.

## See Also

### Network Diagnostics

- [CFNetDiagnostic](cfnetdiagnostic.md): An opaque reference representing a CFNetDiagnostic.
- [CFNetDiagnosticStatusValues](cfnetdiagnosticstatusvalues.md): Deprecated. Constants for diagnostic status values.
- [CFNetDiagnosticCopyNetworkStatusPassively(\_:\_:)](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md): Deprecated. Gets a network status value.
- [CFNetDiagnosticCreateWithStreams(\_:\_:\_:)](cfnetdiagnosticcreatewithstreams%28______%29.md): Deprecated. Creates a network diagnostic object from a pair of CFStreams.
- [CFNetDiagnosticDiagnoseProblemInteractively(\_:)](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md): Deprecated. Opens a Network Diagnostics window.
- [CFNetDiagnosticSetName(\_:\_:)](cfnetdiagnosticsetname%28____%29.md): Deprecated. Overrides the displayed application name.

# CFNetDiagnosticCreateWithURL (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a CFNetDiagnosticRef from a CFURLRef.

## Declaration

```objectivec
extern CFNetDiagnosticRefCFNetDiagnosticCreateWithURL(CFAllocatorRef alloc, CFURLRef url);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `url`: CFURLRef that refers to the failed connection.

<a id="return-value"></a>

## Return Value

CFNetDiagnosticRef that you can pass to [CFNetDiagnosticDiagnoseProblemInteractively](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md) or [CFNetDiagnosticCopyNetworkStatusPassively](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md). Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function uses a URL to create a reference to an instance of a CFNetDiagnostic object. You can pass the reference to [CFNetDiagnosticDiagnoseProblemInteractively](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md) to open a Network Diagnostics window or to [CFNetDiagnosticCopyNetworkStatusPassively](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md) to get a description of the connection referenced by `readStream` and `writeStream`.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe as long as another thread does not alter the same CFNetDiagnosticRef at the same time.

## See Also

### Network Diagnostics

- [CFNetDiagnosticRef](cfnetdiagnostic.md): An opaque reference representing a CFNetDiagnostic.
- [CFNetDiagnosticStatusValues](cfnetdiagnosticstatusvalues.md): Deprecated. Constants for diagnostic status values.
- [CFNetDiagnosticCopyNetworkStatusPassively](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md): Deprecated. Gets a network status value.
- [CFNetDiagnosticCreateWithStreams](cfnetdiagnosticcreatewithstreams%28______%29.md): Deprecated. Creates a network diagnostic object from a pair of CFStreams.
- [CFNetDiagnosticDiagnoseProblemInteractively](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md): Deprecated. Opens a Network Diagnostics window.
- [CFNetDiagnosticSetName](cfnetdiagnosticsetname%28____%29.md): Deprecated. Overrides the displayed application name.

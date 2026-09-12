> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetdiagnosticcopynetworkstatuspassively(_:_:)](https://developer.apple.com/documentation/cfnetwork/cfnetdiagnosticcopynetworkstatuspassively(_:_:))

# CFNetDiagnosticCopyNetworkStatusPassively(\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Gets a network status value.

## Declaration

```swift
func CFNetDiagnosticCopyNetworkStatusPassively(_ details: CFNetDiagnostic, _ description: UnsafeMutablePointer<Unmanaged<CFString>?>?) -> CFNetDiagnosticStatus
```

## Parameters

- `details`: CFNetDiagnosticRef, created by [CFNetDiagnosticCreateWithStreams(\_:\_:\_:)](cfnetdiagnosticcreatewithstreams%28______%29.md) or [CFNetDiagnosticCreateWithURL(\_:\_:)](cfnetdiagnosticcreatewithurl%28____%29.md), for which the Network Diagnostics status is to be obtained.
- `description`: If not `NULL`, upon return contains a localized string containing a description of the current network status. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A network status value.

<a id="Discussion"></a>

## Discussion

This function returns a status value that can be used to display basic information about the connection, and optionally gets a localized string containing a description of the current network status.

This function is guaranteed not to generate network activity.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe as long as another thread does not alter the same CFNetDiagnosticRef at the same time.

## See Also

### Network Diagnostics

- [CFNetDiagnostic](cfnetdiagnostic.md): An opaque reference representing a CFNetDiagnostic.
- [CFNetDiagnosticStatusValues](cfnetdiagnosticstatusvalues.md): Deprecated. Constants for diagnostic status values.
- [CFNetDiagnosticCreateWithStreams(\_:\_:\_:)](cfnetdiagnosticcreatewithstreams%28______%29.md): Deprecated. Creates a network diagnostic object from a pair of CFStreams.
- [CFNetDiagnosticCreateWithURL(\_:\_:)](cfnetdiagnosticcreatewithurl%28____%29.md): Deprecated. Creates a CFNetDiagnosticRef from a CFURLRef.
- [CFNetDiagnosticDiagnoseProblemInteractively(\_:)](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md): Deprecated. Opens a Network Diagnostics window.
- [CFNetDiagnosticSetName(\_:\_:)](cfnetdiagnosticsetname%28____%29.md): Deprecated. Overrides the displayed application name.

# CFNetDiagnosticCopyNetworkStatusPassively (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Gets a network status value.

## Declaration

```objectivec
extern CFNetDiagnosticStatus CFNetDiagnosticCopyNetworkStatusPassively(CFNetDiagnosticRef details, CFStringRef*description);
```

## Parameters

- `details`: CFNetDiagnosticRef, created by [CFNetDiagnosticCreateWithStreams](cfnetdiagnosticcreatewithstreams%28______%29.md) or [CFNetDiagnosticCreateWithURL](cfnetdiagnosticcreatewithurl%28____%29.md), for which the Network Diagnostics status is to be obtained.
- `description`: If not `NULL`, upon return contains a localized string containing a description of the current network status. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A network status value.

<a id="Discussion"></a>

## Discussion

This function returns a status value that can be used to display basic information about the connection, and optionally gets a localized string containing a description of the current network status.

This function is guaranteed not to generate network activity.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe as long as another thread does not alter the same CFNetDiagnosticRef at the same time.

## See Also

### Network Diagnostics

- [CFNetDiagnosticRef](cfnetdiagnostic.md): An opaque reference representing a CFNetDiagnostic.
- [CFNetDiagnosticStatusValues](cfnetdiagnosticstatusvalues.md): Deprecated. Constants for diagnostic status values.
- [CFNetDiagnosticCreateWithStreams](cfnetdiagnosticcreatewithstreams%28______%29.md): Deprecated. Creates a network diagnostic object from a pair of CFStreams.
- [CFNetDiagnosticCreateWithURL](cfnetdiagnosticcreatewithurl%28____%29.md): Deprecated. Creates a CFNetDiagnosticRef from a CFURLRef.
- [CFNetDiagnosticDiagnoseProblemInteractively](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md): Deprecated. Opens a Network Diagnostics window.
- [CFNetDiagnosticSetName](cfnetdiagnosticsetname%28____%29.md): Deprecated. Overrides the displayed application name.

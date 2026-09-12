> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetdiagnosticstatusvalues](https://developer.apple.com/documentation/cfnetwork/cfnetdiagnosticstatusvalues)

# CFNetDiagnosticStatusValues (Swift)

**Framework:** CFNetwork  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Constants for diagnostic status values.

## Declaration

```swift
enum CFNetDiagnosticStatusValues
```

<a id="overview"></a>

## Overview

Diagnostic status values are returned by [CFNetDiagnosticDiagnoseProblemInteractively(\_:)](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md) and [CFNetDiagnosticCopyNetworkStatusPassively(\_:\_:)](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md).

## Topics

### Constants

- [CFNetDiagnosticStatusValues.noErr](cfnetdiagnosticstatusvalues/noerr.md): Deprecated. No error occurred but there is no status.
- [CFNetDiagnosticStatusValues.err](cfnetdiagnosticstatusvalues/err.md): Deprecated. An error occurred that prevented the call from completing.
- [CFNetDiagnosticStatusValues.connectionUp](cfnetdiagnosticstatusvalues/connectionup.md): Deprecated. The connection appears to be working.
- [CFNetDiagnosticStatusValues.connectionIndeterminate](cfnetdiagnosticstatusvalues/connectionindeterminate.md): Deprecated. The status of the connection is not known.
- [CFNetDiagnosticStatusValues.connectionDown](cfnetdiagnosticstatusvalues/connectiondown.md): Deprecated. The connection does not appear to be working.

### Initializers

- [init(rawValue:)](cfnetdiagnosticstatusvalues/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Network Diagnostics

- [CFNetDiagnostic](cfnetdiagnostic.md): An opaque reference representing a CFNetDiagnostic.
- [CFNetDiagnosticCopyNetworkStatusPassively(\_:\_:)](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md): Deprecated. Gets a network status value.
- [CFNetDiagnosticCreateWithStreams(\_:\_:\_:)](cfnetdiagnosticcreatewithstreams%28______%29.md): Deprecated. Creates a network diagnostic object from a pair of CFStreams.
- [CFNetDiagnosticCreateWithURL(\_:\_:)](cfnetdiagnosticcreatewithurl%28____%29.md): Deprecated. Creates a CFNetDiagnosticRef from a CFURLRef.
- [CFNetDiagnosticDiagnoseProblemInteractively(\_:)](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md): Deprecated. Opens a Network Diagnostics window.
- [CFNetDiagnosticSetName(\_:\_:)](cfnetdiagnosticsetname%28____%29.md): Deprecated. Overrides the displayed application name.

# CFNetDiagnosticStatusValues (Objective-C)

**Framework:** CFNetwork  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Constants for diagnostic status values.

## Declaration

```objectivec
enum CFNetDiagnosticStatusValues : int;
```

<a id="overview"></a>

## Overview

Diagnostic status values are returned by [CFNetDiagnosticDiagnoseProblemInteractively](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md) and [CFNetDiagnosticCopyNetworkStatusPassively](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md).

## Topics

### Constants

- [kCFNetDiagnosticNoErr](cfnetdiagnosticstatusvalues/noerr.md): Deprecated. No error occurred but there is no status.
- [kCFNetDiagnosticErr](cfnetdiagnosticstatusvalues/err.md): Deprecated. An error occurred that prevented the call from completing.
- [kCFNetDiagnosticConnectionUp](cfnetdiagnosticstatusvalues/connectionup.md): Deprecated. The connection appears to be working.
- [kCFNetDiagnosticConnectionIndeterminate](cfnetdiagnosticstatusvalues/connectionindeterminate.md): Deprecated. The status of the connection is not known.
- [kCFNetDiagnosticConnectionDown](cfnetdiagnosticstatusvalues/connectiondown.md): Deprecated. The connection does not appear to be working.

## See Also

### Network Diagnostics

- [CFNetDiagnosticRef](cfnetdiagnostic.md): An opaque reference representing a CFNetDiagnostic.
- [CFNetDiagnosticCopyNetworkStatusPassively](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md): Deprecated. Gets a network status value.
- [CFNetDiagnosticCreateWithStreams](cfnetdiagnosticcreatewithstreams%28______%29.md): Deprecated. Creates a network diagnostic object from a pair of CFStreams.
- [CFNetDiagnosticCreateWithURL](cfnetdiagnosticcreatewithurl%28____%29.md): Deprecated. Creates a CFNetDiagnosticRef from a CFURLRef.
- [CFNetDiagnosticDiagnoseProblemInteractively](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md): Deprecated. Opens a Network Diagnostics window.
- [CFNetDiagnosticSetName](cfnetdiagnosticsetname%28____%29.md): Deprecated. Overrides the displayed application name.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetdiagnostic](https://developer.apple.com/documentation/cfnetwork/cfnetdiagnostic)

# CFNetDiagnostic (Swift)

**Framework:** CFNetwork  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An opaque reference representing a CFNetDiagnostic.

## Declaration

```swift
class CFNetDiagnostic
```

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Network Diagnostics

- [CFNetDiagnosticStatusValues](cfnetdiagnosticstatusvalues.md): Deprecated. Constants for diagnostic status values.
- [CFNetDiagnosticCopyNetworkStatusPassively(\_:\_:)](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md): Deprecated. Gets a network status value.
- [CFNetDiagnosticCreateWithStreams(\_:\_:\_:)](cfnetdiagnosticcreatewithstreams%28______%29.md): Deprecated. Creates a network diagnostic object from a pair of CFStreams.
- [CFNetDiagnosticCreateWithURL(\_:\_:)](cfnetdiagnosticcreatewithurl%28____%29.md): Deprecated. Creates a CFNetDiagnosticRef from a CFURLRef.
- [CFNetDiagnosticDiagnoseProblemInteractively(\_:)](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md): Deprecated. Opens a Network Diagnostics window.
- [CFNetDiagnosticSetName(\_:\_:)](cfnetdiagnosticsetname%28____%29.md): Deprecated. Overrides the displayed application name.

# CFNetDiagnosticRef (Objective-C)

**Framework:** CFNetwork  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An opaque reference representing a CFNetDiagnostic.

## Declaration

```objectivec
typedef struct __CFNetDiagnostic * CFNetDiagnosticRef;
```

## See Also

### Network Diagnostics

- [CFNetDiagnosticStatusValues](cfnetdiagnosticstatusvalues.md): Deprecated. Constants for diagnostic status values.
- [CFNetDiagnosticCopyNetworkStatusPassively](cfnetdiagnosticcopynetworkstatuspassively%28____%29.md): Deprecated. Gets a network status value.
- [CFNetDiagnosticCreateWithStreams](cfnetdiagnosticcreatewithstreams%28______%29.md): Deprecated. Creates a network diagnostic object from a pair of CFStreams.
- [CFNetDiagnosticCreateWithURL](cfnetdiagnosticcreatewithurl%28____%29.md): Deprecated. Creates a CFNetDiagnosticRef from a CFURLRef.
- [CFNetDiagnosticDiagnoseProblemInteractively](cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md): Deprecated. Opens a Network Diagnostics window.
- [CFNetDiagnosticSetName](cfnetdiagnosticsetname%28____%29.md): Deprecated. Overrides the displayed application name.

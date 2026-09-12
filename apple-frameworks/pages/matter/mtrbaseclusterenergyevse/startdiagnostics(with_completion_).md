> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterenergyevse/startdiagnostics(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterenergyevse/startdiagnostics(with:completion:))

# startDiagnostics(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command StartDiagnostics

## Declaration

```swift
func startDiagnostics(with params: MTREnergyEVSEClusterStartDiagnosticsParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func startDiagnostics(with params: MTREnergyEVSEClusterStartDiagnosticsParams?) async throws
```

<a id="discussion"></a>

## Discussion

Allows a client to put the EVSE into a self-diagnostics mode.

# startDiagnosticsWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command StartDiagnostics

## Declaration

```objectivec
- (void) startDiagnosticsWithParams:(MTREnergyEVSEClusterStartDiagnosticsParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to put the EVSE into a self-diagnostics mode.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommissioningdelegate/commissioning(_:completeddeviceattestation:error:completion:)](https://developer.apple.com/documentation/matter/mtrcommissioningdelegate/commissioning(_:completeddeviceattestation:error:completion:))

# commissioning(\_:completedDeviceAttestation:error:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Notification that device attestation has completed.

## Declaration

```swift
func commissioning(_ commissioning: MTRCommissioningOperation, completedDeviceAttestation attestationDeviceInfo: MTRDeviceAttestationDeviceInfo, error: (any Error)?, completion: @escaping @Sendable () -> Void)
```

```swift
func commissioning(_ commissioning: MTRCommissioningOperation, completedDeviceAttestation attestationDeviceInfo: MTRDeviceAttestationDeviceInfo, error: (any Error)?) async
```

<a id="discussion"></a>

## Discussion

Commissioning will pause, regardless of whether attestation succeeded or failed, until the completion is invoked (indicating that commissioning should proceed, even if attestation failed), or commissioning is stopped.

# commissioning:completedDeviceAttestation:error:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Notification that device attestation has completed.

## Declaration

```objectivec
- (void) commissioning:(MTRCommissioningOperation *) commissioning completedDeviceAttestation:(MTRDeviceAttestationDeviceInfo *) attestationDeviceInfo error:(NSError *) error completion:(dispatch_block_t) completion;
```

<a id="discussion"></a>

## Discussion

Commissioning will pause, regardless of whether attestation succeeded or failed, until the completion is invoked (indicating that commissioning should proceed, even if attestation failed), or commissioning is stopped.

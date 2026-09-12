> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtroperationalcertificateissuer/issueoperationalcertificate(forrequest:attestationinfo:controller:completion:)](https://developer.apple.com/documentation/matter/mtroperationalcertificateissuer/issueoperationalcertificate(forrequest:attestationinfo:controller:completion:))

# issueOperationalCertificate(forRequest:attestationInfo:controller:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func issueOperationalCertificate(forRequest csrInfo: MTROperationalCSRInfo, attestationInfo: MTRDeviceAttestationInfo, controller: MTRDeviceController, completion: @escaping @Sendable (MTROperationalCertificateChain?, (any Error)?) -> Void)
```

```swift
func issueOperationalCertificate(forRequest csrInfo: MTROperationalCSRInfo, attestationInfo: MTRDeviceAttestationInfo, controller: MTRDeviceController) async throws -> MTROperationalCertificateChain
```

# issueOperationalCertificateForRequest:attestationInfo:controller:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) issueOperationalCertificateForRequest:(MTROperationalCSRInfo *) csrInfo attestationInfo:(MTRDeviceAttestationInfo *) attestationInfo controller:(MTRDeviceController *) controller completion:(void (^)(MTROperationalCertificateChain *info, NSError *error)) completion;
```

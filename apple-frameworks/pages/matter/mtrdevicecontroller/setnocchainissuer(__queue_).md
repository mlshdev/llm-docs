> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontroller/setnocchainissuer(_:queue:)](https://developer.apple.com/documentation/matter/mtrdevicecontroller/setnocchainissuer(_:queue:))

# setNocChainIssuer(\_:queue:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please set the operationalCertificateIssuer in the MTRDeviceControllerStartupParams instead.

## Declaration

```swift
func setNocChainIssuer(_ nocChainIssuer: any MTRNOCChainIssuer, queue: dispatch_queue_t)
```

# setNocChainIssuer:queue: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please set the operationalCertificateIssuer in the MTRDeviceControllerStartupParams instead.

## Declaration

```objectivec
- (void) setNocChainIssuer:(id<MTRNOCChainIssuer>) nocChainIssuer queue:(dispatch_queue_t) queue;
```

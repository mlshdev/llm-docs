> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrotaproviderdelegate/handlebdxtransfersessionend(fornodeid:controller:error:)

# handleBDXTransferSessionEnd(forNodeID:controller:error:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 26.1) · iPadOS 16.1+ (deprecated in 26.1) · Mac Catalyst 16.1+ (deprecated in 26.1) · macOS 13.0+ (deprecated in 26.1) · tvOS 16.1+ (deprecated in 26.1) · visionOS 1.0+ (deprecated in 26.0) · watchOS 9.1+ (deprecated in 26.1)

## Declaration

```swift
optional func handleBDXTransferSessionEnd(forNodeID nodeID: NSNumber, controller: MTRDeviceController, error: (any Error)?)
```

# handleBDXTransferSessionEndForNodeID:controller:error: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 26.1) · iPadOS 16.1+ (deprecated in 26.1) · Mac Catalyst 16.1+ (deprecated in 26.1) · macOS 13.0+ (deprecated in 26.1) · tvOS 16.1+ (deprecated in 26.1) · visionOS 1.0+ (deprecated in 26.0) · watchOS 9.1+ (deprecated in 26.1)

## Declaration

```objectivec
- (void) handleBDXTransferSessionEndForNodeID:(NSNumber *) nodeID controller:(MTRDeviceController *) controller error:(NSError *) error;
```

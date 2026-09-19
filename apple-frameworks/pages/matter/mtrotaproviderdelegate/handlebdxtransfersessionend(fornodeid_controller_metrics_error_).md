> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrotaproviderdelegate/handlebdxtransfersessionend(fornodeid:controller:metrics:error:)

# handleBDXTransferSessionEnd(forNodeID:controller:metrics:error:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+ · tvOS 26.1+ · visionOS 26.0+ · watchOS 26.1+

Notify the delegate when a BDX Session ends for some node.  The controller identifies the fabric the node is on, and the nodeID identifies the node within that fabric.

## Declaration

```swift
optional func handleBDXTransferSessionEnd(forNodeID nodeID: NSNumber, controller: MTRDeviceController, metrics: MTRMetrics, error: (any Error)?)
```

# handleBDXTransferSessionEndForNodeID:controller:metrics:error: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+ · tvOS 26.1+ · visionOS 26.0+ · watchOS 26.1+

Notify the delegate when a BDX Session ends for some node.  The controller identifies the fabric the node is on, and the nodeID identifies the node within that fabric.

## Declaration

```objectivec
- (void) handleBDXTransferSessionEndForNodeID:(NSNumber *) nodeID controller:(MTRDeviceController *) controller metrics:(MTRMetrics *) metrics error:(NSError *) error;
```

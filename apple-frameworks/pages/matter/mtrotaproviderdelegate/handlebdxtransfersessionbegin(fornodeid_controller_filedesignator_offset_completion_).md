> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrotaproviderdelegate/handlebdxtransfersessionbegin(fornodeid:controller:filedesignator:offset:completion:)

# handleBDXTransferSessionBegin(forNodeID:controller:fileDesignator:offset:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
optional func handleBDXTransferSessionBegin(forNodeID nodeID: NSNumber, controller: MTRDeviceController, fileDesignator: String, offset: NSNumber, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
optional func handleBDXTransferSessionBegin(forNodeID nodeID: NSNumber, controller: MTRDeviceController, fileDesignator: String, offset: NSNumber) async throws
```

# handleBDXTransferSessionBeginForNodeID:controller:fileDesignator:offset:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) handleBDXTransferSessionBeginForNodeID:(NSNumber *) nodeID controller:(MTRDeviceController *) controller fileDesignator:(NSString *) fileDesignator offset:(NSNumber *) offset completion:(MTRStatusCompletion) completion;
```

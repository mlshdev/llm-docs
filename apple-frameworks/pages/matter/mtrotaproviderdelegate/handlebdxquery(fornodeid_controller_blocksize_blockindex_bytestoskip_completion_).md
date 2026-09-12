> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrotaproviderdelegate/handlebdxquery(fornodeid:controller:blocksize:blockindex:bytestoskip:completion:)](https://developer.apple.com/documentation/matter/mtrotaproviderdelegate/handlebdxquery(fornodeid:controller:blocksize:blockindex:bytestoskip:completion:))

# handleBDXQuery(forNodeID:controller:blockSize:blockIndex:bytesToSkip:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
optional func handleBDXQuery(forNodeID nodeID: NSNumber, controller: MTRDeviceController, blockSize: NSNumber, blockIndex: NSNumber, bytesToSkip: NSNumber, completion: @escaping @Sendable (Data?, Bool) -> Void)
```

```swift
optional func handleBDXQuery(forNodeID nodeID: NSNumber, controller: MTRDeviceController, blockSize: NSNumber, blockIndex: NSNumber, bytesToSkip: NSNumber) async -> (Data?, Bool)
```

# handleBDXQueryForNodeID:controller:blockSize:blockIndex:bytesToSkip:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) handleBDXQueryForNodeID:(NSNumber *) nodeID controller:(MTRDeviceController *) controller blockSize:(NSNumber *) blockSize blockIndex:(NSNumber *) blockIndex bytesToSkip:(NSNumber *) bytesToSkip completion:(void (^)(NSData *data, BOOL isEOF)) completion;
```

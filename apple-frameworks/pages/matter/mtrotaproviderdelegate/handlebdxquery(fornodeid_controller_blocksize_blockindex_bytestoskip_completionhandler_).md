> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrotaproviderdelegate/handlebdxquery(fornodeid:controller:blocksize:blockindex:bytestoskip:completionhandler:)](https://developer.apple.com/documentation/matter/mtrotaproviderdelegate/handlebdxquery(fornodeid:controller:blocksize:blockindex:bytestoskip:completionhandler:))

# handleBDXQuery(forNodeID:controller:blockSize:blockIndex:bytesToSkip:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

## Declaration

```swift
optional func handleBDXQuery(forNodeID nodeID: NSNumber, controller: MTRDeviceController, blockSize: NSNumber, blockIndex: NSNumber, bytesToSkip: NSNumber, completionHandler: @escaping @Sendable (Data?, Bool) -> Void)
```

```swift
optional func handleBDXQuery(forNodeID nodeID: NSNumber, controller: MTRDeviceController, blockSize: NSNumber, blockIndex: NSNumber, bytesToSkip: NSNumber) async -> (Data?, Bool)
```

# handleBDXQueryForNodeID:controller:blockSize:blockIndex:bytesToSkip:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

## Declaration

```objectivec
- (void) handleBDXQueryForNodeID:(NSNumber *) nodeID controller:(MTRDeviceController *) controller blockSize:(NSNumber *) blockSize blockIndex:(NSNumber *) blockIndex bytesToSkip:(NSNumber *) bytesToSkip completionHandler:(void (^)(NSData *data, BOOL isEOF)) completionHandler;
```

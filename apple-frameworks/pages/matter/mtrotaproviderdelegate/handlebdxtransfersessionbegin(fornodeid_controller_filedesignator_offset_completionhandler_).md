> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrotaproviderdelegate/handlebdxtransfersessionbegin(fornodeid:controller:filedesignator:offset:completionhandler:)](https://developer.apple.com/documentation/matter/mtrotaproviderdelegate/handlebdxtransfersessionbegin(fornodeid:controller:filedesignator:offset:completionhandler:))

# handleBDXTransferSessionBegin(forNodeID:controller:fileDesignator:offset:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

## Declaration

```swift
optional func handleBDXTransferSessionBegin(forNodeID nodeID: NSNumber, controller: MTRDeviceController, fileDesignator: String, offset: NSNumber, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
optional func handleBDXTransferSessionBegin(forNodeID nodeID: NSNumber, controller: MTRDeviceController, fileDesignator: String, offset: NSNumber) async throws
```

# handleBDXTransferSessionBeginForNodeID:controller:fileDesignator:offset:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

## Declaration

```objectivec
- (void) handleBDXTransferSessionBeginForNodeID:(NSNumber *) nodeID controller:(MTRDeviceController *) controller fileDesignator:(NSString *) fileDesignator offset:(NSNumber *) offset completionHandler:(StatusCompletion) completionHandler;
```

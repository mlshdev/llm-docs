> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterwifinetworkdiagnostics/readattributepacketmulticastrxcount(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterwifinetworkdiagnostics/readattributepacketmulticastrxcount(completionhandler:))

# readAttributePacketMulticastRxCount(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributePacketMulticastRxCountWithCompletion:

## Declaration

```swift
func readAttributePacketMulticastRxCount(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributePacketMulticastRxCount() async throws -> NSNumber
```

# readAttributePacketMulticastRxCountWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributePacketMulticastRxCountWithCompletion:

## Declaration

```objectivec
- (void) readAttributePacketMulticastRxCountWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```

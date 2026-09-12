> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterbarriercontrol/readattributebarriercloseevents(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterbarriercontrol/readattributebarriercloseevents(completionhandler:))

# readAttributeBarrierCloseEvents(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeBarrierCloseEventsWithCompletion:

## Declaration

```swift
func readAttributeBarrierCloseEvents(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeBarrierCloseEvents() async throws -> NSNumber
```

# readAttributeBarrierCloseEventsWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeBarrierCloseEventsWithCompletion:

## Declaration

```objectivec
- (void) readAttributeBarrierCloseEventsWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdevice/setdelegate(_:queue:)

# setDelegate(\_:queue:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 18.0) · iPadOS 16.1+ (deprecated in 18.0) · Mac Catalyst 16.1+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.1+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.1+ (deprecated in 11.0)

> Please use addDelegate:queue:interestedPaths:

## Declaration

```swift
func setDelegate(_ delegate: any MTRDeviceDelegate, queue: dispatch_queue_t)
```

# setDelegate:queue: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 18.0) · iPadOS 16.1+ (deprecated in 18.0) · Mac Catalyst 16.1+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.1+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.1+ (deprecated in 11.0)

> Please use addDelegate:queue:interestedPaths:

## Declaration

```objectivec
- (void) setDelegate:(id<MTRDeviceDelegate>) delegate queue:(dispatch_queue_t) queue;
```

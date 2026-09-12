> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontroller/startbrowse(forcommissionables:queue:)](https://developer.apple.com/documentation/matter/mtrdevicecontroller/startbrowse(forcommissionables:queue:))

# startBrowse(forCommissionables:queue:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
func startBrowse(forCommissionables delegate: any MTRCommissionableBrowserDelegate, queue: dispatch_queue_t) -> Bool
```

# startBrowseForCommissionables:queue: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
- (BOOL) startBrowseForCommissionables:(id<MTRCommissionableBrowserDelegate>) delegate queue:(dispatch_queue_t) queue;
```

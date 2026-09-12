> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommissioningoperation/stop()](https://developer.apple.com/documentation/matter/mtrcommissioningoperation/stop())

# stop() (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Stop commissioning.  This will typically result in commissioning:failedWithError: callbacks to delegates.

## Declaration

```swift
func stop() -> Bool
```

<a id="discussion"></a>

## Discussion

Returns YES if this commissioning was still in-progress and has now been stopped; returns NO if this commissioning wasn’t in-progress.

Note that this can return NO while there are still pending async calls to delegate callbacks for the end of the commissioning.

# stop (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Stop commissioning.  This will typically result in commissioning:failedWithError: callbacks to delegates.

## Declaration

```objectivec
- (BOOL) stop;
```

<a id="discussion"></a>

## Discussion

Returns YES if this commissioning was still in-progress and has now been stopped; returns NO if this commissioning wasn’t in-progress.

Note that this can return NO while there are still pending async calls to delegate callbacks for the end of the commissioning.

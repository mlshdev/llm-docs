> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommissioningdelegate/commissioning(_:failedwitherror:metrics:)](https://developer.apple.com/documentation/matter/mtrcommissioningdelegate/commissioning(_:failedwitherror:metrics:))

# commissioning(\_:failedWithError:metrics:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Notification that commissioning has failed.

## Declaration

```swift
optional func commissioning(_ commissioning: MTRCommissioningOperation, failedWithError error: any Error, metrics: MTRMetrics)
```

# commissioning:failedWithError:metrics: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Notification that commissioning has failed.

## Declaration

```objectivec
- (void) commissioning:(MTRCommissioningOperation *) commissioning failedWithError:(NSError *) error metrics:(MTRMetrics *) metrics;
```

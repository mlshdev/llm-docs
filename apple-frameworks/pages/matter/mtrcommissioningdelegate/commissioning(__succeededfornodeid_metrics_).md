> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommissioningdelegate/commissioning(_:succeededfornodeid:metrics:)](https://developer.apple.com/documentation/matter/mtrcommissioningdelegate/commissioning(_:succeededfornodeid:metrics:))

# commissioning(\_:succeededForNodeID:metrics:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Notification that commissioning has succeeded.

## Declaration

```swift
optional func commissioning(_ commissioning: MTRCommissioningOperation, succeededForNodeID nodeID: NSNumber, metrics: MTRMetrics)
```

<a id="discussion"></a>

## Discussion

This selector will not be used if commissioning:succeededForNodeID:metrics:context: is supported.

# commissioning:succeededForNodeID:metrics: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Notification that commissioning has succeeded.

## Declaration

```objectivec
- (void) commissioning:(MTRCommissioningOperation *) commissioning succeededForNodeID:(NSNumber *) nodeID metrics:(MTRMetrics *) metrics;
```

<a id="discussion"></a>

## Discussion

This selector will not be used if commissioning:succeededForNodeID:metrics:context: is supported.

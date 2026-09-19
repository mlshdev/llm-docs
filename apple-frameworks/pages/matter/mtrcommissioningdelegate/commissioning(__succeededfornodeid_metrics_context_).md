> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrcommissioningdelegate/commissioning(_:succeededfornodeid:metrics:context:)

# commissioning(\_:succeededForNodeID:metrics:context:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Notification that commissioning has succeeded.

## Declaration

```swift
optional func commissioning(_ commissioning: MTRCommissioningOperation, succeededForNodeID nodeID: NSNumber, metrics: MTRMetrics, context: [String : Any])
```

<a id="discussion"></a>

## Discussion

If supported, this selector will be used in preference to commissioning:succeededForNodeID:metrics:.

The context parameter is a dictionary with NSString keys and values of type id. The supported keys are defined above in this file.

# commissioning:succeededForNodeID:metrics:context: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Notification that commissioning has succeeded.

## Declaration

```objectivec
- (void) commissioning:(MTRCommissioningOperation *) commissioning succeededForNodeID:(NSNumber *) nodeID metrics:(MTRMetrics *) metrics context:(NSDictionary<NSString *,id> *) context;
```

<a id="discussion"></a>

## Discussion

If supported, this selector will be used in preference to commissioning:succeededForNodeID:metrics:.

The context parameter is a dictionary with NSString keys and values of type id. The supported keys are defined above in this file.

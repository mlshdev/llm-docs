> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterelectricalenergymeasurement/readattributeaccuracy(withclusterstatecache:endpoint:queue:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterelectricalenergymeasurement/readattributeaccuracy(withclusterstatecache:endpoint:queue:completion:))

# readAttributeAccuracy(withClusterStateCache:endpoint:queue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
class func readAttributeAccuracy(withClusterStateCache clusterStateCacheContainer: MTRClusterStateCacheContainer, endpoint: NSNumber, queue: dispatch_queue_t, completion: @escaping @Sendable (MTRElectricalEnergyMeasurementClusterMeasurementAccuracyStruct?, (any Error)?) -> Void)
```

```swift
class func readAttributeAccuracy(withClusterStateCache clusterStateCacheContainer: MTRClusterStateCacheContainer, endpoint: NSNumber, queue: dispatch_queue_t) async throws -> MTRElectricalEnergyMeasurementClusterMeasurementAccuracyStruct
```

# readAttributeAccuracyWithClusterStateCache:endpoint:queue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
+ (void) readAttributeAccuracyWithClusterStateCache:(MTRClusterStateCacheContainer *) clusterStateCacheContainer endpoint:(NSNumber *) endpoint queue:(dispatch_queue_t) queue completion:(void (^)(MTRElectricalEnergyMeasurementClusterMeasurementAccuracyStruct *value, NSError *error)) completion;
```

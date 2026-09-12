> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsnearestneighbors](https://developer.apple.com/documentation/accelerate/bnnsnearestneighbors)

# BNNSNearestNeighbors (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A k-nearest neighbors object.

## Declaration

```swift
typealias BNNSNearestNeighbors = UnsafeMutableRawPointer
```

## See Also

### K-nearest neighbors calculation

- [BNNS.NearestNeighbors](bnns/nearestneighbors.md): A structure that calculates k-nearest neighbors.
- [BNNSCreateNearestNeighbors(\_:\_:\_:\_:\_:)](bnnscreatenearestneighbors%28__________%29.md): Returns a new k-nearest neighbors object.
- [BNNSNearestNeighborsLoad(\_:\_:\_:)](bnnsnearestneighborsload%28______%29.md): Adds new sample data to a k-nearest neighbors object.
- [BNNSNearestNeighborsGetInfo(\_:\_:\_:\_:)](bnnsnearestneighborsgetinfo%28________%29.md): Calculates the sorted indices and Euclidean distances of the k-nearest neighbors to a specified sample data point.
- [BNNSDestroyNearestNeighbors(\_:)](bnnsdestroynearestneighbors%28__%29.md): Destroys a k-nearest neighbors object.

# BNNSNearestNeighbors (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A k-nearest neighbors object.

## Declaration

```objectivec
typedef void * BNNSNearestNeighbors;
```

## See Also

### K-nearest neighbors calculation

- [BNNSCreateNearestNeighbors](bnnscreatenearestneighbors%28__________%29.md): Returns a new k-nearest neighbors object.
- [BNNSNearestNeighborsLoad](bnnsnearestneighborsload%28______%29.md): Adds new sample data to a k-nearest neighbors object.
- [BNNSNearestNeighborsGetInfo](bnnsnearestneighborsgetinfo%28________%29.md): Calculates the sorted indices and Euclidean distances of the k-nearest neighbors to a specified sample data point.
- [BNNSDestroyNearestNeighbors](bnnsdestroynearestneighbors%28__%29.md): Destroys a k-nearest neighbors object.

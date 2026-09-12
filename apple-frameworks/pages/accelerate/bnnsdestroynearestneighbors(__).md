> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdestroynearestneighbors(_:)](https://developer.apple.com/documentation/accelerate/bnnsdestroynearestneighbors(_:))

# BNNSDestroyNearestNeighbors(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Destroys a k-nearest neighbors object.

## Declaration

```swift
func BNNSDestroyNearestNeighbors(_ knn: BNNSNearestNeighbors?)
```

## Parameters

- `knn`: The k-nearest neighbors object.

## See Also

### K-nearest neighbors calculation

- [BNNS.NearestNeighbors](bnns/nearestneighbors.md): A structure that calculates k-nearest neighbors.
- [BNNSNearestNeighbors](bnnsnearestneighbors.md): A k-nearest neighbors object.
- [BNNSCreateNearestNeighbors(\_:\_:\_:\_:\_:)](bnnscreatenearestneighbors%28__________%29.md): Returns a new k-nearest neighbors object.
- [BNNSNearestNeighborsLoad(\_:\_:\_:)](bnnsnearestneighborsload%28______%29.md): Adds new sample data to a k-nearest neighbors object.
- [BNNSNearestNeighborsGetInfo(\_:\_:\_:\_:)](bnnsnearestneighborsgetinfo%28________%29.md): Calculates the sorted indices and Euclidean distances of the k-nearest neighbors to a specified sample data point.

# BNNSDestroyNearestNeighbors (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Destroys a k-nearest neighbors object.

## Declaration

```objectivec
void BNNSDestroyNearestNeighbors(BNNSNearestNeighbors knn);
```

## Parameters

- `knn`: The k-nearest neighbors object.

## See Also

### K-nearest neighbors calculation

- [BNNSNearestNeighbors](bnnsnearestneighbors.md): A k-nearest neighbors object.
- [BNNSCreateNearestNeighbors](bnnscreatenearestneighbors%28__________%29.md): Returns a new k-nearest neighbors object.
- [BNNSNearestNeighborsLoad](bnnsnearestneighborsload%28______%29.md): Adds new sample data to a k-nearest neighbors object.
- [BNNSNearestNeighborsGetInfo](bnnsnearestneighborsgetinfo%28________%29.md): Calculates the sorted indices and Euclidean distances of the k-nearest neighbors to a specified sample data point.

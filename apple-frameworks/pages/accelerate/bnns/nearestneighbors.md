> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/nearestneighbors](https://developer.apple.com/documentation/accelerate/bnns/nearestneighbors)

# BNNS.NearestNeighbors

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A structure that calculates k-nearest neighbors.

## Declaration

```swift
struct NearestNeighbors
```

<a id="overview"></a>

## Overview

The following code generates eight 2D data points and loads them into a k-nearest neighbors object with a single call to the [append(samples:)](nearestneighbors/append%28samples_%29.md) function. The code then computes the four nearest neighbors, based on Euclidean distance, to the sample data point at index 7 of the samples data.

```swift
let samples: [Float] = [
    1, 2,   // 0
    7, 2,   // 1
    3, 4,   // 2
    8, 4,   // 3
    3, 7,   // 4
    7, 7,   // 5
    2, 8,   // 6
    2, 5    // 7
]
let samplesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: samples,
    shape: .matrixRowMajor(8, 2))

let maximumSampleCount = 8
let dimensionCount = 2
let nearestNeighborCount = 4

let knn = BNNS.NearestNeighbors(
    capacity: maximumSampleCount,
    dimensionCount: dimensionCount,
    neighborCount: nearestNeighborCount,
    dataType: .float)

knn.append(samples: samplesDescriptor)

let indices = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Int32.self,
    shape: .vector(nearestNeighborCount))
let distances = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Int32.self,
    shape: .vector(nearestNeighborCount))

knn.apply(index: 7,
     outputIndices: indices,
     outputDistances: distances)
```

On return, the `indices` array contains the values `[7, 2, 4, 6]` and the distances array contains the values `[0.0, 1.4142135, 2.236068, 3.0]`.

![A scatter plot showing the eight sample positions in the code listing. The sample positions at indices 6, 4, and 2 are linked by lines to the sample at index 7, with labels indicating the distance between the two samples.](https://developer.apple.com/images/com.apple.accelerate/media-4182669@2x.png)

## Topics

### Creating a k-nearest neighbors object

- [init(capacity:dimensionCount:neighborCount:dataType:)](nearestneighbors/init%28capacity_dimensioncount_neighborcount_datatype_%29.md): Returns a new k-nearest neighbors object.

### Appending data points to a k-nearest neighbors object

- [append(samples:)](nearestneighbors/append%28samples_%29.md): Adds new sample data to a k-nearest neighbors object.

### Calculating k-nearest neighbors

- [apply(index:outputIndices:outputDistances:)](nearestneighbors/apply%28index_outputindices_outputdistances_%29.md): Calculates the sorted indices and Euclidean distances of the k-nearest neighbors to a specified sample data point.

## See Also

### K-nearest neighbors calculation

- [BNNSNearestNeighbors](../bnnsnearestneighbors.md): A k-nearest neighbors object.
- [BNNSCreateNearestNeighbors(\_:\_:\_:\_:\_:)](../bnnscreatenearestneighbors%28__________%29.md): Returns a new k-nearest neighbors object.
- [BNNSNearestNeighborsLoad(\_:\_:\_:)](../bnnsnearestneighborsload%28______%29.md): Adds new sample data to a k-nearest neighbors object.
- [BNNSNearestNeighborsGetInfo(\_:\_:\_:\_:)](../bnnsnearestneighborsgetinfo%28________%29.md): Calculates the sorted indices and Euclidean distances of the k-nearest neighbors to a specified sample data point.
- [BNNSDestroyNearestNeighbors(\_:)](../bnnsdestroynearestneighbors%28__%29.md): Destroys a k-nearest neighbors object.

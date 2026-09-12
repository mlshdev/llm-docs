> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsnearestneighborsload(_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsnearestneighborsload(_:_:_:))

# BNNSNearestNeighborsLoad(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Adds new sample data to a k-nearest neighbors object.

## Declaration

```swift
func BNNSNearestNeighborsLoad(_ knn: BNNSNearestNeighbors?, _ n_new_samples: UInt32, _ data_ptr: UnsafeRawPointer) -> Int32
```

## Parameters

- `knn`: The k-nearest neighbors object.
- `n_new_samples`: The number of new samples.
- `data_ptr`: A pointer to the sample data. This must point to `n_new_samples * n_features` elements.

<a id="return-value"></a>

## Return Value

`0` when the load is successful; otherwise, a nonzero value.

<a id="Discussion"></a>

## Discussion

The following code generates eight 2D data points and loads them into a k-nearest neighbors object with a single call to the [BNNSNearestNeighborsLoad(\_:\_:\_:)](bnnsnearestneighborsload%28______%29.md) function. The code then computes the four nearest neighbors, based on Euclidean distance, to the sample data point at index 7 of the samples data.

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

let maximumSampleCount: UInt32 = 8
let dimensionCount: UInt32 = 2
let nearestNeighborCount: UInt32 = 4

let knn = BNNSCreateNearestNeighbors(
    maximumSampleCount,
    dimensionCount,
    nearestNeighborCount,
    BNNSDataType.float,
    nil)

defer {
    BNNSDestroyNearestNeighbors(knn)
}

BNNSNearestNeighborsLoad(
    knn,
    UInt32(samples.count) / dimensionCount,
    samples)

var indices = [Int32](repeating: 0,
                      count: Int(nearestNeighborCount))
var distances = [Float](repeating: 0,
                        count: Int(nearestNeighborCount))

let sampleDataPointIndex = 7
BNNSNearestNeighborsGetInfo(
    knn,
    Int32(sampleDataPointIndex),
    &indices,
    &distances)
```

On return, the `indices` array contains the values `[7, 2, 4, 6]` and the distances array contains the values `[0.0, 1.4142135, 2.236068, 3.0]`.

![A scatter plot showing the eight sample positions in the code listing. The sample positions at indices 6, 4, and 2 are linked by lines to the sample at index 7, with labels indicating the distance between the two samples.](https://developer.apple.com/images/com.apple.accelerate/media-4182667@2x.png)

## See Also

### K-nearest neighbors calculation

- [BNNS.NearestNeighbors](bnns/nearestneighbors.md): A structure that calculates k-nearest neighbors.
- [BNNSNearestNeighbors](bnnsnearestneighbors.md): A k-nearest neighbors object.
- [BNNSCreateNearestNeighbors(\_:\_:\_:\_:\_:)](bnnscreatenearestneighbors%28__________%29.md): Returns a new k-nearest neighbors object.
- [BNNSNearestNeighborsGetInfo(\_:\_:\_:\_:)](bnnsnearestneighborsgetinfo%28________%29.md): Calculates the sorted indices and Euclidean distances of the k-nearest neighbors to a specified sample data point.
- [BNNSDestroyNearestNeighbors(\_:)](bnnsdestroynearestneighbors%28__%29.md): Destroys a k-nearest neighbors object.

# BNNSNearestNeighborsLoad (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Adds new sample data to a k-nearest neighbors object.

## Declaration

```objectivec
int BNNSNearestNeighborsLoad(BNNSNearestNeighbors knn, const unsigned int n_new_samples, const void *data_ptr);
```

## Parameters

- `knn`: The k-nearest neighbors object.
- `n_new_samples`: The number of new samples.
- `data_ptr`: A pointer to the sample data. This must point to `n_new_samples * n_features` elements.

<a id="return-value"></a>

## Return Value

`0` when the load is successful; otherwise, a nonzero value.

<a id="Discussion"></a>

## Discussion

The following code generates eight 2D data points and loads them into a k-nearest neighbors object with a single call to the [BNNSNearestNeighborsLoad](bnnsnearestneighborsload%28______%29.md) function. The code then computes the four nearest neighbors, based on Euclidean distance, to the sample data point at index 7 of the samples data.

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

let maximumSampleCount: UInt32 = 8
let dimensionCount: UInt32 = 2
let nearestNeighborCount: UInt32 = 4

let knn = BNNSCreateNearestNeighbors(
    maximumSampleCount,
    dimensionCount,
    nearestNeighborCount,
    BNNSDataType.float,
    nil)

defer {
    BNNSDestroyNearestNeighbors(knn)
}

BNNSNearestNeighborsLoad(
    knn,
    UInt32(samples.count) / dimensionCount,
    samples)

var indices = [Int32](repeating: 0,
                      count: Int(nearestNeighborCount))
var distances = [Float](repeating: 0,
                        count: Int(nearestNeighborCount))

let sampleDataPointIndex = 7
BNNSNearestNeighborsGetInfo(
    knn,
    Int32(sampleDataPointIndex),
    &indices,
    &distances)
```

On return, the `indices` array contains the values `[7, 2, 4, 6]` and the distances array contains the values `[0.0, 1.4142135, 2.236068, 3.0]`.

![A scatter plot showing the eight sample positions in the code listing. The sample positions at indices 6, 4, and 2 are linked by lines to the sample at index 7, with labels indicating the distance between the two samples.](https://developer.apple.com/images/com.apple.accelerate/media-4182667@2x.png)

## See Also

### K-nearest neighbors calculation

- [BNNSNearestNeighbors](bnnsnearestneighbors.md): A k-nearest neighbors object.
- [BNNSCreateNearestNeighbors](bnnscreatenearestneighbors%28__________%29.md): Returns a new k-nearest neighbors object.
- [BNNSNearestNeighborsGetInfo](bnnsnearestneighborsgetinfo%28________%29.md): Calculates the sorted indices and Euclidean distances of the k-nearest neighbors to a specified sample data point.
- [BNNSDestroyNearestNeighbors](bnnsdestroynearestneighbors%28__%29.md): Destroys a k-nearest neighbors object.

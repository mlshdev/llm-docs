> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/init(concatenating:axis:datatype:)](https://developer.apple.com/documentation/coreml/mlmultiarray/init(concatenating:axis:datatype:))

# init(concatenating:axis:dataType:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Concatenate MLMultiArrays to form a new MLMultiArray.

## Declaration

```swift
convenience init(concatenating multiArrays: [MLMultiArray], axis: Int, dataType: MLMultiArrayDataType)
```

## Parameters

- `multiArrays`: Array of MLMultiArray instances to be concatenated.
- `axis`: Axis index with which the concatenation will performed. The value is wrapped by the dimension of the axis. For example, -1 is the last axis.
- `dataType`: The data type of the resultant MLMultiArray.

<a id="discussion"></a>

## Discussion

All the source MLMultiArrays must have a same shape except the specified axis. The resultant MLMultiArray has the same shape as inputs except this axis, which dimension will be the sum of all the input dimensions of the axis.

For example,

```swift
// Swift
let A = try MLMultiArray(shape: [2, 3], dataType: .int32)
let B = try MLMultiArray(shape: [2, 2], dataType: .int32)
let C = MLMultiArray(concatenating: [A, B], axis: 1, dataType: .int32)
assert(C.shape == [2, 5])
```

```objc
// Obj-C
MLMultiArray *A = [[MLMultiArray alloc] initWithShape:@[@2, @3] dataType:MLMultiArrayDataTypeInt32 error:NULL];
MLMultiArray *B = [[MLMultiArray alloc] initWithShape:@[@2, @2] dataType:MLMultiArrayDataTypeInt32 error:NULL];
MLMultiArray *C = [MLMultiArray multiArrayByConcatenatingMultiArrays:@[A, B] alongAxis:1 dataType:MLMultiArrayDataTypeInt32];
assert(C.shape == @[@2, @5])
```

Numeric data will be up or down casted as needed.

The method raises NSInvalidArgumentException if the shapes of input multi arrays are not compatible for concatenation.

# multiArrayByConcatenatingMultiArrays:alongAxis:dataType: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Concatenate MLMultiArrays to form a new MLMultiArray.

## Declaration

```objectivec
+ (instancetype) multiArrayByConcatenatingMultiArrays:(NSArray<MLMultiArray *> *) multiArrays alongAxis:(NSInteger) axis dataType:(MLMultiArrayDataType) dataType;
```

## Parameters

- `multiArrays`: Array of MLMultiArray instances to be concatenated.
- `axis`: Axis index with which the concatenation will performed. The value is wrapped by the dimension of the axis. For example, -1 is the last axis.
- `dataType`: The data type of the resultant MLMultiArray.

<a id="discussion"></a>

## Discussion

All the source MLMultiArrays must have a same shape except the specified axis. The resultant MLMultiArray has the same shape as inputs except this axis, which dimension will be the sum of all the input dimensions of the axis.

For example,

```swift
// Swift
let A = try MLMultiArray(shape: [2, 3], dataType: .int32)
let B = try MLMultiArray(shape: [2, 2], dataType: .int32)
let C = MLMultiArray(concatenating: [A, B], axis: 1, dataType: .int32)
assert(C.shape == [2, 5])
```

```objc
// Obj-C
MLMultiArray *A = [[MLMultiArray alloc] initWithShape:@[@2, @3] dataType:MLMultiArrayDataTypeInt32 error:NULL];
MLMultiArray *B = [[MLMultiArray alloc] initWithShape:@[@2, @2] dataType:MLMultiArrayDataTypeInt32 error:NULL];
MLMultiArray *C = [MLMultiArray multiArrayByConcatenatingMultiArrays:@[A, B] alongAxis:1 dataType:MLMultiArrayDataTypeInt32];
assert(C.shape == @[@2, @5])
```

Numeric data will be up or down casted as needed.

The method raises NSInvalidArgumentException if the shapes of input multi arrays are not compatible for concatenation.

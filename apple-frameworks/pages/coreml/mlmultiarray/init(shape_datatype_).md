> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/init(shape:datatype:)](https://developer.apple.com/documentation/coreml/mlmultiarray/init(shape:datatype:))

# init(shape:dataType:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a multidimensional array with a shape and type.

## Declaration

```swift
init(shape: [NSNumber], dataType: MLMultiArrayDataType) throws
```

## Parameters

- `shape`: An integer array that has an element for each dimension in a multiarray that represents its length.
- `dataType`: An element type defined by [MLMultiArrayDataType](../mlmultiarraydatatype.md).

<a id="Discussion"></a>

## Discussion

This method allocates a contiguous region of memory for the multiarray’s shape. You must set the contents of memory. The multiarray frees the memory in its deinitializer (Swift) or [dealloc](../../objectivec/nsobject-swift.class/dealloc.md) method (Objective-C).

The following code creates a 3 x 3 multiarray and sets its contents to the value 3.14159.

**Swift**

```swift
// Create a 2D multiarray with dimension 3 x 3.
let shape3x3 = [3, 3] as [NSNumber]

guard let multiarray3x3 = try? MLMultiArray(shape: shape3x3, dataType: .float) else {
    // Handle the error.
    return
}

print("Before: \(multiarray3x3)")

// Initialize the multiarray.
for xCoordinate in 0..<3 {
    for yCoordinate in 0..<3 {
        let key = [xCoordinate, yCoordinate] as [NSNumber]
        multiarray3x3[key] = 3.141_59
    }
}

print("After: \(multiarray3x3)")

```

**Objective-C**

```objc
NSError *error = nil;

// Create a 2D multiarray with dimension 3 x 3.
NSArray<NSNumber *> *shape3x3 = @[@3, @3];

MLMultiArray *multiarray3x3 = [[MLMultiArray alloc] initWithShape:shape3x3 dataType:MLMultiArrayDataTypeFloat error: &error];
if (error != nil) {
    // Handle the error.
    return;
}

NSLog(@"Before: %@\n", multiarray3x3);

// Initialize the multiarray.
for (int x = 0; x < 3; x++) {
    for (int y = 0; y < 3; y++) {
        NSNumber *xSubscript = [NSNumber numberWithInt:x];
        NSNumber *ySubscript = [NSNumber numberWithInt:y];

        [multiarray3x3 setObject:@3.14159
               forKeyedSubscript:@[xSubscript, ySubscript]];
    }
}

NSLog(@"After: %@\n", multiarray3x3);

```

## See Also

### Creating a multiarray

- [init(\_:)](init%28__%29.md): An MLMultiArray constructed with the FixedWidthInteger elements of the collection converted to Int32.
- [init(shape:dataType:strides:)](init%28shape_datatype_strides_%29.md): Creates the object with specified strides.
- [init(dataPointer:shape:dataType:strides:deallocator:)](init%28datapointer_shape_datatype_strides_deallocator_%29.md): Creates a multiarray from a data pointer.
- [init(byConcatenatingMultiArrays:alongAxis:dataType:)](init%28byconcatenatingmultiarrays_alongaxis_datatype_%29.md): Merges an array of multiarrays into one multiarray along an axis.
- [init(pixelBuffer:shape:)](init%28pixelbuffer_shape_%29.md): Creates a multiarray sharing the surface of a pixel buffer.
- [MLMultiArrayDataType](../mlmultiarraydatatype.md): Constants that define the underlying element types a multiarray can store.

# initWithShape:dataType:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a multidimensional array with a shape and type.

## Declaration

```objectivec
- (instancetype) initWithShape:(NSArray<NSNumber *> *) shape dataType:(MLMultiArrayDataType) dataType error:(NSError **) error;
```

## Parameters

- `shape`: An integer array that has an element for each dimension in a multiarray that represents its length.
- `dataType`: An element type defined by [MLMultiArrayDataType](../mlmultiarraydatatype.md).
- `error`: On return in Objective-C, if an error occurs, a pointer to an error information instance; otherwise `nil`.

<a id="Discussion"></a>

## Discussion

This method allocates a contiguous region of memory for the multiarray’s shape. You must set the contents of memory. The multiarray frees the memory in its deinitializer (Swift) or [dealloc](../../objectivec/nsobject-swift.class/dealloc.md) method (Objective-C).

The following code creates a 3 x 3 multiarray and sets its contents to the value 3.14159.

**Swift**

```swift
// Create a 2D multiarray with dimension 3 x 3.
let shape3x3 = [3, 3] as [NSNumber]

guard let multiarray3x3 = try? MLMultiArray(shape: shape3x3, dataType: .float) else {
    // Handle the error.
    return
}

print("Before: \(multiarray3x3)")

// Initialize the multiarray.
for xCoordinate in 0..<3 {
    for yCoordinate in 0..<3 {
        let key = [xCoordinate, yCoordinate] as [NSNumber]
        multiarray3x3[key] = 3.141_59
    }
}

print("After: \(multiarray3x3)")

```

**Objective-C**

```objc
NSError *error = nil;

// Create a 2D multiarray with dimension 3 x 3.
NSArray<NSNumber *> *shape3x3 = @[@3, @3];

MLMultiArray *multiarray3x3 = [[MLMultiArray alloc] initWithShape:shape3x3 dataType:MLMultiArrayDataTypeFloat error: &error];
if (error != nil) {
    // Handle the error.
    return;
}

NSLog(@"Before: %@\n", multiarray3x3);

// Initialize the multiarray.
for (int x = 0; x < 3; x++) {
    for (int y = 0; y < 3; y++) {
        NSNumber *xSubscript = [NSNumber numberWithInt:x];
        NSNumber *ySubscript = [NSNumber numberWithInt:y];

        [multiarray3x3 setObject:@3.14159
               forKeyedSubscript:@[xSubscript, ySubscript]];
    }
}

NSLog(@"After: %@\n", multiarray3x3);

```

## See Also

### Creating a multiarray

- [initWithShape:dataType:strides:](initwithshape_datatype_strides_.md): Creates the object with specified strides.
- [initWithDataPointer:shape:dataType:strides:deallocator:error:](init%28datapointer_shape_datatype_strides_deallocator_%29.md): Creates a multiarray from a data pointer.
- [initWithPixelBuffer:shape:](init%28pixelbuffer_shape_%29.md): Creates a multiarray sharing the surface of a pixel buffer.
- [MLMultiArrayDataType](../mlmultiarraydatatype.md): Constants that define the underlying element types a multiarray can store.

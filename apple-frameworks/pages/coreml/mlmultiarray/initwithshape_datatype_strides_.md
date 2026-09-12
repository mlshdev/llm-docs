> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/initwithshape:datatype:strides:](https://developer.apple.com/documentation/coreml/mlmultiarray/initwithshape:datatype:strides:)

# initWithShape:dataType:strides:

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates the object with specified strides.

## Declaration

```objectivec
- (instancetype) initWithShape:(NSArray<NSNumber *> *) shape dataType:(MLMultiArrayDataType) dataType strides:(NSArray<NSNumber *> *) strides;
```

## Parameters

- `shape`: The shape
- `dataType`: The data type
- `strides`: The strides.

<a id="discussion"></a>

## Discussion

The contents of the object are left uninitialized; the client must initialize it.

```swift
let shape = [2, 3];
let strides = [4, 1]

let multiArray = MLMultiArray(shape: shape, dataType: .float32, strides: strides)
XCTAssertEqual(multiArray.shape, shape as [NSNumber])
XCTAssertEqual(multiArray.strides, strides as [NSNumber])
```

```objc
NSArray<NSNumber *> *shape = @[@2, @3];
NSArray<NSNumber *> *strides = @[@4, @1];

MLMultiArray *multiArray = [[MLMultiArray alloc] initWithShape:shape
                                                      dataType:MLMultiArrayDataTypeFloat32
                                                       strides:strides];
XCTAssertEqualObjects(multiArray.shape, shape);
XCTAssertEqualObjects(multiArray.strides, strides);
```

## See Also

### Creating a multiarray

- [initWithShape:dataType:error:](init%28shape_datatype_%29.md): Creates a multidimensional array with a shape and type.
- [initWithDataPointer:shape:dataType:strides:deallocator:error:](init%28datapointer_shape_datatype_strides_deallocator_%29.md): Creates a multiarray from a data pointer.
- [initWithPixelBuffer:shape:](init%28pixelbuffer_shape_%29.md): Creates a multiarray sharing the surface of a pixel buffer.
- [MLMultiArrayDataType](../mlmultiarraydatatype.md): Constants that define the underlying element types a multiarray can store.

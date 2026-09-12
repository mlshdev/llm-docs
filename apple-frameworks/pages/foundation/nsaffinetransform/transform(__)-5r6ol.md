> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsaffinetransform/transform(_:)-5r6ol](https://developer.apple.com/documentation/foundation/nsaffinetransform/transform(_:)-5r6ol)

# transform(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Applies the receiver’s transform to the specified size and returns the results.

## Declaration

```swift
func transform(_ aSize: NSSize) -> NSSize
```

## Parameters

- `aSize`: The size data to which you want to apply the matrix.

<a id="return-value"></a>

## Return Value

The resulting size after applying the receiver’s transformations.

<a id="Discussion"></a>

## Discussion

This method applies the current rotation and scaling factors to `aSize`; it does not apply translation factors. You can think of this method as transforming a vector whose origin is (0, 0) and whose end point is specified by the value in `aSize`. After the rotation and scaling factors are applied, this method effectively returns the end point of the new vector.

This method is useful for transforming delta or distance values when you need to take scaling and rotation factors into account.

## See Also

### Transforming Data and Objects

- [transform(\_:)](transform%28__%29-41p16.md): Applies the receiver’s transform to the specified point and returns the result.
- [transform(\_:)](transform%28__%29-6z1xo.md): Creates and returns a new Bézier path object with each point in the given path transformed by the receiver.

# transformSize: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Applies the receiver’s transform to the specified size and returns the results.

## Declaration

```objectivec
- (NSSize) transformSize:(NSSize) aSize;
```

## Parameters

- `aSize`: The size data to which you want to apply the matrix.

<a id="return-value"></a>

## Return Value

The resulting size after applying the receiver’s transformations.

<a id="Discussion"></a>

## Discussion

This method applies the current rotation and scaling factors to `aSize`; it does not apply translation factors. You can think of this method as transforming a vector whose origin is (0, 0) and whose end point is specified by the value in `aSize`. After the rotation and scaling factors are applied, this method effectively returns the end point of the new vector.

This method is useful for transforming delta or distance values when you need to take scaling and rotation factors into account.

## See Also

### Transforming Data and Objects

- [transformPoint:](transform%28__%29-41p16.md): Applies the receiver’s transform to the specified point and returns the result.
- [transformBezierPath:](transform%28__%29-6z1xo.md): Creates and returns a new Bézier path object with each point in the given path transformed by the receiver.

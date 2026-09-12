> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsaffinetransform/transform(_:)-41p16](https://developer.apple.com/documentation/foundation/nsaffinetransform/transform(_:)-41p16)

# transform(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Applies the receiver’s transform to the specified point and returns the result.

## Declaration

```swift
func transform(_ aPoint: NSPoint) -> NSPoint
```

## Parameters

- `aPoint`: The point in the current coordinate system to which you want to apply the matrix.

<a id="return-value"></a>

## Return Value

The resulting point after applying the receiver’s transformations.

## See Also

### Transforming Data and Objects

- [transform(\_:)](transform%28__%29-5r6ol.md): Applies the receiver’s transform to the specified size and returns the results.
- [transform(\_:)](transform%28__%29-6z1xo.md): Creates and returns a new Bézier path object with each point in the given path transformed by the receiver.

# transformPoint: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Applies the receiver’s transform to the specified point and returns the result.

## Declaration

```objectivec
- (NSPoint) transformPoint:(NSPoint) aPoint;
```

## Parameters

- `aPoint`: The point in the current coordinate system to which you want to apply the matrix.

<a id="return-value"></a>

## Return Value

The resulting point after applying the receiver’s transformations.

## See Also

### Transforming Data and Objects

- [transformSize:](transform%28__%29-5r6ol.md): Applies the receiver’s transform to the specified size and returns the results.
- [transformBezierPath:](transform%28__%29-6z1xo.md): Creates and returns a new Bézier path object with each point in the given path transformed by the receiver.

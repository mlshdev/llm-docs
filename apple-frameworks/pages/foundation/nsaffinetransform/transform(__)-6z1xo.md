> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsaffinetransform/transform(_:)-6z1xo](https://developer.apple.com/documentation/foundation/nsaffinetransform/transform(_:)-6z1xo)

# transform(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Creates and returns a new Bézier path object with each point in the given path transformed by the receiver.

## Declaration

```swift
func transform(_ path: NSBezierPath) -> NSBezierPath
```

## Parameters

- `path`: An object representing the bezier path to be used in the transformation.

<a id="Discussion"></a>

## Discussion

The original `NSBezierPath` object is not modified.

## See Also

### Transforming Data and Objects

- [transform(\_:)](transform%28__%29-41p16.md): Applies the receiver’s transform to the specified point and returns the result.
- [transform(\_:)](transform%28__%29-5r6ol.md): Applies the receiver’s transform to the specified size and returns the results.

# transformBezierPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Creates and returns a new Bézier path object with each point in the given path transformed by the receiver.

## Declaration

```objectivec
- (NSBezierPath *) transformBezierPath:(NSBezierPath *) path;
```

## Parameters

- `path`: An object representing the bezier path to be used in the transformation.

<a id="Discussion"></a>

## Discussion

The original `NSBezierPath` object is not modified.

## See Also

### Transforming Data and Objects

- [transformPoint:](transform%28__%29-41p16.md): Applies the receiver’s transform to the specified point and returns the result.
- [transformSize:](transform%28__%29-5r6ol.md): Applies the receiver’s transform to the specified size and returns the results.

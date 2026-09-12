> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsaffinetransform/concat()](https://developer.apple.com/documentation/foundation/nsaffinetransform/concat())

# concat() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Appends the receiver’s matrix to the current transformation matrix stored in the current graphics context, replacing the current transformation matrix with the result.

## Declaration

```swift
func concat()
```

<a id="Discussion"></a>

## Discussion

Concatenation is performed by matrix multiplication—see Manipulating Transform Values.

If this method is invoked from within an `NSView`[draw(\_:)](https://developer.apple.com/documentation/appkit/nsview/draw%28_:%29) method, then the current transformation matrix is an accumulation of the screen, window, and any superview’s transformation matrices. Invoking this method defines a new user coordinate system whose coordinates are mapped into the former coordinate system according to the receiver’s transformation matrix. To undo the concatenation, you must invert the receiver’s matrix and invoke this method again.

## See Also

### Related Documentation

- [invert()](invert%28%29.md): Replaces the receiver’s matrix with its inverse matrix.

### Setting and Building the Current Transformation Matrix

- [set()](set%28%29.md): Sets the current transformation matrix to the receiver’s transformation matrix.

# concat (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Appends the receiver’s matrix to the current transformation matrix stored in the current graphics context, replacing the current transformation matrix with the result.

## Declaration

```objectivec
- (void) concat;
```

<a id="Discussion"></a>

## Discussion

Concatenation is performed by matrix multiplication—see Manipulating Transform Values.

If this method is invoked from within an `NSView`[drawRect:](https://developer.apple.com/documentation/appkit/nsview/draw%28_:%29) method, then the current transformation matrix is an accumulation of the screen, window, and any superview’s transformation matrices. Invoking this method defines a new user coordinate system whose coordinates are mapped into the former coordinate system according to the receiver’s transformation matrix. To undo the concatenation, you must invert the receiver’s matrix and invoke this method again.

## See Also

### Related Documentation

- [invert](invert%28%29.md): Replaces the receiver’s matrix with its inverse matrix.

### Setting and Building the Current Transformation Matrix

- [set](set%28%29.md): Sets the current transformation matrix to the receiver’s transformation matrix.

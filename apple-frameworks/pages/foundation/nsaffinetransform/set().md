> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsaffinetransform/set()](https://developer.apple.com/documentation/foundation/nsaffinetransform/set())

# set() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Sets the current transformation matrix to the receiver’s transformation matrix.

## Declaration

```swift
func set()
```

<a id="Discussion"></a>

## Discussion

The current transformation is stored in the current graphics context and is applied to subsequent drawing operations. You should use this method sparingly because it removes the existing transformation matrix, which is an accumulation of transformation matrices for the screen, window, and any superviews. Instead use the [concat()](concat%28%29.md) method to add this transformation matrix to the current transformation matrix.

## See Also

### Setting and Building the Current Transformation Matrix

- [concat()](concat%28%29.md): Appends the receiver’s matrix to the current transformation matrix stored in the current graphics context, replacing the current transformation matrix with the result.

# set (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Sets the current transformation matrix to the receiver’s transformation matrix.

## Declaration

```objectivec
- (void) set;
```

<a id="Discussion"></a>

## Discussion

The current transformation is stored in the current graphics context and is applied to subsequent drawing operations. You should use this method sparingly because it removes the existing transformation matrix, which is an accumulation of transformation matrices for the screen, window, and any superviews. Instead use the [concat](concat%28%29.md) method to add this transformation matrix to the current transformation matrix.

## See Also

### Setting and Building the Current Transformation Matrix

- [concat](concat%28%29.md): Appends the receiver’s matrix to the current transformation matrix stored in the current graphics context, replacing the current transformation matrix with the result.

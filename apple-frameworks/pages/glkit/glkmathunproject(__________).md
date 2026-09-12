> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmathunproject(_:_:_:_:_:)](https://developer.apple.com/documentation/glkit/glkmathunproject(_:_:_:_:_:))

# GLKMathUnproject(\_:\_:\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Projects a point in view space into object space.

## Declaration

```swift
func GLKMathUnproject(_ window: GLKVector3, _ model: GLKMatrix4, _ projection: GLKMatrix4, _ viewport: UnsafeMutablePointer<Int32>, _ success: UnsafeMutablePointer<Bool>?) -> GLKVector3
```

## Parameters

- `window`: The point in window coordinates.
- `model`: A modelview transformation matrix.
- `projection`: A projection matrix.
- `viewport`: A pointer to an array of four integer values. The first pair of values represent the window coordinates of the viewport’s bottom left corner. The second pair of values represent the width and height of the view port.
- `success`: Upon return, contains [true](https://developer.apple.com/documentation/swift/true) if the function completed successfully, otherwise it contains [false](https://developer.apple.com/documentation/swift/false). Pass `NULL` if you do not want error information.

<a id="return-value"></a>

## Return Value

The projected point in object space.

## See Also

### Projecting Vectors

- [GLKMathProject(\_:\_:\_:\_:)](glkmathproject%28________%29.md): Projects a point in object space into the window coordinate system.

# GLKMathUnproject (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Projects a point in view space into object space.

## Declaration

```objectivec
GLKVector3 GLKMathUnproject(GLKVector3 window, GLKMatrix4 model, GLKMatrix4 projection, int *viewport, bool *success);
```

## Parameters

- `window`: The point in window coordinates.
- `model`: A modelview transformation matrix.
- `projection`: A projection matrix.
- `viewport`: A pointer to an array of four integer values. The first pair of values represent the window coordinates of the viewport’s bottom left corner. The second pair of values represent the width and height of the view port.
- `success`: Upon return, contains [true](https://developer.apple.com/documentation/swift/true) if the function completed successfully, otherwise it contains [false](https://developer.apple.com/documentation/swift/false). Pass `NULL` if you do not want error information.

<a id="return-value"></a>

## Return Value

The projected point in object space.

## See Also

### Projecting Vectors

- [GLKMathProject](glkmathproject%28________%29.md): Projects a point in object space into the window coordinate system.

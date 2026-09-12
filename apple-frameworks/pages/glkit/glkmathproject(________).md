> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmathproject(_:_:_:_:)](https://developer.apple.com/documentation/glkit/glkmathproject(_:_:_:_:))

# GLKMathProject(\_:\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Projects a point in object space into the window coordinate system.

## Declaration

```swift
func GLKMathProject(_ object: GLKVector3, _ model: GLKMatrix4, _ projection: GLKMatrix4, _ viewport: UnsafeMutablePointer<Int32>) -> GLKVector3
```

## Parameters

- `object`: The point in object space.
- `model`: A modelview transformation matrix.
- `projection`: A projection matrix.
- `viewport`: A pointer to an array of four integer values. The first pair of values represent the window coordinates of the viewport’s bottom left corner. The second pair of values represent the width and height of the view port.

<a id="return-value"></a>

## Return Value

The projected point in window coordinates.

## See Also

### Projecting Vectors

- [GLKMathUnproject(\_:\_:\_:\_:\_:)](glkmathunproject%28__________%29.md): Projects a point in view space into object space.

# GLKMathProject (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Projects a point in object space into the window coordinate system.

## Declaration

```objectivec
GLKVector3 GLKMathProject(GLKVector3 object, GLKMatrix4 model, GLKMatrix4 projection, int *viewport);
```

## Parameters

- `object`: The point in object space.
- `model`: A modelview transformation matrix.
- `projection`: A projection matrix.
- `viewport`: A pointer to an array of four integer values. The first pair of values represent the window coordinates of the viewport’s bottom left corner. The second pair of values represent the width and height of the view port.

<a id="return-value"></a>

## Return Value

The projected point in window coordinates.

## See Also

### Projecting Vectors

- [GLKMathUnproject](glkmathunproject%28__________%29.md): Projects a point in view space into object space.

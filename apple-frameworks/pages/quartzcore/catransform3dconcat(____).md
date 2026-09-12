> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransform3dconcat(_:_:)](https://developer.apple.com/documentation/quartzcore/catransform3dconcat(_:_:))

# CATransform3DConcat(\_:\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Concatenates `b` to `a` and returns the result: `t = a * b`.

## Declaration

```swift
func CATransform3DConcat(_ a: CATransform3D, _ b: CATransform3D) -> CATransform3D
```

## See Also

### Chaining Transforms

- [CATransform3DTranslate(\_:\_:\_:\_:)](catransform3dtranslate%28________%29.md): Translates `t` by `(tx, ty, tz)` and returns the result: `t` `= translate(tx, ty, tz) * t`.
- [CATransform3DScale(\_:\_:\_:\_:)](catransform3dscale%28________%29.md): Scales `t` by `(sx, sy, sz)` and returns the result: `t = scale(sx, sy, sz) * t`.
- [CATransform3DRotate(\_:\_:\_:\_:\_:)](catransform3drotate%28__________%29.md): Rotates `t` by `angle` radians about the vector `(x, y, z)` and returns the result.

# CATransform3DConcat (Objective-C)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Concatenates `b` to `a` and returns the result: `t = a * b`.

## Declaration

```objectivec
extern CATransform3D CATransform3DConcat(CATransform3D a, CATransform3D b);
```

## See Also

### Chaining Transforms

- [CATransform3DTranslate](catransform3dtranslate%28________%29.md): Translates `t` by `(tx, ty, tz)` and returns the result: `t` `= translate(tx, ty, tz) * t`.
- [CATransform3DScale](catransform3dscale%28________%29.md): Scales `t` by `(sx, sy, sz)` and returns the result: `t = scale(sx, sy, sz) * t`.
- [CATransform3DRotate](catransform3drotate%28__________%29.md): Rotates `t` by `angle` radians about the vector `(x, y, z)` and returns the result.

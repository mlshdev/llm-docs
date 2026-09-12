> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransform3drotate(_:_:_:_:_:)](https://developer.apple.com/documentation/quartzcore/catransform3drotate(_:_:_:_:_:))

# CATransform3DRotate(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Rotates `t` by `angle` radians about the vector `(x, y, z)` and returns the result.

## Declaration

```swift
func CATransform3DRotate(_ t: CATransform3D, _ angle: CGFloat, _ x: CGFloat, _ y: CGFloat, _ z: CGFloat) -> CATransform3D
```

<a id="Discussion"></a>

## Discussion

If the vector has zero length, the behavior is undefined: `t` = `rotation(angle, x, y, z) * t`.

## See Also

### Chaining Transforms

- [CATransform3DConcat(\_:\_:)](catransform3dconcat%28____%29.md): Concatenates `b` to `a` and returns the result: `t = a * b`.
- [CATransform3DTranslate(\_:\_:\_:\_:)](catransform3dtranslate%28________%29.md): Translates `t` by `(tx, ty, tz)` and returns the result: `t` `= translate(tx, ty, tz) * t`.
- [CATransform3DScale(\_:\_:\_:\_:)](catransform3dscale%28________%29.md): Scales `t` by `(sx, sy, sz)` and returns the result: `t = scale(sx, sy, sz) * t`.

# CATransform3DRotate (Objective-C)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Rotates `t` by `angle` radians about the vector `(x, y, z)` and returns the result.

## Declaration

```objectivec
extern CATransform3D CATransform3DRotate(CATransform3D t, CGFloat angle, CGFloat x, CGFloat y, CGFloat z);
```

<a id="Discussion"></a>

## Discussion

If the vector has zero length, the behavior is undefined: `t` = `rotation(angle, x, y, z) * t`.

## See Also

### Chaining Transforms

- [CATransform3DConcat](catransform3dconcat%28____%29.md): Concatenates `b` to `a` and returns the result: `t = a * b`.
- [CATransform3DTranslate](catransform3dtranslate%28________%29.md): Translates `t` by `(tx, ty, tz)` and returns the result: `t` `= translate(tx, ty, tz) * t`.
- [CATransform3DScale](catransform3dscale%28________%29.md): Scales `t` by `(sx, sy, sz)` and returns the result: `t = scale(sx, sy, sz) * t`.

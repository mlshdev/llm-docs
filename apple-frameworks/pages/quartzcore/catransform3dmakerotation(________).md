> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransform3dmakerotation(_:_:_:_:)](https://developer.apple.com/documentation/quartzcore/catransform3dmakerotation(_:_:_:_:))

# CATransform3DMakeRotation(\_:\_:\_:\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a transform that rotates by `angle` radians about the vector `(x, y, z)`.

## Declaration

```swift
func CATransform3DMakeRotation(_ angle: CGFloat, _ x: CGFloat, _ y: CGFloat, _ z: CGFloat) -> CATransform3D
```

<a id="Discussion"></a>

## Discussion

If the vector has length zero, this function returns the identity transform.

## See Also

### Creating Transforms

- [CATransform3DMakeTranslation(\_:\_:\_:)](catransform3dmaketranslation%28______%29.md): Returns a transform that translates by `(tx, ty, tz)`.
- [CATransform3DMakeScale(\_:\_:\_:)](catransform3dmakescale%28______%29.md): Returns a transform that scales by `(sx, sy, sz)`.

# CATransform3DMakeRotation (Objective-C)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a transform that rotates by `angle` radians about the vector `(x, y, z)`.

## Declaration

```objectivec
extern CATransform3D CATransform3DMakeRotation(CGFloat angle, CGFloat x, CGFloat y, CGFloat z);
```

<a id="Discussion"></a>

## Discussion

If the vector has length zero, this function returns the identity transform.

## See Also

### Creating Transforms

- [CATransform3DMakeTranslation](catransform3dmaketranslation%28______%29.md): Returns a transform that translates by `(tx, ty, tz)`.
- [CATransform3DMakeScale](catransform3dmakescale%28______%29.md): Returns a transform that scales by `(sx, sy, sz)`.

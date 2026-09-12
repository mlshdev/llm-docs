> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransform3dmakescale(_:_:_:)](https://developer.apple.com/documentation/quartzcore/catransform3dmakescale(_:_:_:))

# CATransform3DMakeScale(\_:\_:\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a transform that scales by `(sx, sy, sz)`.

## Declaration

```swift
func CATransform3DMakeScale(_ sx: CGFloat, _ sy: CGFloat, _ sz: CGFloat) -> CATransform3D
```

<a id="Discussion"></a>

## Discussion

`t = [sx 0 0 0; 0 sy 0 0; 0 0 sz 0; 0 0 0 1].`

## See Also

### Creating Transforms

- [CATransform3DMakeTranslation(\_:\_:\_:)](catransform3dmaketranslation%28______%29.md): Returns a transform that translates by `(tx, ty, tz)`.
- [CATransform3DMakeRotation(\_:\_:\_:\_:)](catransform3dmakerotation%28________%29.md): Returns a transform that rotates by `angle` radians about the vector `(x, y, z)`.

# CATransform3DMakeScale (Objective-C)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a transform that scales by `(sx, sy, sz)`.

## Declaration

```objectivec
extern CATransform3D CATransform3DMakeScale(CGFloat sx, CGFloat sy, CGFloat sz);
```

<a id="Discussion"></a>

## Discussion

`t = [sx 0 0 0; 0 sy 0 0; 0 0 sz 0; 0 0 0 1].`

## See Also

### Creating Transforms

- [CATransform3DMakeTranslation](catransform3dmaketranslation%28______%29.md): Returns a transform that translates by `(tx, ty, tz)`.
- [CATransform3DMakeRotation](catransform3dmakerotation%28________%29.md): Returns a transform that rotates by `angle` radians about the vector `(x, y, z)`.

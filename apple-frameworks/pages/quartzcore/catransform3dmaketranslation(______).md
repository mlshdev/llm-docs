> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransform3dmaketranslation(_:_:_:)](https://developer.apple.com/documentation/quartzcore/catransform3dmaketranslation(_:_:_:))

# CATransform3DMakeTranslation(\_:\_:\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a transform that translates by `(tx, ty, tz)`.

## Declaration

```swift
func CATransform3DMakeTranslation(_ tx: CGFloat, _ ty: CGFloat, _ tz: CGFloat) -> CATransform3D
```

<a id="Discussion"></a>

## Discussion

`t =  [1 0 0 0; 0 1 0 0; 0 0 1 0; tx ty tz 1].`

## See Also

### Creating Transforms

- [CATransform3DMakeScale(\_:\_:\_:)](catransform3dmakescale%28______%29.md): Returns a transform that scales by `(sx, sy, sz)`.
- [CATransform3DMakeRotation(\_:\_:\_:\_:)](catransform3dmakerotation%28________%29.md): Returns a transform that rotates by `angle` radians about the vector `(x, y, z)`.

# CATransform3DMakeTranslation (Objective-C)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a transform that translates by `(tx, ty, tz)`.

## Declaration

```objectivec
extern CATransform3D CATransform3DMakeTranslation(CGFloat tx, CGFloat ty, CGFloat tz);
```

<a id="Discussion"></a>

## Discussion

`t =  [1 0 0 0; 0 1 0 0; 0 0 1 0; tx ty tz 1].`

## See Also

### Creating Transforms

- [CATransform3DMakeScale](catransform3dmakescale%28______%29.md): Returns a transform that scales by `(sx, sy, sz)`.
- [CATransform3DMakeRotation](catransform3dmakerotation%28________%29.md): Returns a transform that rotates by `angle` radians about the vector `(x, y, z)`.

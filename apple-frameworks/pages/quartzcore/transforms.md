> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/transforms](https://developer.apple.com/documentation/quartzcore/transforms)

# Transforms (Swift)

**Framework:** Core Animation  
**Kind:** API Collection

Define transform matrices to apply affine transformations to layers in Core Animation.

## Topics

### Creating Transforms

- [CATransform3DMakeTranslation(\_:\_:\_:)](catransform3dmaketranslation%28______%29.md): Returns a transform that translates by `(tx, ty, tz)`.
- [CATransform3DMakeScale(\_:\_:\_:)](catransform3dmakescale%28______%29.md): Returns a transform that scales by `(sx, sy, sz)`.
- [CATransform3DMakeRotation(\_:\_:\_:\_:)](catransform3dmakerotation%28________%29.md): Returns a transform that rotates by `angle` radians about the vector `(x, y, z)`.

### Chaining Transforms

- [CATransform3DConcat(\_:\_:)](catransform3dconcat%28____%29.md): Concatenates `b` to `a` and returns the result: `t = a * b`.
- [CATransform3DTranslate(\_:\_:\_:\_:)](catransform3dtranslate%28________%29.md): Translates `t` by `(tx, ty, tz)` and returns the result: `t` `= translate(tx, ty, tz) * t`.
- [CATransform3DScale(\_:\_:\_:\_:)](catransform3dscale%28________%29.md): Scales `t` by `(sx, sy, sz)` and returns the result: `t = scale(sx, sy, sz) * t`.
- [CATransform3DRotate(\_:\_:\_:\_:\_:)](catransform3drotate%28__________%29.md): Rotates `t` by `angle` radians about the vector `(x, y, z)` and returns the result.

### Inverting a Transform

- [CATransform3DInvert(\_:)](catransform3dinvert%28__%29.md): Inverts `t` and returns the result.

### Determining Transform Properties

- [CATransform3DIsAffine(\_:)](catransform3disaffine%28__%29.md): Returns a Boolean value that indicates whether a transform can be exactly represented by an affine transform.
- [CATransform3DIsIdentity(\_:)](catransform3disidentity%28__%29.md): Returns a Boolean value that indicates whether the transform is the identity transform.
- [CATransform3DEqualToTransform(\_:\_:)](catransform3dequaltotransform%28____%29.md): Returns a Boolean value that indicates whether the two transforms are exactly equal.

### Converting to and from Core Graphics Affine Transforms

- [CATransform3DMakeAffineTransform(\_:)](catransform3dmakeaffinetransform%28__%29.md): Returns a transform with the same effect as affine transform `m`.
- [CATransform3DGetAffineTransform(\_:)](catransform3dgetaffinetransform%28__%29.md): Returns the affine transform represented by `t`.

### Data Types

- [CATransform3D](catransform3d.md): The standard transform matrix used throughout Core Animation.

### Constants

- [CATransform3DIdentity](catransform3didentity.md): The identity transform: `[1 0 0 0; 0 1 0 0; 0 0 1 0; 0 0 0 1]`.

# Transforms (Objective-C)

**Framework:** Core Animation  
**Kind:** API Collection

Define transform matrices to apply affine transformations to layers in Core Animation.

## Topics

### Creating Transforms

- [CATransform3DMakeTranslation](catransform3dmaketranslation%28______%29.md): Returns a transform that translates by `(tx, ty, tz)`.
- [CATransform3DMakeScale](catransform3dmakescale%28______%29.md): Returns a transform that scales by `(sx, sy, sz)`.
- [CATransform3DMakeRotation](catransform3dmakerotation%28________%29.md): Returns a transform that rotates by `angle` radians about the vector `(x, y, z)`.

### Chaining Transforms

- [CATransform3DConcat](catransform3dconcat%28____%29.md): Concatenates `b` to `a` and returns the result: `t = a * b`.
- [CATransform3DTranslate](catransform3dtranslate%28________%29.md): Translates `t` by `(tx, ty, tz)` and returns the result: `t` `= translate(tx, ty, tz) * t`.
- [CATransform3DScale](catransform3dscale%28________%29.md): Scales `t` by `(sx, sy, sz)` and returns the result: `t = scale(sx, sy, sz) * t`.
- [CATransform3DRotate](catransform3drotate%28__________%29.md): Rotates `t` by `angle` radians about the vector `(x, y, z)` and returns the result.

### Inverting a Transform

- [CATransform3DInvert](catransform3dinvert%28__%29.md): Inverts `t` and returns the result.

### Determining Transform Properties

- [CATransform3DIsAffine](catransform3disaffine%28__%29.md): Returns a Boolean value that indicates whether a transform can be exactly represented by an affine transform.
- [CATransform3DIsIdentity](catransform3disidentity%28__%29.md): Returns a Boolean value that indicates whether the transform is the identity transform.
- [CATransform3DEqualToTransform](catransform3dequaltotransform%28____%29.md): Returns a Boolean value that indicates whether the two transforms are exactly equal.

### Converting to and from Core Graphics Affine Transforms

- [CATransform3DMakeAffineTransform](catransform3dmakeaffinetransform%28__%29.md): Returns a transform with the same effect as affine transform `m`.
- [CATransform3DGetAffineTransform](catransform3dgetaffinetransform%28__%29.md): Returns the affine transform represented by `t`.

### Data Types

- [CATransform3D](catransform3d.md): The standard transform matrix used throughout Core Animation.

### Constants

- [CATransform3DIdentity](catransform3didentity.md): The identity transform: `[1 0 0 0; 0 1 0 0; 0 0 1 0; 0 0 0 1]`.

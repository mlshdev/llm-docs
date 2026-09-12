> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgaffinetransform](https://developer.apple.com/documentation/coregraphics/cgaffinetransform)

# CGAffineTransform (Swift)

**Framework:** Core Graphics  
**Kind:** API Collection

An affine transformation matrix for use in drawing 2D graphics.

<a id="overview"></a>

## Overview

A transformation specifies how points in one coordinate system map to points in another coordinate system. An affine transformation is a special type of mapping that preserves parallel lines in a path but does not necessarily preserve lengths or angles. Scaling, rotation, and translation are the most commonly used manipulations supported by affine transforms, but skewing is also possible.

For more information on how to create, concatenate, and apply affine transformations, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).

You typically do not need to create an affine transform directly—[CGContext](cgcontext.md) describes functions that modify the current affine transform. If you don’t plan to reuse an affine transform, you may want to use [scaleBy(x:y:)](cgcontext/scaleby%28x_y_%29.md), [rotate(by:)](cgcontext/rotate%28by_%29.md), [translateBy(x:y:)](cgcontext/translateby%28x_y_%29.md), or [concatenate(\_:)](cgcontext/concatenate%28__%29.md).

## Topics

### Creating an Affine Transformation Matrix

- [CGAffineTransformMake(\_:\_:\_:\_:\_:\_:)](cgaffinetransformmake%28____________%29.md): Returns an affine transformation matrix constructed from values you provide.
- [CGAffineTransformMakeRotation(\_:)](cgaffinetransformmakerotation%28__%29.md): Returns an affine transformation matrix constructed from a rotation value you provide.
- [CGAffineTransformMakeScale(\_:\_:)](cgaffinetransformmakescale%28____%29.md): Returns an affine transformation matrix constructed from scaling values you provide.
- [CGAffineTransformMakeTranslation(\_:\_:)](cgaffinetransformmaketranslation%28____%29.md): Returns an affine transformation matrix constructed from translation values you provide.

### Modifying Affine Transformations

- [CGAffineTransformTranslate(\_:\_:\_:)](cgaffinetransformtranslate%28______%29.md): Returns an affine transformation matrix constructed by translating an existing affine transform.
- [CGAffineTransformScale(\_:\_:\_:)](cgaffinetransformscale%28______%29.md): Returns an affine transformation matrix constructed by scaling an existing affine transform.
- [CGAffineTransformRotate(\_:\_:)](cgaffinetransformrotate%28____%29.md): Returns an affine transformation matrix constructed by rotating an existing affine transform.
- [CGAffineTransformInvert(\_:)](cgaffinetransforminvert%28__%29.md): Returns an affine transformation matrix constructed by inverting an existing affine transform.
- [CGAffineTransformConcat(\_:\_:)](cgaffinetransformconcat%28____%29.md): Returns an affine transformation matrix constructed by combining two existing affine transforms.

### Applying Affine Transformations

- [CGPointApplyAffineTransform(\_:\_:)](cgpointapplyaffinetransform%28____%29.md): Returns the point resulting from an affine transformation of an existing point.
- [CGSizeApplyAffineTransform(\_:\_:)](cgsizeapplyaffinetransform%28____%29.md): Returns the height and width resulting from a transformation of an existing height and width.
- [CGRectApplyAffineTransform(\_:\_:)](cgrectapplyaffinetransform%28____%29.md): Applies an affine transform to a rectangle.

### Evaluating Affine Transforms

- [CGAffineTransformIsIdentity(\_:)](cgaffinetransformisidentity%28__%29.md): Checks whether an affine transform is the identity transform.
- [CGAffineTransformEqualToTransform(\_:\_:)](cgaffinetransformequaltotransform%28____%29.md): Checks whether two affine transforms are equal.

### Data Types

- [CGAffineTransform](../corefoundation/cgaffinetransform.md)

### Constants

- [CGAffineTransformIdentity](cgaffinetransformidentity.md): The identity transform.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

# CGAffineTransform (Objective-C)

**Framework:** Core Graphics  
**Kind:** API Collection

An affine transformation matrix for use in drawing 2D graphics.

<a id="overview"></a>

## Overview

A transformation specifies how points in one coordinate system map to points in another coordinate system. An affine transformation is a special type of mapping that preserves parallel lines in a path but does not necessarily preserve lengths or angles. Scaling, rotation, and translation are the most commonly used manipulations supported by affine transforms, but skewing is also possible.

For more information on how to create, concatenate, and apply affine transformations, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).

You typically do not need to create an affine transform directly—[CGContextRef](cgcontext.md) describes functions that modify the current affine transform. If you don’t plan to reuse an affine transform, you may want to use [CGContextScaleCTM](cgcontext/scaleby%28x_y_%29.md), [CGContextRotateCTM](cgcontext/rotate%28by_%29.md), [CGContextTranslateCTM](cgcontext/translateby%28x_y_%29.md), or [CGContextConcatCTM](cgcontext/concatenate%28__%29.md).

## Topics

### Creating an Affine Transformation Matrix

- [CGAffineTransformMake](cgaffinetransformmake%28____________%29.md): Returns an affine transformation matrix constructed from values you provide.
- [CGAffineTransformMakeRotation](cgaffinetransformmakerotation%28__%29.md): Returns an affine transformation matrix constructed from a rotation value you provide.
- [CGAffineTransformMakeScale](cgaffinetransformmakescale%28____%29.md): Returns an affine transformation matrix constructed from scaling values you provide.
- [CGAffineTransformMakeTranslation](cgaffinetransformmaketranslation%28____%29.md): Returns an affine transformation matrix constructed from translation values you provide.

### Modifying Affine Transformations

- [CGAffineTransformTranslate](cgaffinetransformtranslate%28______%29.md): Returns an affine transformation matrix constructed by translating an existing affine transform.
- [CGAffineTransformScale](cgaffinetransformscale%28______%29.md): Returns an affine transformation matrix constructed by scaling an existing affine transform.
- [CGAffineTransformRotate](cgaffinetransformrotate%28____%29.md): Returns an affine transformation matrix constructed by rotating an existing affine transform.
- [CGAffineTransformInvert](cgaffinetransforminvert%28__%29.md): Returns an affine transformation matrix constructed by inverting an existing affine transform.
- [CGAffineTransformConcat](cgaffinetransformconcat%28____%29.md): Returns an affine transformation matrix constructed by combining two existing affine transforms.

### Applying Affine Transformations

- [CGPointApplyAffineTransform](cgpointapplyaffinetransform%28____%29.md): Returns the point resulting from an affine transformation of an existing point.
- [CGSizeApplyAffineTransform](cgsizeapplyaffinetransform%28____%29.md): Returns the height and width resulting from a transformation of an existing height and width.
- [CGRectApplyAffineTransform](cgrectapplyaffinetransform%28____%29.md): Applies an affine transform to a rectangle.

### Evaluating Affine Transforms

- [CGAffineTransformIsIdentity](cgaffinetransformisidentity%28__%29.md): Checks whether an affine transform is the identity transform.
- [CGAffineTransformEqualToTransform](cgaffinetransformequaltotransform%28____%29.md): Checks whether two affine transforms are equal.

### Data Types

- [CGAffineTransform](../corefoundation/cgaffinetransform.md)

### Constants

- [CGAffineTransformIdentity](cgaffinetransformidentity.md): The identity transform.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Reference

- [CGGeometry](cggeometry.md): Various structures and associated functions for 2D geometric primitives.
- [Core Graphics Structures](core-graphics-structures.md)
- [Core Graphics Enumerations](core-graphics-enumerations.md)
- [Core Graphics Constants](core-graphics-constants.md)
- [Core Graphics Functions](core-graphics-functions.md)
- [Core Graphics Data Types](core-graphics-data-types.md)
- [Core Graphics Macros](core-graphics-macros.md)

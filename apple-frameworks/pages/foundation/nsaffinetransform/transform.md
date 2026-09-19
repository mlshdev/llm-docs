> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsaffinetransform/transform

# transform

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a new affine transform initialized to the identity matrix.

## Declaration

```objectivec
+ (NSAffineTransform *) transform;
```

<a id="return-value"></a>

## Return Value

A new identity transform object. This matrix transforms any point to the same point.

## See Also

### Related Documentation

- [Cocoa Drawing Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40003290)

### Creating an Affine Transform

- [init](init%28%29.md): Initializes an affine transform matrix to the identity matrix.
- [initWithTransform:](init%28transform_%29.md): Initializes the receiver’s matrix using another transform object.

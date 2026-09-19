> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/qcrenderer/snapshotimage()

# snapshotImage() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns an `NSImage` object of the current image in the OpenGL context associated with the renderer.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func snapshotImage() -> NSImage!
```

<a id="return-value"></a>

## Return Value

The snapshot image.

## See Also

### Taking Snapshot Images

- [createSnapshotImage(ofType:)](createsnapshotimage%28oftype_%29.md): Deprecated. Returns the current image in the OpenGL context associated with the renderer, as an image object of the provided image type.

# snapshotImage (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns an `NSImage` object of the current image in the OpenGL context associated with the renderer.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSImage *) snapshotImage;
```

<a id="return-value"></a>

## Return Value

The snapshot image.

## See Also

### Taking Snapshot Images

- [createSnapshotImageOfType:](createsnapshotimage%28oftype_%29.md): Deprecated. Returns the current image in the OpenGL context associated with the renderer, as an image object of the provided image type.

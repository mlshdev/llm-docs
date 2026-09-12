> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview/createsnapshotimage(oftype:)](https://developer.apple.com/documentation/quartz/qcview/createsnapshotimage(oftype:))

# createSnapshotImage(ofType:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the current image in the view as an image object of the provided image type.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func createSnapshotImage(ofType type: String!) -> Any!
```

## Parameters

- `type`: A string that specifies any of the following image types: [NSBitmapImageRep](../../appkit/nsbitmapimagerep.md), [NSImage](../../appkit/nsimage.md), [CIImage](https://developer.apple.com/documentation/coreimage/ciimage), `CGImage`, `CVOpenGLBuffer`, `CVPixelBuffer`.

<a id="return-value"></a>

## Return Value

The snapshot image  in the provided image type. You are responsible for releasing this object when you no longer need it.

## See Also

### Taking Snapshot Images

- [snapshotImage()](snapshotimage%28%29.md): Deprecated. Returns an `NSImage` object of the current image in the view.

# createSnapshotImageOfType: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the current image in the view as an image object of the provided image type.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id) createSnapshotImageOfType:(NSString *) type;
```

## Parameters

- `type`: A string that specifies any of the following image types: [NSBitmapImageRep](../../appkit/nsbitmapimagerep.md), [NSImage](../../appkit/nsimage.md), [CIImage](https://developer.apple.com/documentation/coreimage/ciimage), `CGImage`, `CVOpenGLBuffer`, `CVPixelBuffer`.

<a id="return-value"></a>

## Return Value

The snapshot image  in the provided image type. You are responsible for releasing this object when you no longer need it.

## See Also

### Taking Snapshot Images

- [snapshotImage](snapshotimage%28%29.md): Deprecated. Returns an `NSImage` object of the current image in the view.

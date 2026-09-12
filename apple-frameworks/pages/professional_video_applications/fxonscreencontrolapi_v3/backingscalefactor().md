> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrolapi_v3/backingscalefactor()](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrolapi_v3/backingscalefactor())

# backingScaleFactor() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Returns the scale factor for drawing the on-screen control to the current screen.

## Declaration

```swift
func backingScaleFactor() -> Double
```

<a id="return-value"></a>

## Return Value

The scale factor.

<a id="discussion"></a>

## Discussion

Vertex coordinates already scale properly, but this method can be used for other types of drawings. For example, if you are preparing a texture on the CPU and uploading it, this can tell you how large to make the texture before uploading it.

# backingScaleFactor (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the scale factor for drawing the on-screen control to the current screen.

## Declaration

```objectivec
- (double) backingScaleFactor;
```

<a id="return-value"></a>

## Return Value

The scale factor.

<a id="discussion"></a>

## Discussion

Vertex coordinates already scale properly, but this method can be used for other types of drawings. For example, if you are preparing a texture on the CPU and uploading it, this can tell you how large to make the texture before uploading it.

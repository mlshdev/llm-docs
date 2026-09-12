> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/shouldbeopaque](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/shouldbeopaque)

# shouldBeOpaque (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A Boolean value that indicates if semitransparent content presents as opaque.

## Declaration

```swift
var shouldBeOpaque: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When this property is `true`, semitransparent content in the stream presents as backed by a solid white background, making the resulting image fully opaque. The default value is `false`.

## See Also

### Configuring captured elements

- [showsCursor](showscursor.md): A Boolean value that determines whether the cursor is visible in the stream.
- [capturesShadowsOnly](capturesshadowsonly.md): A Boolean value that indicates if the stream only captures shadows.
- [ignoreShadowsDisplay](ignoreshadowsdisplay.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in display style.
- [ignoreShadowsSingleWindow](ignoreshadowssinglewindow.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in window style.
- [ignoreGlobalClipDisplay](ignoreglobalclipdisplay.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in display style.
- [ignoreGlobalClipSingleWindow](ignoreglobalclipsinglewindow.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in window style.

# shouldBeOpaque (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A Boolean value that indicates if semitransparent content presents as opaque.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL shouldBeOpaque;
```

<a id="discussion"></a>

## Discussion

When this property is `true`, semitransparent content in the stream presents as backed by a solid white background, making the resulting image fully opaque. The default value is `false`.

## See Also

### Configuring captured elements

- [showsCursor](showscursor.md): A Boolean value that determines whether the cursor is visible in the stream.
- [capturesShadowsOnly](capturesshadowsonly.md): A Boolean value that indicates if the stream only captures shadows.
- [ignoreShadowsDisplay](ignoreshadowsdisplay.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in display style.
- [ignoreShadowsSingleWindow](ignoreshadowssinglewindow.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in window style.
- [ignoreGlobalClipDisplay](ignoreglobalclipdisplay.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in display style.
- [ignoreGlobalClipSingleWindow](ignoreglobalclipsinglewindow.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in window style.

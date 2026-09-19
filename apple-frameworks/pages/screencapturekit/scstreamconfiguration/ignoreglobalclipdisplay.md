> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/ignoreglobalclipdisplay

# ignoreGlobalClipDisplay (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in display style.

## Declaration

```swift
var ignoreGlobalClipDisplay: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The display that originates the stream determines clipping bounds. When this value is `true`, the stream contains content moved past the clipping bounds. The default value is `false`.

## See Also

### Configuring captured elements

- [showsCursor](showscursor.md): A Boolean value that determines whether the cursor is visible in the stream.
- [shouldBeOpaque](shouldbeopaque.md): A Boolean value that indicates if semitransparent content presents as opaque.
- [capturesShadowsOnly](capturesshadowsonly.md): A Boolean value that indicates if the stream only captures shadows.
- [ignoreShadowsDisplay](ignoreshadowsdisplay.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in display style.
- [ignoreShadowsSingleWindow](ignoreshadowssinglewindow.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in window style.
- [ignoreGlobalClipSingleWindow](ignoreglobalclipsinglewindow.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in window style.

# ignoreGlobalClipDisplay (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in display style.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL ignoreGlobalClipDisplay;
```

<a id="discussion"></a>

## Discussion

The display that originates the stream determines clipping bounds. When this value is `true`, the stream contains content moved past the clipping bounds. The default value is `false`.

## See Also

### Configuring captured elements

- [showsCursor](showscursor.md): A Boolean value that determines whether the cursor is visible in the stream.
- [shouldBeOpaque](shouldbeopaque.md): A Boolean value that indicates if semitransparent content presents as opaque.
- [capturesShadowsOnly](capturesshadowsonly.md): A Boolean value that indicates if the stream only captures shadows.
- [ignoreShadowsDisplay](ignoreshadowsdisplay.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in display style.
- [ignoreShadowsSingleWindow](ignoreshadowssinglewindow.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in window style.
- [ignoreGlobalClipSingleWindow](ignoreglobalclipsinglewindow.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in window style.

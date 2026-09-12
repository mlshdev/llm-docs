> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/ignoreglobalclipsinglewindow](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/ignoreglobalclipsinglewindow)

# ignoreGlobalClipSingleWindow (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in window style.

## Declaration

```swift
var ignoreGlobalClipSingleWindow: Bool { get set }
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
- [ignoreGlobalClipDisplay](ignoreglobalclipdisplay.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in display style.

# ignoreGlobalClipSingleWindow (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in window style.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL ignoreGlobalClipSingleWindow;
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
- [ignoreGlobalClipDisplay](ignoreglobalclipdisplay.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in display style.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/capturesshadowsonly](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/capturesshadowsonly)

# capturesShadowsOnly (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A Boolean value that indicates if the stream only captures shadows.

## Declaration

```swift
var capturesShadowsOnly: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Configuring captured elements

- [showsCursor](showscursor.md): A Boolean value that determines whether the cursor is visible in the stream.
- [shouldBeOpaque](shouldbeopaque.md): A Boolean value that indicates if semitransparent content presents as opaque.
- [ignoreShadowsDisplay](ignoreshadowsdisplay.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in display style.
- [ignoreShadowsSingleWindow](ignoreshadowssinglewindow.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in window style.
- [ignoreGlobalClipDisplay](ignoreglobalclipdisplay.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in display style.
- [ignoreGlobalClipSingleWindow](ignoreglobalclipsinglewindow.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in window style.

# capturesShadowsOnly (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A Boolean value that indicates if the stream only captures shadows.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL capturesShadowsOnly;
```

<a id="discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Configuring captured elements

- [showsCursor](showscursor.md): A Boolean value that determines whether the cursor is visible in the stream.
- [shouldBeOpaque](shouldbeopaque.md): A Boolean value that indicates if semitransparent content presents as opaque.
- [ignoreShadowsDisplay](ignoreshadowsdisplay.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in display style.
- [ignoreShadowsSingleWindow](ignoreshadowssinglewindow.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in window style.
- [ignoreGlobalClipDisplay](ignoreglobalclipdisplay.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in display style.
- [ignoreGlobalClipSingleWindow](ignoreglobalclipsinglewindow.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in window style.

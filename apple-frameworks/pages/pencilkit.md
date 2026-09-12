> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit](https://developer.apple.com/documentation/pencilkit)

# PencilKit (Swift)

**Framework:** PencilKit  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Capture touch and Apple Pencil input as a drawing, and display that content from your app.

<a id="overview"></a>

## Overview

PencilKit makes it easy to incorporate hand-drawn content into your iPadOS or macOS apps. PencilKit provides a drawing environment for your iOS app that receives input from Apple Pencil or the user’s finger, and turns it into images you display in iPadOS, iOS, or macOS. The environment comes with tools for creating, erasing, and selecting lines.

You capture content in your iPad app using a [PKCanvasView](pencilkit/pkcanvasview.md) object that you integrate into your existing view hierarchy. It supports the low-latency capture of touches originating from Apple Pencil or your finger. The canvas object sends final results as a [PKDrawing](pencilkit/pkdrawing-swift.struct.md) object, whose contents you can save with your app’s content. You can also convert the drawn content into an image for display in iOS or macOS app.

For information about handling user interactions on Apple Pencil in your UIKit app, see [Apple Pencil interactions](uikit/apple-pencil-interactions.md).

## Topics

### Canvas

- [Drawing with PencilKit](pencilkit/drawing-with-pencilkit.md): Add expressive, low-latency drawing to your app using PencilKit.
- [Customizing Scribble with Interactions](pencilkit/customizing-scribble-with-interactions.md): Enable writing on a non-text-input view by adding interactions.
- [Inspecting, Modifying, and Constructing PencilKit Drawings](pencilkit/inspecting-modifying-and-constructing-pencilkit-drawings.md): Score users’ ability to match PencilKit drawings generated from text, by accessing the strokes and points inside PencilKit drawings.
- [Importing Bézier path data into PencilKit](pencilkit/importing-external-drawing-data-into-pencilkit.md): Convert existing Bézier-based stroke data into PencilKit drawing strokes.
- [Controlling stroke rendering for animation and editing](pencilkit/controlling-stroke-rendering-for-animation-and-editing.md): Slice, animate, and blend PencilKit strokes in code, while keeping grain texture and wet ink intact.
- [PKCanvasView](pencilkit/pkcanvasview.md): A view that captures Apple Pencil input and displays the rendered results in an iOS app.
- [PKDrawing](pencilkit/pkdrawing-swift.struct.md): A structure representing the drawing information captured by a canvas view.
- [PKStroke](pencilkit/pkstroke-swift.struct.md): A structure that represents the paths, boundaries, and other properties of a stroke drawn on a canvas.
- [PKStrokePath](pencilkit/pkstrokepath-swift.struct.md): A structure that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.
- [PKStrokePoint](pencilkit/pkstrokepoint-swift.struct.md): A structure that represents the properties of a specific point along a stroke’s path.
- [PKInk](pencilkit/pkink-swift.struct.md): A structure that represents an ink that specifies its type, color, and width.

### Handwriting recognition

- [Building a handwriting recognition experience with PencilKit](pencilkit/building-a-handwriting-recognition-experience-with-pencilkit.md): Integrate handwriting recognition into your app to identify written text across multiple languages, and explore path conversion and substrokes to enhance the drawing experience.
- [Recognizing handwriting and converting it to text](pencilkit/recognizing-handwriting-and-converting-to-text.md): Analyze handwritten strokes in a PencilKit canvas using on-device recognition, and convert them to text that your app can display, copy, or index.
- [PKStrokeRecognizer](pencilkit/pkstrokerecognizer.md): An actor that recognizes handwriting and searches for text within a PencilKit drawing.

### Tools

- [Configuring the PencilKit tool picker](pencilkit/configuring-the-pencilkit-tool-picker.md): Incorporate a custom PencilKit tool picker with a variety of system and custom tools into a drawing app.
- [PKToolPicker](pencilkit/pktoolpicker.md): A tool palette that displays a selection of drawing tools and colors for tools that a person can choose from.
- [PKInkingTool](pencilkit/pkinkingtool-swift.struct.md): A structure that defines the drawing characteristics (width, color, pen style) to use when drawing lines on a canvas view.
- [PKEraserTool](pencilkit/pkerasertool-swift.struct.md): A tool for erasing previously drawn content in a canvas view.
- [PKLassoTool](pencilkit/pklassotool-swift.struct.md): A tool for selecting stroked lines and shapes in a canvas view.
- [PKTool](pencilkit/pktool-swift.protocol.md): An interface adopted by drawing and writing tools used by a canvas view.

### Backward compatibility

- [Supporting backward compatibility for ink types](pencilkit/supporting-backward-compatibility-for-ink-types.md): Leverage the latest PencilKit features while providing a good user experience in earlier versions of the OS that don’t support those features.
- [PKContentVersion](pencilkit/pkcontentversion.md): Constants that represent versions of PencilKit for backward compatibility.

# PencilKit (Objective-C)

**Framework:** PencilKit  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Capture touch and Apple Pencil input as a drawing, and display that content from your app.

<a id="overview"></a>

## Overview

PencilKit makes it easy to incorporate hand-drawn content into your iPadOS or macOS apps. PencilKit provides a drawing environment for your iOS app that receives input from Apple Pencil or the user’s finger, and turns it into images you display in iPadOS, iOS, or macOS. The environment comes with tools for creating, erasing, and selecting lines.

You capture content in your iPad app using a [PKCanvasView](pencilkit/pkcanvasview.md) object that you integrate into your existing view hierarchy. It supports the low-latency capture of touches originating from Apple Pencil or your finger. The canvas object sends final results as a [PKDrawing](pencilkit/pkdrawing-swift.struct.md) object, whose contents you can save with your app’s content. You can also convert the drawn content into an image for display in iOS or macOS app.

For information about handling user interactions on Apple Pencil in your UIKit app, see [Apple Pencil interactions](uikit/apple-pencil-interactions.md).

## Topics

### Canvas

- [Drawing with PencilKit](pencilkit/drawing-with-pencilkit.md): Add expressive, low-latency drawing to your app using PencilKit.
- [Customizing Scribble with Interactions](pencilkit/customizing-scribble-with-interactions.md): Enable writing on a non-text-input view by adding interactions.
- [Inspecting, Modifying, and Constructing PencilKit Drawings](pencilkit/inspecting-modifying-and-constructing-pencilkit-drawings.md): Score users’ ability to match PencilKit drawings generated from text, by accessing the strokes and points inside PencilKit drawings.
- [Importing Bézier path data into PencilKit](pencilkit/importing-external-drawing-data-into-pencilkit.md): Convert existing Bézier-based stroke data into PencilKit drawing strokes.
- [Controlling stroke rendering for animation and editing](pencilkit/controlling-stroke-rendering-for-animation-and-editing.md): Slice, animate, and blend PencilKit strokes in code, while keeping grain texture and wet ink intact.
- [PKCanvasView](pencilkit/pkcanvasview.md): A view that captures Apple Pencil input and displays the rendered results in an iOS app.
- [PKDrawing](pencilkit/pkdrawingreference.md): A data structure that contains the drawing information captured by a canvas view.
- [PKStroke](pencilkit/pkstrokereference.md): A class that represents the paths, boundaries and other properties of a stroke drawn on a canvas.
- [PKStrokePath](pencilkit/pkstrokepathreference.md): A class that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.
- [PKStrokePoint](pencilkit/pkstrokepointreference.md): A class that represents the properties of a specific point along a stroke’s path.
- [PKInk](pencilkit/pkinkreference.md): Provides a description of the creation and rendering of marks on a canvas.
- [PKStrokeRenderState](pencilkit/pkstrokerenderstatereference.md): An object that captures the render-time state of a stroke, such as grain texture position.
- [PKConvertedBezierPoint](pencilkit/pkconvertedbezierpointreference.md): An object that provides information about a B-spline control point converted from a Bézier path.
- [PKFloatRange](pencilkit/pkfloatrange.md): A utility class that represents range components of a stroke.
- [PKInkTypeReed](pencilkit/pkinktypereed.md)

### Handwriting recognition

- [Building a handwriting recognition experience with PencilKit](pencilkit/building-a-handwriting-recognition-experience-with-pencilkit.md): Integrate handwriting recognition into your app to identify written text across multiple languages, and explore path conversion and substrokes to enhance the drawing experience.
- [Recognizing handwriting and converting it to text](pencilkit/recognizing-handwriting-and-converting-to-text.md): Analyze handwritten strokes in a PencilKit canvas using on-device recognition, and convert them to text that your app can display, copy, or index.

### Tools

- [Configuring the PencilKit tool picker](pencilkit/configuring-the-pencilkit-tool-picker.md): Incorporate a custom PencilKit tool picker with a variety of system and custom tools into a drawing app.
- [PKToolPicker](pencilkit/pktoolpicker.md): A tool palette that displays a selection of drawing tools and colors for tools that a person can choose from.
- [PKInkingTool](pencilkit/pkinkingtoolreference.md): An object that defines the drawing characteristics (width, color, pen style) to use when drawing lines on a canvas view.
- [PKEraserTool](pencilkit/pkerasertoolreference.md): A tool for erasing previously drawn content in a canvas view.
- [PKLassoTool](pencilkit/pklassotoolreference.md): A tool for selecting stroked lines and shapes in a canvas view.
- [PKTool](pencilkit/pktool-c.class.md): An abstract base class for tools used by a canvas view.
- [PKResponderState](pencilkit/pkresponderstate.md): An object that controls PencilKit behavior associated with a responder.
- [PKToolPickerVisibility](pencilkit/pktoolpickervisibility.md): Constants that describe the visibility state of a tool picker.
- [PKToolPickerDelegate](pencilkit/pktoolpicker/delegate-swift.protocol.md)
- [PKToolPickerCustomItemControlOptions](pencilkit/pktoolpickercustomitem/controloptions.md): Options for which controls to present.

### Backward compatibility

- [Supporting backward compatibility for ink types](pencilkit/supporting-backward-compatibility-for-ink-types.md): Leverage the latest PencilKit features while providing a good user experience in earlier versions of the OS that don’t support those features.
- [PKContentVersion](pencilkit/pkcontentversion.md): Constants that represent versions of PencilKit for backward compatibility.

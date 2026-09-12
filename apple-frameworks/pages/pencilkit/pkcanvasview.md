> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkcanvasview](https://developer.apple.com/documentation/pencilkit/pkcanvasview)

# PKCanvasView (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view that captures Apple Pencil input and displays the rendered results in an iOS app.

## Declaration

```swift
class PKCanvasView
```

## Mentioned In

- [Importing Bézier path data into PencilKit](importing-external-drawing-data-into-pencilkit.md)
- [Supporting backward compatibility for ink types](supporting-backward-compatibility-for-ink-types.md)

<a id="overview"></a>

## Overview

A [PKCanvasView](pkcanvasview.md) object captures content drawn using Apple Pencil or the user’s finger and displays it in your app. The canvas view handles all of the touch events and data coming from Apple Pencil, and renders that information using the tool you specify. The canvas stores the captured input in a [PKDrawingReference](pkdrawingreference.md) object.

[PKCanvasView](pkcanvasview.md) is a scroll view, so you can make the drawable area bigger than the canvas view’s frame rectangle. To do that, set the inherited [contentSize](../uikit/uiscrollview/contentsize.md) property to the size you want. The canvas view automatically scales its underlying content to match the size you specify. Users scroll around the canvas using a two-finger pan gesture. (If the [allowsFingerDrawing](pkcanvasview/allowsfingerdrawing.md) property is `false`, users scroll with only one finger.)

A canvas view conforms to the [PKToolPickerObserver](pktoolpickerobserver.md) protocol, so you can add it as an observer of the window’s tool picker. The tool picker displays a floating palette of tools that the user can choose from. As the user interacts with items in the palette, such as changing ink colors, or line widths, the canvas automatically updates its drawing environment accordingly.

## Topics

### Responding to drawing-related changes

- [delegate](pkcanvasview/delegate.md): The object you use to respond to changes in the drawn content or with the selected tool.
- [PKCanvasViewDelegate](pkcanvasviewdelegate.md): Methods for monitoring drawing related changes in a canvas view.

### Configuring the drawing environment

- [tool](pkcanvasview/tool-1kj57.md): The currently selected tool used for drawing.
- [isRulerActive](pkcanvasview/isruleractive.md): A Boolean value that indicates whether a ruler view is visible on the canvas.
- [allowsFingerDrawing](pkcanvasview/allowsfingerdrawing.md): Deprecated. A Boolean value that indicates whether the canvas accepts input from the user’s finger in addition to Apple Pencil.
- [drawingPolicy](pkcanvasview/drawingpolicy.md): The policy that controls the types of touches allowed when drawing on the canvas.
- [PKCanvasViewDrawingPolicy](pkcanvasviewdrawingpolicy.md): Constants that you use to specify the type of drawing gestures your app permits while the user draws on the canvas.

### Getting the drawing gesture recognizer

- [drawingGestureRecognizer](pkcanvasview/drawinggesturerecognizer.md): The gesture recognizer that the canvas uses to track touch events.

### Getting the captured data

- [drawing](pkcanvasview/drawing.md): The data object that the canvas uses to store drawn content.

### Managing stroke selection

- [selection](pkcanvasview/selection.md): The identifiers of the strokes selected on the canvas.

### Supporting PencilKit versions

- [maximumSupportedContentVersion](pkcanvasview/maximumsupportedcontentversion.md): The maximum version of PencilKit to support.

### Instance Properties

- [isDrawingEnabled](pkcanvasview/isdrawingenabled.md)

## Relationships

### Inherits From

- [UIScrollView](../uikit/uiscrollview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [PKToolPickerObserver](pktoolpickerobserver.md)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UIFocusItemScrollableContainer](../uikit/uifocusitemscrollablecontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Canvas

- [Drawing with PencilKit](drawing-with-pencilkit.md): Add expressive, low-latency drawing to your app using PencilKit.
- [Customizing Scribble with Interactions](customizing-scribble-with-interactions.md): Enable writing on a non-text-input view by adding interactions.
- [Inspecting, Modifying, and Constructing PencilKit Drawings](inspecting-modifying-and-constructing-pencilkit-drawings.md): Score users’ ability to match PencilKit drawings generated from text, by accessing the strokes and points inside PencilKit drawings.
- [Importing Bézier path data into PencilKit](importing-external-drawing-data-into-pencilkit.md): Convert existing Bézier-based stroke data into PencilKit drawing strokes.
- [Controlling stroke rendering for animation and editing](controlling-stroke-rendering-for-animation-and-editing.md): Slice, animate, and blend PencilKit strokes in code, while keeping grain texture and wet ink intact.
- [PKDrawing](pkdrawing-swift.struct.md): A structure representing the drawing information captured by a canvas view.
- [PKStroke](pkstroke-swift.struct.md): A structure that represents the paths, boundaries, and other properties of a stroke drawn on a canvas.
- [PKStrokePath](pkstrokepath-swift.struct.md): A structure that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.
- [PKStrokePoint](pkstrokepoint-swift.struct.md): A structure that represents the properties of a specific point along a stroke’s path.
- [PKInk](pkink-swift.struct.md): A structure that represents an ink that specifies its type, color, and width.

# PKCanvasView (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view that captures Apple Pencil input and displays the rendered results in an iOS app.

## Declaration

```objectivec
@interface PKCanvasView : UIScrollView
```

## Mentioned In

- [Importing Bézier path data into PencilKit](importing-external-drawing-data-into-pencilkit.md)
- [Supporting backward compatibility for ink types](supporting-backward-compatibility-for-ink-types.md)

<a id="overview"></a>

## Overview

A [PKCanvasView](pkcanvasview.md) object captures content drawn using Apple Pencil or the user’s finger and displays it in your app. The canvas view handles all of the touch events and data coming from Apple Pencil, and renders that information using the tool you specify. The canvas stores the captured input in a [PKDrawing](pkdrawingreference.md) object.

[PKCanvasView](pkcanvasview.md) is a scroll view, so you can make the drawable area bigger than the canvas view’s frame rectangle. To do that, set the inherited [contentSize](../uikit/uiscrollview/contentsize.md) property to the size you want. The canvas view automatically scales its underlying content to match the size you specify. Users scroll around the canvas using a two-finger pan gesture. (If the [allowsFingerDrawing](pkcanvasview/allowsfingerdrawing.md) property is `false`, users scroll with only one finger.)

A canvas view conforms to the [PKToolPickerObserver](pktoolpickerobserver.md) protocol, so you can add it as an observer of the window’s tool picker. The tool picker displays a floating palette of tools that the user can choose from. As the user interacts with items in the palette, such as changing ink colors, or line widths, the canvas automatically updates its drawing environment accordingly.

## Topics

### Responding to drawing-related changes

- [delegate](pkcanvasview/delegate.md): The object you use to respond to changes in the drawn content or with the selected tool.
- [PKCanvasViewDelegate](pkcanvasviewdelegate.md): Methods for monitoring drawing related changes in a canvas view.

### Configuring the drawing environment

- [tool](pkcanvasview/tool-6str6.md): The currently selected tool used for drawing.
- [rulerActive](pkcanvasview/isruleractive.md): A Boolean value that indicates whether a ruler view is visible on the canvas.
- [allowsFingerDrawing](pkcanvasview/allowsfingerdrawing.md): Deprecated. A Boolean value that indicates whether the canvas accepts input from the user’s finger in addition to Apple Pencil.
- [drawingPolicy](pkcanvasview/drawingpolicy.md): The policy that controls the types of touches allowed when drawing on the canvas.
- [PKCanvasViewDrawingPolicy](pkcanvasviewdrawingpolicy.md): Constants that you use to specify the type of drawing gestures your app permits while the user draws on the canvas.

### Getting the drawing gesture recognizer

- [drawingGestureRecognizer](pkcanvasview/drawinggesturerecognizer.md): The gesture recognizer that the canvas uses to track touch events.

### Getting the captured data

- [drawing](pkcanvasview/drawing.md): The data object that the canvas uses to store drawn content.

### Managing stroke selection

- [selectedStrokeIDs](pkcanvasview/selection.md): The identifiers of the strokes selected on the canvas.

### Supporting PencilKit versions

- [maximumSupportedContentVersion](pkcanvasview/maximumsupportedcontentversion.md): The maximum version of PencilKit to support.

### Instance Properties

- [drawingEnabled](pkcanvasview/isdrawingenabled.md)

## Relationships

### Inherits From

- [UIScrollView](../uikit/uiscrollview.md)

### Conforms To

- [PKToolPickerObserver](pktoolpickerobserver.md)

## See Also

### Canvas

- [Drawing with PencilKit](drawing-with-pencilkit.md): Add expressive, low-latency drawing to your app using PencilKit.
- [Customizing Scribble with Interactions](customizing-scribble-with-interactions.md): Enable writing on a non-text-input view by adding interactions.
- [Inspecting, Modifying, and Constructing PencilKit Drawings](inspecting-modifying-and-constructing-pencilkit-drawings.md): Score users’ ability to match PencilKit drawings generated from text, by accessing the strokes and points inside PencilKit drawings.
- [Importing Bézier path data into PencilKit](importing-external-drawing-data-into-pencilkit.md): Convert existing Bézier-based stroke data into PencilKit drawing strokes.
- [Controlling stroke rendering for animation and editing](controlling-stroke-rendering-for-animation-and-editing.md): Slice, animate, and blend PencilKit strokes in code, while keeping grain texture and wet ink intact.
- [PKDrawing](pkdrawingreference.md): A data structure that contains the drawing information captured by a canvas view.
- [PKStroke](pkstrokereference.md): A class that represents the paths, boundaries and other properties of a stroke drawn on a canvas.
- [PKStrokePath](pkstrokepathreference.md): A class that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.
- [PKStrokePoint](pkstrokepointreference.md): A class that represents the properties of a specific point along a stroke’s path.
- [PKInk](pkinkreference.md): Provides a description of the creation and rendering of marks on a canvas.
- [PKStrokeRenderState](pkstrokerenderstatereference.md): An object that captures the render-time state of a stroke, such as grain texture position.
- [PKConvertedBezierPoint](pkconvertedbezierpointreference.md): An object that provides information about a B-spline control point converted from a Bézier path.
- [PKFloatRange](pkfloatrange.md): A utility class that represents range components of a stroke.
- [PKInkTypeReed](pkinktypereed.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/swiftui-views](https://developer.apple.com/documentation/widgetkit/swiftui-views)

# SwiftUI views for widgets (Swift)

**Framework:** WidgetKit

Present your app’s content in widgets with SwiftUI views.

<a id="Overview"></a>

## Overview

Widgets can use many, but not all, SwiftUI views to present content. Use the views listed below to implement your widget’s view.

> **Note**

> Widgets can’t use UIKit or AppKit views wrapped with [UIViewRepresentable](https://developer.apple.com/documentation/swiftui/uiviewrepresentable) or [NSViewRepresentable](https://developer.apple.com/documentation/swiftui/nsviewrepresentable).

## Topics

### Displaying text

- [Displaying dynamic dates in widgets](displaying-dynamic-dates.md): Show up-to-date, time-based information in your widget even when it isn’t running.
- [Text](https://developer.apple.com/documentation/swiftui/text): A view that displays one or more lines of read-only text.

### Showing images

- [Image](https://developer.apple.com/documentation/swiftui/image): A view that displays an image.

### Adding interaction

- [Adding interactivity to widgets and Live Activities](adding-interactivity-to-widgets-and-live-activities.md): Include buttons or toggles in a widget or Live Activity to offer app functionality without launching the app.
- [Button](https://developer.apple.com/documentation/swiftui/button): A control that initiates an action.
- [Toggle](https://developer.apple.com/documentation/swiftui/toggle): A control that toggles between on and off states.

### Adding labels and links

- [Label](https://developer.apple.com/documentation/swiftui/label): A standard label for user interface items, consisting of an icon with a title.
- [Link](https://developer.apple.com/documentation/swiftui/link): A control for navigating to a URL.

### Stacking views

- [HStack](https://developer.apple.com/documentation/swiftui/hstack): A view that arranges its subviews in a horizontal line.
- [VStack](https://developer.apple.com/documentation/swiftui/vstack): A view that arranges its subviews in a vertical line.
- [ZStack](https://developer.apple.com/documentation/swiftui/zstack): A view that overlays its subviews, aligning them in both axes.
- [LazyHStack](https://developer.apple.com/documentation/swiftui/lazyhstack): A view that arranges its children in a line that grows horizontally, creating items only as needed.
- [LazyVStack](https://developer.apple.com/documentation/swiftui/lazyvstack): A view that arranges its children in a line that grows vertically, creating items only as needed.

### Arranging views in grids

- [LazyHGrid](https://developer.apple.com/documentation/swiftui/lazyhgrid): A container view that arranges its child views in a grid that grows horizontally, creating items only as needed.
- [LazyVGrid](https://developer.apple.com/documentation/swiftui/lazyvgrid): A container view that arranges its child views in a grid that grows vertically, creating items only as needed.
- [GridItem](https://developer.apple.com/documentation/swiftui/griditem): A description of a row or a column in a lazy grid.

### Enumerating lists

- [ForEach](https://developer.apple.com/documentation/swiftui/foreach): A structure that computes views on demand from an underlying collection of identified data.

### Grouping views

- [Group](https://developer.apple.com/documentation/swiftui/group): A type that collects multiple instances of a content type — like views, scenes, or commands — into a single unit.
- [GroupBox](https://developer.apple.com/documentation/swiftui/groupbox): A stylized view, with an optional label, that visually collects a logical grouping of content.
- [Section](https://developer.apple.com/documentation/swiftui/section): A container view that you can use to add hierarchy within certain views.

### Representing hierarchies

- [OutlineGroup](https://developer.apple.com/documentation/swiftui/outlinegroup): A structure that computes views and disclosure groups on demand from an underlying collection of tree-structured, identified data.

### Adding spacers and dividers

- [Spacer](https://developer.apple.com/documentation/swiftui/spacer): A flexible space that expands along the major axis of its containing stack layout, or on both axes if not contained in a stack.
- [Divider](https://developer.apple.com/documentation/swiftui/divider): A visual element that can be used to separate other content.

### Handling conditional views

- [EmptyView](https://developer.apple.com/documentation/swiftui/emptyview): A view that doesn’t contain any content.
- [EquatableView](https://developer.apple.com/documentation/swiftui/equatableview): A view type that compares itself against its previous value and prevents its child updating if its new value is the same as its old value.

### Displaying shapes

- [Rectangle](https://developer.apple.com/documentation/swiftui/rectangle): A rectangular shape aligned inside the frame of the view containing it.
- [RoundedRectangle](https://developer.apple.com/documentation/swiftui/roundedrectangle): A rectangular shape with rounded corners, aligned inside the frame of the view containing it.
- [Circle](https://developer.apple.com/documentation/swiftui/circle): A circle centered on the frame of the view containing it.
- [Ellipse](https://developer.apple.com/documentation/swiftui/ellipse): An ellipse aligned inside the frame of the view containing it.
- [Capsule](https://developer.apple.com/documentation/swiftui/capsule): A capsule shape aligned inside the frame of the view containing it.
- [Path](https://developer.apple.com/documentation/swiftui/path): The outline of a 2D shape.

### Transforming views

- [ScaledShape](https://developer.apple.com/documentation/swiftui/scaledshape): A shape with a scale transform applied to it.
- [RotatedShape](https://developer.apple.com/documentation/swiftui/rotatedshape): A shape with a rotation transform applied to it.
- [OffsetShape](https://developer.apple.com/documentation/swiftui/offsetshape): A shape with a translation offset transform applied to it.
- [TransformedShape](https://developer.apple.com/documentation/swiftui/transformedshape): A shape with an affine transform applied to it.
- [ContainerRelativeShape](https://developer.apple.com/documentation/swiftui/containerrelativeshape): A shape whose dimensions the system calculates from an inset version of the current container shape.

### Styling views

- [Color](https://developer.apple.com/documentation/swiftui/color): A representation of a color that adapts to a given context.
- [ImagePaint](https://developer.apple.com/documentation/swiftui/imagepaint): A shape style that fills a shape by repeating a region of an image.
- [Gradient](https://developer.apple.com/documentation/swiftui/gradient): A color gradient represented as an array of color stops, each having a parametric location value.
- [LinearGradient](https://developer.apple.com/documentation/swiftui/lineargradient): A linear gradient.
- [AngularGradient](https://developer.apple.com/documentation/swiftui/angulargradient): An angular gradient.
- [RadialGradient](https://developer.apple.com/documentation/swiftui/radialgradient): A radial gradient.
- [ForegroundStyle](https://developer.apple.com/documentation/swiftui/foregroundstyle): The foreground style in the current context.
- [FillStyle](https://developer.apple.com/documentation/swiftui/fillstyle): A style for rasterizing vector shapes.
- [BackgroundStyle](https://developer.apple.com/documentation/swiftui/backgroundstyle): The background style in the current context.
- [SelectionShapeStyle](https://developer.apple.com/documentation/swiftui/selectionshapestyle): A style used to visually indicate selection following platform conventional colors and behaviors.
- [SeparatorShapeStyle](https://developer.apple.com/documentation/swiftui/separatorshapestyle): A style appropriate for foreground separator or border lines.
- [StrokeStyle](https://developer.apple.com/documentation/swiftui/strokestyle): The characteristics of a stroke that traces a path.

### Creating 2D graphics

- [Canvas](https://developer.apple.com/documentation/swiftui/canvas): A view type that supports immediate mode drawing.

### Managing view geometry

- [GeometryProxy](https://developer.apple.com/documentation/swiftui/geometryproxy): A proxy for access to the size and coordinate space (for anchor resolution) of the container view.
- [GeometryReader](https://developer.apple.com/documentation/swiftui/geometryreader): A container view that defines its content as a function of its own size and coordinate space.
- [ProjectionTransform](https://developer.apple.com/documentation/swiftui/projectiontransform)

### Substituting views

- [AnyView](https://developer.apple.com/documentation/swiftui/anyview): A type-erased view.
- [TupleView](https://developer.apple.com/documentation/swiftui/tupleview): A View created from a swift tuple of View values.

## See Also

### Presentation

- [Creating views for widgets, Live Activities, and watch complications](creating-views-for-widgets-live-activities-and-watch-complications.md): Implement glanceable views with WidgetKit and SwiftUI.

# SwiftUI views for widgets (Objective-C)

**Framework:** WidgetKit

Present your app’s content in widgets with SwiftUI views.

<a id="Overview"></a>

## Overview

Widgets can use many, but not all, SwiftUI views to present content. Use the views listed below to implement your widget’s view.

> **Note**

> Widgets can’t use UIKit or AppKit views wrapped with [UIViewRepresentable](https://developer.apple.com/documentation/swiftui/uiviewrepresentable) or [NSViewRepresentable](https://developer.apple.com/documentation/swiftui/nsviewrepresentable).

## Topics

### Displaying text

- [Displaying dynamic dates in widgets](displaying-dynamic-dates.md): Show up-to-date, time-based information in your widget even when it isn’t running.

### Adding interaction

- [Adding interactivity to widgets and Live Activities](adding-interactivity-to-widgets-and-live-activities.md): Include buttons or toggles in a widget or Live Activity to offer app functionality without launching the app.

## See Also

### Presentation

- [Creating views for widgets, Live Activities, and watch complications](creating-views-for-widgets-live-activities-and-watch-complications.md): Implement glanceable views with WidgetKit and SwiftUI.

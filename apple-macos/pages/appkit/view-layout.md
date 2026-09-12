> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/view-layout](https://developer.apple.com/documentation/appkit/view-layout)

# View Layout (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Position and size views using a stack view or Auto Layout constraints.

<a id="overview"></a>

## Overview

When you design your app’s interface, you position views and other interface elements in your app’s windows and size them appropriately. However, the size and position of those views may need to change at runtime for a few reasons:

- The user resizes the window containing your views.
- The user’s language choice requires size changes for labels and text-based views.

[NSStackView](nsstackview.md) objects adjust the position of their contained views automatically when interface dimensions change. Alternatively, Auto Layout constraints let you specify the rules that determine the precise size and position of the views in your interface

## Topics

### Stack View

- [NSStackView](nsstackview.md): A view that arranges an array of views horizontally or vertically and updates their placement and sizing when the window size changes.

### Auto Layout Constraints

- [NSLayoutConstraint](nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.

### Layout Guides

- [NSLayoutGuide](nslayoutguide.md): A rectangular area that can interact with Auto Layout.
- [NSLayoutDimension](nslayoutdimension.md): A factory class for creating size-based layout constraint objects using a fluent API.

### Anchors

- [NSLayoutAnchor](nslayoutanchor.md): A factory class for creating layout constraint objects using a fluent API.
- [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md): A factory class for creating horizontal layout constraint objects using a fluent API.
- [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md): A factory class for creating vertical layout constraint objects using a fluent API.

### View Compression

- [NSUserInterfaceCompression](nsuserinterfacecompression.md): A protocol that describes how a UI control should redisplay when space is restricted.

## See Also

### User Interface

- [Views and Controls](views-and-controls.md): Present your content onscreen and handle user input and events.
- [View Management](view-management.md): Manage your user interface, including the size and position of views in a window.
- [Appearance Customization](appearance-customization.md): Add Dark Mode support to your app, and use appearance proxies to modify your UI.
- [Animation](animation.md): Animate your views and other content to create a more engaging experience for users.
- [Windows, Panels, and Screens](windows-panels-and-screens.md): Organize your view hierarchies and facilitate their display onscreen.
- [Sound, Speech, and Haptics](sound-speech-and-haptics.md): Play sounds and haptic feedback, and incorporate speech recognition and synthesis into your interface.
- [Supporting Continuity Camera in Your Mac App](supporting-continuity-camera-in-your-mac-app.md): Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.

# View Layout (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Position and size views using a stack view or Auto Layout constraints.

<a id="overview"></a>

## Overview

When you design your app’s interface, you position views and other interface elements in your app’s windows and size them appropriately. However, the size and position of those views may need to change at runtime for a few reasons:

- The user resizes the window containing your views.
- The user’s language choice requires size changes for labels and text-based views.

[NSStackView](nsstackview.md) objects adjust the position of their contained views automatically when interface dimensions change. Alternatively, Auto Layout constraints let you specify the rules that determine the precise size and position of the views in your interface

## Topics

### Stack View

- [NSStackView](nsstackview.md): A view that arranges an array of views horizontally or vertically and updates their placement and sizing when the window size changes.

### Auto Layout Constraints

- [NSLayoutConstraint](nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.

### Layout Guides

- [NSLayoutGuide](nslayoutguide.md): A rectangular area that can interact with Auto Layout.
- [NSLayoutDimension](nslayoutdimension.md): A factory class for creating size-based layout constraint objects using a fluent API.
- [NSViewLayoutRegion](nsviewlayoutregion.md)
- [NSViewLayoutRegionAdaptivityAxis](nsviewlayoutregionadaptivityaxis.md)

### Anchors

- [NSLayoutAnchor](nslayoutanchor.md): A factory class for creating layout constraint objects using a fluent API.
- [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md): A factory class for creating horizontal layout constraint objects using a fluent API.
- [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md): A factory class for creating vertical layout constraint objects using a fluent API.

### View Compression

- [NSDictionaryOfVariableBindings](nsdictionaryofvariablebindings.md): Creates a dictionary wherein the keys are string representations of the corresponding values’ variable names.
- [NSUserInterfaceCompression](nsuserinterfacecompression.md): A protocol that describes how a UI control should redisplay when space is restricted.

## See Also

### User Interface

- [Views and Controls](views-and-controls.md): Present your content onscreen and handle user input and events.
- [View Management](view-management.md): Manage your user interface, including the size and position of views in a window.
- [Appearance Customization](appearance-customization.md): Add Dark Mode support to your app, and use appearance proxies to modify your UI.
- [Animation](animation.md): Animate your views and other content to create a more engaging experience for users.
- [Windows, Panels, and Screens](windows-panels-and-screens.md): Organize your view hierarchies and facilitate their display onscreen.
- [Sound, Speech, and Haptics](sound-speech-and-haptics.md): Play sounds and haptic feedback, and incorporate speech recognition and synthesis into your interface.
- [Supporting Continuity Camera in Your Mac App](supporting-continuity-camera-in-your-mac-app.md): Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.

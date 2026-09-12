> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/updates/swiftui](https://developer.apple.com/documentation/updates/swiftui)

# SwiftUI updates

**Framework:** Updates  
**Kind:** Article

Learn about important changes to SwiftUI.

<a id="Overview"></a>

## Overview

Browse notable changes in [SwiftUI](https://developer.apple.com/documentation/swiftui).

<a id="June-2026"></a>

## June 2026

<a id="General"></a>

### General

- Build your project in Xcode 27 or later so that the `@State` attribute uses the [State()](https://developer.apple.com/documentation/swiftui/state%28%29) macro to create a state value in an [App](https://developer.apple.com/documentation/swiftui/app), [Scene](https://developer.apple.com/documentation/swiftui/scene), or [View](https://developer.apple.com/documentation/swiftui/view). This change only initializes and stores your property once when it’s a class.
- Build your project in Xcode 27 or later to construct type-agnostic content from closures that you mark with [ContentBuilder](https://developer.apple.com/documentation/swiftui/contentbuilder), which serves as the unified replacement for type-specific builders like [ToolbarContentBuilder](https://developer.apple.com/documentation/swiftui/toolbarcontentbuilder) and [CommandsBuilder](https://developer.apple.com/documentation/swiftui/commandsbuilder).
- Add reordering by drag-and-drop in containers such as lists, stacks, grids, or custom layouts with [reorderable()](https://developer.apple.com/documentation/swiftui/dynamicviewcontent/reorderable%28%29) and [reorderContainer(for:isEnabled:move:)](https://developer.apple.com/documentation/swiftui/view/reordercontainer%28for:isenabled:move:%29).
- Add custom swipe actions to views in containers such as scroll views, stacks, grids, or custom layouts using [swipeActions(edge:allowsFullSwipe:content:onPresentationChanged:)](https://developer.apple.com/documentation/swiftui/view/swipeactions%28edge:allowsfullswipe:content:onpresentationchanged:%29) and [swipeActionsContainer()](https://developer.apple.com/documentation/swiftui/view/swipeactionscontainer%28%29).

<a id="Transitions"></a>

### Transitions

- Specify the  [crossFade](https://developer.apple.com/documentation/swiftui/navigationtransition/crossfade) transition to have a sheet appear by fading in over content.

<a id="Images"></a>

### Images

- Cache images locally that you download with [AsyncImage](https://developer.apple.com/documentation/swiftui/asyncimage), using [asyncImageURLSession(\_:)](https://developer.apple.com/documentation/swiftui/view/asyncimageurlsession%28_:%29), [init(request:scale:)](https://developer.apple.com/documentation/swiftui/asyncimage/init%28request:scale:%29), [init(request:scale:content:placeholder:)](https://developer.apple.com/documentation/swiftui/asyncimage/init%28request:scale:content:placeholder:%29), and [init(request:scale:transaction:content:)](https://developer.apple.com/documentation/swiftui/asyncimage/init%28request:scale:transaction:content:%29).

<a id="Toolbars"></a>

### Toolbars

- Use the [visibilityPriority(\_:)](https://developer.apple.com/documentation/swiftui/toolbarcontent/visibilitypriority%28_:%29) modifier to prioritize important toolbar actions so SwiftUI keeps them visible as space shrinks, moving lower-priority items to the overflow menu first.
- Send secondary toolbar actions, like archive or delete, directly to the overflow menu by wrapping them in a [ToolbarOverflowMenu](https://developer.apple.com/documentation/swiftui/toolbaroverflowmenu), keeping your primary toolbar focused on key actions.
- Anchor a toolbar item to the trailing edge of the top bar using the [topBarPinnedTrailing](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/topbarpinnedtrailing) placement so it stays in place even as other items shift or move to the overflow menu.
- Control how toolbars minimize in response to scrolling using the doc://com.apple.documentation/documentation/swiftui/view/toolbarminimizebehavior(\_:for:) modifier.

<a id="Documents"></a>

### Documents

- Build document-based apps that read directly from a file URL by conforming your document class to [ReadableDocument](https://developer.apple.com/documentation/swiftui/readabledocument), enabling access to large files and integration with URL-based frameworks.
- Add write support to a URL-based document by also conforming to [WritableDocument](https://developer.apple.com/documentation/swiftui/writabledocument).
- Implement custom reading and writing logic with [DocumentReader](https://developer.apple.com/documentation/swiftui/documentreader) and [DocumentWriter](https://developer.apple.com/documentation/swiftui/documentwriter), or use [FileWrapperDocumentReader](https://developer.apple.com/documentation/swiftui/filewrapperdocumentreader) and [FileWrapperDocumentWriter](https://developer.apple.com/documentation/swiftui/filewrapperdocumentwriter) for simpler file-wrapper-based cases.
- Access the document’s file URL and last modification date, and coordinate additional file access, using [URLDocumentConfiguration](https://developer.apple.com/documentation/swiftui/urldocumentconfiguration).
- Export a [WritableDocument](https://developer.apple.com/documentation/swiftui/writabledocument) to disk using the [fileExporter(isPresented:document:contentType:defaultFilename:onCompletion:onCancellation:)](https://developer.apple.com/documentation/swiftui/view/fileexporter%28ispresented:document:contenttype:defaultfilename:oncompletion:oncancellation:%29) modifier.

<a id="Tab-bars"></a>

### Tab bars

- Set the [prominent](https://developer.apple.com/documentation/swiftui/tabrole/prominent) role on a tab to place the tab in a separate, trailing position of the tab bar.

<a id="Alerts-and-confirmation-dialogs"></a>

### Alerts and confirmation dialogs

- Present an alert or confirmation dialog from an optional data item or error object, and use that data to produce the content and title:

  - [alert(\_:item:actions:)](https://developer.apple.com/documentation/swiftui/view/alert%28_:item:actions:%29)
  - [alert(error:actions:)](https://developer.apple.com/documentation/swiftui/view/alert%28error:actions:%29)
  - [alert(\_:item:actions:message:)](https://developer.apple.com/documentation/swiftui/view/alert%28_:item:actions:message:%29)
  - [alert(error:actions:message:)](https://developer.apple.com/documentation/swiftui/view/alert%28error:actions:message:%29)
  - [confirmationDialog(\_:item:titleVisibility:actions:)](https://developer.apple.com/documentation/swiftui/view/confirmationdialog%28_:item:titlevisibility:actions:%29)
  - [confirmationDialog(\_:item:titleVisibility:actions:message:)](https://developer.apple.com/documentation/swiftui/view/confirmationdialog%28_:item:titlevisibility:actions:message:%29)

<a id="Gestures"></a>

### Gestures

- Specify the sources of gesture input to recognize, such as direct or indirect touches, pencil, or pointer. The following gestures have initializers that you can use to specify the sources of gesture input: [DragGesture](https://developer.apple.com/documentation/swiftui/draggesture), [LongPressGesture](https://developer.apple.com/documentation/swiftui/longpressgesture), [MagnifyGesture](https://developer.apple.com/documentation/swiftui/magnifygesture), [RotateGesture](https://developer.apple.com/documentation/swiftui/rotategesture), [RotateGesture3D](https://developer.apple.com/documentation/swiftui/rotategesture3d), [SpatialEventGesture](https://developer.apple.com/documentation/swiftui/spatialeventgesture), [SpatialTapGesture](https://developer.apple.com/documentation/swiftui/spatialtapgesture), [TapGesture](https://developer.apple.com/documentation/swiftui/tapgesture), [WindowDragGesture](https://developer.apple.com/documentation/swiftui/windowdraggesture). For more information see [GestureInputKinds](https://developer.apple.com/documentation/swiftui/gestureinputkinds).

<a id="June-2025"></a>

## June 2025

<a id="General"></a>

### General

- Apply Liquid Glass effects to views using [glassEffect(\_:in:)](https://developer.apple.com/documentation/swiftui/view/glasseffect%28_:in:%29).
- Use [glass](https://developer.apple.com/documentation/swiftui/primitivebuttonstyle/glass) with the [buttonStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/buttonstyle%28_:%29-66fbx) modifier to apply Liquid Glass to instances of `Button`.
- [ToolbarSpacer](https://developer.apple.com/documentation/swiftui/toolbarspacer) creates a visual break between items in toolbars containing Liquid Glass.
- Use [scrollEdgeEffectStyle(\_:for:)](https://developer.apple.com/documentation/swiftui/view/scrolledgeeffectstyle%28_:for:%29) to configure the scroll edge effect style for scroll views.
- [backgroundExtensionEffect()](https://developer.apple.com/documentation/swiftui/view/backgroundextensioneffect%28%29) duplicates, mirrors, and blurs views placed around edges with available safe areas.
- Set behavior for tab bar minimization with [tabBarMinimizeBehavior(\_:)](https://developer.apple.com/documentation/swiftui/view/tabbarminimizebehavior%28_:%29).
- Set the [search](https://developer.apple.com/documentation/swiftui/tabrole/search) role on a tab to take someone to a search tab and have a search field take the place of the tab bar.
- Adjust the content of accessory views based on the placement in a tab view with [TabViewBottomAccessoryPlacement](https://developer.apple.com/documentation/swiftui/tabviewbottomaccessoryplacement).
- Connect a [WebView](../webkit/webview-swift.struct.md) with a [WebPage](../webkit/webpage.md) to fully control the browsing experience in your app.
- Drag multiple items using the [draggable(containerItemID:containerNamespace:)](https://developer.apple.com/documentation/swiftui/view/draggable%28containeritemid:containernamespace:%29) modifier. Make a view a container for draggable views using the [dragContainer(for:itemID:in:\_:)](https://developer.apple.com/documentation/swiftui/view/dragcontainer%28for:itemid:in:_:%29) modifier.
- Use the [Animatable()](https://developer.apple.com/documentation/swiftui/animatable%28%29) macro to have SwiftUI synthesize custom animatable data properties.
- [Slider](https://developer.apple.com/documentation/swiftui/slider) now supports tick marks. Tick marks appear automatically when initializing a `Slider` with the `step` parameter.
- Use [windowResizeAnchor(\_:)](https://developer.apple.com/documentation/swiftui/view/windowresizeanchor%28_:%29) to set the window anchor point when a window must resize.

<a id="Text"></a>

### Text

- [TextEditor](https://developer.apple.com/documentation/swiftui/texteditor) now supports [AttributedString](https://developer.apple.com/documentation/foundation/attributedstring).
- Handle text selection with attributed text using [AttributedTextSelection](https://developer.apple.com/documentation/swiftui/attributedtextselection).
- [AttributedTextFormattingDefinition](https://developer.apple.com/documentation/swiftui/attributedtextformattingdefinition) defines how text can be styled in specific contexts.
- Use [FindContext](https://developer.apple.com/documentation/swiftui/findcontext) to create a find navigator in views that support text editing.

<a id="Accessibility"></a>

### Accessibility

- Support Assistive Access in iOS and iPadOS scenes with [AssistiveAccess](https://developer.apple.com/documentation/swiftui/assistiveaccess).

<a id="HDR"></a>

### HDR

- [Color.ResolvedHDR](https://developer.apple.com/documentation/swiftui/color/resolvedhdr) is a set of RGBA values that represent a color that can be shown, including HDR headroom information.

<a id="UIKit-and-AppKit-integration"></a>

### UIKit and AppKit integration

- Host and present SwiftUI scenes in UIKit with [UIHostingSceneDelegate](https://developer.apple.com/documentation/swiftui/uihostingscenedelegate) and in AppKit with [NSHostingSceneRepresentation](https://developer.apple.com/documentation/swiftui/nshostingscenerepresentation).
- Incorporate gesture recognizers in SwiftUI views from AppKit with [NSGestureRecognizerRepresentable](https://developer.apple.com/documentation/swiftui/nsgesturerecognizerrepresentable).

<a id="Immersive-spaces"></a>

### Immersive spaces

- Manipulate views using common hand gestures with [manipulable(coordinateSpace:operations:inertia:isEnabled:onChanged:)](https://developer.apple.com/documentation/swiftui/view/manipulable%28coordinatespace:operations:inertia:isenabled:onchanged:%29).
- Snap volumes to horizontal surfaces and windows to vertical surfaces using [SurfaceSnappingInfo](https://developer.apple.com/documentation/swiftui/surfacesnappinginfo).
- Use [RemoteImmersiveSpace](https://developer.apple.com/documentation/swiftui/remoteimmersivespace) to render stereo content from your Mac app on Apple Vision Pro.
- Use [SpatialContainer](https://developer.apple.com/documentation/swiftui/spatialcontainer) to create a layout container that aligns overlapping content in 3D space.
- Depth-based variants of modifiers allow easier volumetric layouts in SwiftUI. For example, [aspectRatio3D(\_:contentMode:)](https://developer.apple.com/documentation/swiftui/view/aspectratio3d%28_:contentmode:%29), [rotation3DLayout(\_:)](https://developer.apple.com/documentation/swiftui/view/rotation3dlayout%28_:%29), and [depthAlignment(\_:)](https://developer.apple.com/documentation/swiftui/layout/depthalignment%28_:%29).

<a id="June-2024"></a>

## June 2024

<a id="Volumes"></a>

### Volumes

- Specify the alignment of a volume when moved in the world using the [volumeWorldAlignment(\_:)](https://developer.apple.com/documentation/swiftui/scene/volumeworldalignment%28_:%29) scene modifier.
- Specify the default world scaling behavior of your scene using the [defaultWorldScaling(\_:)](https://developer.apple.com/documentation/swiftui/scene/defaultworldscaling%28_:%29) scene modifier.
- Adjust the visibilty of a volume’s baseplate using the [volumeBaseplateVisibility(\_:)](https://developer.apple.com/documentation/swiftui/view/volumebaseplatevisibility%28_:%29) view modifier.
- Define a custom action to execute when the viewpoint of a volume changes using the [onVolumeViewpointChange(updateStrategy:initial:\_:)](https://developer.apple.com/documentation/swiftui/view/onvolumeviewpointchange%28updatestrategy:initial:_:%29) view modifier.

<a id="Windows"></a>

### Windows

- Change the default initial size and position of a window using the [defaultWindowPlacement(\_:)](https://developer.apple.com/documentation/swiftui/scene/defaultwindowplacement%28_:%29) modifier.
- Change the default behavior for how windows behave when performing a zoom using [WindowIdealSize](https://developer.apple.com/documentation/swiftui/windowidealsize) and provide the placement for the zoomed window with the [windowIdealPlacement(\_:)](https://developer.apple.com/documentation/swiftui/scene/windowidealplacement%28_:%29) modifier.
- Create utility windows in SwiftUI using the new [UtilityWindow](https://developer.apple.com/documentation/swiftui/utilitywindow) scene type and toggle the window’s visibility using the [WindowVisibilityToggle](https://developer.apple.com/documentation/swiftui/windowvisibilitytoggle).
- Customize the style of a window using the new [window](https://developer.apple.com/documentation/swiftui/containerbackgroundplacement/window) container background placement, the [toolbar(removing:)](https://developer.apple.com/documentation/swiftui/view/toolbar%28removing:%29) view modifier, and the [plain](https://developer.apple.com/documentation/swiftui/windowstyle/plain) window style.
- Set the default launch behavior for a scene using the [defaultLaunchBehavior(\_:)](https://developer.apple.com/documentation/swiftui/scene/defaultlaunchbehavior%28_:%29) modifier.
- Replace one scene with another using the [pushWindow](https://developer.apple.com/documentation/swiftui/environmentvalues/pushwindow) method.

<a id="Immersive-spaces"></a>

### Immersive spaces

- Add an action to perform when the state of the immersion changes using the [onImmersionChange(initial:\_:)](https://developer.apple.com/documentation/swiftui/view/onimmersionchange%28initial:_:%29) modifier.
- Apply a custom color or dim a passthrough video in an immersive space using the [colorMultiply(\_:)](https://developer.apple.com/documentation/swiftui/surroundingseffect/colormultiply%28_:%29) and [dim(intensity:)](https://developer.apple.com/documentation/swiftui/surroundingseffect/dim%28intensity:%29) initializers.

<a id="Documents"></a>

### Documents

- Customize the launch experience of document-based applications using [DocumentGroupLaunchScene](https://developer.apple.com/documentation/swiftui/documentgrouplaunchscene) and [NewDocumentButton](https://developer.apple.com/documentation/swiftui/newdocumentbutton).

<a id="Navigation"></a>

### Navigation

- Specify the appearance and interaction of [TabView](https://developer.apple.com/documentation/swiftui/tabview) with the [tabViewStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/tabviewstyle%28_:%29)  modifier using values like [sidebarAdaptable](https://developer.apple.com/documentation/swiftui/tabviewstyle/sidebaradaptable), [tabBarOnly](https://developer.apple.com/documentation/swiftui/tabviewstyle/tabbaronly), and [grouped](https://developer.apple.com/documentation/swiftui/tabviewstyle/grouped).
- Build hierarchy by nesting tabs as a tab item within [TabSection](https://developer.apple.com/documentation/swiftui/tabsection).
- Enable people to customize a [TabView](https://developer.apple.com/documentation/swiftui/tabview) using the [tabViewCustomization(\_:)](https://developer.apple.com/documentation/swiftui/view/tabviewcustomization%28_:%29) modifier and persist customization state in [AppStorage](https://developer.apple.com/documentation/swiftui/appstorage) with [TabViewCustomization](https://developer.apple.com/documentation/swiftui/tabviewcustomization).

<a id="Modal-presentations"></a>

### Modal presentations

- Use built-in presentation sizes for sheets like [form](https://developer.apple.com/documentation/swiftui/presentationsizing/form) or [page](https://developer.apple.com/documentation/swiftui/presentationsizing/page) with the [presentationSizing(\_:)](https://developer.apple.com/documentation/swiftui/view/presentationsizing%28_:%29) modifier or create custom sized sheets using the [PresentationSizing](https://developer.apple.com/documentation/swiftui/presentationsizing) protocol.

<a id="Toolbars"></a>

### Toolbars

- Specify the display mode of toolbars in macOS using the [ToolbarLabelStyle](https://developer.apple.com/documentation/swiftui/toolbarlabelstyle) type.
- Configure the foreground style in the toolbar environment in watchOS using the [toolbarForegroundStyle(\_:for:)](https://developer.apple.com/documentation/swiftui/view/toolbarforegroundstyle%28_:for:%29) view modifier.
- Anchor ornaments relative to the depth of your volume — in addition to the height and width — using the [scene(\_:)](https://developer.apple.com/documentation/swiftui/ornamentattachmentanchor/scene%28_:%29-1l8wf) method that takes a [UnitPoint3D](https://developer.apple.com/documentation/swiftui/unitpoint3d).

<a id="Views"></a>

### Views

- Create custom container views like [Picker](https://developer.apple.com/documentation/swiftui/picker), [List](https://developer.apple.com/documentation/swiftui/list), and [TabView](https://developer.apple.com/documentation/swiftui/tabview) using new [Group](https://developer.apple.com/documentation/swiftui/group) and [ForEach](https://developer.apple.com/documentation/swiftui/foreach) initializers, like [init(subviews:transform:)](https://developer.apple.com/documentation/swiftui/group/init%28subviews:transform:%29) and [init(subviews:content:)](https://developer.apple.com/documentation/swiftui/foreach/init%28subviews:content:%29), respectively.
- Declare a custom container value by defining a key that conforms to the [ContainerValueKey](https://developer.apple.com/documentation/swiftui/containervaluekey) protocol, and set the container value for a view using the [containerValue(\_:\_:)](https://developer.apple.com/documentation/swiftui/view/containervalue%28_:_:%29) modifier.
- Create [EnvironmentValues](https://developer.apple.com/documentation/swiftui/environmentvalues), [Transaction](https://developer.apple.com/documentation/swiftui/transaction), [ContainerValues](https://developer.apple.com/documentation/swiftui/containervalues), and [FocusedValues](https://developer.apple.com/documentation/swiftui/focusedvalues) entries by using the [Entry()](https://developer.apple.com/documentation/swiftui/entry%28%29) macro to the variable declaration.

<a id="Animation"></a>

### Animation

- Customize the transition when pushing a view onto a navigation stack or presenting a view with the [navigationTransition(\_:)](https://developer.apple.com/documentation/swiftui/view/navigationtransition%28_:%29) view modifier.
- Add new symbols effects and configurations like [wiggle](https://developer.apple.com/documentation/symbols/symboleffect/wiggle), [rotate](https://developer.apple.com/documentation/symbols/symboleffect/rotate), and [breathe](https://developer.apple.com/documentation/symbols/symboleffect/breathe) using the [symbolEffect(\_:options:value:)](https://developer.apple.com/documentation/swiftui/view/symboleffect%28_:options:value:%29) modifier.

<a id="Text-input-and-output"></a>

### Text input and output

- Add text suggestions support to any text field using [textInputSuggestions(\_:)](https://developer.apple.com/documentation/swiftui/view/textinputsuggestions%28_:%29) and [textInputCompletion(\_:)](https://developer.apple.com/documentation/swiftui/view/textinputcompletion%28_:%29) view modifiers.
- Access and modify selected text using a new [TextSelection](https://developer.apple.com/documentation/swiftui/textselection) binding for [TextField](https://developer.apple.com/documentation/swiftui/textfield) and [TextEditor](https://developer.apple.com/documentation/swiftui/texteditor).
- Bind to the focus state of an app’s search field using the [searchFocused(\_:equals:)](https://developer.apple.com/documentation/swiftui/view/searchfocused%28_:equals:%29) view modifier.

<a id="Drawing-and-graphics"></a>

### Drawing and graphics

- Precompile shaders at build time using the [compile(as:)](https://developer.apple.com/documentation/swiftui/shader/compile%28as:%29) method.
- Create mesh gradients with a grid of points and colors using the new [MeshGradient](https://developer.apple.com/documentation/swiftui/meshgradient) type.
- Extend SwiftUI Text views with custom rendering effects and interaction behaviors using [TextAttribute](https://developer.apple.com/documentation/swiftui/textattribute), [Text.Layout](https://developer.apple.com/documentation/swiftui/text/layout), and [TextRenderer](https://developer.apple.com/documentation/swiftui/textrenderer).
- Create a new [Color](https://developer.apple.com/documentation/swiftui/color) by mixing two colors using the [mix(with:by:in:)](https://developer.apple.com/documentation/swiftui/color/mix%28with:by:in:%29) method.

<a id="Layout"></a>

### Layout

- Enable custom spacing between views in a [ZStack](https://developer.apple.com/documentation/swiftui/zstack) along the depth axis with the [init(alignment:spacing:content:)](https://developer.apple.com/documentation/swiftui/zstack/init%28alignment:spacing:content:%29) initializer.

<a id="Scrolling"></a>

### Scrolling

- Scroll to a view, offset, or edge in a scroll view using the [scrollPosition(\_:anchor:)](https://developer.apple.com/documentation/swiftui/view/scrollposition%28_:anchor:%29) view modifier and specifying one of the [ScrollPosition](https://developer.apple.com/documentation/swiftui/scrollposition) values.
- Limit the number of views that can be scrolled by a single interaction using the limit behavior value [alwaysByFew](https://developer.apple.com/documentation/swiftui/viewalignedscrolltargetbehavior/limitbehavior/alwaysbyfew) or [alwaysByOne](https://developer.apple.com/documentation/swiftui/viewalignedscrolltargetbehavior/limitbehavior/alwaysbyone).
- Add an action to be called when a view crosses a provided threshold using the [onScrollVisibilityChange(threshold:\_:)](https://developer.apple.com/documentation/swiftui/view/onscrollvisibilitychange%28threshold:_:%29) modifier.
- Access both the old and new values when a scroll view’s phase changes by using the [onScrollPhaseChange(\_:)](https://developer.apple.com/documentation/swiftui/view/onscrollphasechange%28_:%29-7mica) modifier.

<a id="Gestures"></a>

### Gestures

- Conditionally disable a gesture using the `isEnabled` parameter in a modifier like [gesture(\_:isEnabled:)](https://developer.apple.com/documentation/swiftui/view/gesture%28_:isenabled:%29).
- Create extra drag areas of a window in macOS when you add a [WindowDragGesture](https://developer.apple.com/documentation/swiftui/windowdraggesture) gesture.
- Create a hand gesture shortcut for Double Tap in watchOS using the [HandGestureShortcut](https://developer.apple.com/documentation/swiftui/handgestureshortcut) structure.
- Enable whether gestures can handle events that activate the containing window using the [allowsWindowActivationEvents(\_:)](https://developer.apple.com/documentation/swiftui/view/allowswindowactivationevents%28_:%29) view modifier.

<a id="Input-events"></a>

### Input events

- Create a group of hover effects that activate together using [HoverEffectGroup](https://developer.apple.com/documentation/swiftui/hovereffectgroup) and apply them to a view using the [hoverEffect(in:isEnabled:body:)](https://developer.apple.com/documentation/swiftui/view/hovereffect%28in:isenabled:body:%29) view modifier.
- Customize the appearance of the system pointer in macOS, iPadOS, and visionOS with new pointer styles using [pointerStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/pointerstyle%28_:%29) or the visibility with the [pointerVisibility(\_:)](https://developer.apple.com/documentation/swiftui/view/pointervisibility%28_:%29) modifier.
- Access keyboard modifier flags using the [onModifierKeysChanged(mask:initial:\_:)](https://developer.apple.com/documentation/swiftui/view/onmodifierkeyschanged%28mask:initial:_:%29).
- Replace the primary view with one or more alternative views when pressing a specified set of modifier keys using the [modifierKeyAlternate(\_:\_:)](https://developer.apple.com/documentation/swiftui/view/modifierkeyalternate%28_:_:%29) view modifier.
- Enable the hand pointer for custom drawing and markup applications using the [handPointerBehavior(\_:)](https://developer.apple.com/documentation/swiftui/view/handpointerbehavior%28_:%29) modifier.

<a id="Previews-in-Xcode"></a>

### Previews in Xcode

- Write dynamic properties inline in previews using the new [Previewable()](https://developer.apple.com/documentation/swiftui/previewable%28%29) macro.
- Inject shared environment objects, model containers, or other dependencies into previews using the [PreviewModifier](https://developer.apple.com/documentation/swiftui/previewmodifier) protocol.

<a id="Accessibility"></a>

### Accessibility

- Specify that your accessibility element behaves as a tab bar using the [isTabBar](https://developer.apple.com/documentation/swiftui/accessibilitytraits/istabbar) accessibility trait with the [accessibilityAddTraits(\_:)](https://developer.apple.com/documentation/swiftui/view/accessibilityaddtraits%28_:%29) modifier. In UIKit, use [tabBar](https://developer.apple.com/documentation/uikit/uiaccessibilitytraits/tabbar).
- Generate a localized description of a color in a string interpolation by adding `accessibilityName:`, such as `"\(accessibilityName: myColor)"`. Pass that string to any accessibility modifier.

<a id="Framework-interoperability"></a>

### Framework interoperability

- Reuse existing UIKit gesture recognizer code in SwiftUI. In SwiftUI, create UIKit gesture recognizers using [UIGestureRecognizerRepresentable](https://developer.apple.com/documentation/swiftui/uigesturerecognizerrepresentable). In UIKit, refer to SwiftUI gestures by name using [name](https://developer.apple.com/documentation/uikit/uigesturerecognizer/name).
- Share menu content definitions between SwiftUI and AppKit by using the [NSHostingMenu](https://developer.apple.com/documentation/swiftui/nshostingmenu) in your AppKit view hierarchy.

---

<a id="June-2023-visionOS"></a>

## June 2023, visionOS

<a id="Scenes"></a>

### Scenes

- Create a volume that can display 3D models by applying the [volumetric](https://developer.apple.com/documentation/swiftui/windowstyle/volumetric) window style to an app’s window.
- Make use of a Full Space by opening an [ImmersiveSpace](https://developer.apple.com/documentation/swiftui/immersivespace) scene. You can use the [mixed](https://developer.apple.com/documentation/swiftui/immersionstyle/mixed) immersion style to place objects in a person’s surroundings, or the [full](https://developer.apple.com/documentation/swiftui/immersionstyle/full) style to completely control the visual experience.
- Display 3D models in a volume or a Full Space using RealityKit entities that you load with that framework’s [Model3D](https://developer.apple.com/documentation/realitykit/model3d) or [RealityView](https://developer.apple.com/documentation/realitykit/realityview) structure.

<a id="Toolbars-and-ornaments"></a>

### Toolbars and ornaments

- Display a toolbar item in an ornament using the [bottomOrnament](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/bottomornament) toolbar item placement.
- Add an ornament to a window directly using the [ornament(visibility:attachmentAnchor:contentAlignment:ornament:)](https://developer.apple.com/documentation/swiftui/view/ornament%28visibility:attachmentanchor:contentalignment:ornament:%29) view modifier.

<a id="Drawing-and-graphics"></a>

### Drawing and graphics

- Detect view geometry in three dimensions using a [GeometryReader3D](https://developer.apple.com/documentation/swiftui/geometryreader3d).
- Add a 3D visual effect using the [visualEffect3D(\_:)](https://developer.apple.com/documentation/swiftui/view/visualeffect3d%28_:%29) view modifier.
- Rotate or scale in three dimensions with view modifiers like [rotation3DEffect(\_:anchor:)](https://developer.apple.com/documentation/swiftui/view/rotation3deffect%28_:anchor:%29) and [scaleEffect(x:y:z:anchor:)](https://developer.apple.com/documentation/swiftui/view/scaleeffect%28x:y:z:anchor:%29), respectively.
- Convert between display points and physical distances using a [PhysicalMetricsConverter](https://developer.apple.com/documentation/swiftui/physicalmetricsconverter).

<a id="View-configuration"></a>

### View configuration

- Add a glass background effect to a view using the [glassBackgroundEffect(displayMode:)](https://developer.apple.com/documentation/swiftui/view/glassbackgroundeffect%28displaymode:%29) view modifier.
- Dim passthrough when appropriate by applying a [preferredSurroundingsEffect(\_:)](https://developer.apple.com/documentation/swiftui/view/preferredsurroundingseffect%28_:%29) modifier.

<a id="View-layout"></a>

### View layout

- Make 3D adjustments to layout with view modifiers like [offset(z:)](https://developer.apple.com/documentation/swiftui/view/offset%28z:%29), [padding3D(\_:)](https://developer.apple.com/documentation/swiftui/view/padding3d%28_:%29-6bex4), and [frame(depth:alignment:)](https://developer.apple.com/documentation/swiftui/view/frame%28depth:alignment:%29).

<a id="Gestures"></a>

### Gestures

- Enable people to rotate objects in three dimensions when you add a [RotateGesture3D](https://developer.apple.com/documentation/swiftui/rotategesture3d) gesture.

---

<a id="June-2023"></a>

## June 2023

<a id="Scenes"></a>

### Scenes

- Close windows by their identifier using the [dismissWindow](https://developer.apple.com/documentation/swiftui/environmentvalues/dismisswindow) action stored in the environment.
- Enable people to open a settings window by presenting a [SettingsLink](https://developer.apple.com/documentation/swiftui/settingslink) button.

<a id="Navigation"></a>

### Navigation

- Control views of a navigation split view or stack using a new overload of the [navigationDestination(item:destination:)](https://developer.apple.com/documentation/swiftui/view/navigationdestination%28item:destination:%29) view modifier.
- Manage column visibility of a navigation split view using new overloads of the view’s initializer, like [init(columnVisibility:preferredCompactColumn:sidebar:content:detail:)](https://developer.apple.com/documentation/swiftui/navigationsplitview/init%28columnvisibility:preferredcompactcolumn:sidebar:content:detail:%29).

<a id="Modal-presentations"></a>

### Modal presentations

- Use new overloads of the file export, import, and move modifiers, like [fileExporter(isPresented:document:contentTypes:defaultFilename:onCompletion:onCancellation:)](https://developer.apple.com/documentation/swiftui/view/fileexporter%28ispresented:document:contenttypes:defaultfilename:oncompletion:oncancellation:%29-34bd6), to access new file management features. For example, you can:

  - Configure a file import or export dialog to open on a default directory, enable only certain file types, display hidden files, and so on.
  - Retain file interface configuration that a person chooses from one presentation to the next.
  - Export types that conform to the [Transferable](https://developer.apple.com/documentation/coretransferable/transferable) protocol.
- Specify a dialog severity using the [dialogSeverity(\_:)](https://developer.apple.com/documentation/swiftui/view/dialogseverity%28_:%29) view modifier.
- Provide a custom icon for a dialog using the [dialogIcon(\_:)](https://developer.apple.com/documentation/swiftui/view/dialogicon%28_:%29) modifier.
- Enable people to suppress dialogs using one of the dialog suppression modifiers, like [dialogSuppressionToggle(isSuppressed:)](https://developer.apple.com/documentation/swiftui/view/dialogsuppressiontoggle%28issuppressed:%29).

<a id="Toolbars"></a>

### Toolbars

- Configure the toolbar title display size using the [toolbarTitleDisplayMode(\_:)](https://developer.apple.com/documentation/swiftui/view/toolbartitledisplaymode%28_:%29) modifier.

<a id="Search"></a>

### Search

- Present search programmatically using a binding to a new `isPresented` parameter available in some searchable view modifiers, like [searchable(text:isPresented:placement:prompt:)](https://developer.apple.com/documentation/swiftui/view/searchable%28text:ispresented:placement:prompt:%29-1hn4y).
- Create mutable search tokens by providing a binding to the input of the `token` closure in the applicable searchable view modifiers, like [searchable(text:editableTokens:isPresented:placement:prompt:token:)](https://developer.apple.com/documentation/swiftui/view/searchable%28text:editabletokens:ispresented:placement:prompt:token:%29-2ilmg).

<a id="Data-and-storage"></a>

### Data and storage

- Bridge between SwiftUI environment keys and UIKit traits more easily using the [UITraitBridgedEnvironmentKey](https://developer.apple.com/documentation/swiftui/uitraitbridgedenvironmentkey) protocol.
- Get better performance when you share data throughout your app by using the new [Observable()](https://developer.apple.com/documentation/observation/observable%28%29) macro.
- Access both the old and new values of a value that changes when processing the completion closure of the [onChange(of:initial:\_:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:initial:_:%29-4psgg) view modifier.

<a id="Views"></a>

### Views

- Display a standard interface when a resource, like search results or a network connection, isn’t available using the [ContentUnavailableView](https://developer.apple.com/documentation/swiftui/contentunavailableview) view type.
- Display a standard inspector interface with a platform-appropriate appearance by applying the [inspector(isPresented:content:)](https://developer.apple.com/documentation/swiftui/view/inspector%28ispresented:content:%29) modifier.

<a id="Animation"></a>

### Animation

- Perform an action when an animation completes by specifying a completion closure to the [withAnimation(\_:completionCriteria:\_:completion:)](https://developer.apple.com/documentation/swiftui/withanimation%28_:completioncriteria:_:completion:%29) view modifier.
- Define custom animation behaviors by creating a type that conforms to the [CustomAnimation](https://developer.apple.com/documentation/swiftui/customanimation) protocol.
- Perform animations that progress through predefined phases using the [PhaseAnimator](https://developer.apple.com/documentation/swiftui/phaseanimator) structure, or according to a set of time-based keyframes by using the [Keyframes](https://developer.apple.com/documentation/swiftui/keyframes) protocol.
- Specify information about a change in state — for example, to request a particular animation — using custom [TransactionKey](https://developer.apple.com/documentation/swiftui/transactionkey) instances.
- Design custom animation curves using [UnitCurve](https://developer.apple.com/documentation/swiftui/unitcurve).
- Apply streamlined spring parameters, now standardized across all Apple frameworks, using the new [spring(duration:bounce:blendDuration:)](https://developer.apple.com/documentation/swiftui/animation/spring%28duration:bounce:blendduration:%29) animation. You can also use the [Spring](https://developer.apple.com/documentation/swiftui/spring) structure as a convenience to represent a spring’s motion.

<a id="Text-input-and-output"></a>

### Text input and output

- Indicate the language that appears in a specific [Text](https://developer.apple.com/documentation/swiftui/text) view so that SwiftUI can help to avoid clipping and collision of text, and perform proper line breaking and hyphenation using the [typesettingLanguage(\_:isEnabled:)](https://developer.apple.com/documentation/swiftui/view/typesettinglanguage%28_:isenabled:%29-4ldzm) view modifier.
- Scale text semantically, for example by labeling it as having a secondary text scale, using the [textScale(\_:isEnabled:)](https://developer.apple.com/documentation/swiftui/view/textscale%28_:isenabled:%29) modifier.

<a id="Shapes"></a>

### Shapes

- Apply more than one [fill(\_:style:)](https://developer.apple.com/documentation/swiftui/shape/fill%28_:style:%29-3y2ud) or [stroke(\_:style:antialiased:)](https://developer.apple.com/documentation/swiftui/shape/stroke%28_:style:antialiased:%29) modifier to a single [Shape](https://developer.apple.com/documentation/swiftui/shape).
- Apply Boolean operations to both shapes and paths, like [intersection(\_:eoFill:)](https://developer.apple.com/documentation/swiftui/shape/intersection%28_:eofill:%29) and [union(\_:eoFill:)](https://developer.apple.com/documentation/swiftui/shape/union%28_:eofill:%29).
- Use predefined shape styles, like [rect](https://developer.apple.com/documentation/swiftui/shape/rect), to simplify your code.
- Create rounded rectangles with uneven corners using [rect(topLeadingRadius:bottomLeadingRadius:bottomTrailingRadius:topTrailingRadius:style:)](https://developer.apple.com/documentation/swiftui/shape/rect%28topleadingradius:bottomleadingradius:bottomtrailingradius:toptrailingradius:style:%29).

<a id="Drawing-and-graphics"></a>

### Drawing and graphics

- Create fully customizable, high-performance graphics by drawing with Metal shaders inside a SwiftUI app using a [Shader](https://developer.apple.com/documentation/swiftui/shader) structure.
- Configure an image with a specific dynamic range by applying the [allowedDynamicRange(\_:)](https://developer.apple.com/documentation/swiftui/view/alloweddynamicrange%28_:%29) view modifier.
- Compose effects that you apply to a view based on some aspect of the geometry of the view using the [visualEffect(\_:)](https://developer.apple.com/documentation/swiftui/view/visualeffect%28_:%29) modifier. For example, you can apply a blur that varies depending on the view’s position in the display.

<a id="Layout"></a>

### Layout

- Define custom coordinate spaces using the [CoordinateSpaceProtocol](https://developer.apple.com/documentation/swiftui/coordinatespaceprotocol) with new [GeometryProxy](https://developer.apple.com/documentation/swiftui/geometryproxy) methods, like [bounds(of:)](https://developer.apple.com/documentation/swiftui/geometryproxy/bounds%28of:%29) and [frame(in:)](https://developer.apple.com/documentation/swiftui/geometryproxy/frame%28in:%29-68tks), to get the dimensions of containers.
- Create a frame for a view that lays out its content based on characteristics of the container view using [containerRelativeFrame(\_:alignment:)](https://developer.apple.com/documentation/swiftui/view/containerrelativeframe%28_:alignment:%29).
- Set the background of a container view using the [containerBackground(\_:for:)](https://developer.apple.com/documentation/swiftui/view/containerbackground%28_:for:%29) view modifier.

<a id="Lists-and-tables"></a>

### Lists and tables

- Disable selectability of an item in a [List](https://developer.apple.com/documentation/swiftui/list) or [Table](https://developer.apple.com/documentation/swiftui/table) by applying the [selectionDisabled(\_:)](https://developer.apple.com/documentation/swiftui/view/selectiondisabled%28_:%29) modifier.
- Collapse or expand a [Section](https://developer.apple.com/documentation/swiftui/section) of a list or table using the `isExpanded` binding in the section’s initializer.
- Configure row or section spacing using the [listRowSpacing(\_:)](https://developer.apple.com/documentation/swiftui/view/listrowspacing%28_:%29) and [listSectionSpacing(\_:)](https://developer.apple.com/documentation/swiftui/view/listsectionspacing%28_:%29-5t518) modifiers, respectively.
- Set the prominence of a badge using the [badgeProminence(\_:)](https://developer.apple.com/documentation/swiftui/view/badgeprominence%28_:%29) view modifier.
- Configure alternating row backgrounds using the [alternatingRowBackgrounds(\_:)](https://developer.apple.com/documentation/swiftui/view/alternatingrowbackgrounds%28_:%29) modifier.
- Customize table column visibility and reordering using the [TableColumnCustomization](https://developer.apple.com/documentation/swiftui/tablecolumncustomization) structure.
- Add hierarchical rows to a table using the [DisclosureTableRow](https://developer.apple.com/documentation/swiftui/disclosuretablerow) structure, or recursively hierarchical rows using the [OutlineGroup](https://developer.apple.com/documentation/swiftui/outlinegroup) structure.
- Hide table column headers using the [tableColumnHeaders(\_:)](https://developer.apple.com/documentation/swiftui/view/tablecolumnheaders%28_:%29) modifier.

<a id="Scrolling"></a>

### Scrolling

- Read the position of a scroll view using one of the scroll position modifiers, like [scrollPosition(id:anchor:)](https://developer.apple.com/documentation/swiftui/view/scrollposition%28id:anchor:%29).
- Flash scroll indicators programmatically using a view modifier, like [scrollIndicatorsFlash(onAppear:)](https://developer.apple.com/documentation/swiftui/view/scrollindicatorsflash%28onappear:%29).
- Clip scroll views in custom ways after disabling default clipping using the [scrollClipDisabled(\_:)](https://developer.apple.com/documentation/swiftui/view/scrollclipdisabled%28_:%29) modifier.
- Create paged scroll views, aligned to either page or view boundaries, using the [scrollTargetBehavior(\_:)](https://developer.apple.com/documentation/swiftui/view/scrolltargetbehavior%28_:%29) view modifier.
- Create custom scroll behaviors using the [ScrollTargetBehavior](https://developer.apple.com/documentation/swiftui/scrolltargetbehavior) protocol.
- Control the insets of scrollable views using the [safeAreaPadding(\_:)](https://developer.apple.com/documentation/swiftui/view/safeareapadding%28_:%29-5lh9p) and [contentMargins(\_:\_:for:)](https://developer.apple.com/documentation/swiftui/view/contentmargins%28_:_:for:%29-1lt8b) view modifiers.
- Add effects to views as they scroll on- and offscreen using one of the [scrollTransition(\_:axis:transition:)](https://developer.apple.com/documentation/swiftui/view/scrolltransition%28_:axis:transition:%29) modifiers.
- Create a [TabView](https://developer.apple.com/documentation/swiftui/tabview) that supports vertical paging in watchOS by applying the [verticalPage](https://developer.apple.com/documentation/swiftui/tabviewstyle/verticalpage) tab view style.

<a id="Gestures"></a>

### Gestures

- Make smoother transitions between gestures and animations by using a new [velocity](https://developer.apple.com/documentation/swiftui/draggesture/value/velocity) property on the values associated with certain gestures and a [tracksVelocity](https://developer.apple.com/documentation/swiftui/transaction/tracksvelocity) property on [Transaction](https://developer.apple.com/documentation/swiftui/transaction).
- Gain access to more information, including both velocity and position, by migrating to the new [MagnifyGesture](https://developer.apple.com/documentation/swiftui/magnifygesture) and [RotateGesture](https://developer.apple.com/documentation/swiftui/rotategesture), which replace the now deprecated `MagnificationGesture` and `RotationGesture`.

<a id="Input-events"></a>

### Input events

- Enable a view that’s in focus to react directly to keyboard input by applying one of the [onKeyPress(\_:action:)](https://developer.apple.com/documentation/swiftui/view/onkeypress%28_:action:%29) view modifiers.
- Enable people to choose from a compact collection of items in a [Menu](https://developer.apple.com/documentation/swiftui/menu) by styling a [Picker](https://developer.apple.com/documentation/swiftui/picker) with the [palette](https://developer.apple.com/documentation/swiftui/pickerstyle/palette) style.
- Provide haptic or audio feedback in response to an event using one of the sensory feedback modifiers, like [sensoryFeedback(\_:trigger:)](https://developer.apple.com/documentation/swiftui/view/sensoryfeedback%28_:trigger:%29).
- Create buttons and toggles that perform an [AppIntent](https://developer.apple.com/documentation/appintents/appintent) in a widget, Live Activity, and other places using new initializers like [init(\_:intent:)](https://developer.apple.com/documentation/swiftui/button/init%28_:intent:%29-7urde) and [init(\_:isOn:intent:)](https://developer.apple.com/documentation/swiftui/toggle/init%28_:ison:intent:%29-4lsrf).

<a id="Focus"></a>

### Focus

- Distinguish between views for which focus serves different purposes, such as those that have a primary action like a button and those that take input like a text field, using the new [focusable(\_:interactions:)](https://developer.apple.com/documentation/swiftui/view/focusable%28_:interactions:%29) view modifier.
- Manage the effect that receiving focus has on a view using the [focusEffectDisabled(\_:)](https://developer.apple.com/documentation/swiftui/view/focuseffectdisabled%28_:%29) modifier.

<a id="Previews-in-Xcode"></a>

### Previews in Xcode

- Reduce the amount of boilerplate that you need to create Xcode previews by using the new [Preview(\_:traits:\_:body:)](https://developer.apple.com/documentation/swiftui/preview%28_:traits:_:body:%29) macro.

## See Also

### Technology and frameworks

- [Accelerate updates](accelerate.md): Learn about important changes to Accelerate.
- [Accessibility updates](accessibility.md): Learn about important changes to Accessibility.
- [ActivityKit updates](activitykit.md): Learn about important changes in ActivityKit.
- [AdAttributionKit Updates](adattributionkit.md): Learn about important changes to AdAttributionKit.
- [App Clips updates](appclips.md): Learn about important changes in App Clips.
- [App Intents updates](appintents.md): Learn about important changes in App Intents.
- [AppKit updates](appkit.md): Learn about important changes to AppKit.
- [Apple Intelligence updates](apple-intelligence.md): Learn about important changes to Apple Intelligence.
- [AppleMapsServerAPI Updates](applemapsserverapi.md): Learn about important changes to AppleMapsServerAPI.
- [Apple Pencil updates](applepencil.md): Learn about important changes to Apple Pencil.
- [ARKit updates](arkit.md): Learn about important changes to ARKit.
- [Audio Toolbox updates](audiotoolbox.md): Learn about important changes to Audio Toolbox.
- [AuthenticationServices updates](authenticationservices.md): Learn about important changes to AuthenticationServices.
- [AVFAudio updates](avfaudio.md): Learn about important changes to AVFAudio.
- [AVFoundation updates](avfoundation.md): Learn about important changes to AVFoundation.

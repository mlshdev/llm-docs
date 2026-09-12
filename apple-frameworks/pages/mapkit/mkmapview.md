> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview](https://developer.apple.com/documentation/mapkit/mkmapview)

# MKMapView (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

An embeddable map interface, similar to the one that the Maps app provides.

## Declaration

```swift
class MKMapView
```

<a id="overview"></a>

## Overview

Use this class as-is to display map information and to manipulate the map contents from your app. The map view supports several display styles, including the [MKStandardMapConfiguration](mkstandardmapconfiguration.md) that provides rich 2D and 3D presentations, an [MKHybridMapConfiguration](mkhybridmapconfiguration.md) that provides a hybrid satellite map presentation, and [MKImageryMapConfiguration](mkimagerymapconfiguration.md) that provides an imagery-based map presentation. Each of these map configurations support customization properties that refine specific elements of the map’s presentation.

You can center the map on specific coordinates, specify the size of the area you want to display, and annotate the map with custom information. When you initialize a map view, you specify the initial region for that map to display by setting the [region](mkmapview/region.md) property of the map. MapKit defines a region by a center point and a horizontal and vertical distance, referred to as the *span*. The *span* defines how much of the map is visible, and is also how you set the zoom level. For example, specifying a large span results in the user seeing a wide geographical area at a low zoom level, whereas specifying a small span results in a more narrow geographical area and a higher zoom level.

In addition to setting the span programmatically, the `MKMapView` class supports many standard interactions for changing the position and zoom level of the map. In particular, map views support flick and pinch gestures for scrolling around the map and zooming in and out. The map view enables support for these gestures by default. You can enable and disable them using the [isScrollEnabled](mkmapview/isscrollenabled.md) and [isZoomEnabled](mkmapview/iszoomenabled.md) properties.

You can also use projected map coordinates instead of regions to specify some values. When you project the curved surface of the globe onto a flat surface, you get a two-dimensional version of a map where longitude lines appear to be parallel. To specify locations and distances, you use the [MKMapPoint](mkmappoint.md), [MKMapSize](mkmapsize.md), and [MKMapRect](mkmaprect.md) data types.

Don’t subclass the `MKMapView` class itself. You can get information about the map view’s behavior by providing a delegate object. The map view calls the methods of your custom delegate to let it know about changes in the map status and to coordinate the display of custom annotations. The delegate object can be any object in your app as long as it conforms to the [MKMapViewDelegate](mkmapviewdelegate.md) protocol. For more information about implementing the delegate object, see [MKMapViewDelegate](mkmapviewdelegate.md).

In macOS 10.14 and later, you can apply a light or dark appearance to your maps by modifying the [appearance](https://developer.apple.com/documentation/appkit/nsappearancecustomization/appearance) property of your map view (or one of its ancestor views). Even if you specify a custom appearance, users can use the Maps app to force all maps to adopt a light appearance. Use the map view’s [effectiveAppearance](https://developer.apple.com/documentation/appkit/nsappearancecustomization/effectiveappearance) property to determine the actual appearance of your map. For information about how to set view appearances, see [Choosing a Specific Appearance for Your macOS App](https://developer.apple.com/documentation/appkit/choosing-a-specific-appearance-for-your-macos-app).

<a id="Annotating-the-map"></a>

### Annotating the map

The `MKMapView` class supports the ability to annotate the map with custom information. Because a map may have large numbers of annotations, map views differentiate between the annotation objects MapKit uses to manage the annotation data and the view objects for presenting that data on the map.

An *annotation object* is any object that conforms to the [MKAnnotation](mkannotation.md) protocol. Typically, you implement annotation objects using existing classes in your app’s data model. This allows you to manipulate the annotation data directly, but still make it available to the map view. Each annotation object contains information about the annotation’s location on the map, along with descriptive information that the map can display in a callout.

An *annotation view*,\_ \_which is an instance of the [MKAnnotationView](mkannotationview.md) class, handles the presentation of annotation objects on the screen. An annotation view is responsible for presenting the annotation data in a way that makes sense. For example, the Maps app uses a marker icon to denote specific points of interest on a map. The MapKit framework offers the [MKMarkerAnnotationView](mkmarkerannotationview.md) class for similar annotations in your own apps. You can also create annotation views that cover larger portions of the map.

Because the map view needs annotation views only when they’re onscreen, the `MKMapView` class provides a mechanism for queueing annotation views that aren’t in use. The map view detaches annotation views with a reuse identifier and queues them internally when they move offscreen. This feature improves memory use by keeping only a small number of annotation views in memory at once, and by recycling the views you do have. It also improves scrolling performance by alleviating the need to create new views while the map is scrolling.

When configuring your map interface, be sure to add all of your annotation objects right away. The map view uses the coordinate data in each annotation object to determine when the corresponding annotation view needs to appear onscreen. When an annotation moves onscreen, the map view asks its delegate to create a corresponding annotation view. If your app has different types of annotations, it can define different annotation view classes to represent each type.

<a id="Adding-overlays-to-the-map"></a>

### Adding overlays to the map

You can use overlays to layer content over a wide portion of the map. An *overlay* object is any object that conforms to the [MKOverlay](mkoverlay.md) protocol. An overlay object is a data object that contains the points that specify the shape and size of the overlay and its location on the map. Overlays can represent shapes like circles, rectangles, multisegment lines, and simple or complex polygons. You can also define your own custom overlays to represent other shapes.

*Overlay renderer* objects, which are instances of the [MKOverlayRenderer](mkoverlayrenderer.md) class, handle the presentation of an overlay. The job of the renderer is to draw the overlay’s content onto the screen when the map view requests it. For example, if you have a simple overlay that represents a bus route, you can use a polyline renderer to draw the line segments that trace the route of the bus. You can also define a custom renderer that draws both the bus route and icons at the location of each bus stop. When specifying overlays, you can add them to specific levels of the map, which tells the map view to render them above or below other types of map content.

When configuring your map interface, you can add overlay objects at any time. The map view uses the data in each overlay object to determine when the corresponding overlay view needs to appear onscreen. When an overlay moves onscreen, the map view asks its delegate to create a corresponding overlay renderer.

<a id="Adding-points-of-interest-to-the-map"></a>

### Adding points of interest to the map

In iOS16 and macOS 13, and later, you can configure the map view to allow people to interact with a wide variety of points of interest (POIs) the map displays. These are instances of the [MKMapFeatureAnnotation](mkmapfeatureannotation.md) class, and cover a wide variety of elements visible on the map, including:

- Points of interest, such as museums, cafes, parks, and schools.
- Territorial boundaries, such as national borders, state boundaries, and neighborhoods.
- Features on the Earth’s surface, such as mountain ranges, rivers, and ocean basins.

You can control which features a person can interact with by configuring one of the [MKMapConfiguration](mkmapconfiguration.md) subclasses that defines the map’s presentation. Create an `MKMapConfiguration` with a set of [MKMapFeatureOptions](mkmapfeatureoptions.md) that describe the categories of POIs the map responds to. To further refine the specific kinds of points of interest the map display presents, use an [MKPointOfInterestFilter](mkpointofinterestfilter.md).

When a person interacts with a specific POI, the framework calls your delegate object with one of the [MKMapViewDelegate](mkmapviewdelegate.md) protocol methods, depending on whether the person selects or deselects a specific POI. These methods give your app a chance to respond to the selection or deselection of an element. Depending on the kind of element, you can decide whether you want to customize the display characteristics in the case of a POI, or in the case of territories or geographic map features, you can create custom interactions to display information.

<a id="Adding-Look-Around-views-to-the-map"></a>

### Adding Look Around views to the map

iOS16 and macOS 13, and later, support the inclusion of a Look Around view within the map view. Look Around allows people to explore the environment at street level. You request a Look Around view by creating an [MKLookAroundSceneRequest](mklookaroundscenerequest.md) with either an [MKMapItem](mkmapitem.md) or a [CLLocationCoordinate2D](../corelocation/cllocationcoordinate2d.md), and if there’s Look Around imagery available for the specified location, the framework returns an [MKLookAroundScene](mklookaroundscene.md) for you to display using an [MKLookAroundViewController](mklookaroundviewcontroller.md).

## Topics

### Configuring the map appearance

- [preferredConfiguration](mkmapview/preferredconfiguration.md): The characteristics of the map view, including the map type and features the map displays.
- [pitchButtonVisibility](mkmapview/pitchbuttonvisibility.md): A value that indicates whether the map’s pitch button is visible.
- [showsUserTrackingButton](mkmapview/showsusertrackingbutton.md): A Boolean value that indicates whether the map displays the user tracking button.
- [MKMapConfiguration](mkmapconfiguration.md): An abstract class that represents the shared elements of map configurations.
- [MKStandardMapConfiguration](mkstandardmapconfiguration.md): The class that represents the default map presentation, which is a street map that shows the position of all roads and some road names.
- [MKHybridMapConfiguration](mkhybridmapconfiguration.md): The class that represents a satellite image of the area with road and road name information layers on top.
- [MKImageryMapConfiguration](mkimagerymapconfiguration.md): The class that represents an imagery-based map presentation, such as one using satellite imagery.

### Customizing the map view behavior

- [delegate](mkmapview/delegate.md): The receiver’s delegate.
- [MKMapViewDelegate](mkmapviewdelegate.md): Optional methods that you use to receive map-related update messages.

### Accessing map properties

- [MKMapType](mkmaptype.md): Deprecated. The type of map to display.
- [isZoomEnabled](mkmapview/iszoomenabled.md): A Boolean value that determines whether the user may use pinch gestures to zoom in and out of the map.
- [isScrollEnabled](mkmapview/isscrollenabled.md): A Boolean value that determines whether the user may scroll around the map.
- [isPitchEnabled](mkmapview/ispitchenabled.md): A Boolean value that indicates whether the map uses the camera’s pitch information.
- [isRotateEnabled](mkmapview/isrotateenabled.md): A Boolean value that indicates whether the map uses the camera’s heading information.
- [mapType](mkmapview/maptype.md): Deprecated. The type of data the map view displays.

### Manipulating the visible portion of the map

- [region](mkmapview/region.md): The area the map view displays.
- [setRegion(\_:animated:)](mkmapview/setregion%28__animated_%29.md): Changes the currently visible region, and optionally animates the change.
- [centerCoordinate](mkmapview/centercoordinate.md): The map coordinate at the center of the map view.
- [setCenter(\_:animated:)](mkmapview/setcenter%28__animated_%29.md): Changes the center coordinate of the map, and optionally animates the change.
- [showAnnotations(\_:animated:)](mkmapview/showannotations%28__animated_%29.md): Sets the visible region so that the map displays the specified annotations.
- [visibleMapRect](mkmapview/visiblemaprect.md): The area visible in the map view.
- [setVisibleMapRect(\_:animated:)](mkmapview/setvisiblemaprect%28__animated_%29.md): Changes the currently visible portion of the map, and optionally animates the change.
- [setVisibleMapRect(\_:edgePadding:animated:)](mkmapview/setvisiblemaprect%28__edgepadding_animated_%29.md): Changes the currently visible portion of the map, allowing you to specify additional space around the edges.

### Constraining the map view

- [setCameraBoundary(\_:animated:)](mkmapview/setcameraboundary%28__animated_%29.md): Sets the camera boundary for the map view, specifying whether to use animation.
- [cameraBoundary](mkmapview/cameraboundary-swift.property.md): The boundary of the area within which the map view’s center needs to remain.
- [setCameraZoomRange(\_:animated:)](mkmapview/setcamerazoomrange%28__animated_%29.md): Sets the camera zoom range for the map view, specifying whether to use animation.
- [cameraZoomRange](mkmapview/camerazoomrange-swift.property.md): The zoom range to apply to the map view.
- [MKMapView.CameraBoundary](mkmapview/cameraboundary-swift.class.md): A boundary of an area within which the map’s center needs to remain.
- [MKMapView.CameraZoomRange](mkmapview/camerazoomrange-swift.class.md): A camera zoom range that limits the distances to which the user can zoom.

### Configuring the map display

- [setCamera(\_:animated:)](mkmapview/setcamera%28__animated_%29.md): Changes the camera to use for determining the map’s viewing parameters, and optionally animates the change.
- [camera](mkmapview/camera.md): The camera to use for determining the appearance of the map.
- [showsCompass](mkmapview/showscompass.md): A Boolean value that indicates whether the map displays a compass control.
- [showsPitchControl](mkmapview/showspitchcontrol.md): A Boolean value that indicates whether the map displays the pitch control.
- [showsScale](mkmapview/showsscale.md): A Boolean value that indicates whether the map shows scale information.
- [showsZoomControls](mkmapview/showszoomcontrols.md): A Boolean value that indicates whether the map displays zoom controls.
- [showsBuildings](mkmapview/showsbuildings.md): Deprecated. A Boolean value that indicates whether the map displays extruded building information on supported map types.
- [showsPointsOfInterest](mkmapview/showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [pointOfInterestFilter](mkmapview/pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear on the map.
- [showsTraffic](mkmapview/showstraffic.md): Deprecated. A Boolean value that indicates whether the map displays traffic information.

### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [showsUserLocation](mkmapview/showsuserlocation.md): A Boolean value that indicates whether the map tries to display the user’s location.
- [isUserLocationVisible](mkmapview/isuserlocationvisible.md): A Boolean value that indicates whether the user’s location is visible in the map view.
- [userLocation](mkmapview/userlocation.md): The annotation object that represents the user’s location.
- [userTrackingMode](mkmapview/usertrackingmode.md): The mode to use for tracking the user’s location.
- [setUserTrackingMode(\_:animated:)](mkmapview/setusertrackingmode%28__animated_%29.md): Sets the mode to use for tracking the user’s location, with optional animation.
- [MKUserTrackingMode](mkusertrackingmode.md): The mode to use for tracking the user’s location on the map.

### Annotating the map

- [annotations](mkmapview/annotations.md): The annotations associated with the map view.
- [addAnnotation(\_:)](mkmapview/addannotation%28__%29.md): Adds the specified annotation to the map view.
- [addAnnotations(\_:)](mkmapview/addannotations%28__%29.md): Adds an array of annotation objects to the map view.
- [removeAnnotation(\_:)](mkmapview/removeannotation%28__%29.md): Removes the specified annotation object from the map view.
- [removeAnnotations(\_:)](mkmapview/removeannotations%28__%29.md): Removes an array of annotation objects from the map view.
- [annotations(in:)](mkmapview/annotations%28in_%29.md): Returns the annotation objects within the specified map rectangle.

### Managing annotation selections

- [annotationVisibleRect](mkmapview/annotationvisiblerect.md): The visible rectangle where the map is displaying annotation views.
- [selectedAnnotations](mkmapview/selectedannotations.md): The selected annotations.
- [selectAnnotation(\_:animated:)](mkmapview/selectannotation%28__animated_%29.md): Selects the specified annotation and displays a callout view for it.
- [deselectAnnotation(\_:animated:)](mkmapview/deselectannotation%28__animated_%29.md): Deselects the specified annotation and hides its callout view.

### Creating annotation views

- [register(\_:forAnnotationViewWithReuseIdentifier:)](mkmapview/register%28__forannotationviewwithreuseidentifier_%29.md): Registers an annotation view class that the map can create automatically.
- [dequeueReusableAnnotationView(withIdentifier:for:)](mkmapview/dequeuereusableannotationview%28withidentifier_for_%29.md): Returns a reusable annotation view using the specified identifier with a specified existing annotation view, if possible.
- [dequeueReusableAnnotationView(withIdentifier:)](mkmapview/dequeuereusableannotationview%28withidentifier_%29.md): Returns a reusable annotation view using its identifier.
- [view(for:)](mkmapview/view%28for_%29-33w8k.md): Returns the annotation view associated with the specified annotation object, if any.
- [MKMapViewDefaultAnnotationViewReuseIdentifier](mkmapviewdefaultannotationviewreuseidentifier.md): The default reuse identifier for your map’s annotation views.
- [MKMapViewDefaultClusterAnnotationViewReuseIdentifier](mkmapviewdefaultclusterannotationviewreuseidentifier.md): The default reuse identifier for the annotation view representing a cluster of annotations.

### Accessing overlays

- [overlays](mkmapview/overlays.md): The overlay objects associated with the map view.
- [overlays(in:)](mkmapview/overlays%28in_%29.md): Returns overlay objects in the specified level of the map.
- [renderer(for:)](mkmapview/renderer%28for_%29.md): Returns the renderer object for drawing the contents of the specified overlay object.
- [MKOverlayLevel](mkoverlaylevel.md): Constants that indicate the position of overlays relative to other content.
- [view(for:)](mkmapview/view%28for_%29-38z60.md): Deprecated. Returns the view associated with the overlay object, if any.

### Adding and inserting overlays

- [addOverlay(\_:level:)](mkmapview/addoverlay%28__level_%29.md): Adds the overlay object to the map at the specified level.
- [addOverlays(\_:level:)](mkmapview/addoverlays%28__level_%29.md): Adds an array of overlay objects to the map at the specified level.
- [addOverlay(\_:)](mkmapview/addoverlay%28__%29.md): Adds a single overlay object to the map.
- [addOverlays(\_:)](mkmapview/addoverlays%28__%29.md): Adds an array of overlay objects to the map.
- [insertOverlay(\_:at:level:)](mkmapview/insertoverlay%28__at_level_%29.md): Inserts an overlay object into the level at the specified index.
- [insertOverlay(\_:at:)](mkmapview/insertoverlay%28__at_%29.md): Inserts an overlay object into the list associated with the map.
- [insertOverlay(\_:above:)](mkmapview/insertoverlay%28__above_%29.md): Inserts one overlay object above another.
- [insertOverlay(\_:below:)](mkmapview/insertoverlay%28__below_%29.md): Inserts one overlay object below another.
- [exchangeOverlay(\_:with:)](mkmapview/exchangeoverlay%28__with_%29.md): Exchanges the positions of two overlay objects.
- [exchangeOverlay(at:withOverlayAt:)](mkmapview/exchangeoverlay%28at_withoverlayat_%29.md): Exchanges the position of two overlay objects at the specified index.

### Removing overlays

- [removeOverlay(\_:)](mkmapview/removeoverlay%28__%29.md): Removes a single overlay object from the map.
- [removeOverlays(\_:)](mkmapview/removeoverlays%28__%29.md): Removes one or more overlay objects from the map.

### Converting map coordinates

- [convert(\_:toPointTo:)](mkmapview/convert%28__topointto_%29.md): Converts a map coordinate to a point in the specified view.
- [convert(\_:toCoordinateFrom:)](mkmapview/convert%28__tocoordinatefrom_%29.md): Converts a point in the specified view’s coordinate system to a map coordinate.
- [convert(\_:toRectTo:)](mkmapview/convert%28__torectto_%29.md): Converts a map region to a rectangle in the specified view.
- [convert(\_:toRegionFrom:)](mkmapview/convert%28__toregionfrom_%29.md): Converts a rectangle in the specified view’s coordinate system to a map region.

### Adjusting map regions and rectangles

- [regionThatFits(\_:)](mkmapview/regionthatfits%28__%29.md): Adjusts the aspect ratio of the specified region to ensure that it fits in the map view’s frame.
- [mapRectThatFits(\_:)](mkmapview/maprectthatfits%28__%29.md): Returns a centered map rectangle with the same aspect ratio as the map view’s frame.
- [mapRectThatFits(\_:edgePadding:)](mkmapview/maprectthatfits%28__edgepadding_%29.md): Returns a centered, inset map rectangle with the same aspect ratio as the map view’s frame.

### Instance Properties

- [selectableMapFeatures](mkmapview/selectablemapfeatures.md): The property that describes which selectable features the map responds to.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Essentials

- [Enabling Maps capability in Xcode](enabling-maps-capability-in-xcode.md): Configure your routing app to support providing directions.
- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md): Obtain information about a point of interest that persists over its lifetime.
- [MKMapItem](mkmapitem.md): A point of interest on the map.

# MKMapView (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

An embeddable map interface, similar to the one that the Maps app provides.

## Declaration

```objectivec
@interface MKMapView : UIView
```

```objectivec
@interface MKMapView : NSView
```

<a id="overview"></a>

## Overview

Use this class as-is to display map information and to manipulate the map contents from your app. The map view supports several display styles, including the [MKStandardMapConfiguration](mkstandardmapconfiguration.md) that provides rich 2D and 3D presentations, an [MKHybridMapConfiguration](mkhybridmapconfiguration.md) that provides a hybrid satellite map presentation, and [MKImageryMapConfiguration](mkimagerymapconfiguration.md) that provides an imagery-based map presentation. Each of these map configurations support customization properties that refine specific elements of the map’s presentation.

You can center the map on specific coordinates, specify the size of the area you want to display, and annotate the map with custom information. When you initialize a map view, you specify the initial region for that map to display by setting the [region](mkmapview/region.md) property of the map. MapKit defines a region by a center point and a horizontal and vertical distance, referred to as the *span*. The *span* defines how much of the map is visible, and is also how you set the zoom level. For example, specifying a large span results in the user seeing a wide geographical area at a low zoom level, whereas specifying a small span results in a more narrow geographical area and a higher zoom level.

In addition to setting the span programmatically, the `MKMapView` class supports many standard interactions for changing the position and zoom level of the map. In particular, map views support flick and pinch gestures for scrolling around the map and zooming in and out. The map view enables support for these gestures by default. You can enable and disable them using the [scrollEnabled](mkmapview/isscrollenabled.md) and [zoomEnabled](mkmapview/iszoomenabled.md) properties.

You can also use projected map coordinates instead of regions to specify some values. When you project the curved surface of the globe onto a flat surface, you get a two-dimensional version of a map where longitude lines appear to be parallel. To specify locations and distances, you use the [MKMapPoint](mkmappoint.md), [MKMapSize](mkmapsize.md), and [MKMapRect](mkmaprect.md) data types.

Don’t subclass the `MKMapView` class itself. You can get information about the map view’s behavior by providing a delegate object. The map view calls the methods of your custom delegate to let it know about changes in the map status and to coordinate the display of custom annotations. The delegate object can be any object in your app as long as it conforms to the [MKMapViewDelegate](mkmapviewdelegate.md) protocol. For more information about implementing the delegate object, see [MKMapViewDelegate](mkmapviewdelegate.md).

In macOS 10.14 and later, you can apply a light or dark appearance to your maps by modifying the [appearance](https://developer.apple.com/documentation/appkit/nsappearancecustomization/appearance) property of your map view (or one of its ancestor views). Even if you specify a custom appearance, users can use the Maps app to force all maps to adopt a light appearance. Use the map view’s [effectiveAppearance](https://developer.apple.com/documentation/appkit/nsappearancecustomization/effectiveappearance) property to determine the actual appearance of your map. For information about how to set view appearances, see [Choosing a Specific Appearance for Your macOS App](https://developer.apple.com/documentation/appkit/choosing-a-specific-appearance-for-your-macos-app).

<a id="Annotating-the-map"></a>

### Annotating the map

The `MKMapView` class supports the ability to annotate the map with custom information. Because a map may have large numbers of annotations, map views differentiate between the annotation objects MapKit uses to manage the annotation data and the view objects for presenting that data on the map.

An *annotation object* is any object that conforms to the [MKAnnotation](mkannotation.md) protocol. Typically, you implement annotation objects using existing classes in your app’s data model. This allows you to manipulate the annotation data directly, but still make it available to the map view. Each annotation object contains information about the annotation’s location on the map, along with descriptive information that the map can display in a callout.

An *annotation view*,\_ \_which is an instance of the [MKAnnotationView](mkannotationview.md) class, handles the presentation of annotation objects on the screen. An annotation view is responsible for presenting the annotation data in a way that makes sense. For example, the Maps app uses a marker icon to denote specific points of interest on a map. The MapKit framework offers the [MKMarkerAnnotationView](mkmarkerannotationview.md) class for similar annotations in your own apps. You can also create annotation views that cover larger portions of the map.

Because the map view needs annotation views only when they’re onscreen, the `MKMapView` class provides a mechanism for queueing annotation views that aren’t in use. The map view detaches annotation views with a reuse identifier and queues them internally when they move offscreen. This feature improves memory use by keeping only a small number of annotation views in memory at once, and by recycling the views you do have. It also improves scrolling performance by alleviating the need to create new views while the map is scrolling.

When configuring your map interface, be sure to add all of your annotation objects right away. The map view uses the coordinate data in each annotation object to determine when the corresponding annotation view needs to appear onscreen. When an annotation moves onscreen, the map view asks its delegate to create a corresponding annotation view. If your app has different types of annotations, it can define different annotation view classes to represent each type.

<a id="Adding-overlays-to-the-map"></a>

### Adding overlays to the map

You can use overlays to layer content over a wide portion of the map. An *overlay* object is any object that conforms to the [MKOverlay](mkoverlay.md) protocol. An overlay object is a data object that contains the points that specify the shape and size of the overlay and its location on the map. Overlays can represent shapes like circles, rectangles, multisegment lines, and simple or complex polygons. You can also define your own custom overlays to represent other shapes.

*Overlay renderer* objects, which are instances of the [MKOverlayRenderer](mkoverlayrenderer.md) class, handle the presentation of an overlay. The job of the renderer is to draw the overlay’s content onto the screen when the map view requests it. For example, if you have a simple overlay that represents a bus route, you can use a polyline renderer to draw the line segments that trace the route of the bus. You can also define a custom renderer that draws both the bus route and icons at the location of each bus stop. When specifying overlays, you can add them to specific levels of the map, which tells the map view to render them above or below other types of map content.

When configuring your map interface, you can add overlay objects at any time. The map view uses the data in each overlay object to determine when the corresponding overlay view needs to appear onscreen. When an overlay moves onscreen, the map view asks its delegate to create a corresponding overlay renderer.

<a id="Adding-points-of-interest-to-the-map"></a>

### Adding points of interest to the map

In iOS16 and macOS 13, and later, you can configure the map view to allow people to interact with a wide variety of points of interest (POIs) the map displays. These are instances of the [MKMapFeatureAnnotation](mkmapfeatureannotation.md) class, and cover a wide variety of elements visible on the map, including:

- Points of interest, such as museums, cafes, parks, and schools.
- Territorial boundaries, such as national borders, state boundaries, and neighborhoods.
- Features on the Earth’s surface, such as mountain ranges, rivers, and ocean basins.

You can control which features a person can interact with by configuring one of the [MKMapConfiguration](mkmapconfiguration.md) subclasses that defines the map’s presentation. Create an `MKMapConfiguration` with a set of [MKMapFeatureOptions](mkmapfeatureoptions.md) that describe the categories of POIs the map responds to. To further refine the specific kinds of points of interest the map display presents, use an [MKPointOfInterestFilter](mkpointofinterestfilter.md).

When a person interacts with a specific POI, the framework calls your delegate object with one of the [MKMapViewDelegate](mkmapviewdelegate.md) protocol methods, depending on whether the person selects or deselects a specific POI. These methods give your app a chance to respond to the selection or deselection of an element. Depending on the kind of element, you can decide whether you want to customize the display characteristics in the case of a POI, or in the case of territories or geographic map features, you can create custom interactions to display information.

<a id="Adding-Look-Around-views-to-the-map"></a>

### Adding Look Around views to the map

iOS16 and macOS 13, and later, support the inclusion of a Look Around view within the map view. Look Around allows people to explore the environment at street level. You request a Look Around view by creating an [MKLookAroundSceneRequest](mklookaroundscenerequest.md) with either an [MKMapItem](mkmapitem.md) or a [CLLocationCoordinate2D](../corelocation/cllocationcoordinate2d.md), and if there’s Look Around imagery available for the specified location, the framework returns an [MKLookAroundScene](mklookaroundscene.md) for you to display using an [MKLookAroundViewController](mklookaroundviewcontroller.md).

## Topics

### Configuring the map appearance

- [preferredConfiguration](mkmapview/preferredconfiguration.md): The characteristics of the map view, including the map type and features the map displays.
- [pitchButtonVisibility](mkmapview/pitchbuttonvisibility.md): A value that indicates whether the map’s pitch button is visible.
- [showsUserTrackingButton](mkmapview/showsusertrackingbutton.md): A Boolean value that indicates whether the map displays the user tracking button.
- [MKMapConfiguration](mkmapconfiguration.md): An abstract class that represents the shared elements of map configurations.
- [MKStandardMapConfiguration](mkstandardmapconfiguration.md): The class that represents the default map presentation, which is a street map that shows the position of all roads and some road names.
- [MKHybridMapConfiguration](mkhybridmapconfiguration.md): The class that represents a satellite image of the area with road and road name information layers on top.
- [MKImageryMapConfiguration](mkimagerymapconfiguration.md): The class that represents an imagery-based map presentation, such as one using satellite imagery.

### Customizing the map view behavior

- [delegate](mkmapview/delegate.md): The receiver’s delegate.
- [MKMapViewDelegate](mkmapviewdelegate.md): Optional methods that you use to receive map-related update messages.

### Accessing map properties

- [MKMapType](mkmaptype.md): Deprecated. The type of map to display.
- [zoomEnabled](mkmapview/iszoomenabled.md): A Boolean value that determines whether the user may use pinch gestures to zoom in and out of the map.
- [scrollEnabled](mkmapview/isscrollenabled.md): A Boolean value that determines whether the user may scroll around the map.
- [pitchEnabled](mkmapview/ispitchenabled.md): A Boolean value that indicates whether the map uses the camera’s pitch information.
- [rotateEnabled](mkmapview/isrotateenabled.md): A Boolean value that indicates whether the map uses the camera’s heading information.
- [mapType](mkmapview/maptype.md): Deprecated. The type of data the map view displays.

### Manipulating the visible portion of the map

- [region](mkmapview/region.md): The area the map view displays.
- [setRegion:animated:](mkmapview/setregion%28__animated_%29.md): Changes the currently visible region, and optionally animates the change.
- [centerCoordinate](mkmapview/centercoordinate.md): The map coordinate at the center of the map view.
- [setCenterCoordinate:animated:](mkmapview/setcenter%28__animated_%29.md): Changes the center coordinate of the map, and optionally animates the change.
- [showAnnotations:animated:](mkmapview/showannotations%28__animated_%29.md): Sets the visible region so that the map displays the specified annotations.
- [visibleMapRect](mkmapview/visiblemaprect.md): The area visible in the map view.
- [setVisibleMapRect:animated:](mkmapview/setvisiblemaprect%28__animated_%29.md): Changes the currently visible portion of the map, and optionally animates the change.
- [setVisibleMapRect:edgePadding:animated:](mkmapview/setvisiblemaprect%28__edgepadding_animated_%29.md): Changes the currently visible portion of the map, allowing you to specify additional space around the edges.

### Constraining the map view

- [setCameraBoundary:animated:](mkmapview/setcameraboundary%28__animated_%29.md): Sets the camera boundary for the map view, specifying whether to use animation.
- [cameraBoundary](mkmapview/cameraboundary-swift.property.md): The boundary of the area within which the map view’s center needs to remain.
- [setCameraZoomRange:animated:](mkmapview/setcamerazoomrange%28__animated_%29.md): Sets the camera zoom range for the map view, specifying whether to use animation.
- [cameraZoomRange](mkmapview/camerazoomrange-swift.property.md): The zoom range to apply to the map view.
- [MKMapCameraBoundary](mkmapview/cameraboundary-swift.class.md): A boundary of an area within which the map’s center needs to remain.
- [MKMapCameraZoomRange](mkmapview/camerazoomrange-swift.class.md): A camera zoom range that limits the distances to which the user can zoom.

### Configuring the map display

- [setCamera:animated:](mkmapview/setcamera%28__animated_%29.md): Changes the camera to use for determining the map’s viewing parameters, and optionally animates the change.
- [camera](mkmapview/camera.md): The camera to use for determining the appearance of the map.
- [showsCompass](mkmapview/showscompass.md): A Boolean value that indicates whether the map displays a compass control.
- [showsPitchControl](mkmapview/showspitchcontrol.md): A Boolean value that indicates whether the map displays the pitch control.
- [showsScale](mkmapview/showsscale.md): A Boolean value that indicates whether the map shows scale information.
- [showsZoomControls](mkmapview/showszoomcontrols.md): A Boolean value that indicates whether the map displays zoom controls.
- [showsBuildings](mkmapview/showsbuildings.md): Deprecated. A Boolean value that indicates whether the map displays extruded building information on supported map types.
- [showsPointsOfInterest](mkmapview/showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [pointOfInterestFilter](mkmapview/pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear on the map.
- [showsTraffic](mkmapview/showstraffic.md): Deprecated. A Boolean value that indicates whether the map displays traffic information.

### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [showsUserLocation](mkmapview/showsuserlocation.md): A Boolean value that indicates whether the map tries to display the user’s location.
- [userLocationVisible](mkmapview/isuserlocationvisible.md): A Boolean value that indicates whether the user’s location is visible in the map view.
- [userLocation](mkmapview/userlocation.md): The annotation object that represents the user’s location.
- [userTrackingMode](mkmapview/usertrackingmode.md): The mode to use for tracking the user’s location.
- [setUserTrackingMode:animated:](mkmapview/setusertrackingmode%28__animated_%29.md): Sets the mode to use for tracking the user’s location, with optional animation.
- [MKUserTrackingMode](mkusertrackingmode.md): The mode to use for tracking the user’s location on the map.

### Annotating the map

- [annotations](mkmapview/annotations.md): The annotations associated with the map view.
- [addAnnotation:](mkmapview/addannotation%28__%29.md): Adds the specified annotation to the map view.
- [addAnnotations:](mkmapview/addannotations%28__%29.md): Adds an array of annotation objects to the map view.
- [removeAnnotation:](mkmapview/removeannotation%28__%29.md): Removes the specified annotation object from the map view.
- [removeAnnotations:](mkmapview/removeannotations%28__%29.md): Removes an array of annotation objects from the map view.
- [annotationsInMapRect:](mkmapview/annotations%28in_%29.md): Returns the annotation objects within the specified map rectangle.

### Managing annotation selections

- [annotationVisibleRect](mkmapview/annotationvisiblerect.md): The visible rectangle where the map is displaying annotation views.
- [selectedAnnotations](mkmapview/selectedannotations.md): The selected annotations.
- [selectAnnotation:animated:](mkmapview/selectannotation%28__animated_%29.md): Selects the specified annotation and displays a callout view for it.
- [deselectAnnotation:animated:](mkmapview/deselectannotation%28__animated_%29.md): Deselects the specified annotation and hides its callout view.

### Creating annotation views

- [registerClass:forAnnotationViewWithReuseIdentifier:](mkmapview/register%28__forannotationviewwithreuseidentifier_%29.md): Registers an annotation view class that the map can create automatically.
- [dequeueReusableAnnotationViewWithIdentifier:forAnnotation:](mkmapview/dequeuereusableannotationview%28withidentifier_for_%29.md): Returns a reusable annotation view using the specified identifier with a specified existing annotation view, if possible.
- [dequeueReusableAnnotationViewWithIdentifier:](mkmapview/dequeuereusableannotationview%28withidentifier_%29.md): Returns a reusable annotation view using its identifier.
- [viewForAnnotation:](mkmapview/view%28for_%29-33w8k.md): Returns the annotation view associated with the specified annotation object, if any.
- [MKMapViewDefaultAnnotationViewReuseIdentifier](mkmapviewdefaultannotationviewreuseidentifier.md): The default reuse identifier for your map’s annotation views.
- [MKMapViewDefaultClusterAnnotationViewReuseIdentifier](mkmapviewdefaultclusterannotationviewreuseidentifier.md): The default reuse identifier for the annotation view representing a cluster of annotations.

### Accessing overlays

- [overlays](mkmapview/overlays.md): The overlay objects associated with the map view.
- [overlaysInLevel:](mkmapview/overlays%28in_%29.md): Returns overlay objects in the specified level of the map.
- [rendererForOverlay:](mkmapview/renderer%28for_%29.md): Returns the renderer object for drawing the contents of the specified overlay object.
- [MKOverlayLevel](mkoverlaylevel.md): Constants that indicate the position of overlays relative to other content.
- [viewForOverlay:](mkmapview/view%28for_%29-38z60.md): Deprecated. Returns the view associated with the overlay object, if any.

### Adding and inserting overlays

- [addOverlay:level:](mkmapview/addoverlay%28__level_%29.md): Adds the overlay object to the map at the specified level.
- [addOverlays:level:](mkmapview/addoverlays%28__level_%29.md): Adds an array of overlay objects to the map at the specified level.
- [addOverlay:](mkmapview/addoverlay%28__%29.md): Adds a single overlay object to the map.
- [addOverlays:](mkmapview/addoverlays%28__%29.md): Adds an array of overlay objects to the map.
- [insertOverlay:atIndex:level:](mkmapview/insertoverlay%28__at_level_%29.md): Inserts an overlay object into the level at the specified index.
- [insertOverlay:atIndex:](mkmapview/insertoverlay%28__at_%29.md): Inserts an overlay object into the list associated with the map.
- [insertOverlay:aboveOverlay:](mkmapview/insertoverlay%28__above_%29.md): Inserts one overlay object above another.
- [insertOverlay:belowOverlay:](mkmapview/insertoverlay%28__below_%29.md): Inserts one overlay object below another.
- [exchangeOverlay:withOverlay:](mkmapview/exchangeoverlay%28__with_%29.md): Exchanges the positions of two overlay objects.
- [exchangeOverlayAtIndex:withOverlayAtIndex:](mkmapview/exchangeoverlay%28at_withoverlayat_%29.md): Exchanges the position of two overlay objects at the specified index.

### Removing overlays

- [removeOverlay:](mkmapview/removeoverlay%28__%29.md): Removes a single overlay object from the map.
- [removeOverlays:](mkmapview/removeoverlays%28__%29.md): Removes one or more overlay objects from the map.

### Converting map coordinates

- [convertCoordinate:toPointToView:](mkmapview/convert%28__topointto_%29.md): Converts a map coordinate to a point in the specified view.
- [convertPoint:toCoordinateFromView:](mkmapview/convert%28__tocoordinatefrom_%29.md): Converts a point in the specified view’s coordinate system to a map coordinate.
- [convertRegion:toRectToView:](mkmapview/convert%28__torectto_%29.md): Converts a map region to a rectangle in the specified view.
- [convertRect:toRegionFromView:](mkmapview/convert%28__toregionfrom_%29.md): Converts a rectangle in the specified view’s coordinate system to a map region.

### Adjusting map regions and rectangles

- [regionThatFits:](mkmapview/regionthatfits%28__%29.md): Adjusts the aspect ratio of the specified region to ensure that it fits in the map view’s frame.
- [mapRectThatFits:](mkmapview/maprectthatfits%28__%29.md): Returns a centered map rectangle with the same aspect ratio as the map view’s frame.
- [mapRectThatFits:edgePadding:](mkmapview/maprectthatfits%28__edgepadding_%29.md): Returns a centered, inset map rectangle with the same aspect ratio as the map view’s frame.

### Instance Properties

- [selectableMapFeatures](mkmapview/selectablemapfeatures.md): The property that describes which selectable features the map responds to.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)

## See Also

### Essentials

- [Enabling Maps capability in Xcode](enabling-maps-capability-in-xcode.md): Configure your routing app to support providing directions.
- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md): Obtain information about a point of interest that persists over its lifetime.
- [MKMapItem](mkmapitem.md): A point of interest on the map.

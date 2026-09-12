> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview](https://developer.apple.com/documentation/appkit/nsrulerview)

# NSRulerView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A ruler and the markers above or to the side of a scroll view’s document view.

## Declaration

```swift
class NSRulerView
```

<a id="overview"></a>

## Overview

Views within the scroll view can become clients of the ruler view, having it display markers for their elements, and receiving messages from the ruler view when the user manipulates the markers.

<a id="Principal-Attributes"></a>

### Principal Attributes

- Displays markers that represent elements of the client view.
- Displays in arbitrary units.
- Provides for an accessory view containing extra controls.

<a id="Creation"></a>

### Creation

- [hasHorizontalRuler](nsscrollview/hashorizontalruler.md) (`NSScrollView`)
- [hasVerticalRuler](nsscrollview/hasverticalruler.md) (`NSScrollView`)
- [init(scrollView:orientation:)](nsrulerview/init%28scrollview_orientation_%29.md) Designated initializer.

<a id="Commonly-Used-Methods"></a>

### Commonly Used Methods

- **[clientView](nsrulerview/clientview.md)**: Changes the ruler’s client view.
- **[markers](nsrulerview/markers.md)**: Sets the markers displayed by the ruler view.
- **[accessoryView](nsrulerview/accessoryview.md)**: Sets the accessory view.
- **[trackMarker(\_:withMouseEvent:)](nsrulerview/trackmarker%28__withmouseevent_%29.md)**: Allows the user to add a new marker.

<a id="Overview"></a>

### Overview

See NSRulerMarkerClientViewDelegation for delegate methods that may be of interest.

## Topics

### Creating a Ruler View

- [init(scrollView:orientation:)](nsrulerview/init%28scrollview_orientation_%29.md): Initializes a newly allocated NSRulerView to have `orientation` (`NSHorizontalRuler` or `NSVerticalRuler`) within `aScrollView`.
- [init(coder:)](nsrulerview/init%28coder_%29.md)

### Altering measurement units

- [registerUnit(withName:abbreviation:unitToPointsConversionFactor:stepUpCycle:stepDownCycle:)](nsrulerview/registerunit%28withname_abbreviation_unittopointsconversionfactor_stepupcycle_stepdowncycle_%29.md): Registers a new unit of measurement with the NSRulerView class, making it available to all instances of NSRulerView.
- [measurementUnits](nsrulerview/measurementunits.md): The measurement units used by the ruler to `unitName`.
- [NSRulerView.UnitName](nsrulerview/unitname.md)

### Setting the client view

- [clientView](nsrulerview/clientview.md): The receiver’s client view, if it has one.

### Setting an accessory view

- [accessoryView](nsrulerview/accessoryview.md): The receiver’s accessory view to `aView`.

### Setting the zero mark position

- [originOffset](nsrulerview/originoffset.md): The distance to the zero hash mark from the bounds origin of the NSScrollView’s document view (not of the receiver’s client view), in the document view’s coordinate system.

### Adding and removing markers

- [markers](nsrulerview/markers.md): The receiver’s ruler markers to `markers`, removing any existing ruler markers and not consulting with the client view about the new markers.
- [addMarker(\_:)](nsrulerview/addmarker%28__%29.md): Adds `aMarker` to the receiver, without consulting the client view for approval.
- [removeMarker(\_:)](nsrulerview/removemarker%28__%29.md): Removes `aMarker` from the receiver, without consulting the client view for approval.
- [trackMarker(\_:withMouseEvent:)](nsrulerview/trackmarker%28__withmouseevent_%29.md): Tracks the mouse to add `aMarker` based on the initial mouse-down or mouse-dragged event `theEvent`.

### Drawing temporary ruler lines

- [moveRulerline(fromLocation:toLocation:)](nsrulerview/moverulerline%28fromlocation_tolocation_%29.md): Draws temporary lines in the ruler area.

### Drawing

- [drawHashMarksAndLabels(in:)](nsrulerview/drawhashmarksandlabels%28in_%29.md): Draws the receiver’s hash marks and labels in `aRect`, which is expressed in the receiver’s coordinate system.
- [drawMarkers(in:)](nsrulerview/drawmarkers%28in_%29.md): Draws the receiver’s markers in `aRect`, which is expressed in the receiver’s coordinate system.
- [invalidateHashMarks()](nsrulerview/invalidatehashmarks%28%29.md): Forces recalculation of the hash mark spacing for the next time the receiver is displayed.

### Ruler layout

- [scrollView](nsrulerview/scrollview.md): The NSScrollView that owns the receiver to `scrollView`, without retaining it.
- [orientation](nsrulerview/orientation-swift.property.md): The orientation of the receiver to `orientation`.
- [NSRulerView.Orientation](nsrulerview/orientation-swift.enum.md): These constants are defined to specify a ruler’s orientation and are used by [orientation](nsrulerview/orientation-swift.property.md).
- [reservedThicknessForAccessoryView](nsrulerview/reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
- [reservedThicknessForMarkers](nsrulerview/reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.
- [ruleThickness](nsrulerview/rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [requiredThickness](nsrulerview/requiredthickness.md): The thickness needed for proper tiling of the receiver within an NSScrollView.
- [baselineLocation](nsrulerview/baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
- [isFlipped](nsrulerview/isflipped.md): A Boolean that indicates if the ruler view’s coordinate system is flipped.

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Rulers

- [NSRulerMarker](nsrulermarker.md): A symbol on a ruler view, indicating a location for the graphics element it represents in the client of the ruler view.

# NSRulerView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A ruler and the markers above or to the side of a scroll view’s document view.

## Declaration

```objectivec
@interface NSRulerView : NSView
```

<a id="overview"></a>

## Overview

Views within the scroll view can become clients of the ruler view, having it display markers for their elements, and receiving messages from the ruler view when the user manipulates the markers.

<a id="Principal-Attributes"></a>

### Principal Attributes

- Displays markers that represent elements of the client view.
- Displays in arbitrary units.
- Provides for an accessory view containing extra controls.

<a id="Creation"></a>

### Creation

- [hasHorizontalRuler](nsscrollview/hashorizontalruler.md) (`NSScrollView`)
- [hasVerticalRuler](nsscrollview/hasverticalruler.md) (`NSScrollView`)
- [initWithScrollView:orientation:](nsrulerview/init%28scrollview_orientation_%29.md) Designated initializer.

<a id="Commonly-Used-Methods"></a>

### Commonly Used Methods

- **[clientView](nsrulerview/clientview.md)**: Changes the ruler’s client view.
- **[markers](nsrulerview/markers.md)**: Sets the markers displayed by the ruler view.
- **[accessoryView](nsrulerview/accessoryview.md)**: Sets the accessory view.
- **[trackMarker:withMouseEvent:](nsrulerview/trackmarker%28__withmouseevent_%29.md)**: Allows the user to add a new marker.

<a id="Overview"></a>

### Overview

See NSRulerMarkerClientViewDelegation for delegate methods that may be of interest.

## Topics

### Creating a Ruler View

- [initWithScrollView:orientation:](nsrulerview/init%28scrollview_orientation_%29.md): Initializes a newly allocated NSRulerView to have `orientation` (`NSHorizontalRuler` or `NSVerticalRuler`) within `aScrollView`.
- [initWithCoder:](nsrulerview/init%28coder_%29.md)

### Altering measurement units

- [registerUnitWithName:abbreviation:unitToPointsConversionFactor:stepUpCycle:stepDownCycle:](nsrulerview/registerunit%28withname_abbreviation_unittopointsconversionfactor_stepupcycle_stepdowncycle_%29.md): Registers a new unit of measurement with the NSRulerView class, making it available to all instances of NSRulerView.
- [measurementUnits](nsrulerview/measurementunits.md): The measurement units used by the ruler to `unitName`.
- [NSRulerViewUnitName](nsrulerview/unitname.md)

### Setting the client view

- [clientView](nsrulerview/clientview.md): The receiver’s client view, if it has one.

### Setting an accessory view

- [accessoryView](nsrulerview/accessoryview.md): The receiver’s accessory view to `aView`.

### Setting the zero mark position

- [originOffset](nsrulerview/originoffset.md): The distance to the zero hash mark from the bounds origin of the NSScrollView’s document view (not of the receiver’s client view), in the document view’s coordinate system.

### Adding and removing markers

- [markers](nsrulerview/markers.md): The receiver’s ruler markers to `markers`, removing any existing ruler markers and not consulting with the client view about the new markers.
- [addMarker:](nsrulerview/addmarker%28__%29.md): Adds `aMarker` to the receiver, without consulting the client view for approval.
- [removeMarker:](nsrulerview/removemarker%28__%29.md): Removes `aMarker` from the receiver, without consulting the client view for approval.
- [trackMarker:withMouseEvent:](nsrulerview/trackmarker%28__withmouseevent_%29.md): Tracks the mouse to add `aMarker` based on the initial mouse-down or mouse-dragged event `theEvent`.

### Drawing temporary ruler lines

- [moveRulerlineFromLocation:toLocation:](nsrulerview/moverulerline%28fromlocation_tolocation_%29.md): Draws temporary lines in the ruler area.

### Drawing

- [drawHashMarksAndLabelsInRect:](nsrulerview/drawhashmarksandlabels%28in_%29.md): Draws the receiver’s hash marks and labels in `aRect`, which is expressed in the receiver’s coordinate system.
- [drawMarkersInRect:](nsrulerview/drawmarkers%28in_%29.md): Draws the receiver’s markers in `aRect`, which is expressed in the receiver’s coordinate system.
- [invalidateHashMarks](nsrulerview/invalidatehashmarks%28%29.md): Forces recalculation of the hash mark spacing for the next time the receiver is displayed.

### Ruler layout

- [scrollView](nsrulerview/scrollview.md): The NSScrollView that owns the receiver to `scrollView`, without retaining it.
- [orientation](nsrulerview/orientation-swift.property.md): The orientation of the receiver to `orientation`.
- [NSRulerOrientation](nsrulerview/orientation-swift.enum.md): These constants are defined to specify a ruler’s orientation and are used by [orientation](nsrulerview/orientation-swift.property.md).
- [reservedThicknessForAccessoryView](nsrulerview/reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
- [reservedThicknessForMarkers](nsrulerview/reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.
- [ruleThickness](nsrulerview/rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [requiredThickness](nsrulerview/requiredthickness.md): The thickness needed for proper tiling of the receiver within an NSScrollView.
- [baselineLocation](nsrulerview/baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
- [flipped](nsrulerview/isflipped.md): A Boolean that indicates if the ruler view’s coordinate system is flipped.

## Relationships

### Inherits From

- [NSView](nsview.md)

## See Also

### Rulers

- [NSRulerMarker](nsrulermarker.md): A symbol on a ruler view, indicating a location for the graphics element it represents in the client of the ruler view.

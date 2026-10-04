> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/cllocationmanager/headingbody

# headingBody (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · watchOS 27.0+

A physical body or view that defines the reference orientation for heading calculations.

## Declaration

```swift
var headingBody: (any CLBodyIdentifiable)? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to associate heading calculations with a specific body or view, such as a [UIKit](../../uikit.md) [UIView](../../uikit/uiview.md) that conforms to [CLBodyIdentifiable](../clbodyidentifiable.md).

When this property is `nil`, the location manager uses the physical orientation specified by [headingOrientation](headingorientation.md). When you assign a view conforming to [CLBodyIdentifiable](../clbodyidentifiable.md) to this property, Core Location calculates heading relative to the top of that view and ignores [headingOrientation](headingorientation.md). The system updates this calculation automatically whenever the view rotates or changes position.

On iPhone Duo, setting this property also identifies which display your app occupies. For example, when iPhone Duo rests camera-side down on a surface, setting `headingBody` to your view allows your app to receive heading data relative to that active display and detect which face is up.

```swift
let locationManager = CLLocationManager()

override func viewDidLoad() {
    super.viewDidLoad()
    
    // Align heading updates with this view's orientation.
    locationManager.headingBody = view
    
    locationManager.delegate = self
    locationManager.startUpdatingHeading()
}
```

> **Note**

> On platforms where body-relative heading calculation isn’t supported, the location manager reports heading data using the default device orientation.

## Topics

### Heading configuration

- [CLBodyIdentifiable](../clbodyidentifiable.md): A type that identifies a physical body or view for heading calculations.
- [headingOrientation](headingorientation.md): Deprecated. The device orientation to use when computing heading values.

## See Also

### Running the heading service

- [startUpdatingHeading()](startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [stopUpdatingHeading()](stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [dismissHeadingCalibrationDisplay()](dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [headingFilter](headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [kCLHeadingFilterNone](../kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](../cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](headingorientation.md): Deprecated. The device orientation to use when computing heading values.
- [CLDeviceOrientation](../cldeviceorientation.md): Constants indicating the physical orientation of the device.

# headingBody (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · watchOS 27.0+

A physical body or view that defines the reference orientation for heading calculations.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<CLBodyIdentifiable> headingBody;
```

<a id="Discussion"></a>

## Discussion

Set this property to associate heading calculations with a specific body or view, such as a [UIKit](../../uikit.md) [UIView](../../uikit/uiview.md) that conforms to [CLBodyIdentifiable](../clbodyidentifiable.md).

When this property is `nil`, the location manager uses the physical orientation specified by [headingOrientation](headingorientation.md). When you assign a view conforming to [CLBodyIdentifiable](../clbodyidentifiable.md) to this property, Core Location calculates heading relative to the top of that view and ignores [headingOrientation](headingorientation.md). The system updates this calculation automatically whenever the view rotates or changes position.

On iPhone Duo, setting this property also identifies which display your app occupies. For example, when iPhone Duo rests camera-side down on a surface, setting `headingBody` to your view allows your app to receive heading data relative to that active display and detect which face is up.

```swift
let locationManager = CLLocationManager()

override func viewDidLoad() {
    super.viewDidLoad()
    
    // Align heading updates with this view's orientation.
    locationManager.headingBody = view
    
    locationManager.delegate = self
    locationManager.startUpdatingHeading()
}
```

> **Note**

> On platforms where body-relative heading calculation isn’t supported, the location manager reports heading data using the default device orientation.

## Topics

### Heading configuration

- [CLBodyIdentifiable](../clbodyidentifiable.md): A type that identifies a physical body or view for heading calculations.
- [headingOrientation](headingorientation.md): Deprecated. The device orientation to use when computing heading values.

## See Also

### Running the heading service

- [startUpdatingHeading](startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [stopUpdatingHeading](stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [dismissHeadingCalibrationDisplay](dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [headingFilter](headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [kCLHeadingFilterNone](../kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](../cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](headingorientation.md): Deprecated. The device orientation to use when computing heading values.
- [CLDeviceOrientation](../cldeviceorientation.md): Constants indicating the physical orientation of the device.

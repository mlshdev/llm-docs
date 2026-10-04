> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmmotionmanager/devicemotionbody

# deviceMotionBody (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+ · watchOS 27.0+

A physical body or view that defines the coordinate system for device-motion data.

## Declaration

```swift
var deviceMotionBody: (any CMBodyIdentifiable)? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to associate device-motion calculations with a specific body or view, such as a [UIKit](../../uikit.md) [UIView](../../uikit/uiview.md) that conforms to [CMBodyIdentifiable](../cmbodyidentifiable.md).

When this property is `nil`, Core Motion calculates motion updates using the device’s hardware coordinate frame. When you set this property to an identifiable body, Core Motion transforms motion data, including 3D orientation, rotation rate, gravity, and user acceleration to match the current orientation of that view. The system updates this transformation automatically whenever the view rotates or changes position.

On iPhone Duo, setting this property also identifies which display your app occupies. For example, when iPhone Duo is seated with the camera-side down on a surface, setting `deviceMotionBody` to your view allows your app to receive motion data relative to that active display and detect which face is up.

Because coordinate transformations apply directly to each specified view rather than across the entire app, you can create separate motion manager instances for different views. For example, an app can display two distinct bubble levels side by side across separate views to check surface tilt, with one level tracking horizontal alignment and the other tracking vertical alignment. Each motion manager tracks its own view orientation independently.

```swift
let motionManager = CMMotionManager()

override func viewDidLoad() {
    super.viewDidLoad()
    
    // Align device motion with this view's orientation.
    motionManager.deviceMotionBody = view
    
    motionManager.startDeviceMotionUpdates(using: .xTrueNorthZVertical, to: .main) { motion, error in
        guard let motion else { return }
        // Motion data automatically aligns with the view's current orientation.
    }
}
```

> **Note**

> On platforms where body-relative motion calculation isn’t supported, Core Motion reports motion data using the default device coordinate frame.

## Topics

### Motion configuration

- [CMBodyIdentifiable](../cmbodyidentifiable.md): A type that identifies a physical body or view for device-motion calculations.

## See Also

### Managing device motion updates

- [showsDeviceMovementDisplay](showsdevicemovementdisplay.md): Controls whether the device-movement display is shown.
- [deviceMotionUpdateInterval](devicemotionupdateinterval.md): The interval, in seconds, for providing device-motion updates to the block handler.
- [startDeviceMotionUpdates(using:to:withHandler:)](startdevicemotionupdates%28using_to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified reference frame and block handler.
- [startDeviceMotionUpdates(to:withHandler:)](startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified block handler.
- [startDeviceMotionUpdates(using:)](startdevicemotionupdates%28using_%29.md): Starts device-motion updates using a reference frame but without a block handler.
- [startDeviceMotionUpdates()](startdevicemotionupdates%28%29.md): Starts device-motion updates without a block handler.
- [stopDeviceMotionUpdates()](stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [deviceMotion](devicemotion.md): The latest sample of device-motion data.
- [CMDeviceMotionHandler](../cmdevicemotionhandler.md): The type of block callback for handling device-motion data.

# deviceMotionBody (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+ · watchOS 27.0+

A physical body or view that defines the coordinate system for device-motion data.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<CMBodyIdentifiable> deviceMotionBody;
```

<a id="Discussion"></a>

## Discussion

Set this property to associate device-motion calculations with a specific body or view, such as a [UIKit](../../uikit.md) [UIView](../../uikit/uiview.md) that conforms to [CMBodyIdentifiable](../cmbodyidentifiable.md).

When this property is `nil`, Core Motion calculates motion updates using the device’s hardware coordinate frame. When you set this property to an identifiable body, Core Motion transforms motion data, including 3D orientation, rotation rate, gravity, and user acceleration to match the current orientation of that view. The system updates this transformation automatically whenever the view rotates or changes position.

On iPhone Duo, setting this property also identifies which display your app occupies. For example, when iPhone Duo is seated with the camera-side down on a surface, setting `deviceMotionBody` to your view allows your app to receive motion data relative to that active display and detect which face is up.

Because coordinate transformations apply directly to each specified view rather than across the entire app, you can create separate motion manager instances for different views. For example, an app can display two distinct bubble levels side by side across separate views to check surface tilt, with one level tracking horizontal alignment and the other tracking vertical alignment. Each motion manager tracks its own view orientation independently.

```swift
let motionManager = CMMotionManager()

override func viewDidLoad() {
    super.viewDidLoad()
    
    // Align device motion with this view's orientation.
    motionManager.deviceMotionBody = view
    
    motionManager.startDeviceMotionUpdates(using: .xTrueNorthZVertical, to: .main) { motion, error in
        guard let motion else { return }
        // Motion data automatically aligns with the view's current orientation.
    }
}
```

> **Note**

> On platforms where body-relative motion calculation isn’t supported, Core Motion reports motion data using the default device coordinate frame.

## Topics

### Motion configuration

- [CMBodyIdentifiable](../cmbodyidentifiable.md): A type that identifies a physical body or view for device-motion calculations.

## See Also

### Managing device motion updates

- [showsDeviceMovementDisplay](showsdevicemovementdisplay.md): Controls whether the device-movement display is shown.
- [deviceMotionUpdateInterval](devicemotionupdateinterval.md): The interval, in seconds, for providing device-motion updates to the block handler.
- [startDeviceMotionUpdatesUsingReferenceFrame:toQueue:withHandler:](startdevicemotionupdates%28using_to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified reference frame and block handler.
- [startDeviceMotionUpdatesToQueue:withHandler:](startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified block handler.
- [startDeviceMotionUpdatesUsingReferenceFrame:](startdevicemotionupdates%28using_%29.md): Starts device-motion updates using a reference frame but without a block handler.
- [startDeviceMotionUpdates](startdevicemotionupdates%28%29.md): Starts device-motion updates without a block handler.
- [stopDeviceMotionUpdates](stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [deviceMotion](devicemotion.md): The latest sample of device-motion data.
- [CMDeviceMotionHandler](../cmdevicemotionhandler.md): The type of block callback for handling device-motion data.

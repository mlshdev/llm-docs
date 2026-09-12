> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuidevice/orientation](https://developer.apple.com/documentation/xcuiautomation/xcuidevice/orientation)

# orientation (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · Xcode 16.3+

The orientation of the device.

## Declaration

```swift
var orientation: UIDeviceOrientation { get set }
```

<a id="Discussion"></a>

## Discussion

To simulate a change in the physical orientation of a device under test, set the value of the [orientation](orientation.md) property for the shared [XCUIDevice](../xcuidevice.md) object to one of the [UIDeviceOrientation](https://developer.apple.com/documentation/uikit/uideviceorientation) constants UIKit defines. This impacts the [orientation](https://developer.apple.com/documentation/uikit/uidevice/orientation) property UIKit uses to identify a device’s physical orientation. These constants aren’t tied directly to the orientation of your app’s user interface. The example below sets the device orientation to landscape right:

```swift
XCUIDevice.shared.orientation = .landscapeRight
```

Set the property once in your test fixture’s setup or intialization code to set an orientation for all the test methods in that fixture.

Available in iOS.

## See Also

### Rotating and changing location

- [location](location.md): The proxy location a test uses to simulate longitude, latitude, and course information for the device.
- [XCUILocation](../xcuilocation.md): A proxy that simulates a device’s location in terms of its longitude, latitude, and course information.

# orientation (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · Xcode 16.3+

The orientation of the device.

## Declaration

```objectivec
@property (nonatomic) UIDeviceOrientation orientation;
```

<a id="Discussion"></a>

## Discussion

To simulate a change in the physical orientation of a device under test, set the value of the [orientation](orientation.md) property for the shared [XCUIDevice](../xcuidevice.md) object to one of the [UIDeviceOrientation](https://developer.apple.com/documentation/uikit/uideviceorientation) constants UIKit defines. This impacts the [orientation](https://developer.apple.com/documentation/uikit/uidevice/orientation) property UIKit uses to identify a device’s physical orientation. These constants aren’t tied directly to the orientation of your app’s user interface. The example below sets the device orientation to landscape right:

```swift
XCUIDevice.shared.orientation = .landscapeRight
```

Set the property once in your test fixture’s setup or intialization code to set an orientation for all the test methods in that fixture.

Available in iOS.

## See Also

### Rotating and changing location

- [location](location.md): The proxy location a test uses to simulate longitude, latitude, and course information for the device.
- [XCUILocation](../xcuilocation.md): A proxy that simulates a device’s location in terms of its longitude, latitude, and course information.

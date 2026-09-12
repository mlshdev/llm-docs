> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuidevice/location](https://developer.apple.com/documentation/xcuiautomation/xcuidevice/location)

# location (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+ · Xcode 16.3+

The proxy location a test uses to simulate longitude, latitude, and course information for the device.

## Declaration

```swift
var location: XCUILocation? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to provide a proxy location to simulate longitude, latitude, and course information for the device. If you don’t provide a proxy location, a test uses the physical location of the device that [Core Location](https://developer.apple.com/documentation/corelocation) provides. The example below sets the device’s proxy location:

```swift
// A device location that wraps a CLLocation object from Core Location.
let location = XCUILocation(location: CLLocation(
      latitude: 37.050835,
      longitude: -122.070831))

// Sets the device's proxy location.
XCUIDevice.shared.location = location
```

Set the property once in your test fixture’s setup or intialization code to set a proxy location for all the test methods in that fixture.

## See Also

### Rotating and changing location

- [orientation](orientation.md): The orientation of the device.
- [XCUILocation](../xcuilocation.md): A proxy that simulates a device’s location in terms of its longitude, latitude, and course information.

# location (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+ · Xcode 16.3+

The proxy location a test uses to simulate longitude, latitude, and course information for the device.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) XCUILocation * location;
```

<a id="Discussion"></a>

## Discussion

Use this property to provide a proxy location to simulate longitude, latitude, and course information for the device. If you don’t provide a proxy location, a test uses the physical location of the device that [Core Location](https://developer.apple.com/documentation/corelocation) provides. The example below sets the device’s proxy location:

```swift
// A device location that wraps a CLLocation object from Core Location.
let location = XCUILocation(location: CLLocation(
      latitude: 37.050835,
      longitude: -122.070831))

// Sets the device's proxy location.
XCUIDevice.shared.location = location
```

Set the property once in your test fixture’s setup or intialization code to set a proxy location for all the test methods in that fixture.

## See Also

### Rotating and changing location

- [orientation](orientation.md): The orientation of the device.
- [XCUILocation](../xcuilocation.md): A proxy that simulates a device’s location in terms of its longitude, latitude, and course information.

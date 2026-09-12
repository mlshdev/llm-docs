> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuidevice/hashardwarebutton(_:)](https://developer.apple.com/documentation/xcuiautomation/xcuidevice/hashardwarebutton(_:))

# hasHardwareButton(\_:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+ · Xcode 16.3+

Determines whether the device supports the button type you provide.

## Declaration

```swift
func hasHardwareButton(_ button: XCUIDevice.Button) -> Bool
```

## Parameters

- `button`: The type of physical button on an iOS device to check for.

<a id="return-value"></a>

## Return Value

`True` if the device has this type of button, otherwise `False`.

<a id="Discussion"></a>

## Discussion

Use this method to check if the device supports the particular button type you provide.

## See Also

### Interacting with buttons and the Digital Crown

- [press(\_:)](press%28__%29.md): Simulates the user pressing a physical button.
- [XCUIDevice.Button](button.md): A physical button on an iOS device.
- [rotateDigitalCrown(delta:)](rotatedigitalcrown%28delta_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount.
- [rotateDigitalCrown(delta:velocity:)](rotatedigitalcrown%28delta_velocity_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount and speed you provide.

# hasHardwareButton: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+ · Xcode 16.3+

Determines whether the device supports the button type you provide.

## Declaration

```objectivec
- (BOOL) hasHardwareButton:(XCUIDeviceButton) button;
```

## Parameters

- `button`: The type of physical button on an iOS device to check for.

<a id="return-value"></a>

## Return Value

`True` if the device has this type of button, otherwise `False`.

<a id="Discussion"></a>

## Discussion

Use this method to check if the device supports the particular button type you provide.

## See Also

### Interacting with buttons and the Digital Crown

- [pressButton:](press%28__%29.md): Simulates the user pressing a physical button.
- [XCUIDeviceButton](button.md): A physical button on an iOS device.
- [rotateDigitalCrownByDelta:](rotatedigitalcrown%28delta_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount.
- [rotateDigitalCrownByDelta:withVelocity:](rotatedigitalcrown%28delta_velocity_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount and speed you provide.

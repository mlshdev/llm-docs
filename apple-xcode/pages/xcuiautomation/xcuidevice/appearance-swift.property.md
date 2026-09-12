> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuidevice/appearance-swift.property](https://developer.apple.com/documentation/xcuiautomation/xcuidevice/appearance-swift.property)

# appearance (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · Xcode 16.3+

The interface style of the device.

## Declaration

```swift
var appearance: XCUIDevice.Appearance { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to get or set the interface appearance the system uses for applications running on the device. The example below captures the initial appearance value and sets the device to Dark Mode:

```swift
let previousAppearance = XCUIDevice.shared.appearance 
XCUIDevice.shared.appearance = .dark
```

Set the property once in your test fixture’s setup or intialization code to set an appearance for all the test methods in that fixture.

## See Also

### Interacting with the OS

- [system](system.md): An object that provides an interface to OS-specific properties and actions.
- [XCUIDevice.Appearance](appearance-swift.enum.md): Constants that indicate an interface style.

# appearance (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · Xcode 16.3+

The interface style of the device.

## Declaration

```objectivec
@property (nonatomic) XCUIDeviceAppearance appearance;
```

<a id="Discussion"></a>

## Discussion

Use this property to get or set the interface appearance the system uses for applications running on the device. The example below captures the initial appearance value and sets the device to Dark Mode:

```swift
let previousAppearance = XCUIDevice.shared.appearance 
XCUIDevice.shared.appearance = .dark
```

Set the property once in your test fixture’s setup or intialization code to set an appearance for all the test methods in that fixture.

## See Also

### Interacting with the OS

- [system](system.md): An object that provides an interface to OS-specific properties and actions.
- [XCUIDeviceAppearance](appearance-swift.enum.md): Constants that indicate an interface style.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevice/physicalinputprofile](https://developer.apple.com/documentation/gamecontroller/gcdevice/physicalinputprofile)

# physicalInputProfile (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS 11.0+ (deprecated in 13.0) · tvOS 14.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The device’s physical input profile, such as a controller’s extended gamepad.

> Use the physicalInputProfile property on GCController instead.  For GCKeyboard, use the keyboardInput property.  For GCMouse, use the mouseInput property.

## Declaration

```swift
var physicalInputProfile: GCPhysicalInputProfile { get }
```

## See Also

### Handling input

- [handlerQueue](handlerqueue.md): The dispatch queue that the framework uses to call element value change handlers.

# physicalInputProfile (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS 11.0+ (deprecated in 13.0) · tvOS 14.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The device’s physical input profile, such as a controller’s extended gamepad.

> Use the physicalInputProfile property on GCController instead.  For GCKeyboard, use the keyboardInput property.  For GCMouse, use the mouseInput property.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) GCPhysicalInputProfile * physicalInputProfile;
```

## See Also

### Handling input

- [handlerQueue](handlerqueue.md): The dispatch queue that the framework uses to call element value change handlers.

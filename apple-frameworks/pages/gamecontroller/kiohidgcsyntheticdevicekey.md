> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/kiohidgcsyntheticdevicekey](https://developer.apple.com/documentation/gamecontroller/kiohidgcsyntheticdevicekey)

# kIOHIDGCSyntheticDeviceKey (Swift)

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A key that specifies whether the device is a game controller synthetic HID device.

## Declaration

```swift
var kIOHIDGCSyntheticDeviceKey: String { get }
```

## Mentioned In

- [Understanding game controller backward compatibility](understanding-game-controller-backward-compatibility.md)

<a id="Discussion"></a>

## Discussion

This key is present with a Boolean value of `true` on all game controller synthetic HID devices that the Game Controller framework creates.

If your app needs to exclude these synthetic HID devices from discovery by [IOHIDManagerRef](../iokit/iohidmanagerref.md), [IOServiceGetMatchingServices(\_:\_:\_:)](../iokit/1514494-ioservicegetmatchingservices.md), or [IOServiceAddMatchingNotification(\_:\_:\_:\_:\_:\_:)](../iokit/1514362-ioserviceaddmatchingnotification.md), include the [kIOHIDGCSyntheticDeviceKey](kiohidgcsyntheticdevicekey.md) with a value of `false` in the matching criteria.

```objc
IOHIDManagerRef manager = IOHIDManagerCreate(kCFAllocatorDefault, kIOHIDManagerOptionNone);
IOHIDManagerSetDeviceMatching(manager, (__bridge CFDictionaryRef)@{
    @kIOProviderClassKey: @kIOHIDDeviceKey,
    @kIOHIDGCSyntheticDeviceKey: @(NO)
});
```

Your code can check whether an [io_service_t](../iokit/io_service_t.md) or an [IOHIDDeviceRef](../iokit/iohiddeviceref.md) refers to a game controller synthetic HID device by querying the value of the [kIOHIDGCSyntheticDeviceKey](kiohidgcsyntheticdevicekey.md) property.

```objc
if ( IOHIDDeviceGetProperty(device, CFSTR(kIOHIDGCSyntheticDeviceKey)) == kCFBooleanTrue ) {
    // This is a synthetic HID device.
}
```

## See Also

### Game Controller framework migration from IOKit

- [Understanding game controller backward compatibility](understanding-game-controller-backward-compatibility.md): Learn how macOS brings support for the latest game controllers to software that predates the introduction of the Game Controller framework.

# kIOHIDGCSyntheticDeviceKey (Objective-C)

**Framework:** Game Controller  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A key that specifies whether the device is a game controller synthetic HID device.

## Declaration

```objectivec
#define kIOHIDGCSyntheticDeviceKey
```

## Mentioned In

- [Understanding game controller backward compatibility](understanding-game-controller-backward-compatibility.md)

<a id="Discussion"></a>

## Discussion

This key is present with a Boolean value of `true` on all game controller synthetic HID devices that the Game Controller framework creates.

If your app needs to exclude these synthetic HID devices from discovery by [IOHIDManagerRef](../iokit/iohidmanagerref.md), [IOServiceGetMatchingServices](../iokit/1514494-ioservicegetmatchingservices.md), or [IOServiceAddMatchingNotification](../iokit/1514362-ioserviceaddmatchingnotification.md), include the [kIOHIDGCSyntheticDeviceKey](kiohidgcsyntheticdevicekey.md) with a value of `false` in the matching criteria.

```objc
IOHIDManagerRef manager = IOHIDManagerCreate(kCFAllocatorDefault, kIOHIDManagerOptionNone);
IOHIDManagerSetDeviceMatching(manager, (__bridge CFDictionaryRef)@{
    @kIOProviderClassKey: @kIOHIDDeviceKey,
    @kIOHIDGCSyntheticDeviceKey: @(NO)
});
```

Your code can check whether an [io_service_t](../iokit/io_service_t.md) or an [IOHIDDeviceRef](../iokit/iohiddeviceref.md) refers to a game controller synthetic HID device by querying the value of the [kIOHIDGCSyntheticDeviceKey](kiohidgcsyntheticdevicekey.md) property.

```objc
if ( IOHIDDeviceGetProperty(device, CFSTR(kIOHIDGCSyntheticDeviceKey)) == kCFBooleanTrue ) {
    // This is a synthetic HID device.
}
```

## See Also

### Game Controller framework migration from IOKit

- [Understanding game controller backward compatibility](understanding-game-controller-backward-compatibility.md): Learn how macOS brings support for the latest game controllers to software that predates the introduction of the Game Controller framework.

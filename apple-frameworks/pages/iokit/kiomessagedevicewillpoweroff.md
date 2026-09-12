> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiomessagedevicewillpoweroff](https://developer.apple.com/documentation/iokit/kiomessagedevicewillpoweroff)

# kIOMessageDeviceWillPowerOff

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 1.0+

## Declaration

```objectivec
#define kIOMessageDeviceWillPowerOff
```

<a id="discussion"></a>

## Discussion

Indicates the device is about to move to a lower power state. Sent to IOKit interest notification clients of type `kIOAppPowerStateInterest` and `kIOGeneralInterest`.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiomessagecandevicepoweroff](https://developer.apple.com/documentation/iokit/kiomessagecandevicepoweroff)

# kIOMessageCanDevicePowerOff

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 1.0+

## Declaration

```objectivec
#define kIOMessageCanDevicePowerOff
```

<a id="discussion"></a>

## Discussion

Delivered to `kIOAppPowerStateInterest` clients of devices that implement their own idle timeouts. This message type is almost never used.

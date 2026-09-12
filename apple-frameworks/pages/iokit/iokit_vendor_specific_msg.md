> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iokit_vendor_specific_msg](https://developer.apple.com/documentation/iokit/iokit_vendor_specific_msg)

# iokit_vendor_specific_msg

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · visionOS 1.0+

## Declaration

```objectivec
#define iokit_vendor_specific_msg(message)
```

<a id="discussion"></a>

## Discussion

iokit_vendor_specific_msg passes messages in the sub_iokit_vendor_specific subsystem. It can be used to generate messages that are used for private communication between vendor specific code with the IOService::message() etc. APIs.

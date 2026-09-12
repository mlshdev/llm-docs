> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationshouldendsuppressinghighdynamicrangecontentnotification](https://developer.apple.com/documentation/appkit/nsapplicationshouldendsuppressinghighdynamicrangecontentnotification)

# NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 26.0+

## Declaration

```objectivec
extern NSNotificationName NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification;
```

## See Also

### Displaying high dynamic resolution (HDR) content

- [applicationShouldSuppressHighDynamicRangeContent](nsapplication/applicationshouldsuppresshighdynamicrangecontent.md): A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.
- [NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification](nsapplicationshouldbeginsuppressinghighdynamicrangecontentnotification.md)

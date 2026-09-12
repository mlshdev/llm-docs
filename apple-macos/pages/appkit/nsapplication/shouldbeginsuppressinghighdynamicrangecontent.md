> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/shouldbeginsuppressinghighdynamicrangecontent](https://developer.apple.com/documentation/appkit/nsapplication/shouldbeginsuppressinghighdynamicrangecontent)

# NSApplication.ShouldBeginSuppressingHighDynamicRangeContent

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 26.0+

## Declaration

```swift
struct ShouldBeginSuppressingHighDynamicRangeContent
```

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](https://developer.apple.com/documentation/foundation/notificationcenter/mainactormessage)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying high dynamic resolution (HDR) content

- [applicationShouldSuppressHighDynamicRangeContent](applicationshouldsuppresshighdynamicrangecontent.md): A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.
- [NSApplication.ShouldEndSuppressingHighDynamicRangeContent](shouldendsuppressinghighdynamicrangecontent.md)

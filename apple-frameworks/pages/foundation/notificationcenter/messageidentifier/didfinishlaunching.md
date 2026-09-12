> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/didfinishlaunching](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/didfinishlaunching)

# didFinishLaunching

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
static var didFinishLaunching: NotificationCenter.BaseMessageIdentifier<UIApplication.DidFinishLaunchingMessage> { get }
```

## See Also

### Identifying UIKit app life cycle messages

- [didBecomeActive](didbecomeactive-2hcfs.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.DidBecomeActiveMessage>`.
- [didEnterBackground](didenterbackground-1u5sm.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.DidEnterBackgroundMessage>`.
- [willEnterForeground](willenterforeground-95zi8.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.WillEnterForegroundMessage>`.
- [willResignActive](willresignactive-4rf2p.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.WillResignActiveMessage>`.
- [didReceiveMemoryWarning](didreceivememorywarning.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.DidReceiveMemoryWarningMessage>`.
- [significantTimeChange](significanttimechange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.SignificantTimeChangeMessage>`.
- [backgroundRefreshStatusDidChange](backgroundrefreshstatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.BackgroundRefreshStatusDidChangeMessage>`.
- [userDidTakeScreenshot](userdidtakescreenshot.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.UserDidTakeScreenshotMessage>`.

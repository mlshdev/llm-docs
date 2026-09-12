> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandgroupplacement/appinfo](https://developer.apple.com/documentation/swiftui/commandgroupplacement/appinfo)

# appInfo

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Placement for commands that provide information about the app, the terms of the user’s license agreement, and so on.

## Declaration

```swift
static let appInfo: CommandGroupPlacement
```

<a id="discussion"></a>

## Discussion

By default, this group includes the following command in macOS:

- About App

## See Also

### App interactions

- [appSettings](appsettings.md): Placement for commands that expose app settings and preferences.
- [appTermination](apptermination.md): Placement for commands that result in app termination.
- [appVisibility](appvisibility.md): Placement for commands that control the visibility of running apps.
- [systemServices](systemservices.md): Placement for commands that expose services other apps provide.

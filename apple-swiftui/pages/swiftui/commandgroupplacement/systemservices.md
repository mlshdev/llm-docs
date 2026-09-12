> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandgroupplacement/systemservices](https://developer.apple.com/documentation/swiftui/commandgroupplacement/systemservices)

# systemServices

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Placement for commands that expose services other apps provide.

## Declaration

```swift
static let systemServices: CommandGroupPlacement
```

<a id="discussion"></a>

## Discussion

By default, this group includes the following command in macOS:

- Services submenu (managed automatically)

## See Also

### App interactions

- [appInfo](appinfo.md): Placement for commands that provide information about the app, the terms of the user’s license agreement, and so on.
- [appSettings](appsettings.md): Placement for commands that expose app settings and preferences.
- [appTermination](apptermination.md): Placement for commands that result in app termination.
- [appVisibility](appvisibility.md): Placement for commands that control the visibility of running apps.

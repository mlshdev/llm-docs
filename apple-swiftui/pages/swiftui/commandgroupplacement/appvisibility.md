> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/commandgroupplacement/appvisibility

# appVisibility

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Placement for commands that control the visibility of running apps.

## Declaration

```swift
static let appVisibility: CommandGroupPlacement
```

<a id="discussion"></a>

## Discussion

By default, this group includes the following commands in macOS:

- Hide App
- Hide Others
- Show All

## See Also

### App interactions

- [appInfo](appinfo.md): Placement for commands that provide information about the app, the terms of the user’s license agreement, and so on.
- [appSettings](appsettings.md): Placement for commands that expose app settings and preferences.
- [appTermination](apptermination.md): Placement for commands that result in app termination.
- [systemServices](systemservices.md): Placement for commands that expose services other apps provide.

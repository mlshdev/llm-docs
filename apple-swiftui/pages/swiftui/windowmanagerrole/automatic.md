> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowmanagerrole/automatic](https://developer.apple.com/documentation/swiftui/windowmanagerrole/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The automatic role. The type and configuration of the scene will be used to determine how its windows behave in full screen and Stage Manager.

## Declaration

```swift
static let automatic: WindowManagerRole
```

<a id="discussion"></a>

## Discussion

On macOS, [WindowGroup](../windowgroup.md) and [DocumentGroup](../documentgroup.md) scenes will use the `principal` role. [Window](../window.md) scenes will use the `principal` role when they are specified as the first scene in the app’s definition, and use the `associated` role otherwise. [Settings](../settings.md) will use the `associated` role.

> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dialogseverity/critical](https://developer.apple.com/documentation/swiftui/dialogseverity/critical)

# critical

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 13.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A severity that indicates extra attention should be given to the dialog, for example when unexpected data loss may occur as a result of the action taken.

## Declaration

```swift
static let critical: DialogSeverity
```

<a id="discussion"></a>

## Discussion

On macOS, a dialog with critical severity will display a large caution symbol with the app icon as an overlay.

## See Also

### Getting severities

- [automatic](automatic.md): The default dialog severity. Alerts that present an error will use `.critical` and all others will use `.standard`.
- [standard](standard.md): A severity that indicates the dialog is being displayed for the purpose of presenting information to the user.

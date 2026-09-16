> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/dialogseverity/standard

# standard

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A severity that indicates the dialog is being displayed for the purpose of presenting information to the user.

## Declaration

```swift
static let standard: DialogSeverity
```

## See Also

### Getting severities

- [automatic](automatic.md): The default dialog severity. Alerts that present an error will use `.critical` and all others will use `.standard`.
- [critical](critical.md): A severity that indicates extra attention should be given to the dialog, for example when unexpected data loss may occur as a result of the action taken.

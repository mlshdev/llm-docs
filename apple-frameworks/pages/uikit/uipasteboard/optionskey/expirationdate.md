> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/optionskey/expirationdate](https://developer.apple.com/documentation/uikit/uipasteboard/optionskey/expirationdate)

# expirationDate (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The time and date that you want the system to remove the pasteboard items from the pasteboard.

## Declaration

```swift
static let expirationDate: UIPasteboard.OptionsKey
```

<a id="Discussion"></a>

## Discussion

Specify the date and time as an [NSDate](../../../foundation/nsdate.md) value.

## See Also

### Constants

- [localOnly](localonly.md): A Boolean value that specifies that the pasteboard items should not be available to other devices through the Handoff feature.

# UIPasteboardOptionExpirationDate (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The time and date that you want the system to remove the pasteboard items from the pasteboard.

## Declaration

```objectivec
extern UIPasteboardOption const UIPasteboardOptionExpirationDate;
```

<a id="Discussion"></a>

## Discussion

Specify the date and time as an [NSDate](../../../foundation/nsdate.md) value.

## See Also

### Constants

- [UIPasteboardOptionLocalOnly](localonly.md): A Boolean value that specifies that the pasteboard items should not be available to other devices through the Handoff feature.

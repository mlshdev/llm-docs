> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/optionskey/localonly](https://developer.apple.com/documentation/uikit/uipasteboard/optionskey/localonly)

# localOnly (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that specifies that the pasteboard items should not be available to other devices through the Handoff feature.

## Declaration

```swift
static let localOnly: UIPasteboard.OptionsKey
```

<a id="Description"></a>

## Description

The value is expressed as an [NSNumber](../../../foundation/nsnumber.md) type.

## See Also

### Constants

- [expirationDate](expirationdate.md): The time and date that you want the system to remove the pasteboard items from the pasteboard.

# UIPasteboardOptionLocalOnly (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that specifies that the pasteboard items should not be available to other devices through the Handoff feature.

## Declaration

```objectivec
extern UIPasteboardOption const UIPasteboardOptionLocalOnly;
```

<a id="Description"></a>

## Description

The value is expressed as an [NSNumber](../../../foundation/nsnumber.md) type.

## See Also

### Constants

- [UIPasteboardOptionExpirationDate](expirationdate.md): The time and date that you want the system to remove the pasteboard items from the pasteboard.

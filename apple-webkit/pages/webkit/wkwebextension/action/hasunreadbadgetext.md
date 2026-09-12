> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/action/hasunreadbadgetext](https://developer.apple.com/documentation/webkit/wkwebextension/action/hasunreadbadgetext)

# hasUnreadBadgeText (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating whether the badge text is unread.

## Declaration

```swift
var hasUnreadBadgeText: Bool { get set }
```

<a id="discussion"></a>

## Discussion

This property is automatically set to `YES` when [badgeText](badgetext.md) changes and is not empty. If [badgeText](badgetext.md) becomes empty or the popup associated with the action is presented, this property is automatically set to `NO`. Additionally, it should be set to `NO` by the app when the badge has been presented to the user. This property is useful for higher-level notification badges when extensions might be hidden behind an action sheet.

# hasUnreadBadgeText (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating whether the badge text is unread.

## Declaration

```objectivec
@property (nonatomic) BOOL hasUnreadBadgeText;
```

<a id="discussion"></a>

## Discussion

This property is automatically set to `YES` when [badgeText](badgetext.md) changes and is not empty. If [badgeText](badgetext.md) becomes empty or the popup associated with the action is presented, this property is automatically set to `NO`. Additionally, it should be set to `NO` by the app when the badge has been presented to the user. This property is useful for higher-level notification badges when extensions might be hidden behind an action sheet.

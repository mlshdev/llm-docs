> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagetrailingitem](https://developer.apple.com/documentation/carplay/cpmessagetrailingitem)

# CPMessageTrailingItem (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The accessories that a message list item can display in its trailing region.

## Declaration

```swift
enum CPMessageTrailingItem
```

<a id="overview"></a>

## Overview

Use these constants when creating instances of [CPMessageListItemTrailingConfiguration](cpmessagelistitemtrailingconfiguration.md). A trailing item can provide additional context for a list item’s contents, or help communicate its behavior.

## Topics

### Trailing Items

- [CPMessageTrailingItem.none](cpmessagetrailingitem/none.md): Don’t show a trailing item.
- [CPMessageTrailingItem.mute](cpmessagetrailingitem/mute.md): Show a muted speaker icon.

### Initializers

- [init(rawValue:)](cpmessagetrailingitem/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Trailing Item

- [trailingItem](cpmessagelistitemtrailingconfiguration/trailingitem.md): The configuration’s item.

# CPMessageTrailingItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The accessories that a message list item can display in its trailing region.

## Declaration

```objectivec
enum CPMessageTrailingItem : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants when creating instances of [CPMessageListItemTrailingConfiguration](cpmessagelistitemtrailingconfiguration.md). A trailing item can provide additional context for a list item’s contents, or help communicate its behavior.

## Topics

### Trailing Items

- [CPMessageTrailingItemNone](cpmessagetrailingitem/none.md): Don’t show a trailing item.
- [CPMessageTrailingItemMute](cpmessagetrailingitem/mute.md): Show a muted speaker icon.

## See Also

### Getting the Trailing Item

- [trailingItem](cpmessagelistitemtrailingconfiguration/trailingitem.md): The configuration’s item.

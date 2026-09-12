> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessageleadingitem](https://developer.apple.com/documentation/carplay/cpmessageleadingitem)

# CPMessageLeadingItem (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The accessories that a message list item can display in its leading region.

## Declaration

```swift
enum CPMessageLeadingItem
```

<a id="overview"></a>

## Overview

Use these constants when creating instances of [CPMessageListItemLeadingConfiguration](cpmessagelistitemleadingconfiguration.md). A leading item can provide additional context for a list item’s contents, or help communicate its behavior.

## Topics

### Leading Items

- [CPMessageLeadingItem.none](cpmessageleadingitem/none.md): Don’t show a leading item.
- [CPMessageLeadingItem.pin](cpmessageleadingitem/pin.md): Show a pin icon.
- [CPMessageLeadingItem.star](cpmessageleadingitem/star.md): Show a star icon.

### Initializers

- [init(rawValue:)](cpmessageleadingitem/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Leading Item

- [leadingItem](cpmessagelistitemleadingconfiguration/leadingitem.md): The configuration’s item.

# CPMessageLeadingItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The accessories that a message list item can display in its leading region.

## Declaration

```objectivec
enum CPMessageLeadingItem : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants when creating instances of [CPMessageListItemLeadingConfiguration](cpmessagelistitemleadingconfiguration.md). A leading item can provide additional context for a list item’s contents, or help communicate its behavior.

## Topics

### Leading Items

- [CPMessageLeadingItemNone](cpmessageleadingitem/none.md): Don’t show a leading item.
- [CPMessageLeadingItemPin](cpmessageleadingitem/pin.md): Show a pin icon.
- [CPMessageLeadingItemStar](cpmessageleadingitem/star.md): Show a star icon.

## See Also

### Getting the Leading Item

- [leadingItem](cpmessagelistitemleadingconfiguration/leadingitem.md): The configuration’s item.

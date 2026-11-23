> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagetrailingitem

# CPMessageTrailingItem (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

Constants that indicate the type of symbol to display at the trailing edge of a message list row.

## Declaration

```swift
enum CPMessageTrailingItem
```

<a id="overview"></a>

## Overview

Use these constants to specify relevant symbols for the conversation or contact.

## Topics

### Trailing Items

- [CPMessageTrailingItem.none](cpmessagetrailingitem/none.md): An option to display no symbol.
- [CPMessageTrailingItem.mute](cpmessagetrailingitem/mute.md): An option to display a mute symbol.

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

### Getting the trailing item

- [trailingItem](cpmessagelistitemtrailingconfiguration/trailingitem.md): The standard system symbol to display in the row’s trailing region.

# CPMessageTrailingItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

Constants that indicate the type of symbol to display at the trailing edge of a message list row.

## Declaration

```objectivec
enum CPMessageTrailingItem : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants to specify relevant symbols for the conversation or contact.

## Topics

### Trailing Items

- [CPMessageTrailingItemNone](cpmessagetrailingitem/none.md): An option to display no symbol.
- [CPMessageTrailingItemMute](cpmessagetrailingitem/mute.md): An option to display a mute symbol.

## See Also

### Getting the trailing item

- [trailingItem](cpmessagelistitemtrailingconfiguration/trailingitem.md): The standard system symbol to display in the row’s trailing region.

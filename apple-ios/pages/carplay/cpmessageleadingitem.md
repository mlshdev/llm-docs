> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessageleadingitem

# CPMessageLeadingItem (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

Constants that indicate the type of symbol to display at the leading edge of a message list row.

## Declaration

```swift
enum CPMessageLeadingItem
```

<a id="overview"></a>

## Overview

Use these constants to specify symbols that are common to conversations and contacts.

## Topics

### Leading Items

- [CPMessageLeadingItem.none](cpmessageleadingitem/none.md): An option to display no symbol.
- [CPMessageLeadingItem.pin](cpmessageleadingitem/pin.md): An option to display a pin image in the row.
- [CPMessageLeadingItem.star](cpmessageleadingitem/star.md): An option to display a star image in the row.

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

### Getting the leading item

- [leadingItem](cpmessagelistitemleadingconfiguration/leadingitem.md): The standard system symbol to display in the row’s leading region.

# CPMessageLeadingItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

Constants that indicate the type of symbol to display at the leading edge of a message list row.

## Declaration

```objectivec
enum CPMessageLeadingItem : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants to specify symbols that are common to conversations and contacts.

## Topics

### Leading Items

- [CPMessageLeadingItemNone](cpmessageleadingitem/none.md): An option to display no symbol.
- [CPMessageLeadingItemPin](cpmessageleadingitem/pin.md): An option to display a pin image in the row.
- [CPMessageLeadingItemStar](cpmessageleadingitem/star.md): An option to display a star image in the row.

## See Also

### Getting the leading item

- [leadingItem](cpmessagelistitemleadingconfiguration/leadingitem.md): The standard system symbol to display in the row’s leading region.

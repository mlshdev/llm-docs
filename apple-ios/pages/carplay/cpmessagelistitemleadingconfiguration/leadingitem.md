> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagelistitemleadingconfiguration/leadingitem](https://developer.apple.com/documentation/carplay/cpmessagelistitemleadingconfiguration/leadingitem)

# leadingItem (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The configuration’s item.

## Declaration

```swift
var leadingItem: CPMessageLeadingItem { get }
```

<a id="Discussion"></a>

## Discussion

Configurations are immutable. To change or remove the item that the message list item’s leading region shows, create a new configuration and update the list item’s [leadingConfiguration](../cpmessagelistitem/leadingconfiguration.md) property.

## See Also

### Getting the Leading Item

- [CPMessageLeadingItem](../cpmessageleadingitem.md): The accessories that a message list item can display in its leading region.

# leadingItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The configuration’s item.

## Declaration

```objectivec
@property (nonatomic, readonly) CPMessageLeadingItem leadingItem;
```

<a id="Discussion"></a>

## Discussion

Configurations are immutable. To change or remove the item that the message list item’s leading region shows, create a new configuration and update the list item’s [leadingConfiguration](../cpmessagelistitem/leadingconfiguration.md) property.

## See Also

### Getting the Leading Item

- [CPMessageLeadingItem](../cpmessageleadingitem.md): The accessories that a message list item can display in its leading region.

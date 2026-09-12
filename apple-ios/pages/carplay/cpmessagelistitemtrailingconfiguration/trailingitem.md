> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagelistitemtrailingconfiguration/trailingitem](https://developer.apple.com/documentation/carplay/cpmessagelistitemtrailingconfiguration/trailingitem)

# trailingItem (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The configuration’s item.

## Declaration

```swift
var trailingItem: CPMessageTrailingItem { get }
```

<a id="Discussion"></a>

## Discussion

Configurations are immutable. To change or remove the item that the message list item’s trailing region shows, create a new configuration and update the list item’s [trailingConfiguration](../cpmessagelistitem/trailingconfiguration.md) property.

## See Also

### Getting the Trailing Item

- [CPMessageTrailingItem](../cpmessagetrailingitem.md): The accessories that a message list item can display in its trailing region.

# trailingItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The configuration’s item.

## Declaration

```objectivec
@property (nonatomic, readonly) CPMessageTrailingItem trailingItem;
```

<a id="Discussion"></a>

## Discussion

Configurations are immutable. To change or remove the item that the message list item’s trailing region shows, create a new configuration and update the list item’s [trailingConfiguration](../cpmessagelistitem/trailingconfiguration.md) property.

## See Also

### Getting the Trailing Item

- [CPMessageTrailingItem](../cpmessagetrailingitem.md): The accessories that a message list item can display in its trailing region.

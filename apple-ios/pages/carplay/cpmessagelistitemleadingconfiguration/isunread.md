> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagelistitemleadingconfiguration/isunread](https://developer.apple.com/documentation/carplay/cpmessagelistitemleadingconfiguration/isunread)

# isUnread (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that determines whether the message list item displays an unread indicator.

## Declaration

```swift
var isUnread: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Configurations are immutable. To toggle the message list item’s unread indicator, create a new configuration and update the list item’s [leadingConfiguration](../cpmessagelistitem/leadingconfiguration.md) property.

## See Also

### Getting the Configuration’s State

- [leadingImage](leadingimage.md): The configuration’s image.

# unread (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that determines whether the message list item displays an unread indicator.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isUnread) BOOL unread;
```

<a id="Discussion"></a>

## Discussion

Configurations are immutable. To toggle the message list item’s unread indicator, create a new configuration and update the list item’s [leadingConfiguration](../cpmessagelistitem/leadingconfiguration.md) property.

## See Also

### Getting the Configuration’s State

- [leadingImage](leadingimage.md): The configuration’s image.

> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessorysession/accessories](https://developer.apple.com/documentation/accessorysetupkit/asaccessorysession/accessories)

# accessories (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An array of previously-selected accessories for this application.

## Declaration

```swift
var accessories: [ASAccessory] { get }
```

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

To monitor for changes in this list, use your event handler to watch for the events [ASAccessoryEventType.accessoryAdded](../asaccessoryeventtype/accessoryadded.md), [ASAccessoryEventType.accessoryChanged](../asaccessoryeventtype/accessorychanged.md), and [ASAccessoryEventType.accessoryRemoved](../asaccessoryeventtype/accessoryremoved.md).

# accessories (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An array of previously-selected accessories for this application.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<ASAccessory *> * accessories;
```

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

To monitor for changes in this list, use your event handler to watch for the events [ASAccessoryEventTypeAccessoryAdded](../asaccessoryeventtype/accessoryadded.md), [ASAccessoryEventTypeAccessoryChanged](../asaccessoryeventtype/accessorychanged.md), and [ASAccessoryEventTypeAccessoryRemoved](../asaccessoryeventtype/accessoryremoved.md).

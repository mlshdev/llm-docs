> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessoryevent/accessory](https://developer.apple.com/documentation/accessorysetupkit/asaccessoryevent/accessory)

# accessory (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The accessory involved in the event, if any.

## Declaration

```swift
@NSCopying var accessory: ASAccessory? { get }
```

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

The session populates this member for event types like [ASAccessoryEventType.accessoryAdded](../asaccessoryeventtype/accessoryadded.md) and [ASAccessoryEventType.accessoryChanged](../asaccessoryeventtype/accessorychanged.md), but not for life cycle or picker events like [ASAccessoryEventType.activated](../asaccessoryeventtype/activated.md) or [ASAccessoryEventType.pickerDidPresent](../asaccessoryeventtype/pickerdidpresent.md).

## See Also

### Inspecting the event

- [ASAccessory](../asaccessory.md): An accessory discovered by the accessory session.
- [eventType](eventtype.md): The type of event, such as accessory addition or removal, or picker presentation or removal.
- [ASAccessoryEventType](../asaccessoryeventtype.md): An enumeration of the types of events encountered during accessory discovery

# accessory (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The accessory involved in the event, if any.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) ASAccessory * accessory;
```

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

The session populates this member for event types like [ASAccessoryEventTypeAccessoryAdded](../asaccessoryeventtype/accessoryadded.md) and [ASAccessoryEventTypeAccessoryChanged](../asaccessoryeventtype/accessorychanged.md), but not for life cycle or picker events like [ASAccessoryEventTypeActivated](../asaccessoryeventtype/activated.md) or [ASAccessoryEventTypePickerDidPresent](../asaccessoryeventtype/pickerdidpresent.md).

## See Also

### Inspecting the event

- [ASAccessory](../asaccessory.md): An accessory discovered by the accessory session.
- [eventType](eventtype.md): The type of event, such as accessory addition or removal, or picker presentation or removal.
- [ASAccessoryEventType](../asaccessoryeventtype.md): An enumeration of the types of events encountered during accessory discovery

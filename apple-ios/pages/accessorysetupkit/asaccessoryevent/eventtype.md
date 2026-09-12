> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessoryevent/eventtype](https://developer.apple.com/documentation/accessorysetupkit/asaccessoryevent/eventtype)

# eventType (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The type of event, such as accessory addition or removal, or picker presentation or removal.

## Declaration

```swift
var eventType: ASAccessoryEventType { get }
```

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

Some event types may indicate that the event is a subclass of [ASAccessoryEvent](../asaccessoryevent.md) that provides additional properties.

## See Also

### Inspecting the event

- [accessory](accessory.md): The accessory involved in the event, if any.
- [ASAccessory](../asaccessory.md): An accessory discovered by the accessory session.
- [ASAccessoryEventType](../asaccessoryeventtype.md): An enumeration of the types of events encountered during accessory discovery

# eventType (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The type of event, such as accessory addition or removal, or picker presentation or removal.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) ASAccessoryEventType eventType;
```

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

Some event types may indicate that the event is a subclass of [ASAccessoryEvent](../asaccessoryevent.md) that provides additional properties.

## See Also

### Inspecting the event

- [accessory](accessory.md): The accessory involved in the event, if any.
- [ASAccessory](../asaccessory.md): An accessory discovered by the accessory session.
- [ASAccessoryEventType](../asaccessoryeventtype.md): An enumeration of the types of events encountered during accessory discovery

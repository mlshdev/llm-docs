> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessoryeventtype](https://developer.apple.com/documentation/accessorysetupkit/asaccessoryeventtype)

# ASAccessoryEventType (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst

An enumeration of the types of events encountered during accessory discovery

## Declaration

```swift
enum ASAccessoryEventType
```

## Topics

### Creating an event type instance

- [init(rawValue:)](asaccessoryeventtype/init%28rawvalue_%29.md)

### Accessory events

- [ASAccessoryEventType.accessoryAdded](asaccessoryeventtype/accessoryadded.md): The session added an accessory.
- [ASAccessoryEventType.accessoryChanged](asaccessoryeventtype/accessorychanged.md): The properties of an accessory changed.
- [ASAccessoryEventType.accessoryRemoved](asaccessoryeventtype/accessoryremoved.md): The session removed an accessory.

### Life cycle events

- [ASAccessoryEventType.activated](asaccessoryeventtype/activated.md): The discovery session activated.
- [ASAccessoryEventType.invalidated](asaccessoryeventtype/invalidated.md): The discovery session invalidated.

### Discovery events

- [ASAccessoryEventType.accessoryDiscovered](asaccessoryeventtype/accessorydiscovered.md): The session discovered an accessory.

### Picker events

- [ASAccessoryEventType.pickerDidPresent](asaccessoryeventtype/pickerdidpresent.md): The discovery session picker appeared.
- [ASAccessoryEventType.pickerDidDismiss](asaccessoryeventtype/pickerdiddismiss.md): The discovery session picker dismissed.
- [ASAccessoryEventType.pickerSetupBridging](asaccessoryeventtype/pickersetupbridging.md): The discovery session picker started bridging with an accessory.
- [ASAccessoryEventType.pickerSetupPairing](asaccessoryeventtype/pickersetuppairing.md): The discovery session picker started pairing with a Bluetooth accessory.
- [ASAccessoryEventType.pickerSetupFailed](asaccessoryeventtype/pickersetupfailed.md): The discovery session picker setup failed.
- [ASAccessoryEventType.pickerSetupRename](asaccessoryeventtype/pickersetuprename.md): The discovery session picker started renaming an accessory.

### Migration events

- [ASAccessoryEventType.migrationComplete](asaccessoryeventtype/migrationcomplete.md): The migration of an accessory completed.

### Unclassified events

- [ASAccessoryEventType.unknown](asaccessoryeventtype/unknown.md): An unknown event occurred.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessory discovery

- [ASAccessoryEvent](asaccessoryevent.md): Properties of an event encountered during accessory discovery.
- [ASDiscoveryDescriptor](asdiscoverydescriptor.md): Descriptive traits used to discover accessories.

# ASAccessoryEventType (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst

An enumeration of the types of events encountered during accessory discovery

## Declaration

```objectivec
enum ASAccessoryEventType : NSInteger;
```

## Topics

### Accessory events

- [ASAccessoryEventTypeAccessoryAdded](asaccessoryeventtype/accessoryadded.md): The session added an accessory.
- [ASAccessoryEventTypeAccessoryChanged](asaccessoryeventtype/accessorychanged.md): The properties of an accessory changed.
- [ASAccessoryEventTypeAccessoryRemoved](asaccessoryeventtype/accessoryremoved.md): The session removed an accessory.

### Life cycle events

- [ASAccessoryEventTypeActivated](asaccessoryeventtype/activated.md): The discovery session activated.
- [ASAccessoryEventTypeInvalidated](asaccessoryeventtype/invalidated.md): The discovery session invalidated.

### Discovery events

- [ASAccessoryEventTypeAccessoryDiscovered](asaccessoryeventtype/accessorydiscovered.md): The session discovered an accessory.

### Picker events

- [ASAccessoryEventTypePickerDidPresent](asaccessoryeventtype/pickerdidpresent.md): The discovery session picker appeared.
- [ASAccessoryEventTypePickerDidDismiss](asaccessoryeventtype/pickerdiddismiss.md): The discovery session picker dismissed.
- [ASAccessoryEventTypePickerSetupBridging](asaccessoryeventtype/pickersetupbridging.md): The discovery session picker started bridging with an accessory.
- [ASAccessoryEventTypePickerSetupPairing](asaccessoryeventtype/pickersetuppairing.md): The discovery session picker started pairing with a Bluetooth accessory.
- [ASAccessoryEventTypePickerSetupFailed](asaccessoryeventtype/pickersetupfailed.md): The discovery session picker setup failed.
- [ASAccessoryEventTypePickerSetupRename](asaccessoryeventtype/pickersetuprename.md): The discovery session picker started renaming an accessory.

### Migration events

- [ASAccessoryEventTypeMigrationComplete](asaccessoryeventtype/migrationcomplete.md): The migration of an accessory completed.

### Unclassified events

- [ASAccessoryEventTypeUnknown](asaccessoryeventtype/unknown.md): An unknown event occurred.

## See Also

### Accessory discovery

- [ASAccessoryEvent](asaccessoryevent.md): Properties of an event encountered during accessory discovery.
- [ASDiscoveryDescriptor](asdiscoverydescriptor.md): Descriptive traits used to discover accessories.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworksession/removecontact(_:)](https://developer.apple.com/documentation/coremidi/midinetworksession/removecontact(_:))

# removeContact(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Removes a host as a contact.

## Declaration

```swift
func removeContact(_ contact: MIDINetworkHost) -> Bool
```

## Parameters

- `contact`: The host to remove.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the session successfully removed the host, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Contacts

- [contacts()](contacts%28%29.md): Returns the array of network hosts.
- [addContact(\_:)](addcontact%28__%29.md): Adds a host as a contact.
- [MIDINetworkNotificationContactsDidChange](../midinetworknotificationcontactsdidchange.md): Indicates that the list of contacts changed.

# removeContact: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Removes a host as a contact.

## Declaration

```objectivec
- (BOOL) removeContact:(MIDINetworkHost *) contact;
```

## Parameters

- `contact`: The host to remove.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the session successfully removed the host, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Contacts

- [contacts](contacts%28%29.md): Returns the array of network hosts.
- [addContact:](addcontact%28__%29.md): Adds a host as a contact.
- [MIDINetworkNotificationContactsDidChange](../midinetworknotificationcontactsdidchange.md): Indicates that the list of contacts changed.

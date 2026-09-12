> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworksession/addcontact(_:)](https://developer.apple.com/documentation/coremidi/midinetworksession/addcontact(_:))

# addContact(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Adds a host as a contact.

## Declaration

```swift
func addContact(_ contact: MIDINetworkHost) -> Bool
```

## Parameters

- `contact`: The MIDI network host to add.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the session successfully added the host, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Contacts

- [contacts()](contacts%28%29.md): Returns the array of network hosts.
- [removeContact(\_:)](removecontact%28__%29.md): Removes a host as a contact.
- [MIDINetworkNotificationContactsDidChange](../midinetworknotificationcontactsdidchange.md): Indicates that the list of contacts changed.

# addContact: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Adds a host as a contact.

## Declaration

```objectivec
- (BOOL) addContact:(MIDINetworkHost *) contact;
```

## Parameters

- `contact`: The MIDI network host to add.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the session successfully added the host, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Contacts

- [contacts](contacts%28%29.md): Returns the array of network hosts.
- [removeContact:](removecontact%28__%29.md): Removes a host as a contact.
- [MIDINetworkNotificationContactsDidChange](../midinetworknotificationcontactsdidchange.md): Indicates that the list of contacts changed.

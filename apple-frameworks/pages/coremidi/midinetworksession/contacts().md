> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworksession/contacts()](https://developer.apple.com/documentation/coremidi/midinetworksession/contacts())

# contacts() (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns the array of network hosts.

## Declaration

```swift
func contacts() -> Set<MIDINetworkHost>
```

<a id="return-value"></a>

## Return Value

The set of MIDI network host objects.

## See Also

### Managing Contacts

- [addContact(\_:)](addcontact%28__%29.md): Adds a host as a contact.
- [removeContact(\_:)](removecontact%28__%29.md): Removes a host as a contact.
- [MIDINetworkNotificationContactsDidChange](../midinetworknotificationcontactsdidchange.md): Indicates that the list of contacts changed.

# contacts (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns the array of network hosts.

## Declaration

```objectivec
- (NSSet<MIDINetworkHost *> *) contacts;
```

<a id="return-value"></a>

## Return Value

The set of MIDI network host objects.

## See Also

### Managing Contacts

- [addContact:](addcontact%28__%29.md): Adds a host as a contact.
- [removeContact:](removecontact%28__%29.md): Removes a host as a contact.
- [MIDINetworkNotificationContactsDidChange](../midinetworknotificationcontactsdidchange.md): Indicates that the list of contacts changed.

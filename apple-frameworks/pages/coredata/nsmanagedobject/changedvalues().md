> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/changedvalues()](https://developer.apple.com/documentation/coredata/nsmanagedobject/changedvalues())

# changedValues() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary containing the keys and new values of persistent properties with changes since the last fetching or saving of the managed object.

## Declaration

```swift
func changedValues() -> [String : Any]
```

<a id="return-value"></a>

## Return Value

A dictionary with keys that are the names of persistent properties with changes since last fetching or saving the receiver, and with the new values for those properties.

<a id="Discussion"></a>

## Discussion

This method only reports changes to properties that are persistent properties of the receiver, not changes to transient properties or custom instance variables.

## See Also

### Managing Change Events

- [contextShouldIgnoreUnmodeledPropertyChanges](contextshouldignoreunmodeledpropertychanges.md): A Boolean value that indicates whether to mark instances of the class as having changes when an unmodeled property changes.
- [awakeFromFetch()](awakefromfetch%28%29.md): Provides an opportunity to add code into the life cycle of the managed object when fufilling it from a fault.
- [awakeFromInsert()](awakefrominsert%28%29.md): Provides an opportunity to add code into the life cycle of the managed object when initially creating it.
- [awake(fromSnapshotEvents:)](awake%28fromsnapshotevents_%29.md): Provides an opportunity to add code into the life cycle of the managed object when fulfilling it from a snapshot.
- [changedValuesForCurrentEvent()](changedvaluesforcurrentevent%28%29.md): Returns a dictionary containing the keys and new values of persistent properties with changes since the last fetching or saving of the managed object.
- [committedValues(forKeys:)](committedvalues%28forkeys_%29.md): Returns a dictionary of the most recent fetched or saved values of the managed object for the properties of the specified keys.
- [prepareForDeletion()](preparefordeletion%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before deleting it.
- [willSave()](willsave%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before saving it.
- [didSave()](didsave%28%29.md): Provides an opportunity to add code into the life cycle of the managed object after the managed object’s context completes a save operation.
- [willTurnIntoFault()](willturnintofault%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before converting it to a fault.
- [didTurnIntoFault()](didturnintofault%28%29.md): Provides an opportunity to add code into the life cycle of the managed object after converting it to a fault.
- [fetchRequest()](fetchrequest%28%29.md): Returns an initialized fetch request with the entity this subclass represents.

# changedValues (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary containing the keys and new values of persistent properties with changes since the last fetching or saving of the managed object.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) changedValues;
```

<a id="return-value"></a>

## Return Value

A dictionary with keys that are the names of persistent properties with changes since last fetching or saving the receiver, and with the new values for those properties.

<a id="Discussion"></a>

## Discussion

This method only reports changes to properties that are persistent properties of the receiver, not changes to transient properties or custom instance variables.

## See Also

### Managing Change Events

- [contextShouldIgnoreUnmodeledPropertyChanges](contextshouldignoreunmodeledpropertychanges.md): A Boolean value that indicates whether to mark instances of the class as having changes when an unmodeled property changes.
- [awakeFromFetch](awakefromfetch%28%29.md): Provides an opportunity to add code into the life cycle of the managed object when fufilling it from a fault.
- [awakeFromInsert](awakefrominsert%28%29.md): Provides an opportunity to add code into the life cycle of the managed object when initially creating it.
- [awakeFromSnapshotEvents:](awake%28fromsnapshotevents_%29.md): Provides an opportunity to add code into the life cycle of the managed object when fulfilling it from a snapshot.
- [changedValuesForCurrentEvent](changedvaluesforcurrentevent%28%29.md): Returns a dictionary containing the keys and new values of persistent properties with changes since the last fetching or saving of the managed object.
- [committedValuesForKeys:](committedvalues%28forkeys_%29.md): Returns a dictionary of the most recent fetched or saved values of the managed object for the properties of the specified keys.
- [prepareForDeletion](preparefordeletion%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before deleting it.
- [willSave](willsave%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before saving it.
- [didSave](didsave%28%29.md): Provides an opportunity to add code into the life cycle of the managed object after the managed object’s context completes a save operation.
- [willTurnIntoFault](willturnintofault%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before converting it to a fault.
- [didTurnIntoFault](didturnintofault%28%29.md): Provides an opportunity to add code into the life cycle of the managed object after converting it to a fault.
- [fetchRequest](fetchrequest.md): Returns an initialized fetch request with the entity this subclass represents.

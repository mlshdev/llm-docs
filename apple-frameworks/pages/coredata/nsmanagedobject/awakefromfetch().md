> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/awakefromfetch()](https://developer.apple.com/documentation/coredata/nsmanagedobject/awakefromfetch())

# awakeFromFetch() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Provides an opportunity to add code into the life cycle of the managed object when fufilling it from a fault.

## Declaration

```swift
func awakeFromFetch()
```

<a id="Discussion"></a>

## Discussion

You typically use this method to compute derived values or to recreate transient relationships from the receiver’s persistent properties.

The managed object context’s change processing is explicitly disabled around this method so that you can use public setters to establish transient values and other caches without dirtying the object or its context. Because of this, however, you should not modify relationships in this method as the inverse will not be set.

> **Important**

>  Subclasses must invoke super’s implementation before performing their own initialization.

## See Also

### Related Documentation

- [setPrimitiveValue(\_:forKey:)](setprimitivevalue%28__forkey_%29.md): Sets the value of a given property in the managed object’s private internal storage.
- [primitiveValue(forKey:)](primitivevalue%28forkey_%29.md): Returns the value for the specified property from the managed object’s private internal storage .

### Managing Change Events

- [contextShouldIgnoreUnmodeledPropertyChanges](contextshouldignoreunmodeledpropertychanges.md): A Boolean value that indicates whether to mark instances of the class as having changes when an unmodeled property changes.
- [awakeFromInsert()](awakefrominsert%28%29.md): Provides an opportunity to add code into the life cycle of the managed object when initially creating it.
- [awake(fromSnapshotEvents:)](awake%28fromsnapshotevents_%29.md): Provides an opportunity to add code into the life cycle of the managed object when fulfilling it from a snapshot.
- [changedValues()](changedvalues%28%29.md): Returns a dictionary containing the keys and new values of persistent properties with changes since the last fetching or saving of the managed object.
- [changedValuesForCurrentEvent()](changedvaluesforcurrentevent%28%29.md): Returns a dictionary containing the keys and new values of persistent properties with changes since the last fetching or saving of the managed object.
- [committedValues(forKeys:)](committedvalues%28forkeys_%29.md): Returns a dictionary of the most recent fetched or saved values of the managed object for the properties of the specified keys.
- [prepareForDeletion()](preparefordeletion%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before deleting it.
- [willSave()](willsave%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before saving it.
- [didSave()](didsave%28%29.md): Provides an opportunity to add code into the life cycle of the managed object after the managed object’s context completes a save operation.
- [willTurnIntoFault()](willturnintofault%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before converting it to a fault.
- [didTurnIntoFault()](didturnintofault%28%29.md): Provides an opportunity to add code into the life cycle of the managed object after converting it to a fault.
- [fetchRequest()](fetchrequest%28%29.md): Returns an initialized fetch request with the entity this subclass represents.

# awakeFromFetch (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Provides an opportunity to add code into the life cycle of the managed object when fufilling it from a fault.

## Declaration

```objectivec
- (void) awakeFromFetch;
```

<a id="Discussion"></a>

## Discussion

You typically use this method to compute derived values or to recreate transient relationships from the receiver’s persistent properties.

The managed object context’s change processing is explicitly disabled around this method so that you can use public setters to establish transient values and other caches without dirtying the object or its context. Because of this, however, you should not modify relationships in this method as the inverse will not be set.

> **Important**

>  Subclasses must invoke super’s implementation before performing their own initialization.

## See Also

### Related Documentation

- [setPrimitiveValue:forKey:](setprimitivevalue%28__forkey_%29.md): Sets the value of a given property in the managed object’s private internal storage.
- [primitiveValueForKey:](primitivevalue%28forkey_%29.md): Returns the value for the specified property from the managed object’s private internal storage .

### Managing Change Events

- [contextShouldIgnoreUnmodeledPropertyChanges](contextshouldignoreunmodeledpropertychanges.md): A Boolean value that indicates whether to mark instances of the class as having changes when an unmodeled property changes.
- [awakeFromInsert](awakefrominsert%28%29.md): Provides an opportunity to add code into the life cycle of the managed object when initially creating it.
- [awakeFromSnapshotEvents:](awake%28fromsnapshotevents_%29.md): Provides an opportunity to add code into the life cycle of the managed object when fulfilling it from a snapshot.
- [changedValues](changedvalues%28%29.md): Returns a dictionary containing the keys and new values of persistent properties with changes since the last fetching or saving of the managed object.
- [changedValuesForCurrentEvent](changedvaluesforcurrentevent%28%29.md): Returns a dictionary containing the keys and new values of persistent properties with changes since the last fetching or saving of the managed object.
- [committedValuesForKeys:](committedvalues%28forkeys_%29.md): Returns a dictionary of the most recent fetched or saved values of the managed object for the properties of the specified keys.
- [prepareForDeletion](preparefordeletion%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before deleting it.
- [willSave](willsave%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before saving it.
- [didSave](didsave%28%29.md): Provides an opportunity to add code into the life cycle of the managed object after the managed object’s context completes a save operation.
- [willTurnIntoFault](willturnintofault%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before converting it to a fault.
- [didTurnIntoFault](didturnintofault%28%29.md): Provides an opportunity to add code into the life cycle of the managed object after converting it to a fault.
- [fetchRequest](fetchrequest.md): Returns an initialized fetch request with the entity this subclass represents.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/awakefrominsert()](https://developer.apple.com/documentation/coredata/nsmanagedobject/awakefrominsert())

# awakeFromInsert() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Provides an opportunity to add code into the life cycle of the managed object when initially creating it.

## Declaration

```swift
func awakeFromInsert()
```

<a id="Discussion"></a>

## Discussion

You typically use this method to initialize special default property values. This method is invoked only once in the object’s lifetime.

If you want to set attribute values in an implementation of this method, you should typically use primitive accessor methods (either [setPrimitiveValue(\_:forKey:)](setprimitivevalue%28__forkey_%29.md) or—better—the appropriate custom primitive accessors). This ensures that the new values are treated as baseline values rather than being recorded as undoable changes for the properties in question.

> **Important**

>  Subclasses must invoke super’s implementation before performing their own initialization.

<a id="Special-Considerations"></a>

### Special Considerations

If you create a managed object then perform undo operations to bring the managed object context to a state prior to the object’s creation, then perform redo operations to bring the managed object context back to a state after the object’s creation, [awakeFromInsert()](awakefrominsert%28%29.md) is *not* invoked a second time.

You are typically discouraged from performing fetches within an implementation of [awakeFromInsert()](awakefrominsert%28%29.md). Although it is allowed, execution of the fetch request can trigger the sending of internal Core Data notifications which may have unwanted side-effects. For example, in macOS, an instance of [NSArrayController](https://developer.apple.com/documentation/appkit/nsarraycontroller) may end up inserting a new object into its content array twice.

## See Also

### Managing Change Events

- [contextShouldIgnoreUnmodeledPropertyChanges](contextshouldignoreunmodeledpropertychanges.md): A Boolean value that indicates whether to mark instances of the class as having changes when an unmodeled property changes.
- [awakeFromFetch()](awakefromfetch%28%29.md): Provides an opportunity to add code into the life cycle of the managed object when fufilling it from a fault.
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

# awakeFromInsert (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Provides an opportunity to add code into the life cycle of the managed object when initially creating it.

## Declaration

```objectivec
- (void) awakeFromInsert;
```

<a id="Discussion"></a>

## Discussion

You typically use this method to initialize special default property values. This method is invoked only once in the object’s lifetime.

If you want to set attribute values in an implementation of this method, you should typically use primitive accessor methods (either [setPrimitiveValue:forKey:](setprimitivevalue%28__forkey_%29.md) or—better—the appropriate custom primitive accessors). This ensures that the new values are treated as baseline values rather than being recorded as undoable changes for the properties in question.

> **Important**

>  Subclasses must invoke super’s implementation before performing their own initialization.

<a id="Special-Considerations"></a>

### Special Considerations

If you create a managed object then perform undo operations to bring the managed object context to a state prior to the object’s creation, then perform redo operations to bring the managed object context back to a state after the object’s creation, [awakeFromInsert](awakefrominsert%28%29.md) is *not* invoked a second time.

You are typically discouraged from performing fetches within an implementation of [awakeFromInsert](awakefrominsert%28%29.md). Although it is allowed, execution of the fetch request can trigger the sending of internal Core Data notifications which may have unwanted side-effects. For example, in macOS, an instance of [NSArrayController](https://developer.apple.com/documentation/appkit/nsarraycontroller) may end up inserting a new object into its content array twice.

## See Also

### Managing Change Events

- [contextShouldIgnoreUnmodeledPropertyChanges](contextshouldignoreunmodeledpropertychanges.md): A Boolean value that indicates whether to mark instances of the class as having changes when an unmodeled property changes.
- [awakeFromFetch](awakefromfetch%28%29.md): Provides an opportunity to add code into the life cycle of the managed object when fufilling it from a fault.
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

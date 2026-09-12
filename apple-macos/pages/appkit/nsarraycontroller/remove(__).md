> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/remove(_:)](https://developer.apple.com/documentation/appkit/nsarraycontroller/remove(_:))

# remove(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the receiver’s selected objects from the content collection.

## Declaration

```swift
@IBAction func remove(_ sender: Any?)
```

## Parameters

- `sender`: Typically the object that invoked this method.

<a id="Discussion"></a>

## Discussion

See [removeObject(\_:)](removeobject%28__%29.md) for a discussion of the semantics of removing objects when using Core Data.

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.4 the result of this method is deferred until the next iteration of the runloop so that the error presentation mechanism can provide feedback as a sheet.

## See Also

### Adding and Removing Objects

- [addObject(\_:)](addobject%28__%29.md): Adds `object` to the receiver’s content collection and the arranged objects array.
- [add(contentsOf:)](add%28contentsof_%29.md): Adds `objects` to the receiver’s content collection.
- [insert(\_:atArrangedObjectIndex:)](insert%28__atarrangedobjectindex_%29.md): Inserts `object` into the receiver’s arranged objects array at the location specified by `index`, and adds it to the receiver’s content collection.
- [insert(contentsOf:atArrangedObjectIndexes:)](insert%28contentsof_atarrangedobjectindexes_%29.md): Inserts `object`s into the receiver’s arranged objects array at the locations specified in `indexes`, and adds it to the receiver’s content collection.
- [remove(atArrangedObjectIndex:)](remove%28atarrangedobjectindex_%29.md): Removes the object at the specified `index` in the receiver’s arranged objects from the receiver’s content array.
- [remove(atArrangedObjectIndexes:)](remove%28atarrangedobjectindexes_%29.md): Removes the objects at the specified `indexes` in the receiver’s arranged objects from the content array.
- [removeObject(\_:)](removeobject%28__%29.md): Removes `object` from the receiver’s content collection.
- [remove(contentsOf:)](remove%28contentsof_%29.md): Removes `objects` from the receiver’s content collection.

# remove: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the receiver’s selected objects from the content collection.

## Declaration

```objectivec
- (void) remove:(id) sender;
```

## Parameters

- `sender`: Typically the object that invoked this method.

<a id="Discussion"></a>

## Discussion

See [removeObject:](removeobject%28__%29.md) for a discussion of the semantics of removing objects when using Core Data.

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.4 the result of this method is deferred until the next iteration of the runloop so that the error presentation mechanism can provide feedback as a sheet.

## See Also

### Adding and Removing Objects

- [addObject:](addobject%28__%29.md): Adds `object` to the receiver’s content collection and the arranged objects array.
- [addObjects:](add%28contentsof_%29.md): Adds `objects` to the receiver’s content collection.
- [insertObject:atArrangedObjectIndex:](insert%28__atarrangedobjectindex_%29.md): Inserts `object` into the receiver’s arranged objects array at the location specified by `index`, and adds it to the receiver’s content collection.
- [insertObjects:atArrangedObjectIndexes:](insert%28contentsof_atarrangedobjectindexes_%29.md): Inserts `object`s into the receiver’s arranged objects array at the locations specified in `indexes`, and adds it to the receiver’s content collection.
- [removeObjectAtArrangedObjectIndex:](remove%28atarrangedobjectindex_%29.md): Removes the object at the specified `index` in the receiver’s arranged objects from the receiver’s content array.
- [removeObjectsAtArrangedObjectIndexes:](remove%28atarrangedobjectindexes_%29.md): Removes the objects at the specified `indexes` in the receiver’s arranged objects from the content array.
- [removeObject:](removeobject%28__%29.md): Removes `object` from the receiver’s content collection.
- [removeObjects:](remove%28contentsof_%29.md): Removes `objects` from the receiver’s content collection.

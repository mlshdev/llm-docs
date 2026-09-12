> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/removeobject(_:)](https://developer.apple.com/documentation/appkit/nsarraycontroller/removeobject(_:))

# removeObject(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes `object` from the receiver’s content collection.

## Declaration

```swift
func removeObject(_ object: Any)
```

<a id="Discussion"></a>

## Discussion

If you are using Core Data, the exact semantics of this method differ depending on the settings for the array controller. If the receiver’s content is fetched automatically, removed objects are marked for deletion by the managed object context (and hence removal from the object graph). If, however, the receiver’s `contentSet` is bound to a relationship, `removeObject:` by default only removes the object from the relationship (not from the object graph). You can, though, set the “Deletes Object on Remove” option for the `contentSet` binding, in which case objects are marked for deletion as well as being removed from the relationship.

## See Also

### Adding and Removing Objects

- [addObject(\_:)](addobject%28__%29.md): Adds `object` to the receiver’s content collection and the arranged objects array.
- [add(contentsOf:)](add%28contentsof_%29.md): Adds `objects` to the receiver’s content collection.
- [insert(\_:atArrangedObjectIndex:)](insert%28__atarrangedobjectindex_%29.md): Inserts `object` into the receiver’s arranged objects array at the location specified by `index`, and adds it to the receiver’s content collection.
- [insert(contentsOf:atArrangedObjectIndexes:)](insert%28contentsof_atarrangedobjectindexes_%29.md): Inserts `object`s into the receiver’s arranged objects array at the locations specified in `indexes`, and adds it to the receiver’s content collection.
- [remove(atArrangedObjectIndex:)](remove%28atarrangedobjectindex_%29.md): Removes the object at the specified `index` in the receiver’s arranged objects from the receiver’s content array.
- [remove(atArrangedObjectIndexes:)](remove%28atarrangedobjectindexes_%29.md): Removes the objects at the specified `indexes` in the receiver’s arranged objects from the content array.
- [remove(\_:)](remove%28__%29.md): Removes the receiver’s selected objects from the content collection.
- [remove(contentsOf:)](remove%28contentsof_%29.md): Removes `objects` from the receiver’s content collection.

# removeObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes `object` from the receiver’s content collection.

## Declaration

```objectivec
- (void) removeObject:(id) object;
```

<a id="Discussion"></a>

## Discussion

If you are using Core Data, the exact semantics of this method differ depending on the settings for the array controller. If the receiver’s content is fetched automatically, removed objects are marked for deletion by the managed object context (and hence removal from the object graph). If, however, the receiver’s `contentSet` is bound to a relationship, `removeObject:` by default only removes the object from the relationship (not from the object graph). You can, though, set the “Deletes Object on Remove” option for the `contentSet` binding, in which case objects are marked for deletion as well as being removed from the relationship.

## See Also

### Adding and Removing Objects

- [addObject:](addobject%28__%29.md): Adds `object` to the receiver’s content collection and the arranged objects array.
- [addObjects:](add%28contentsof_%29.md): Adds `objects` to the receiver’s content collection.
- [insertObject:atArrangedObjectIndex:](insert%28__atarrangedobjectindex_%29.md): Inserts `object` into the receiver’s arranged objects array at the location specified by `index`, and adds it to the receiver’s content collection.
- [insertObjects:atArrangedObjectIndexes:](insert%28contentsof_atarrangedobjectindexes_%29.md): Inserts `object`s into the receiver’s arranged objects array at the locations specified in `indexes`, and adds it to the receiver’s content collection.
- [removeObjectAtArrangedObjectIndex:](remove%28atarrangedobjectindex_%29.md): Removes the object at the specified `index` in the receiver’s arranged objects from the receiver’s content array.
- [removeObjectsAtArrangedObjectIndexes:](remove%28atarrangedobjectindexes_%29.md): Removes the objects at the specified `indexes` in the receiver’s arranged objects from the content array.
- [remove:](remove%28__%29.md): Removes the receiver’s selected objects from the content collection.
- [removeObjects:](remove%28contentsof_%29.md): Removes `objects` from the receiver’s content collection.

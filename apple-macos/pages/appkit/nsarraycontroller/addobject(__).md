> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/addobject(_:)](https://developer.apple.com/documentation/appkit/nsarraycontroller/addobject(_:))

# addObject(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds `object` to the receiver’s content collection and the arranged objects array.

## Declaration

```swift
func addObject(_ object: Any)
```

## See Also

### Adding and Removing Objects

- [add(contentsOf:)](add%28contentsof_%29.md): Adds `objects` to the receiver’s content collection.
- [insert(\_:atArrangedObjectIndex:)](insert%28__atarrangedobjectindex_%29.md): Inserts `object` into the receiver’s arranged objects array at the location specified by `index`, and adds it to the receiver’s content collection.
- [insert(contentsOf:atArrangedObjectIndexes:)](insert%28contentsof_atarrangedobjectindexes_%29.md): Inserts `object`s into the receiver’s arranged objects array at the locations specified in `indexes`, and adds it to the receiver’s content collection.
- [remove(atArrangedObjectIndex:)](remove%28atarrangedobjectindex_%29.md): Removes the object at the specified `index` in the receiver’s arranged objects from the receiver’s content array.
- [remove(atArrangedObjectIndexes:)](remove%28atarrangedobjectindexes_%29.md): Removes the objects at the specified `indexes` in the receiver’s arranged objects from the content array.
- [remove(\_:)](remove%28__%29.md): Removes the receiver’s selected objects from the content collection.
- [removeObject(\_:)](removeobject%28__%29.md): Removes `object` from the receiver’s content collection.
- [remove(contentsOf:)](remove%28contentsof_%29.md): Removes `objects` from the receiver’s content collection.

# addObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds `object` to the receiver’s content collection and the arranged objects array.

## Declaration

```objectivec
- (void) addObject:(id) object;
```

## See Also

### Adding and Removing Objects

- [addObjects:](add%28contentsof_%29.md): Adds `objects` to the receiver’s content collection.
- [insertObject:atArrangedObjectIndex:](insert%28__atarrangedobjectindex_%29.md): Inserts `object` into the receiver’s arranged objects array at the location specified by `index`, and adds it to the receiver’s content collection.
- [insertObjects:atArrangedObjectIndexes:](insert%28contentsof_atarrangedobjectindexes_%29.md): Inserts `object`s into the receiver’s arranged objects array at the locations specified in `indexes`, and adds it to the receiver’s content collection.
- [removeObjectAtArrangedObjectIndex:](remove%28atarrangedobjectindex_%29.md): Removes the object at the specified `index` in the receiver’s arranged objects from the receiver’s content array.
- [removeObjectsAtArrangedObjectIndexes:](remove%28atarrangedobjectindexes_%29.md): Removes the objects at the specified `indexes` in the receiver’s arranged objects from the content array.
- [remove:](remove%28__%29.md): Removes the receiver’s selected objects from the content collection.
- [removeObject:](removeobject%28__%29.md): Removes `object` from the receiver’s content collection.
- [removeObjects:](remove%28contentsof_%29.md): Removes `objects` from the receiver’s content collection.

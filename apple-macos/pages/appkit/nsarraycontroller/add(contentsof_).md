> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/add(contentsof:)](https://developer.apple.com/documentation/appkit/nsarraycontroller/add(contentsof:))

# add(contentsOf:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds `objects` to the receiver’s content collection.

## Declaration

```swift
func add(contentsOf objects: [Any])
```

<a id="Discussion"></a>

## Discussion

If [selectsInsertedObjects](selectsinsertedobjects.md) is [true](https://developer.apple.com/documentation/swift/true) (the default), the added objects are selected in the array controller.

It is important to note that inserting many objects with [selectsInsertedObjects](selectsinsertedobjects.md) on can cause a significant performance penalty. In this case it is more efficient to use the [content](../nsobjectcontroller/content.md) method to set the array, or to set [selectsInsertedObjects](selectsinsertedobjects.md) to [false](https://developer.apple.com/documentation/swift/false) before adding the objects with [add(contentsOf:)](add%28contentsof_%29.md).

## See Also

### Adding and Removing Objects

- [addObject(\_:)](addobject%28__%29.md): Adds `object` to the receiver’s content collection and the arranged objects array.
- [insert(\_:atArrangedObjectIndex:)](insert%28__atarrangedobjectindex_%29.md): Inserts `object` into the receiver’s arranged objects array at the location specified by `index`, and adds it to the receiver’s content collection.
- [insert(contentsOf:atArrangedObjectIndexes:)](insert%28contentsof_atarrangedobjectindexes_%29.md): Inserts `object`s into the receiver’s arranged objects array at the locations specified in `indexes`, and adds it to the receiver’s content collection.
- [remove(atArrangedObjectIndex:)](remove%28atarrangedobjectindex_%29.md): Removes the object at the specified `index` in the receiver’s arranged objects from the receiver’s content array.
- [remove(atArrangedObjectIndexes:)](remove%28atarrangedobjectindexes_%29.md): Removes the objects at the specified `indexes` in the receiver’s arranged objects from the content array.
- [remove(\_:)](remove%28__%29.md): Removes the receiver’s selected objects from the content collection.
- [removeObject(\_:)](removeobject%28__%29.md): Removes `object` from the receiver’s content collection.
- [remove(contentsOf:)](remove%28contentsof_%29.md): Removes `objects` from the receiver’s content collection.

# addObjects: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds `objects` to the receiver’s content collection.

## Declaration

```objectivec
- (void) addObjects:(NSArray *) objects;
```

<a id="Discussion"></a>

## Discussion

If [selectsInsertedObjects](selectsinsertedobjects.md) is [true](https://developer.apple.com/documentation/swift/true) (the default), the added objects are selected in the array controller.

It is important to note that inserting many objects with [selectsInsertedObjects](selectsinsertedobjects.md) on can cause a significant performance penalty. In this case it is more efficient to use the [content](../nsobjectcontroller/content.md) method to set the array, or to set [selectsInsertedObjects](selectsinsertedobjects.md) to [false](https://developer.apple.com/documentation/swift/false) before adding the objects with [addObjects:](add%28contentsof_%29.md).

## See Also

### Adding and Removing Objects

- [addObject:](addobject%28__%29.md): Adds `object` to the receiver’s content collection and the arranged objects array.
- [insertObject:atArrangedObjectIndex:](insert%28__atarrangedobjectindex_%29.md): Inserts `object` into the receiver’s arranged objects array at the location specified by `index`, and adds it to the receiver’s content collection.
- [insertObjects:atArrangedObjectIndexes:](insert%28contentsof_atarrangedobjectindexes_%29.md): Inserts `object`s into the receiver’s arranged objects array at the locations specified in `indexes`, and adds it to the receiver’s content collection.
- [removeObjectAtArrangedObjectIndex:](remove%28atarrangedobjectindex_%29.md): Removes the object at the specified `index` in the receiver’s arranged objects from the receiver’s content array.
- [removeObjectsAtArrangedObjectIndexes:](remove%28atarrangedobjectindexes_%29.md): Removes the objects at the specified `indexes` in the receiver’s arranged objects from the content array.
- [remove:](remove%28__%29.md): Removes the receiver’s selected objects from the content collection.
- [removeObject:](removeobject%28__%29.md): Removes `object` from the receiver’s content collection.
- [removeObjects:](remove%28contentsof_%29.md): Removes `objects` from the receiver’s content collection.

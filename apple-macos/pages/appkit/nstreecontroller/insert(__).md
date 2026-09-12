> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/insert(_:)](https://developer.apple.com/documentation/appkit/nstreecontroller/insert(_:))

# insert(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new object of the class specified by `objectClass` and inserts it into the tree controller’s content.

## Declaration

```swift
@IBAction func insert(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

The `sender` is typically the object that invoked this method.

If the receiver is in object mode `newObject` is called and the returned object is inserted into the collection. If the receiver is in entity mode a new object is created that is appropriate as specified by the entity, and `newObject` is not used.

<a id="Special-Considerations"></a>

### Special Considerations

The result of this method is deferred until the next iteration of the run loop so that the error presentation mechanism can provide feedback as a sheet.

## See Also

### Adding, inserting and removing objects

- [add(\_:)](add%28__%29.md): Adds an object to the tree controller’s content after the current selection.
- [addChild(\_:)](addchild%28__%29.md): Adds a child object to the currently selected item.
- [canAddChild](canaddchild.md): A Boolean value that indicates if a child object can be added to the tree controller’s content.
- [canInsert](caninsert.md): A Boolean value that indicates if an object can be inserted into the tree controller’s content.
- [canInsertChild](caninsertchild.md): A Boolean value that indicates if a child object can be inserted into the tree controller’s content.
- [insertChild(\_:)](insertchild%28__%29.md): Creates a new object of the class specified by `objectClass` and inserts it into the tree controller’s content as a child of the current selection.
- [insert(\_:atArrangedObjectIndexPath:)](insert%28__atarrangedobjectindexpath_%29.md): Inserts `object` into the tree controller’s arranged objects array at the location specified by `indexPath`, and adds it to the tree controller’s content.
- [insert(\_:atArrangedObjectIndexPaths:)](insert%28__atarrangedobjectindexpaths_%29.md): Inserts `objects` into the tree controller’s arranged objects array at the locations specified in `indexPaths`, and adds them to the tree controller’s content.
- [remove(\_:)](remove%28__%29.md): Removes the tree controller’s selected objects from the content.
- [removeObject(atArrangedObjectIndexPath:)](removeobject%28atarrangedobjectindexpath_%29.md): Removes the object at the specified `indexPath` in the tree controller’s arranged objects from the tree controller’s content.
- [removeObjects(atArrangedObjectIndexPaths:)](removeobjects%28atarrangedobjectindexpaths_%29.md): Removes the objects at the specified `indexPaths` in the tree controller’s arranged objects from the tree controller’s content.
- [move(\_:to:)](move%28__to_%29-s5xp.md): Moves the specified tree node to the new index path.
- [move(\_:to:)](move%28__to_%29-moi9.md): Moves the specified tree nodes to the new index path.

# insert: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new object of the class specified by `objectClass` and inserts it into the tree controller’s content.

## Declaration

```objectivec
- (void) insert:(id) sender;
```

<a id="Discussion"></a>

## Discussion

The `sender` is typically the object that invoked this method.

If the receiver is in object mode `newObject` is called and the returned object is inserted into the collection. If the receiver is in entity mode a new object is created that is appropriate as specified by the entity, and `newObject` is not used.

<a id="Special-Considerations"></a>

### Special Considerations

The result of this method is deferred until the next iteration of the run loop so that the error presentation mechanism can provide feedback as a sheet.

## See Also

### Adding, inserting and removing objects

- [add:](add%28__%29.md): Adds an object to the tree controller’s content after the current selection.
- [addChild:](addchild%28__%29.md): Adds a child object to the currently selected item.
- [canAddChild](canaddchild.md): A Boolean value that indicates if a child object can be added to the tree controller’s content.
- [canInsert](caninsert.md): A Boolean value that indicates if an object can be inserted into the tree controller’s content.
- [canInsertChild](caninsertchild.md): A Boolean value that indicates if a child object can be inserted into the tree controller’s content.
- [insertChild:](insertchild%28__%29.md): Creates a new object of the class specified by `objectClass` and inserts it into the tree controller’s content as a child of the current selection.
- [insertObject:atArrangedObjectIndexPath:](insert%28__atarrangedobjectindexpath_%29.md): Inserts `object` into the tree controller’s arranged objects array at the location specified by `indexPath`, and adds it to the tree controller’s content.
- [insertObjects:atArrangedObjectIndexPaths:](insert%28__atarrangedobjectindexpaths_%29.md): Inserts `objects` into the tree controller’s arranged objects array at the locations specified in `indexPaths`, and adds them to the tree controller’s content.
- [remove:](remove%28__%29.md): Removes the tree controller’s selected objects from the content.
- [removeObjectAtArrangedObjectIndexPath:](removeobject%28atarrangedobjectindexpath_%29.md): Removes the object at the specified `indexPath` in the tree controller’s arranged objects from the tree controller’s content.
- [removeObjectsAtArrangedObjectIndexPaths:](removeobjects%28atarrangedobjectindexpaths_%29.md): Removes the objects at the specified `indexPaths` in the tree controller’s arranged objects from the tree controller’s content.
- [moveNode:toIndexPath:](move%28__to_%29-s5xp.md): Moves the specified tree node to the new index path.
- [moveNodes:toIndexPath:](move%28__to_%29-moi9.md): Moves the specified tree nodes to the new index path.

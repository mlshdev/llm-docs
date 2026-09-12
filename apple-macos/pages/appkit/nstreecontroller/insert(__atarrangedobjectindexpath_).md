> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/insert(_:atarrangedobjectindexpath:)](https://developer.apple.com/documentation/appkit/nstreecontroller/insert(_:atarrangedobjectindexpath:))

# insert(\_:atArrangedObjectIndexPath:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts `object` into the tree controller’s arranged objects array at the location specified by `indexPath`, and adds it to the tree controller’s content.

## Declaration

```swift
func insert(_ object: Any?, atArrangedObjectIndexPath indexPath: IndexPath)
```

## See Also

### Adding, inserting and removing objects

- [add(\_:)](add%28__%29.md): Adds an object to the tree controller’s content after the current selection.
- [addChild(\_:)](addchild%28__%29.md): Adds a child object to the currently selected item.
- [canAddChild](canaddchild.md): A Boolean value that indicates if a child object can be added to the tree controller’s content.
- [canInsert](caninsert.md): A Boolean value that indicates if an object can be inserted into the tree controller’s content.
- [canInsertChild](caninsertchild.md): A Boolean value that indicates if a child object can be inserted into the tree controller’s content.
- [insert(\_:)](insert%28__%29.md): Creates a new object of the class specified by `objectClass` and inserts it into the tree controller’s content.
- [insertChild(\_:)](insertchild%28__%29.md): Creates a new object of the class specified by `objectClass` and inserts it into the tree controller’s content as a child of the current selection.
- [insert(\_:atArrangedObjectIndexPaths:)](insert%28__atarrangedobjectindexpaths_%29.md): Inserts `objects` into the tree controller’s arranged objects array at the locations specified in `indexPaths`, and adds them to the tree controller’s content.
- [remove(\_:)](remove%28__%29.md): Removes the tree controller’s selected objects from the content.
- [removeObject(atArrangedObjectIndexPath:)](removeobject%28atarrangedobjectindexpath_%29.md): Removes the object at the specified `indexPath` in the tree controller’s arranged objects from the tree controller’s content.
- [removeObjects(atArrangedObjectIndexPaths:)](removeobjects%28atarrangedobjectindexpaths_%29.md): Removes the objects at the specified `indexPaths` in the tree controller’s arranged objects from the tree controller’s content.
- [move(\_:to:)](move%28__to_%29-s5xp.md): Moves the specified tree node to the new index path.
- [move(\_:to:)](move%28__to_%29-moi9.md): Moves the specified tree nodes to the new index path.

# insertObject:atArrangedObjectIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts `object` into the tree controller’s arranged objects array at the location specified by `indexPath`, and adds it to the tree controller’s content.

## Declaration

```objectivec
- (void) insertObject:(id) object atArrangedObjectIndexPath:(NSIndexPath *) indexPath;
```

## See Also

### Adding, inserting and removing objects

- [add:](add%28__%29.md): Adds an object to the tree controller’s content after the current selection.
- [addChild:](addchild%28__%29.md): Adds a child object to the currently selected item.
- [canAddChild](canaddchild.md): A Boolean value that indicates if a child object can be added to the tree controller’s content.
- [canInsert](caninsert.md): A Boolean value that indicates if an object can be inserted into the tree controller’s content.
- [canInsertChild](caninsertchild.md): A Boolean value that indicates if a child object can be inserted into the tree controller’s content.
- [insert:](insert%28__%29.md): Creates a new object of the class specified by `objectClass` and inserts it into the tree controller’s content.
- [insertChild:](insertchild%28__%29.md): Creates a new object of the class specified by `objectClass` and inserts it into the tree controller’s content as a child of the current selection.
- [insertObjects:atArrangedObjectIndexPaths:](insert%28__atarrangedobjectindexpaths_%29.md): Inserts `objects` into the tree controller’s arranged objects array at the locations specified in `indexPaths`, and adds them to the tree controller’s content.
- [remove:](remove%28__%29.md): Removes the tree controller’s selected objects from the content.
- [removeObjectAtArrangedObjectIndexPath:](removeobject%28atarrangedobjectindexpath_%29.md): Removes the object at the specified `indexPath` in the tree controller’s arranged objects from the tree controller’s content.
- [removeObjectsAtArrangedObjectIndexPaths:](removeobjects%28atarrangedobjectindexpaths_%29.md): Removes the objects at the specified `indexPaths` in the tree controller’s arranged objects from the tree controller’s content.
- [moveNode:toIndexPath:](move%28__to_%29-s5xp.md): Moves the specified tree node to the new index path.
- [moveNodes:toIndexPath:](move%28__to_%29-moi9.md): Moves the specified tree nodes to the new index path.

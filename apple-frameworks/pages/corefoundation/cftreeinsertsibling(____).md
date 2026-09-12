> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreeinsertsibling(_:_:)](https://developer.apple.com/documentation/corefoundation/cftreeinsertsibling(_:_:))

# CFTreeInsertSibling(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Inserts a new sibling after a given tree.

## Declaration

```swift
func CFTreeInsertSibling(_ tree: CFTree!, _ newSibling: CFTree!)
```

## Parameters

- `tree`: The tree after which to insert `newSibling`. `tree` must have a parent.
- `newSibling`: The sibling to add. `newSibling` must not have a parent.

<a id="Discussion"></a>

## Discussion

When a child tree is added to another tree, the child tree is retained by its new parent.

If you want to manipulate an existing tree structure, since `newSibling` must not have a parent you need to remove a tree from its parent in order to move it to a new position. If you do this, you should retain the tree before you actually remove it from its parent (see [CFTreeRemove(\_:)](cftreeremove%28__%29.md)).

## See Also

### Modifying a Tree

- [CFTreeAppendChild(\_:\_:)](cftreeappendchild%28____%29.md): Adds a new child to a tree as the last in its list of children.
- [CFTreeRemoveAllChildren(\_:)](cftreeremoveallchildren%28__%29.md): Removes all the children of a tree.
- [CFTreePrependChild(\_:\_:)](cftreeprependchild%28____%29.md): Adds a new child to the specified tree as the first in its list of children.
- [CFTreeRemove(\_:)](cftreeremove%28__%29.md): Removes a tree from its parent.
- [CFTreeSetContext(\_:\_:)](cftreesetcontext%28____%29.md): Replaces the context of a tree by releasing the old information pointer and retaining the new one.

# CFTreeInsertSibling (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Inserts a new sibling after a given tree.

## Declaration

```objectivec
extern void CFTreeInsertSibling(CFTreeRef tree, CFTreeRef newSibling);
```

## Parameters

- `tree`: The tree after which to insert `newSibling`. `tree` must have a parent.
- `newSibling`: The sibling to add. `newSibling` must not have a parent.

<a id="Discussion"></a>

## Discussion

When a child tree is added to another tree, the child tree is retained by its new parent.

If you want to manipulate an existing tree structure, since `newSibling` must not have a parent you need to remove a tree from its parent in order to move it to a new position. If you do this, you should retain the tree before you actually remove it from its parent (see [CFTreeRemove](cftreeremove%28__%29.md)).

## See Also

### Modifying a Tree

- [CFTreeAppendChild](cftreeappendchild%28____%29.md): Adds a new child to a tree as the last in its list of children.
- [CFTreeRemoveAllChildren](cftreeremoveallchildren%28__%29.md): Removes all the children of a tree.
- [CFTreePrependChild](cftreeprependchild%28____%29.md): Adds a new child to the specified tree as the first in its list of children.
- [CFTreeRemove](cftreeremove%28__%29.md): Removes a tree from its parent.
- [CFTreeSetContext](cftreesetcontext%28____%29.md): Replaces the context of a tree by releasing the old information pointer and retaining the new one.

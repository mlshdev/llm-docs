> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreeprependchild(_:_:)](https://developer.apple.com/documentation/corefoundation/cftreeprependchild(_:_:))

# CFTreePrependChild(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a new child to the specified tree as the first in its list of children.

## Declaration

```swift
func CFTreePrependChild(_ tree: CFTree!, _ newChild: CFTree!)
```

## Parameters

- `tree`: The tree to which to add `newChild`.
- `newChild`: The child tree to add to `tree`. This value must not be a child of another tree.

<a id="Discussion"></a>

## Discussion

When a child tree is added to another tree, the child tree is retained by its new parent.

## See Also

### Modifying a Tree

- [CFTreeAppendChild(\_:\_:)](cftreeappendchild%28____%29.md): Adds a new child to a tree as the last in its list of children.
- [CFTreeInsertSibling(\_:\_:)](cftreeinsertsibling%28____%29.md): Inserts a new sibling after a given tree.
- [CFTreeRemoveAllChildren(\_:)](cftreeremoveallchildren%28__%29.md): Removes all the children of a tree.
- [CFTreeRemove(\_:)](cftreeremove%28__%29.md): Removes a tree from its parent.
- [CFTreeSetContext(\_:\_:)](cftreesetcontext%28____%29.md): Replaces the context of a tree by releasing the old information pointer and retaining the new one.

# CFTreePrependChild (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a new child to the specified tree as the first in its list of children.

## Declaration

```objectivec
extern void CFTreePrependChild(CFTreeRef tree, CFTreeRef newChild);
```

## Parameters

- `tree`: The tree to which to add `newChild`.
- `newChild`: The child tree to add to `tree`. This value must not be a child of another tree.

<a id="Discussion"></a>

## Discussion

When a child tree is added to another tree, the child tree is retained by its new parent.

## See Also

### Modifying a Tree

- [CFTreeAppendChild](cftreeappendchild%28____%29.md): Adds a new child to a tree as the last in its list of children.
- [CFTreeInsertSibling](cftreeinsertsibling%28____%29.md): Inserts a new sibling after a given tree.
- [CFTreeRemoveAllChildren](cftreeremoveallchildren%28__%29.md): Removes all the children of a tree.
- [CFTreeRemove](cftreeremove%28__%29.md): Removes a tree from its parent.
- [CFTreeSetContext](cftreesetcontext%28____%29.md): Replaces the context of a tree by releasing the old information pointer and retaining the new one.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreeremoveallchildren(_:)](https://developer.apple.com/documentation/corefoundation/cftreeremoveallchildren(_:))

# CFTreeRemoveAllChildren(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes all the children of a tree.

## Declaration

```swift
func CFTreeRemoveAllChildren(_ tree: CFTree!)
```

## Parameters

- `tree`: The tree to modify.

## See Also

### Modifying a Tree

- [CFTreeAppendChild(\_:\_:)](cftreeappendchild%28____%29.md): Adds a new child to a tree as the last in its list of children.
- [CFTreeInsertSibling(\_:\_:)](cftreeinsertsibling%28____%29.md): Inserts a new sibling after a given tree.
- [CFTreePrependChild(\_:\_:)](cftreeprependchild%28____%29.md): Adds a new child to the specified tree as the first in its list of children.
- [CFTreeRemove(\_:)](cftreeremove%28__%29.md): Removes a tree from its parent.
- [CFTreeSetContext(\_:\_:)](cftreesetcontext%28____%29.md): Replaces the context of a tree by releasing the old information pointer and retaining the new one.

# CFTreeRemoveAllChildren (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes all the children of a tree.

## Declaration

```objectivec
extern void CFTreeRemoveAllChildren(CFTreeRef tree);
```

## Parameters

- `tree`: The tree to modify.

## See Also

### Modifying a Tree

- [CFTreeAppendChild](cftreeappendchild%28____%29.md): Adds a new child to a tree as the last in its list of children.
- [CFTreeInsertSibling](cftreeinsertsibling%28____%29.md): Inserts a new sibling after a given tree.
- [CFTreePrependChild](cftreeprependchild%28____%29.md): Adds a new child to the specified tree as the first in its list of children.
- [CFTreeRemove](cftreeremove%28__%29.md): Removes a tree from its parent.
- [CFTreeSetContext](cftreesetcontext%28____%29.md): Replaces the context of a tree by releasing the old information pointer and retaining the new one.

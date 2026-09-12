> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreesetcontext(_:_:)](https://developer.apple.com/documentation/corefoundation/cftreesetcontext(_:_:))

# CFTreeSetContext(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces the context of a tree by releasing the old information pointer and retaining the new one.

## Declaration

```swift
func CFTreeSetContext(_ tree: CFTree!, _ context: UnsafePointer<CFTreeContext>!)
```

## Parameters

- `tree`: The tree to modify.
- `context`: The [CFTreeContext](cftreecontext.md) structure to be copied and used as the context of the new tree. The information pointer will be retained by the tree if a retain function is provided. If this value is not a valid C pointer to a [CFTreeContext](cftreecontext.md) structure-sized block of storage, the result is undefined. If the version number of the storage is not a valid [CFTreeContext](cftreecontext.md) version number, the result is undefined.

## See Also

### Modifying a Tree

- [CFTreeAppendChild(\_:\_:)](cftreeappendchild%28____%29.md): Adds a new child to a tree as the last in its list of children.
- [CFTreeInsertSibling(\_:\_:)](cftreeinsertsibling%28____%29.md): Inserts a new sibling after a given tree.
- [CFTreeRemoveAllChildren(\_:)](cftreeremoveallchildren%28__%29.md): Removes all the children of a tree.
- [CFTreePrependChild(\_:\_:)](cftreeprependchild%28____%29.md): Adds a new child to the specified tree as the first in its list of children.
- [CFTreeRemove(\_:)](cftreeremove%28__%29.md): Removes a tree from its parent.

# CFTreeSetContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces the context of a tree by releasing the old information pointer and retaining the new one.

## Declaration

```objectivec
extern void CFTreeSetContext(CFTreeRef tree, const CFTreeContext *context);
```

## Parameters

- `tree`: The tree to modify.
- `context`: The [CFTreeContext](cftreecontext.md) structure to be copied and used as the context of the new tree. The information pointer will be retained by the tree if a retain function is provided. If this value is not a valid C pointer to a [CFTreeContext](cftreecontext.md) structure-sized block of storage, the result is undefined. If the version number of the storage is not a valid [CFTreeContext](cftreecontext.md) version number, the result is undefined.

## See Also

### Modifying a Tree

- [CFTreeAppendChild](cftreeappendchild%28____%29.md): Adds a new child to a tree as the last in its list of children.
- [CFTreeInsertSibling](cftreeinsertsibling%28____%29.md): Inserts a new sibling after a given tree.
- [CFTreeRemoveAllChildren](cftreeremoveallchildren%28__%29.md): Removes all the children of a tree.
- [CFTreePrependChild](cftreeprependchild%28____%29.md): Adds a new child to the specified tree as the first in its list of children.
- [CFTreeRemove](cftreeremove%28__%29.md): Removes a tree from its parent.

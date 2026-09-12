> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreegetcontext(_:_:)](https://developer.apple.com/documentation/corefoundation/cftreegetcontext(_:_:))

# CFTreeGetContext(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the context of the specified tree.

## Declaration

```swift
func CFTreeGetContext(_ tree: CFTree!, _ context: UnsafeMutablePointer<CFTreeContext>!)
```

## Parameters

- `tree`: The tree to examine.
- `context`: The [CFTreeContext](cftreecontext.md) structure to be filled in with the context of the specified tree. This value must be a valid C pointer to a [CFTreeContext](cftreecontext.md) structure-sized block of storage. If the version number of the storage is not a valid [CFTreeContext](cftreecontext.md) structure version number, the result is undefined.

## See Also

### Examining a Tree

- [CFTreeFindRoot(\_:)](cftreefindroot%28__%29.md): Returns the root tree of a given tree.
- [CFTreeGetChildAtIndex(\_:\_:)](cftreegetchildatindex%28____%29.md): Returns the child of a tree at the specified index.
- [CFTreeGetChildCount(\_:)](cftreegetchildcount%28__%29.md): Returns the number of children in a tree.
- [CFTreeGetChildren(\_:\_:)](cftreegetchildren%28____%29.md): Fills a buffer with children from the tree.
- [CFTreeGetFirstChild(\_:)](cftreegetfirstchild%28__%29.md): Returns the first child of a tree.
- [CFTreeGetNextSibling(\_:)](cftreegetnextsibling%28__%29.md): Returns the next sibling, adjacent to a given tree, in the parent’s children list.
- [CFTreeGetParent(\_:)](cftreegetparent%28__%29.md): Returns the parent of a given tree.

# CFTreeGetContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the context of the specified tree.

## Declaration

```objectivec
extern void CFTreeGetContext(CFTreeRef tree, CFTreeContext *context);
```

## Parameters

- `tree`: The tree to examine.
- `context`: The [CFTreeContext](cftreecontext.md) structure to be filled in with the context of the specified tree. This value must be a valid C pointer to a [CFTreeContext](cftreecontext.md) structure-sized block of storage. If the version number of the storage is not a valid [CFTreeContext](cftreecontext.md) structure version number, the result is undefined.

## See Also

### Examining a Tree

- [CFTreeFindRoot](cftreefindroot%28__%29.md): Returns the root tree of a given tree.
- [CFTreeGetChildAtIndex](cftreegetchildatindex%28____%29.md): Returns the child of a tree at the specified index.
- [CFTreeGetChildCount](cftreegetchildcount%28__%29.md): Returns the number of children in a tree.
- [CFTreeGetChildren](cftreegetchildren%28____%29.md): Fills a buffer with children from the tree.
- [CFTreeGetFirstChild](cftreegetfirstchild%28__%29.md): Returns the first child of a tree.
- [CFTreeGetNextSibling](cftreegetnextsibling%28__%29.md): Returns the next sibling, adjacent to a given tree, in the parent’s children list.
- [CFTreeGetParent](cftreegetparent%28__%29.md): Returns the parent of a given tree.

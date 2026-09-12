> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreegetfirstchild(_:)](https://developer.apple.com/documentation/corefoundation/cftreegetfirstchild(_:))

# CFTreeGetFirstChild(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the first child of a tree.

## Declaration

```swift
func CFTreeGetFirstChild(_ tree: CFTree!) -> CFTree!
```

## Parameters

- `tree`: The tree to examine.

<a id="return-value"></a>

## Return Value

The first child of `tree`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining a Tree

- [CFTreeFindRoot(\_:)](cftreefindroot%28__%29.md): Returns the root tree of a given tree.
- [CFTreeGetChildAtIndex(\_:\_:)](cftreegetchildatindex%28____%29.md): Returns the child of a tree at the specified index.
- [CFTreeGetChildCount(\_:)](cftreegetchildcount%28__%29.md): Returns the number of children in a tree.
- [CFTreeGetChildren(\_:\_:)](cftreegetchildren%28____%29.md): Fills a buffer with children from the tree.
- [CFTreeGetContext(\_:\_:)](cftreegetcontext%28____%29.md): Returns the context of the specified tree.
- [CFTreeGetNextSibling(\_:)](cftreegetnextsibling%28__%29.md): Returns the next sibling, adjacent to a given tree, in the parent’s children list.
- [CFTreeGetParent(\_:)](cftreegetparent%28__%29.md): Returns the parent of a given tree.

# CFTreeGetFirstChild (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the first child of a tree.

## Declaration

```objectivec
extern CFTreeRefCFTreeGetFirstChild(CFTreeRef tree);
```

## Parameters

- `tree`: The tree to examine.

<a id="return-value"></a>

## Return Value

The first child of `tree`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining a Tree

- [CFTreeFindRoot](cftreefindroot%28__%29.md): Returns the root tree of a given tree.
- [CFTreeGetChildAtIndex](cftreegetchildatindex%28____%29.md): Returns the child of a tree at the specified index.
- [CFTreeGetChildCount](cftreegetchildcount%28__%29.md): Returns the number of children in a tree.
- [CFTreeGetChildren](cftreegetchildren%28____%29.md): Fills a buffer with children from the tree.
- [CFTreeGetContext](cftreegetcontext%28____%29.md): Returns the context of the specified tree.
- [CFTreeGetNextSibling](cftreegetnextsibling%28__%29.md): Returns the next sibling, adjacent to a given tree, in the parent’s children list.
- [CFTreeGetParent](cftreegetparent%28__%29.md): Returns the parent of a given tree.

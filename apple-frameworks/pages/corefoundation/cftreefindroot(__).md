> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreefindroot(_:)](https://developer.apple.com/documentation/corefoundation/cftreefindroot(_:))

# CFTreeFindRoot(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the root tree of a given tree.

## Declaration

```swift
func CFTreeFindRoot(_ tree: CFTree!) -> CFTree!
```

## Parameters

- `tree`: The tree to examine.

<a id="return-value"></a>

## Return Value

The root of `tree` where root is defined as a tree without a parent. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining a Tree

- [CFTreeGetChildAtIndex(\_:\_:)](cftreegetchildatindex%28____%29.md): Returns the child of a tree at the specified index.
- [CFTreeGetChildCount(\_:)](cftreegetchildcount%28__%29.md): Returns the number of children in a tree.
- [CFTreeGetChildren(\_:\_:)](cftreegetchildren%28____%29.md): Fills a buffer with children from the tree.
- [CFTreeGetContext(\_:\_:)](cftreegetcontext%28____%29.md): Returns the context of the specified tree.
- [CFTreeGetFirstChild(\_:)](cftreegetfirstchild%28__%29.md): Returns the first child of a tree.
- [CFTreeGetNextSibling(\_:)](cftreegetnextsibling%28__%29.md): Returns the next sibling, adjacent to a given tree, in the parent’s children list.
- [CFTreeGetParent(\_:)](cftreegetparent%28__%29.md): Returns the parent of a given tree.

# CFTreeFindRoot (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the root tree of a given tree.

## Declaration

```objectivec
extern CFTreeRefCFTreeFindRoot(CFTreeRef tree);
```

## Parameters

- `tree`: The tree to examine.

<a id="return-value"></a>

## Return Value

The root of `tree` where root is defined as a tree without a parent. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining a Tree

- [CFTreeGetChildAtIndex](cftreegetchildatindex%28____%29.md): Returns the child of a tree at the specified index.
- [CFTreeGetChildCount](cftreegetchildcount%28__%29.md): Returns the number of children in a tree.
- [CFTreeGetChildren](cftreegetchildren%28____%29.md): Fills a buffer with children from the tree.
- [CFTreeGetContext](cftreegetcontext%28____%29.md): Returns the context of the specified tree.
- [CFTreeGetFirstChild](cftreegetfirstchild%28__%29.md): Returns the first child of a tree.
- [CFTreeGetNextSibling](cftreegetnextsibling%28__%29.md): Returns the next sibling, adjacent to a given tree, in the parent’s children list.
- [CFTreeGetParent](cftreegetparent%28__%29.md): Returns the parent of a given tree.

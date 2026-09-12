> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreegetchildcount(_:)](https://developer.apple.com/documentation/corefoundation/cftreegetchildcount(_:))

# CFTreeGetChildCount(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of children in a tree.

## Declaration

```swift
func CFTreeGetChildCount(_ tree: CFTree!) -> CFIndex
```

## Parameters

- `tree`: The tree to examine.

<a id="return-value"></a>

## Return Value

The number of children in `tree`.

## See Also

### Examining a Tree

- [CFTreeFindRoot(\_:)](cftreefindroot%28__%29.md): Returns the root tree of a given tree.
- [CFTreeGetChildAtIndex(\_:\_:)](cftreegetchildatindex%28____%29.md): Returns the child of a tree at the specified index.
- [CFTreeGetChildren(\_:\_:)](cftreegetchildren%28____%29.md): Fills a buffer with children from the tree.
- [CFTreeGetContext(\_:\_:)](cftreegetcontext%28____%29.md): Returns the context of the specified tree.
- [CFTreeGetFirstChild(\_:)](cftreegetfirstchild%28__%29.md): Returns the first child of a tree.
- [CFTreeGetNextSibling(\_:)](cftreegetnextsibling%28__%29.md): Returns the next sibling, adjacent to a given tree, in the parent’s children list.
- [CFTreeGetParent(\_:)](cftreegetparent%28__%29.md): Returns the parent of a given tree.

# CFTreeGetChildCount (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of children in a tree.

## Declaration

```objectivec
extern CFIndex CFTreeGetChildCount(CFTreeRef tree);
```

## Parameters

- `tree`: The tree to examine.

<a id="return-value"></a>

## Return Value

The number of children in `tree`.

## See Also

### Examining a Tree

- [CFTreeFindRoot](cftreefindroot%28__%29.md): Returns the root tree of a given tree.
- [CFTreeGetChildAtIndex](cftreegetchildatindex%28____%29.md): Returns the child of a tree at the specified index.
- [CFTreeGetChildren](cftreegetchildren%28____%29.md): Fills a buffer with children from the tree.
- [CFTreeGetContext](cftreegetcontext%28____%29.md): Returns the context of the specified tree.
- [CFTreeGetFirstChild](cftreegetfirstchild%28__%29.md): Returns the first child of a tree.
- [CFTreeGetNextSibling](cftreegetnextsibling%28__%29.md): Returns the next sibling, adjacent to a given tree, in the parent’s children list.
- [CFTreeGetParent](cftreegetparent%28__%29.md): Returns the parent of a given tree.

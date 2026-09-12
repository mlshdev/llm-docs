> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreegetchildren(_:_:)](https://developer.apple.com/documentation/corefoundation/cftreegetchildren(_:_:))

# CFTreeGetChildren(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fills a buffer with children from the tree.

## Declaration

```swift
func CFTreeGetChildren(_ tree: CFTree!, _ children: UnsafeMutablePointer<Unmanaged<CFTree>?>!)
```

## Parameters

- `tree`: The tree to examine.
- `children`: The C array of pointer-sized values to be filled with the children from `tree`. This value must be a valid pointer to a C array of at least the size of the number of children in `tree`. Use the [CFTreeGetChildCount(\_:)](cftreegetchildcount%28__%29.md) function to obtain the number of children in `tree`. You are responsible for retaining and releasing the returned objects as needed.

## See Also

### Examining a Tree

- [CFTreeFindRoot(\_:)](cftreefindroot%28__%29.md): Returns the root tree of a given tree.
- [CFTreeGetChildAtIndex(\_:\_:)](cftreegetchildatindex%28____%29.md): Returns the child of a tree at the specified index.
- [CFTreeGetChildCount(\_:)](cftreegetchildcount%28__%29.md): Returns the number of children in a tree.
- [CFTreeGetContext(\_:\_:)](cftreegetcontext%28____%29.md): Returns the context of the specified tree.
- [CFTreeGetFirstChild(\_:)](cftreegetfirstchild%28__%29.md): Returns the first child of a tree.
- [CFTreeGetNextSibling(\_:)](cftreegetnextsibling%28__%29.md): Returns the next sibling, adjacent to a given tree, in the parent’s children list.
- [CFTreeGetParent(\_:)](cftreegetparent%28__%29.md): Returns the parent of a given tree.

# CFTreeGetChildren (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fills a buffer with children from the tree.

## Declaration

```objectivec
extern void CFTreeGetChildren(CFTreeRef tree, CFTreeRef*children);
```

## Parameters

- `tree`: The tree to examine.
- `children`: The C array of pointer-sized values to be filled with the children from `tree`. This value must be a valid pointer to a C array of at least the size of the number of children in `tree`. Use the [CFTreeGetChildCount](cftreegetchildcount%28__%29.md) function to obtain the number of children in `tree`. You are responsible for retaining and releasing the returned objects as needed.

## See Also

### Examining a Tree

- [CFTreeFindRoot](cftreefindroot%28__%29.md): Returns the root tree of a given tree.
- [CFTreeGetChildAtIndex](cftreegetchildatindex%28____%29.md): Returns the child of a tree at the specified index.
- [CFTreeGetChildCount](cftreegetchildcount%28__%29.md): Returns the number of children in a tree.
- [CFTreeGetContext](cftreegetcontext%28____%29.md): Returns the context of the specified tree.
- [CFTreeGetFirstChild](cftreegetfirstchild%28__%29.md): Returns the first child of a tree.
- [CFTreeGetNextSibling](cftreegetnextsibling%28__%29.md): Returns the next sibling, adjacent to a given tree, in the parent’s children list.
- [CFTreeGetParent](cftreegetparent%28__%29.md): Returns the parent of a given tree.

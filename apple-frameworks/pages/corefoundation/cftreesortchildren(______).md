> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreesortchildren(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cftreesortchildren(_:_:_:))

# CFTreeSortChildren(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sorts the immediate children of a tree using a specified comparator function.

## Declaration

```swift
func CFTreeSortChildren(_ tree: CFTree!, _ comparator: CFComparatorFunction!, _ context: UnsafeMutableRawPointer!)
```

## Parameters

- `tree`: The tree to sort.
- `comparator`: The function with a comparator function type signature which is used in the sort operation to compare children of the tree. The children of the tree are sorted from least to greatest according to this function.
- `context`: A pointer-sized program-defined value that is passed to the comparator function, but is otherwise unused by this function.

<a id="Discussion"></a>

## Discussion

Note that the comparator only operates one level deep and does not operate on descendants further removed than the immediate children of a tree node.

# CFTreeSortChildren (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sorts the immediate children of a tree using a specified comparator function.

## Declaration

```objectivec
extern void CFTreeSortChildren(CFTreeRef tree, CFComparatorFunction comparator, void *context);
```

## Parameters

- `tree`: The tree to sort.
- `comparator`: The function with a comparator function type signature which is used in the sort operation to compare children of the tree. The children of the tree are sorted from least to greatest according to this function.
- `context`: A pointer-sized program-defined value that is passed to the comparator function, but is otherwise unused by this function.

<a id="Discussion"></a>

## Discussion

Note that the comparator only operates one level deep and does not operate on descendants further removed than the immediate children of a tree node.

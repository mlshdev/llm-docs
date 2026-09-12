> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftree](https://developer.apple.com/documentation/corefoundation/cftree)

# CFTree (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFTree
```

<a id="Overview"></a>

## Overview

You use CFTree to create tree structures that represent hierarchical organizations of information. In such structures, each tree node has exactly one parent tree (except for the root tree, which has no parent) and can have multiple children. Each CFTree object in the structure has a context associated with it; this context includes some program-defined data as well as callbacks that operate on that data. The program-defined data is often used as the basis for determining where CFTree objects fit within the structure. All CFTree objects are mutable.

You create a CFTree object using the [CFTreeCreate(\_:\_:)](cftreecreate%28____%29.md) function. This function takes an allocator and pointer to a [CFTreeGetContext(\_:\_:)](cftreegetcontext%28____%29.md) structure as parameters. The [CFTreeContext](cftreecontext.md) structure contains the program-defined data and callbacks needed to describe, retain, and release that data. If you do not implement these callbacks, your program-defined data will not be retained or released when trees are added and removed from a parent.

Each CFTree object has a parent and list of children, all of which may be `NULL`. CFTree provides functions for adding and removing tree objects from the tree structure. Use the [CFTreeAppendChild(\_:\_:)](cftreeappendchild%28____%29.md), [CFTreeInsertSibling(\_:\_:)](cftreeinsertsibling%28____%29.md), or [CFTreePrependChild(\_:\_:)](cftreeprependchild%28____%29.md) functions to add trees to a tree structure, and the [CFTreeRemove(\_:)](cftreeremove%28__%29.md) or [CFTreeRemoveAllChildren(\_:)](cftreeremoveallchildren%28__%29.md) functions to remove trees.

For the purposes of memory management, CFTree can be thought of as a collection. Typically the only object that retains a child tree is its parent. Usually, therefore, when you remove a child tree from a tree, the child tree is destroyed. If you want to use a child tree after you remove it from its parent, you should retain the child tree first, prior to removing it.

Releasing a tree releases its child trees, and all of their child trees (recursively). Note also that the final release of a tree (when its retain count decreases to zero) causes all of its child trees, and all of their child trees (recursively), to be destroyed, regardless of their retain counts. Releasing a child that is still in a tree is therefore a programming error, and may cause your application to crash.

You can use any of the get functions (functions containing the word “Get”) to obtain the parent, children, or attributes of a tree. For example, use [CFTreeGetChildAtIndex(\_:\_:)](cftreegetchildatindex%28____%29.md) to obtain a child of a tree at a specified location. In common with other Core Foundation “Get” functions, these functions do not retain the tree that is returned. If you are making other modifications to the tree, you should either retain or make a deep copy of the child tree returned.

You can apply a function to all children of a tree using the [CFTreeApplyFunctionToChildren(\_:\_:\_:)](cftreeapplyfunctiontochildren%28______%29.md) function, and sort children of a tree using the [CFTreeSortChildren(\_:\_:\_:)](cftreesortchildren%28______%29.md) function.

## Topics

### Creating Trees

- [CFTreeCreate(\_:\_:)](cftreecreate%28____%29.md): Creates a new CFTree object.

### Modifying a Tree

- [CFTreeAppendChild(\_:\_:)](cftreeappendchild%28____%29.md): Adds a new child to a tree as the last in its list of children.
- [CFTreeInsertSibling(\_:\_:)](cftreeinsertsibling%28____%29.md): Inserts a new sibling after a given tree.
- [CFTreeRemoveAllChildren(\_:)](cftreeremoveallchildren%28__%29.md): Removes all the children of a tree.
- [CFTreePrependChild(\_:\_:)](cftreeprependchild%28____%29.md): Adds a new child to the specified tree as the first in its list of children.
- [CFTreeRemove(\_:)](cftreeremove%28__%29.md): Removes a tree from its parent.
- [CFTreeSetContext(\_:\_:)](cftreesetcontext%28____%29.md): Replaces the context of a tree by releasing the old information pointer and retaining the new one.

### Sorting a Tree

- [CFTreeSortChildren(\_:\_:\_:)](cftreesortchildren%28______%29.md): Sorts the immediate children of a tree using a specified comparator function.

### Examining a Tree

- [CFTreeFindRoot(\_:)](cftreefindroot%28__%29.md): Returns the root tree of a given tree.
- [CFTreeGetChildAtIndex(\_:\_:)](cftreegetchildatindex%28____%29.md): Returns the child of a tree at the specified index.
- [CFTreeGetChildCount(\_:)](cftreegetchildcount%28__%29.md): Returns the number of children in a tree.
- [CFTreeGetChildren(\_:\_:)](cftreegetchildren%28____%29.md): Fills a buffer with children from the tree.
- [CFTreeGetContext(\_:\_:)](cftreegetcontext%28____%29.md): Returns the context of the specified tree.
- [CFTreeGetFirstChild(\_:)](cftreegetfirstchild%28__%29.md): Returns the first child of a tree.
- [CFTreeGetNextSibling(\_:)](cftreegetnextsibling%28__%29.md): Returns the next sibling, adjacent to a given tree, in the parent’s children list.
- [CFTreeGetParent(\_:)](cftreegetparent%28__%29.md): Returns the parent of a given tree.

### Performing an Operation on Tree Elements

- [CFTreeApplyFunctionToChildren(\_:\_:\_:)](cftreeapplyfunctiontochildren%28______%29.md): Calls a function once for each immediate child of a tree.

### Getting the Tree Type ID

- [CFTreeGetTypeID()](cftreegettypeid%28%29.md): Returns the type identifier of the CFTree opaque type.

### Callbacks

- [CFTreeApplierFunction](cftreeapplierfunction.md): Type of the callback function used by the CFTree apply function.
- [CFTreeCopyDescriptionCallBack](cftreecopydescriptioncallback.md): Callback function used to provide a description of the program-defined information pointer.
- [CFTreeReleaseCallBack](cftreereleasecallback.md): Callback function used to release a previously retained program-defined information pointer.
- [CFTreeRetainCallBack](cftreeretaincallback.md): Callback function used to retain a program-defined information pointer.

### Data Types

- [CFTreeContext](cftreecontext.md): Structure containing program-defined data and callbacks for a CFTree object.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Collections Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFCollections/CFCollections.html#//apple_ref/doc/uid/10000124i)

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFTreeRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFTree * CFTreeRef;
```

<a id="Overview"></a>

## Overview

You use CFTree to create tree structures that represent hierarchical organizations of information. In such structures, each tree node has exactly one parent tree (except for the root tree, which has no parent) and can have multiple children. Each CFTree object in the structure has a context associated with it; this context includes some program-defined data as well as callbacks that operate on that data. The program-defined data is often used as the basis for determining where CFTree objects fit within the structure. All CFTree objects are mutable.

You create a CFTree object using the [CFTreeCreate](cftreecreate%28____%29.md) function. This function takes an allocator and pointer to a [CFTreeGetContext](cftreegetcontext%28____%29.md) structure as parameters. The [CFTreeContext](cftreecontext.md) structure contains the program-defined data and callbacks needed to describe, retain, and release that data. If you do not implement these callbacks, your program-defined data will not be retained or released when trees are added and removed from a parent.

Each CFTree object has a parent and list of children, all of which may be `NULL`. CFTree provides functions for adding and removing tree objects from the tree structure. Use the [CFTreeAppendChild](cftreeappendchild%28____%29.md), [CFTreeInsertSibling](cftreeinsertsibling%28____%29.md), or [CFTreePrependChild](cftreeprependchild%28____%29.md) functions to add trees to a tree structure, and the [CFTreeRemove](cftreeremove%28__%29.md) or [CFTreeRemoveAllChildren](cftreeremoveallchildren%28__%29.md) functions to remove trees.

For the purposes of memory management, CFTree can be thought of as a collection. Typically the only object that retains a child tree is its parent. Usually, therefore, when you remove a child tree from a tree, the child tree is destroyed. If you want to use a child tree after you remove it from its parent, you should retain the child tree first, prior to removing it.

Releasing a tree releases its child trees, and all of their child trees (recursively). Note also that the final release of a tree (when its retain count decreases to zero) causes all of its child trees, and all of their child trees (recursively), to be destroyed, regardless of their retain counts. Releasing a child that is still in a tree is therefore a programming error, and may cause your application to crash.

You can use any of the get functions (functions containing the word “Get”) to obtain the parent, children, or attributes of a tree. For example, use [CFTreeGetChildAtIndex](cftreegetchildatindex%28____%29.md) to obtain a child of a tree at a specified location. In common with other Core Foundation “Get” functions, these functions do not retain the tree that is returned. If you are making other modifications to the tree, you should either retain or make a deep copy of the child tree returned.

You can apply a function to all children of a tree using the [CFTreeApplyFunctionToChildren](cftreeapplyfunctiontochildren%28______%29.md) function, and sort children of a tree using the [CFTreeSortChildren](cftreesortchildren%28______%29.md) function.

## Topics

### Creating Trees

- [CFTreeCreate](cftreecreate%28____%29.md): Creates a new CFTree object.

### Modifying a Tree

- [CFTreeAppendChild](cftreeappendchild%28____%29.md): Adds a new child to a tree as the last in its list of children.
- [CFTreeInsertSibling](cftreeinsertsibling%28____%29.md): Inserts a new sibling after a given tree.
- [CFTreeRemoveAllChildren](cftreeremoveallchildren%28__%29.md): Removes all the children of a tree.
- [CFTreePrependChild](cftreeprependchild%28____%29.md): Adds a new child to the specified tree as the first in its list of children.
- [CFTreeRemove](cftreeremove%28__%29.md): Removes a tree from its parent.
- [CFTreeSetContext](cftreesetcontext%28____%29.md): Replaces the context of a tree by releasing the old information pointer and retaining the new one.

### Sorting a Tree

- [CFTreeSortChildren](cftreesortchildren%28______%29.md): Sorts the immediate children of a tree using a specified comparator function.

### Examining a Tree

- [CFTreeFindRoot](cftreefindroot%28__%29.md): Returns the root tree of a given tree.
- [CFTreeGetChildAtIndex](cftreegetchildatindex%28____%29.md): Returns the child of a tree at the specified index.
- [CFTreeGetChildCount](cftreegetchildcount%28__%29.md): Returns the number of children in a tree.
- [CFTreeGetChildren](cftreegetchildren%28____%29.md): Fills a buffer with children from the tree.
- [CFTreeGetContext](cftreegetcontext%28____%29.md): Returns the context of the specified tree.
- [CFTreeGetFirstChild](cftreegetfirstchild%28__%29.md): Returns the first child of a tree.
- [CFTreeGetNextSibling](cftreegetnextsibling%28__%29.md): Returns the next sibling, adjacent to a given tree, in the parent’s children list.
- [CFTreeGetParent](cftreegetparent%28__%29.md): Returns the parent of a given tree.

### Performing an Operation on Tree Elements

- [CFTreeApplyFunctionToChildren](cftreeapplyfunctiontochildren%28______%29.md): Calls a function once for each immediate child of a tree.

### Getting the Tree Type ID

- [CFTreeGetTypeID](cftreegettypeid%28%29.md): Returns the type identifier of the CFTree opaque type.

### Callbacks

- [CFTreeApplierFunction](cftreeapplierfunction.md): Type of the callback function used by the CFTree apply function.
- [CFTreeCopyDescriptionCallBack](cftreecopydescriptioncallback.md): Callback function used to provide a description of the program-defined information pointer.
- [CFTreeReleaseCallBack](cftreereleasecallback.md): Callback function used to release a previously retained program-defined information pointer.
- [CFTreeRetainCallBack](cftreeretaincallback.md): Callback function used to retain a program-defined information pointer.

### Data Types

- [CFTreeContext](cftreecontext.md): Structure containing program-defined data and callbacks for a CFTree object.

## See Also

### Related Documentation

- [Collections Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFCollections/CFCollections.html#//apple_ref/doc/uid/10000124i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)

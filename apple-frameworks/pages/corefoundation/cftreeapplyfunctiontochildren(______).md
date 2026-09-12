> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreeapplyfunctiontochildren(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cftreeapplyfunctiontochildren(_:_:_:))

# CFTreeApplyFunctionToChildren(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Calls a function once for each immediate child of a tree.

## Declaration

```swift
func CFTreeApplyFunctionToChildren(_ tree: CFTree!, _ applier: ((UnsafeRawPointer?, UnsafeMutableRawPointer?) -> Void)!, _ context: UnsafeMutableRawPointer!)
```

## Parameters

- `tree`: The tree to operate upon.
- `applier`: The callback function to call once for each child in `tree`. The function must be able to apply to all the values in the tree.
- `context`: A pointer-sized program-defined value that is passed to the applier function, but is otherwise unused by this function.

<a id="Discussion"></a>

## Discussion

Note that the applier only operates one level deep—it does not operate on descendants further removed than the immediate children of a tree. If the tree is mutable, it is unsafe for the applied function to change the contents of the tree.

# CFTreeApplyFunctionToChildren (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Calls a function once for each immediate child of a tree.

## Declaration

```objectivec
extern void CFTreeApplyFunctionToChildren(CFTreeRef tree, CFTreeApplierFunction applier, void *context);
```

## Parameters

- `tree`: The tree to operate upon.
- `applier`: The callback function to call once for each child in `tree`. The function must be able to apply to all the values in the tree.
- `context`: A pointer-sized program-defined value that is passed to the applier function, but is otherwise unused by this function.

<a id="Discussion"></a>

## Discussion

Note that the applier only operates one level deep—it does not operate on descendants further removed than the immediate children of a tree. If the tree is mutable, it is unsafe for the applied function to change the contents of the tree.

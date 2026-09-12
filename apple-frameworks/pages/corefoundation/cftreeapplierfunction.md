> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreeapplierfunction](https://developer.apple.com/documentation/corefoundation/cftreeapplierfunction)

# CFTreeApplierFunction (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Type of the callback function used by the CFTree apply function.

## Declaration

```swift
typealias CFTreeApplierFunction = (UnsafeRawPointer?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `value`: The current child of a tree that is being iterated.
- `context`: The program-defined context parameter that was passed to the applier function.

<a id="Discussion"></a>

## Discussion

This callback is used by the [CFTreeApplyFunctionToChildren(\_:\_:\_:)](cftreeapplyfunctiontochildren%28______%29.md) applier function.

## See Also

### Callbacks

- [CFTreeCopyDescriptionCallBack](cftreecopydescriptioncallback.md): Callback function used to provide a description of the program-defined information pointer.
- [CFTreeReleaseCallBack](cftreereleasecallback.md): Callback function used to release a previously retained program-defined information pointer.
- [CFTreeRetainCallBack](cftreeretaincallback.md): Callback function used to retain a program-defined information pointer.

# CFTreeApplierFunction (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Type of the callback function used by the CFTree apply function.

## Declaration

```objectivec
typedef void (*)(const void *, void *) CFTreeApplierFunction;
```

## Parameters

- `value`: The current child of a tree that is being iterated.
- `context`: The program-defined context parameter that was passed to the applier function.

<a id="Discussion"></a>

## Discussion

This callback is used by the [CFTreeApplyFunctionToChildren](cftreeapplyfunctiontochildren%28______%29.md) applier function.

## See Also

### Callbacks

- [CFTreeCopyDescriptionCallBack](cftreecopydescriptioncallback.md): Callback function used to provide a description of the program-defined information pointer.
- [CFTreeReleaseCallBack](cftreereleasecallback.md): Callback function used to release a previously retained program-defined information pointer.
- [CFTreeRetainCallBack](cftreeretaincallback.md): Callback function used to retain a program-defined information pointer.

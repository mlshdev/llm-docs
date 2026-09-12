> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreeretaincallback](https://developer.apple.com/documentation/corefoundation/cftreeretaincallback)

# CFTreeRetainCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function used to retain a program-defined information pointer.

## Declaration

```swift
typealias CFTreeRetainCallBack = (UnsafeRawPointer?) -> UnsafeRawPointer?
```

## Parameters

- `info`: The program-supplied information pointer provided in a [CFTreeContext](cftreecontext.md) structure.

<a id="return-value"></a>

## Return Value

The value to use whenever the information pointer is retained, which is usually the `info` parameter passed to this callback, but may be a different value if a different value should be used.

## See Also

### Callbacks

- [CFTreeApplierFunction](cftreeapplierfunction.md): Type of the callback function used by the CFTree apply function.
- [CFTreeCopyDescriptionCallBack](cftreecopydescriptioncallback.md): Callback function used to provide a description of the program-defined information pointer.
- [CFTreeReleaseCallBack](cftreereleasecallback.md): Callback function used to release a previously retained program-defined information pointer.

# CFTreeRetainCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function used to retain a program-defined information pointer.

## Declaration

```objectivec
typedef const void *(*)(const void *) CFTreeRetainCallBack;
```

## Parameters

- `info`: The program-supplied information pointer provided in a [CFTreeContext](cftreecontext.md) structure.

<a id="return-value"></a>

## Return Value

The value to use whenever the information pointer is retained, which is usually the `info` parameter passed to this callback, but may be a different value if a different value should be used.

## See Also

### Callbacks

- [CFTreeApplierFunction](cftreeapplierfunction.md): Type of the callback function used by the CFTree apply function.
- [CFTreeCopyDescriptionCallBack](cftreecopydescriptioncallback.md): Callback function used to provide a description of the program-defined information pointer.
- [CFTreeReleaseCallBack](cftreereleasecallback.md): Callback function used to release a previously retained program-defined information pointer.

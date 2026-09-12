> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreecopydescriptioncallback](https://developer.apple.com/documentation/corefoundation/cftreecopydescriptioncallback)

# CFTreeCopyDescriptionCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function used to provide a description of the program-defined information pointer.

## Declaration

```swift
typealias CFTreeCopyDescriptionCallBack = (UnsafeRawPointer?) -> Unmanaged<CFString>?
```

## Parameters

- `info`: The program-supplied information pointer provided in a [CFTreeContext](cftreecontext.md) structure.

<a id="return-value"></a>

## Return Value

A textual description of `info`. The caller is responsible for releasing this object.

## See Also

### Callbacks

- [CFTreeApplierFunction](cftreeapplierfunction.md): Type of the callback function used by the CFTree apply function.
- [CFTreeReleaseCallBack](cftreereleasecallback.md): Callback function used to release a previously retained program-defined information pointer.
- [CFTreeRetainCallBack](cftreeretaincallback.md): Callback function used to retain a program-defined information pointer.

# CFTreeCopyDescriptionCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function used to provide a description of the program-defined information pointer.

## Declaration

```objectivec
typedef const struct __CFString *(*)(const void *) CFTreeCopyDescriptionCallBack;
```

## Parameters

- `info`: The program-supplied information pointer provided in a [CFTreeContext](cftreecontext.md) structure.

<a id="return-value"></a>

## Return Value

A textual description of `info`. The caller is responsible for releasing this object.

## See Also

### Callbacks

- [CFTreeApplierFunction](cftreeapplierfunction.md): Type of the callback function used by the CFTree apply function.
- [CFTreeReleaseCallBack](cftreereleasecallback.md): Callback function used to release a previously retained program-defined information pointer.
- [CFTreeRetainCallBack](cftreeretaincallback.md): Callback function used to retain a program-defined information pointer.

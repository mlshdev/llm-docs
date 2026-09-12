> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreereleasecallback](https://developer.apple.com/documentation/corefoundation/cftreereleasecallback)

# CFTreeReleaseCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function used to release a previously retained program-defined information pointer.

## Declaration

```swift
typealias CFTreeReleaseCallBack = (UnsafeRawPointer?) -> Void
```

## Parameters

- `info`: The program-supplied information pointer provided in a [CFTreeContext](cftreecontext.md) structure.

## See Also

### Callbacks

- [CFTreeApplierFunction](cftreeapplierfunction.md): Type of the callback function used by the CFTree apply function.
- [CFTreeCopyDescriptionCallBack](cftreecopydescriptioncallback.md): Callback function used to provide a description of the program-defined information pointer.
- [CFTreeRetainCallBack](cftreeretaincallback.md): Callback function used to retain a program-defined information pointer.

# CFTreeReleaseCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function used to release a previously retained program-defined information pointer.

## Declaration

```objectivec
typedef void (*)(const void *) CFTreeReleaseCallBack;
```

## Parameters

- `info`: The program-supplied information pointer provided in a [CFTreeContext](cftreecontext.md) structure.

## See Also

### Callbacks

- [CFTreeApplierFunction](cftreeapplierfunction.md): Type of the callback function used by the CFTree apply function.
- [CFTreeCopyDescriptionCallBack](cftreecopydescriptioncallback.md): Callback function used to provide a description of the program-defined information pointer.
- [CFTreeRetainCallBack](cftreeretaincallback.md): Callback function used to retain a program-defined information pointer.

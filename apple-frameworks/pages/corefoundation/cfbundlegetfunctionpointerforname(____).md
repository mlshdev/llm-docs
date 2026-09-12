> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlegetfunctionpointerforname(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundlegetfunctionpointerforname(_:_:))

# CFBundleGetFunctionPointerForName(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a pointer to a function in a bundle’s executable code using the function name as the search key.

## Declaration

```swift
func CFBundleGetFunctionPointerForName(_ bundle: CFBundle!, _ functionName: CFString!) -> UnsafeMutableRawPointer!
```

## Parameters

- `bundle`: The bundle to examine.
- `functionName`: The name of the function to locate.

<a id="return-value"></a>

## Return Value

A pointer to a function in a `bundle`’s executable code, or `NULL` if `functionName` cannot be found. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

Calling this function will cause the bundle’s code to be loaded if necessary.

## See Also

### Managing Executable Code

- [CFBundleGetDataPointerForName(\_:\_:)](cfbundlegetdatapointerforname%28____%29.md): Returns a data pointer to a symbol of the given name.
- [CFBundleGetDataPointersForNames(\_:\_:\_:)](cfbundlegetdatapointersfornames%28______%29.md): Returns a C array of data pointer to symbols of the given names.
- [CFBundleGetFunctionPointersForNames(\_:\_:\_:)](cfbundlegetfunctionpointersfornames%28______%29.md): Constructs a function table containing pointers to all of the functions found in a bundle’s main executable code.
- [CFBundleGetPlugIn(\_:)](cfbundlegetplugin%28__%29.md): Returns a bundle’s plug-in.

# CFBundleGetFunctionPointerForName (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a pointer to a function in a bundle’s executable code using the function name as the search key.

## Declaration

```objectivec
extern void *CFBundleGetFunctionPointerForName(CFBundleRef bundle, CFStringRef functionName);
```

## Parameters

- `bundle`: The bundle to examine.
- `functionName`: The name of the function to locate.

<a id="return-value"></a>

## Return Value

A pointer to a function in a `bundle`’s executable code, or `NULL` if `functionName` cannot be found. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

Calling this function will cause the bundle’s code to be loaded if necessary.

## See Also

### Managing Executable Code

- [CFBundleGetDataPointerForName](cfbundlegetdatapointerforname%28____%29.md): Returns a data pointer to a symbol of the given name.
- [CFBundleGetDataPointersForNames](cfbundlegetdatapointersfornames%28______%29.md): Returns a C array of data pointer to symbols of the given names.
- [CFBundleGetFunctionPointersForNames](cfbundlegetfunctionpointersfornames%28______%29.md): Constructs a function table containing pointers to all of the functions found in a bundle’s main executable code.
- [CFBundleGetPlugIn](cfbundlegetplugin%28__%29.md): Returns a bundle’s plug-in.

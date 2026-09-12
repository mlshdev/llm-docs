> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlegetdatapointerforname(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundlegetdatapointerforname(_:_:))

# CFBundleGetDataPointerForName(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a data pointer to a symbol of the given name.

## Declaration

```swift
func CFBundleGetDataPointerForName(_ bundle: CFBundle!, _ symbolName: CFString!) -> UnsafeMutableRawPointer!
```

## Parameters

- `bundle`: The bundle to examine.
- `symbolName`: The name of the symbol you are searching for.

<a id="return-value"></a>

## Return Value

A data pointer to a symbol named `symbolName` in `bundle`, or `NULL` if `symbolName` cannot be found. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Managing Executable Code

- [CFBundleGetDataPointersForNames(\_:\_:\_:)](cfbundlegetdatapointersfornames%28______%29.md): Returns a C array of data pointer to symbols of the given names.
- [CFBundleGetFunctionPointerForName(\_:\_:)](cfbundlegetfunctionpointerforname%28____%29.md): Returns a pointer to a function in a bundle’s executable code using the function name as the search key.
- [CFBundleGetFunctionPointersForNames(\_:\_:\_:)](cfbundlegetfunctionpointersfornames%28______%29.md): Constructs a function table containing pointers to all of the functions found in a bundle’s main executable code.
- [CFBundleGetPlugIn(\_:)](cfbundlegetplugin%28__%29.md): Returns a bundle’s plug-in.

# CFBundleGetDataPointerForName (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a data pointer to a symbol of the given name.

## Declaration

```objectivec
extern void *CFBundleGetDataPointerForName(CFBundleRef bundle, CFStringRef symbolName);
```

## Parameters

- `bundle`: The bundle to examine.
- `symbolName`: The name of the symbol you are searching for.

<a id="return-value"></a>

## Return Value

A data pointer to a symbol named `symbolName` in `bundle`, or `NULL` if `symbolName` cannot be found. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Managing Executable Code

- [CFBundleGetDataPointersForNames](cfbundlegetdatapointersfornames%28______%29.md): Returns a C array of data pointer to symbols of the given names.
- [CFBundleGetFunctionPointerForName](cfbundlegetfunctionpointerforname%28____%29.md): Returns a pointer to a function in a bundle’s executable code using the function name as the search key.
- [CFBundleGetFunctionPointersForNames](cfbundlegetfunctionpointersfornames%28______%29.md): Constructs a function table containing pointers to all of the functions found in a bundle’s main executable code.
- [CFBundleGetPlugIn](cfbundlegetplugin%28__%29.md): Returns a bundle’s plug-in.

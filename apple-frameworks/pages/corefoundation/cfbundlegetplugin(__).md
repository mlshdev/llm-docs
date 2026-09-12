> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlegetplugin(_:)](https://developer.apple.com/documentation/corefoundation/cfbundlegetplugin(_:))

# CFBundleGetPlugIn(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a bundle’s plug-in.

## Declaration

```swift
func CFBundleGetPlugIn(_ bundle: CFBundle!) -> CFPlugIn!
```

## Parameters

- `bundle`: The bundle to examine.

<a id="return-value"></a>

## Return Value

The plug-in for `bundle`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Managing Executable Code

- [CFBundleGetDataPointerForName(\_:\_:)](cfbundlegetdatapointerforname%28____%29.md): Returns a data pointer to a symbol of the given name.
- [CFBundleGetDataPointersForNames(\_:\_:\_:)](cfbundlegetdatapointersfornames%28______%29.md): Returns a C array of data pointer to symbols of the given names.
- [CFBundleGetFunctionPointerForName(\_:\_:)](cfbundlegetfunctionpointerforname%28____%29.md): Returns a pointer to a function in a bundle’s executable code using the function name as the search key.
- [CFBundleGetFunctionPointersForNames(\_:\_:\_:)](cfbundlegetfunctionpointersfornames%28______%29.md): Constructs a function table containing pointers to all of the functions found in a bundle’s main executable code.

# CFBundleGetPlugIn (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a bundle’s plug-in.

## Declaration

```objectivec
extern CFPlugInRefCFBundleGetPlugIn(CFBundleRef bundle);
```

## Parameters

- `bundle`: The bundle to examine.

<a id="return-value"></a>

## Return Value

The plug-in for `bundle`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Managing Executable Code

- [CFBundleGetDataPointerForName](cfbundlegetdatapointerforname%28____%29.md): Returns a data pointer to a symbol of the given name.
- [CFBundleGetDataPointersForNames](cfbundlegetdatapointersfornames%28______%29.md): Returns a C array of data pointer to symbols of the given names.
- [CFBundleGetFunctionPointerForName](cfbundlegetfunctionpointerforname%28____%29.md): Returns a pointer to a function in a bundle’s executable code using the function name as the search key.
- [CFBundleGetFunctionPointersForNames](cfbundlegetfunctionpointersfornames%28______%29.md): Constructs a function table containing pointers to all of the functions found in a bundle’s main executable code.

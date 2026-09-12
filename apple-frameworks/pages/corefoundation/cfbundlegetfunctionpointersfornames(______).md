> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlegetfunctionpointersfornames(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundlegetfunctionpointersfornames(_:_:_:))

# CFBundleGetFunctionPointersForNames(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constructs a function table containing pointers to all of the functions found in a bundle’s main executable code.

## Declaration

```swift
func CFBundleGetFunctionPointersForNames(_ bundle: CFBundle!, _ functionNames: CFArray!, _ ftbl: UnsafeMutablePointer<UnsafeMutableRawPointer?>!)
```

## Parameters

- `bundle`: The bundle to examine.
- `functionNames`: A CFArray object containing a list of the function names to locate.
- `ftbl`: A C array into which this function stores the function pointers for the symbols specified in `functionNames`. The array contains `NULL` for any names in `functionNames` that cannot be found.

<a id="Discussion"></a>

## Discussion

Calling this function causes the bundle’s code to be loaded if necessary.

## See Also

### Managing Executable Code

- [CFBundleGetDataPointerForName(\_:\_:)](cfbundlegetdatapointerforname%28____%29.md): Returns a data pointer to a symbol of the given name.
- [CFBundleGetDataPointersForNames(\_:\_:\_:)](cfbundlegetdatapointersfornames%28______%29.md): Returns a C array of data pointer to symbols of the given names.
- [CFBundleGetFunctionPointerForName(\_:\_:)](cfbundlegetfunctionpointerforname%28____%29.md): Returns a pointer to a function in a bundle’s executable code using the function name as the search key.
- [CFBundleGetPlugIn(\_:)](cfbundlegetplugin%28__%29.md): Returns a bundle’s plug-in.

# CFBundleGetFunctionPointersForNames (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constructs a function table containing pointers to all of the functions found in a bundle’s main executable code.

## Declaration

```objectivec
extern void CFBundleGetFunctionPointersForNames(CFBundleRef bundle, CFArrayRef functionNames, void * ftbl[]);
```

## Parameters

- `bundle`: The bundle to examine.
- `functionNames`: A CFArray object containing a list of the function names to locate.
- `ftbl`: A C array into which this function stores the function pointers for the symbols specified in `functionNames`. The array contains `NULL` for any names in `functionNames` that cannot be found.

<a id="Discussion"></a>

## Discussion

Calling this function causes the bundle’s code to be loaded if necessary.

## See Also

### Managing Executable Code

- [CFBundleGetDataPointerForName](cfbundlegetdatapointerforname%28____%29.md): Returns a data pointer to a symbol of the given name.
- [CFBundleGetDataPointersForNames](cfbundlegetdatapointersfornames%28______%29.md): Returns a C array of data pointer to symbols of the given names.
- [CFBundleGetFunctionPointerForName](cfbundlegetfunctionpointerforname%28____%29.md): Returns a pointer to a function in a bundle’s executable code using the function name as the search key.
- [CFBundleGetPlugIn](cfbundlegetplugin%28__%29.md): Returns a bundle’s plug-in.

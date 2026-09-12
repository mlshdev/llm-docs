> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlegetdatapointersfornames(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundlegetdatapointersfornames(_:_:_:))

# CFBundleGetDataPointersForNames(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a C array of data pointer to symbols of the given names.

## Declaration

```swift
func CFBundleGetDataPointersForNames(_ bundle: CFBundle!, _ symbolNames: CFArray!, _ stbl: UnsafeMutablePointer<UnsafeMutableRawPointer?>!)
```

## Parameters

- `bundle`: The bundle to examine.
- `symbolNames`: A CFArray object containing CFString objects representing the symbol names to search for.
- `stbl`: A C array into which this function stores the data pointers for the symbols specified in `symbolNames`. The array contains `NULL` for any names in `symbolNames` that cannot be found.

## See Also

### Managing Executable Code

- [CFBundleGetDataPointerForName(\_:\_:)](cfbundlegetdatapointerforname%28____%29.md): Returns a data pointer to a symbol of the given name.
- [CFBundleGetFunctionPointerForName(\_:\_:)](cfbundlegetfunctionpointerforname%28____%29.md): Returns a pointer to a function in a bundle’s executable code using the function name as the search key.
- [CFBundleGetFunctionPointersForNames(\_:\_:\_:)](cfbundlegetfunctionpointersfornames%28______%29.md): Constructs a function table containing pointers to all of the functions found in a bundle’s main executable code.
- [CFBundleGetPlugIn(\_:)](cfbundlegetplugin%28__%29.md): Returns a bundle’s plug-in.

# CFBundleGetDataPointersForNames (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a C array of data pointer to symbols of the given names.

## Declaration

```objectivec
extern void CFBundleGetDataPointersForNames(CFBundleRef bundle, CFArrayRef symbolNames, void * stbl[]);
```

## Parameters

- `bundle`: The bundle to examine.
- `symbolNames`: A CFArray object containing CFString objects representing the symbol names to search for.
- `stbl`: A C array into which this function stores the data pointers for the symbols specified in `symbolNames`. The array contains `NULL` for any names in `symbolNames` that cannot be found.

## See Also

### Managing Executable Code

- [CFBundleGetDataPointerForName](cfbundlegetdatapointerforname%28____%29.md): Returns a data pointer to a symbol of the given name.
- [CFBundleGetFunctionPointerForName](cfbundlegetfunctionpointerforname%28____%29.md): Returns a pointer to a function in a bundle’s executable code using the function name as the search key.
- [CFBundleGetFunctionPointersForNames](cfbundlegetfunctionpointersfornames%28______%29.md): Constructs a function table containing pointers to all of the functions found in a bundle’s main executable code.
- [CFBundleGetPlugIn](cfbundlegetplugin%28__%29.md): Returns a bundle’s plug-in.

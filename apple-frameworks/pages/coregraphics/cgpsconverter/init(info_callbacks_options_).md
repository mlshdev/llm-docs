> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpsconverter/init(info:callbacks:options:)](https://developer.apple.com/documentation/coregraphics/cgpsconverter/init(info:callbacks:options:))

# init(info:callbacks:options:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.1+ · macOS 10.3+

Creates a new PostScript converter.

## Declaration

```swift
init?(info: UnsafeMutableRawPointer?, callbacks: UnsafePointer<CGPSConverterCallbacks>, options: CFDictionary?)
```

## Parameters

- `info`: A pointer to the data that will be passed to the callbacks.
- `callbacks`: A pointer to a PostScript converter callbacks structure that specifies the callbacks to be used during a conversion process.
- `options`: This parameter should be `NULL`; it is reserved for future expansion of the API.

<a id="return-value"></a>

## Return Value

A new PostScript converter, or `NULL` if a converter could not be created. You are responsible for releasing this object.

# CGPSConverterCreate (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.3+

Creates a new PostScript converter.

## Declaration

```objectivec
extern CGPSConverterRefCGPSConverterCreate(void *info, const CGPSConverterCallbacks *callbacks, CFDictionaryRef options);
```

## Parameters

- `info`: A pointer to the data that will be passed to the callbacks.
- `callbacks`: A pointer to a PostScript converter callbacks structure that specifies the callbacks to be used during a conversion process.
- `options`: This parameter should be `NULL`; it is reserved for future expansion of the API.

<a id="return-value"></a>

## Return Value

A new PostScript converter, or `NULL` if a converter could not be created. You are responsible for releasing this object.

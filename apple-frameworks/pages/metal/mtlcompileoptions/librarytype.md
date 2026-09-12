> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcompileoptions/librarytype](https://developer.apple.com/documentation/metal/mtlcompileoptions/librarytype)

# libraryType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The kind of library to create.

## Declaration

```swift
var libraryType: MTLLibraryType { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLLibraryType.executable](../mtllibrarytype/executable.md).

## See Also

### Configuring the library output options

- [installName](installname.md): For a dynamic library, the name to use when installing the library.

# libraryType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The kind of library to create.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLLibraryType libraryType;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLLibraryTypeExecutable](../mtllibrarytype/executable.md).

## See Also

### Configuring the library output options

- [installName](installname.md): For a dynamic library, the name to use when installing the library.

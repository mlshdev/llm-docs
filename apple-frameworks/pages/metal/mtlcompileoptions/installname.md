> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcompileoptions/installname](https://developer.apple.com/documentation/metal/mtlcompileoptions/installname)

# installName (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

For a dynamic library, the name to use when installing the library.

## Declaration

```swift
var installName: String? { get set }
```

## See Also

### Configuring the library output options

- [libraryType](librarytype.md): The kind of library to create.

# installName (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

For a dynamic library, the name to use when installing the library.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * installName;
```

## See Also

### Configuring the library output options

- [libraryType](librarytype.md): The kind of library to create.

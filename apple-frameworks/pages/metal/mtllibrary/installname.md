> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibrary/installname](https://developer.apple.com/documentation/metal/mtllibrary/installname)

# installName (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The installation name for a dynamic library.

## Declaration

```swift
var installName: String? { get }
```

<a id="discussion"></a>

## Discussion

Metal ignores this property if the library’s [type](type.md) isn’t  [MTLLibraryType.dynamic](../mtllibrarytype/dynamic.md). Otherwise this property is a non-`nil` value specifying a file system path to the dynamic library.

Metal uses the installation name whenever you create a pipeline state object that directly or indirectly relies on a dynamic library. Metal embeds the installation name into any Metal library that links against the dynamic library.

Specify one of the following:

- An absolute path to a file containing the dynamic library. This option is appropriate when you serialize the dynamic library to the file system on the current device or Mac computer.
- A path relative to `@executable_path`, where the system substitutes the directory containing the library that is creating the new pipeline state object.
- A path relative to `@loader_path`, where the system substitutes the directory containing the Metal library that contains the reference to this dynamic library.

Use a relative path when you include the dynamic library as part of a bundle or app.

## See Also

### Querying basic library attributes

- [type](type.md): The library’s basic type.

# installName (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The installation name for a dynamic library.

## Declaration

```objectivec
@property (readonly, nullable) NSString * installName;
```

<a id="discussion"></a>

## Discussion

Metal ignores this property if the library’s [type](type.md) isn’t  [MTLLibraryTypeDynamic](../mtllibrarytype/dynamic.md). Otherwise this property is a non-`nil` value specifying a file system path to the dynamic library.

Metal uses the installation name whenever you create a pipeline state object that directly or indirectly relies on a dynamic library. Metal embeds the installation name into any Metal library that links against the dynamic library.

Specify one of the following:

- An absolute path to a file containing the dynamic library. This option is appropriate when you serialize the dynamic library to the file system on the current device or Mac computer.
- A path relative to `@executable_path`, where the system substitutes the directory containing the library that is creating the new pipeline state object.
- A path relative to `@loader_path`, where the system substitutes the directory containing the Metal library that contains the reference to this dynamic library.

Use a relative path when you include the dynamic library as part of a bundle or app.

## See Also

### Querying basic library attributes

- [type](type.md): The library’s basic type.

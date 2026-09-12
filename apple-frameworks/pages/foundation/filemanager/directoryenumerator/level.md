> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/directoryenumerator/level](https://developer.apple.com/documentation/foundation/filemanager/directoryenumerator/level)

# level (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of levels deep the current object is in the directory hierarchy being enumerated.

## Declaration

```swift
var level: Int { get }
```

<a id="Discussion"></a>

## Discussion

The number of levels, with the directory passed to [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](../../nsfilemanager/enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md) (`NSFileManager`) considered to be level `0`.

## See Also

### Getting File and Directory Attributes

- [directoryAttributes](directoryattributes.md): A dictionary with the attributes of the directory at which enumeration started.
- [fileAttributes](fileattributes.md): A dictionary with the attributes of the most recently returned file or subdirectory (as referenced by the pathname).

# level (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of levels deep the current object is in the directory hierarchy being enumerated.

## Declaration

```objectivec
@property (readonly) NSUInteger level;
```

<a id="Discussion"></a>

## Discussion

The number of levels, with the directory passed to [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](../../nsfilemanager/enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md) (`NSFileManager`) considered to be level `0`.

## See Also

### Getting File and Directory Attributes

- [directoryAttributes](directoryattributes.md): A dictionary with the attributes of the directory at which enumeration started.
- [fileAttributes](fileattributes.md): A dictionary with the attributes of the most recently returned file or subdirectory (as referenced by the pathname).

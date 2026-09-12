> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/isdirectory](https://developer.apple.com/documentation/foundation/filewrapper/isdirectory)

# isDirectory (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This property contains a boolean value indicating whether the file wrapper is a directory file wrapper.

## Declaration

```swift
var isDirectory: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property will contain YES when the file wrapper is a directory file wrapper, otherwise it contains NO.

> **Note**

>  Invocations of [read(from:options:)](read%28from_options_%29.md) may change the value of this property, if the type of the file on disk has changed.

## See Also

### Querying File Wrappers

- [isRegularFile](isregularfile.md): This property contains a boolean value that indicates whether the file wrapper object is a regular-file.
- [isSymbolicLink](issymboliclink.md): A boolean that indicates whether the file wrapper object is a symbolic-link file wrapper.

# directory (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This property contains a boolean value indicating whether the file wrapper is a directory file wrapper.

## Declaration

```objectivec
@property (readonly, getter=isDirectory) BOOL directory;
```

<a id="Discussion"></a>

## Discussion

This property will contain YES when the file wrapper is a directory file wrapper, otherwise it contains NO.

> **Note**

>  Invocations of [readFromURL:options:error:](read%28from_options_%29.md) may change the value of this property, if the type of the file on disk has changed.

## See Also

### Querying File Wrappers

- [regularFile](isregularfile.md): This property contains a boolean value that indicates whether the file wrapper object is a regular-file.
- [symbolicLink](issymboliclink.md): A boolean that indicates whether the file wrapper object is a symbolic-link file wrapper.

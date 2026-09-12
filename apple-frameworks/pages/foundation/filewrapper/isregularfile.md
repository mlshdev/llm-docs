> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/isregularfile](https://developer.apple.com/documentation/foundation/filewrapper/isregularfile)

# isRegularFile (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This property contains a boolean value that indicates whether the file wrapper object is a regular-file.

## Declaration

```swift
var isRegularFile: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property contains [true](https://developer.apple.com/documentation/swift/true) when the file wrapper object is a regular-file wrapper, otherwise it contains [false](https://developer.apple.com/documentation/swift/false). Invocations of [read(from:options:)](read%28from_options_%29.md) may change the value of this property if the type of the file on disk has changed.

## See Also

### Querying File Wrappers

- [isDirectory](isdirectory.md): This property contains a boolean value indicating whether the file wrapper is a directory file wrapper.
- [isSymbolicLink](issymboliclink.md): A boolean that indicates whether the file wrapper object is a symbolic-link file wrapper.

# regularFile (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This property contains a boolean value that indicates whether the file wrapper object is a regular-file.

## Declaration

```objectivec
@property (readonly, getter=isRegularFile) BOOL regularFile;
```

<a id="Discussion"></a>

## Discussion

This property contains [true](https://developer.apple.com/documentation/swift/true) when the file wrapper object is a regular-file wrapper, otherwise it contains [false](https://developer.apple.com/documentation/swift/false). Invocations of [readFromURL:options:error:](read%28from_options_%29.md) may change the value of this property if the type of the file on disk has changed.

## See Also

### Querying File Wrappers

- [directory](isdirectory.md): This property contains a boolean value indicating whether the file wrapper is a directory file wrapper.
- [symbolicLink](issymboliclink.md): A boolean that indicates whether the file wrapper object is a symbolic-link file wrapper.

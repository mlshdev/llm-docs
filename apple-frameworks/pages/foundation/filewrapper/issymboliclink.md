> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/issymboliclink](https://developer.apple.com/documentation/foundation/filewrapper/issymboliclink)

# isSymbolicLink (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A boolean that indicates whether the file wrapper object is a symbolic-link file wrapper.

## Declaration

```swift
var isSymbolicLink: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property contains [true](https://developer.apple.com/documentation/swift/true) when the file wrapper object is a symbolic-link file wrapper, [false](https://developer.apple.com/documentation/swift/false) otherwise.

Invocations of [read(from:options:)](read%28from_options_%29.md) may change the value contained by this property, if the type of the file on disk has changed.

## See Also

### Querying File Wrappers

- [isRegularFile](isregularfile.md): This property contains a boolean value that indicates whether the file wrapper object is a regular-file.
- [isDirectory](isdirectory.md): This property contains a boolean value indicating whether the file wrapper is a directory file wrapper.

# symbolicLink (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A boolean that indicates whether the file wrapper object is a symbolic-link file wrapper.

## Declaration

```objectivec
@property (readonly, getter=isSymbolicLink) BOOL symbolicLink;
```

<a id="Discussion"></a>

## Discussion

This property contains [true](https://developer.apple.com/documentation/swift/true) when the file wrapper object is a symbolic-link file wrapper, [false](https://developer.apple.com/documentation/swift/false) otherwise.

Invocations of [readFromURL:options:error:](read%28from_options_%29.md) may change the value contained by this property, if the type of the file on disk has changed.

## See Also

### Querying File Wrappers

- [regularFile](isregularfile.md): This property contains a boolean value that indicates whether the file wrapper object is a regular-file.
- [directory](isdirectory.md): This property contains a boolean value indicating whether the file wrapper is a directory file wrapper.

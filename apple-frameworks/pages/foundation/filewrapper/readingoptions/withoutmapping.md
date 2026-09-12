> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/readingoptions/withoutmapping](https://developer.apple.com/documentation/foundation/filewrapper/readingoptions/withoutmapping)

# withoutMapping (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Whether file mapping for regular file wrappers is disallowed.

## Declaration

```swift
static var withoutMapping: FileWrapper.ReadingOptions { get }
```

<a id="Discussion"></a>

## Discussion

You can use this option to keep `NSFileWrapper` from memory-mapping files. This is useful if you want to make sure your application doesn’t hold files open (mapped files are open files), therefore preventing the user from ejecting DVDs, unmounting disk partitions, or unmounting disk images. In macOS 10.6 and later, `NSFileWrapper` memory-maps files that are on internal drives only. It never memory-maps files on external drives or network volumes, regardless of whether this option is used.

## See Also

### Constants

- [immediate](immediate.md): The option to read files immediately after creating a file wrapper.

# NSFileWrapperReadingWithoutMapping (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Whether file mapping for regular file wrappers is disallowed.

## Declaration

```objectivec
NSFileWrapperReadingWithoutMapping
```

<a id="Discussion"></a>

## Discussion

You can use this option to keep `NSFileWrapper` from memory-mapping files. This is useful if you want to make sure your application doesn’t hold files open (mapped files are open files), therefore preventing the user from ejecting DVDs, unmounting disk partitions, or unmounting disk images. In macOS 10.6 and later, `NSFileWrapper` memory-maps files that are on internal drives only. It never memory-maps files on external drives or network volumes, regardless of whether this option is used.

## See Also

### Constants

- [NSFileWrapperReadingImmediate](immediate.md): The option to read files immediately after creating a file wrapper.

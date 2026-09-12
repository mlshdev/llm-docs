> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlenumeratoroptions](https://developer.apple.com/documentation/corefoundation/cfurlenumeratoroptions)

# CFURLEnumeratorOptions (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for controlling enumerator behavior.

## Declaration

```swift
struct CFURLEnumeratorOptions
```

## Topics

### Constants

- [descendRecursively](cfurlenumeratoroptions/descendrecursively.md): The enumerator recurses into each subdirectory enumerated.
- [skipInvisibles](cfurlenumeratoroptions/skipinvisibles.md): The enumerator skips “hidden” or “invisible” objects.
- [generateFileReferenceURLs](cfurlenumeratoroptions/generatefilereferenceurls.md): The enumerator generates file reference URLs instead of file path URLs.
- [skipPackageContents](cfurlenumeratoroptions/skippackagecontents.md): The enumerator skips package directory contents.
- [includeDirectoriesPreOrder](cfurlenumeratoroptions/includedirectoriespreorder.md): If provided along with the [descendRecursively](cfurlenumeratoroptions/descendrecursively.md) option, the recursive enumerator returns a directory’s URL before returning the URLs of the directory’s descendents.
- [includeDirectoriesPostOrder](cfurlenumeratoroptions/includedirectoriespostorder.md): If provided along with the [descendRecursively](cfurlenumeratoroptions/descendrecursively.md) option, the recursive enumerator returns a directory’s URL after returning the URLs of the directory’s descendents.

### Initializers

- [init(rawValue:)](cfurlenumeratoroptions/init%28rawvalue_%29.md)

### Type Properties

- [generateRelativePathURLs](cfurlenumeratoroptions/generaterelativepathurls.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Enumerations

- [CFFileSecurityClearOptions](cffilesecurityclearoptions.md)
- [CFISO8601DateFormatOptions](cfiso8601dateformatoptions.md)
- [CFRunLoopRunResult](cfrunlooprunresult.md)
- [CFURLEnumeratorResult](cfurlenumeratorresult.md): Result codes from the [CFURLEnumeratorGetNextURL(\_:\_:\_:)](cfurlenumeratorgetnexturl%28______%29.md) function.
- [CGRectEdge](cgrectedge.md)

# CFURLEnumeratorOptions (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for controlling enumerator behavior.

## Declaration

```objectivec
enum CFURLEnumeratorOptions : CFOptionFlags;
```

## Topics

### Constants

- [kCFURLEnumeratorDefaultBehavior](cfurlenumeratoroptions/kcfurlenumeratordefaultbehavior.md): The enumerator performs its default behavior.
- [kCFURLEnumeratorDescendRecursively](cfurlenumeratoroptions/descendrecursively.md): The enumerator recurses into each subdirectory enumerated.
- [kCFURLEnumeratorSkipInvisibles](cfurlenumeratoroptions/skipinvisibles.md): The enumerator skips “hidden” or “invisible” objects.
- [kCFURLEnumeratorGenerateFileReferenceURLs](cfurlenumeratoroptions/generatefilereferenceurls.md): The enumerator generates file reference URLs instead of file path URLs.
- [kCFURLEnumeratorSkipPackageContents](cfurlenumeratoroptions/skippackagecontents.md): The enumerator skips package directory contents.
- [kCFURLEnumeratorIncludeDirectoriesPreOrder](cfurlenumeratoroptions/includedirectoriespreorder.md): If provided along with the [kCFURLEnumeratorDescendRecursively](cfurlenumeratoroptions/descendrecursively.md) option, the recursive enumerator returns a directory’s URL before returning the URLs of the directory’s descendents.
- [kCFURLEnumeratorIncludeDirectoriesPostOrder](cfurlenumeratoroptions/includedirectoriespostorder.md): If provided along with the [kCFURLEnumeratorDescendRecursively](cfurlenumeratoroptions/descendrecursively.md) option, the recursive enumerator returns a directory’s URL after returning the URLs of the directory’s descendents.

### Enumeration Cases

- [kCFURLEnumeratorGenerateRelativePathURLs](cfurlenumeratoroptions/generaterelativepathurls.md)

## See Also

### Enumerations

- [CFFileSecurityClearOptions](cffilesecurityclearoptions.md)
- [CFISO8601DateFormatOptions](cfiso8601dateformatoptions.md)
- [CFRunLoopRunResult](cfrunlooprunresult.md)
- [CFURLEnumeratorResult](cfurlenumeratorresult.md): Result codes from the [CFURLEnumeratorGetNextURL](cfurlenumeratorgetnexturl%28______%29.md) function.
- [CGRectEdge](cgrectedge.md)

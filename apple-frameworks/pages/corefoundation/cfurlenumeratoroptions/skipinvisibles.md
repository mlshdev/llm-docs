> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlenumeratoroptions/skipinvisibles](https://developer.apple.com/documentation/corefoundation/cfurlenumeratoroptions/skipinvisibles)

# skipInvisibles (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The enumerator skips “hidden” or “invisible” objects.

## Declaration

```swift
static var skipInvisibles: CFURLEnumeratorOptions { get }
```

## See Also

### Constants

- [descendRecursively](descendrecursively.md): The enumerator recurses into each subdirectory enumerated.
- [generateFileReferenceURLs](generatefilereferenceurls.md): The enumerator generates file reference URLs instead of file path URLs.
- [skipPackageContents](skippackagecontents.md): The enumerator skips package directory contents.
- [includeDirectoriesPreOrder](includedirectoriespreorder.md): If provided along with the [descendRecursively](descendrecursively.md) option, the recursive enumerator returns a directory’s URL before returning the URLs of the directory’s descendents.
- [includeDirectoriesPostOrder](includedirectoriespostorder.md): If provided along with the [descendRecursively](descendrecursively.md) option, the recursive enumerator returns a directory’s URL after returning the URLs of the directory’s descendents.

# kCFURLEnumeratorSkipInvisibles (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The enumerator skips “hidden” or “invisible” objects.

## Declaration

```objectivec
kCFURLEnumeratorSkipInvisibles
```

## See Also

### Constants

- [kCFURLEnumeratorDefaultBehavior](kcfurlenumeratordefaultbehavior.md): The enumerator performs its default behavior.
- [kCFURLEnumeratorDescendRecursively](descendrecursively.md): The enumerator recurses into each subdirectory enumerated.
- [kCFURLEnumeratorGenerateFileReferenceURLs](generatefilereferenceurls.md): The enumerator generates file reference URLs instead of file path URLs.
- [kCFURLEnumeratorSkipPackageContents](skippackagecontents.md): The enumerator skips package directory contents.
- [kCFURLEnumeratorIncludeDirectoriesPreOrder](includedirectoriespreorder.md): If provided along with the [kCFURLEnumeratorDescendRecursively](descendrecursively.md) option, the recursive enumerator returns a directory’s URL before returning the URLs of the directory’s descendents.
- [kCFURLEnumeratorIncludeDirectoriesPostOrder](includedirectoriespostorder.md): If provided along with the [kCFURLEnumeratorDescendRecursively](descendrecursively.md) option, the recursive enumerator returns a directory’s URL after returning the URLs of the directory’s descendents.

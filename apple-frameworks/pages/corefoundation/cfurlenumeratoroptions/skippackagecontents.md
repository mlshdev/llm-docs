> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlenumeratoroptions/skippackagecontents](https://developer.apple.com/documentation/corefoundation/cfurlenumeratoroptions/skippackagecontents)

# skipPackageContents (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The enumerator skips package directory contents.

## Declaration

```swift
static var skipPackageContents: CFURLEnumeratorOptions { get }
```

<a id="Discussion"></a>

## Discussion

This option applies only to directory enumerators.

## See Also

### Constants

- [descendRecursively](descendrecursively.md): The enumerator recurses into each subdirectory enumerated.
- [skipInvisibles](skipinvisibles.md): The enumerator skips “hidden” or “invisible” objects.
- [generateFileReferenceURLs](generatefilereferenceurls.md): The enumerator generates file reference URLs instead of file path URLs.
- [includeDirectoriesPreOrder](includedirectoriespreorder.md): If provided along with the [descendRecursively](descendrecursively.md) option, the recursive enumerator returns a directory’s URL before returning the URLs of the directory’s descendents.
- [includeDirectoriesPostOrder](includedirectoriespostorder.md): If provided along with the [descendRecursively](descendrecursively.md) option, the recursive enumerator returns a directory’s URL after returning the URLs of the directory’s descendents.

# kCFURLEnumeratorSkipPackageContents (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The enumerator skips package directory contents.

## Declaration

```objectivec
kCFURLEnumeratorSkipPackageContents
```

<a id="Discussion"></a>

## Discussion

This option applies only to directory enumerators.

## See Also

### Constants

- [kCFURLEnumeratorDefaultBehavior](kcfurlenumeratordefaultbehavior.md): The enumerator performs its default behavior.
- [kCFURLEnumeratorDescendRecursively](descendrecursively.md): The enumerator recurses into each subdirectory enumerated.
- [kCFURLEnumeratorSkipInvisibles](skipinvisibles.md): The enumerator skips “hidden” or “invisible” objects.
- [kCFURLEnumeratorGenerateFileReferenceURLs](generatefilereferenceurls.md): The enumerator generates file reference URLs instead of file path URLs.
- [kCFURLEnumeratorIncludeDirectoriesPreOrder](includedirectoriespreorder.md): If provided along with the [kCFURLEnumeratorDescendRecursively](descendrecursively.md) option, the recursive enumerator returns a directory’s URL before returning the URLs of the directory’s descendents.
- [kCFURLEnumeratorIncludeDirectoriesPostOrder](includedirectoriespostorder.md): If provided along with the [kCFURLEnumeratorDescendRecursively](descendrecursively.md) option, the recursive enumerator returns a directory’s URL after returning the URLs of the directory’s descendents.

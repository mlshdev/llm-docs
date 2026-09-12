> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlenumeratoroptions/descendrecursively](https://developer.apple.com/documentation/corefoundation/cfurlenumeratoroptions/descendrecursively)

# descendRecursively (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The enumerator recurses into each subdirectory enumerated.

## Declaration

```swift
static var descendRecursively: CFURLEnumeratorOptions { get }
```

<a id="Discussion"></a>

## Discussion

This option applies only to directory enumerators.

You can enumerate the directories that a recursive enumerator encounters in pre-order fashion, post-order fashion, or both, by providing a combination of the [includeDirectoriesPreOrder](includedirectoriespreorder.md) and [includeDirectoriesPostOrder](includedirectoriespostorder.md) options. If you provide neither option, the recursive enumerator behaves as if it was provided the [includeDirectoriesPreOrder](includedirectoriespreorder.md) option.

## See Also

### Constants

- [skipInvisibles](skipinvisibles.md): The enumerator skips “hidden” or “invisible” objects.
- [generateFileReferenceURLs](generatefilereferenceurls.md): The enumerator generates file reference URLs instead of file path URLs.
- [skipPackageContents](skippackagecontents.md): The enumerator skips package directory contents.
- [includeDirectoriesPreOrder](includedirectoriespreorder.md): If provided along with the [descendRecursively](descendrecursively.md) option, the recursive enumerator returns a directory’s URL before returning the URLs of the directory’s descendents.
- [includeDirectoriesPostOrder](includedirectoriespostorder.md): If provided along with the [descendRecursively](descendrecursively.md) option, the recursive enumerator returns a directory’s URL after returning the URLs of the directory’s descendents.

# kCFURLEnumeratorDescendRecursively (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The enumerator recurses into each subdirectory enumerated.

## Declaration

```objectivec
kCFURLEnumeratorDescendRecursively
```

<a id="Discussion"></a>

## Discussion

This option applies only to directory enumerators.

You can enumerate the directories that a recursive enumerator encounters in pre-order fashion, post-order fashion, or both, by providing a combination of the [kCFURLEnumeratorIncludeDirectoriesPreOrder](includedirectoriespreorder.md) and [kCFURLEnumeratorIncludeDirectoriesPostOrder](includedirectoriespostorder.md) options. If you provide neither option, the recursive enumerator behaves as if it was provided the [kCFURLEnumeratorIncludeDirectoriesPreOrder](includedirectoriespreorder.md) option.

## See Also

### Constants

- [kCFURLEnumeratorDefaultBehavior](kcfurlenumeratordefaultbehavior.md): The enumerator performs its default behavior.
- [kCFURLEnumeratorSkipInvisibles](skipinvisibles.md): The enumerator skips “hidden” or “invisible” objects.
- [kCFURLEnumeratorGenerateFileReferenceURLs](generatefilereferenceurls.md): The enumerator generates file reference URLs instead of file path URLs.
- [kCFURLEnumeratorSkipPackageContents](skippackagecontents.md): The enumerator skips package directory contents.
- [kCFURLEnumeratorIncludeDirectoriesPreOrder](includedirectoriespreorder.md): If provided along with the [kCFURLEnumeratorDescendRecursively](descendrecursively.md) option, the recursive enumerator returns a directory’s URL before returning the URLs of the directory’s descendents.
- [kCFURLEnumeratorIncludeDirectoriesPostOrder](includedirectoriespostorder.md): If provided along with the [kCFURLEnumeratorDescendRecursively](descendrecursively.md) option, the recursive enumerator returns a directory’s URL after returning the URLs of the directory’s descendents.

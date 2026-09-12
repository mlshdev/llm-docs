> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypegzip](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypegzip)

# UTTypeGZIP

**Interface language:** Objective-C

**Framework:** Uniform Type Identifiers  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents a GNU zip archive.

## Declaration

```objectivec
extern UTType * const UTTypeGZIP;
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `org.gnu.gnu-zip-archive`.

This type conforms to [UTTypeData](uttypedata.md) and [UTTypeArchive](uttypearchive.md).

## See Also

### Compressed archives

- [UTTypeArchive](uttypearchive.md): A base type that represents an archive of files and directories.
- [UTTypeZIP](uttypezip.md): A type that represents a zip archive.
- [UTTypeBZ2](uttypebz2.md): A type that represents a bzip2 archive.
- [UTTypeAppleArchive](uttypeapplearchive.md): A type that represents an Apple archive of files and directories.

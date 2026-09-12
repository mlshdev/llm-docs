> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypealiasfile](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypealiasfile)

# UTTypeAliasFile

**Interface language:** Objective-C

**Framework:** Uniform Type Identifiers  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents an alias file.

## Declaration

```objectivec
extern UTType * const UTTypeAliasFile;
```

<a id="Discussion"></a>

## Discussion

This type conforms to both [UTTypeData](uttypedata.md) and [UTTypeResolvable](uttyperesolvable.md), and its identifier is `com.apple.alias-file`.

## See Also

### Apple file system objects

- [UTTypeDirectory](uttypedirectory.md): A type that represents a file system directory, including packages and folders.
- [UTTypeSymbolicLink](uttypesymboliclink.md): A type that represents a symbolic link.
- [UTTypeMountPoint](uttypemountpoint.md): A type that represents a volume mount point.
- [UTTypeFolder](uttypefolder.md): A type that represents a user-browsable directory.
- [UTTypeVolume](uttypevolume.md): A type that represents the root folder of a volume or mount point.
- [UTTypeDiskImage](uttypediskimage.md): A type that represents a data item that’s mountable as a volume.

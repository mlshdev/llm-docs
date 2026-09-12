> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypefolder](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypefolder)

# UTTypeFolder

**Interface language:** Objective-C

**Framework:** Uniform Type Identifiers  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents a user-browsable directory.

## Declaration

```objectivec
extern UTType * const UTTypeFolder;
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `public.folder`.

This type conforms to [UTTypeDirectory](uttypedirectory.md).

## See Also

### Apple file system objects

- [UTTypeDirectory](uttypedirectory.md): A type that represents a file system directory, including packages and folders.
- [UTTypeSymbolicLink](uttypesymboliclink.md): A type that represents a symbolic link.
- [UTTypeMountPoint](uttypemountpoint.md): A type that represents a volume mount point.
- [UTTypeAliasFile](uttypealiasfile.md): A type that represents an alias file.
- [UTTypeVolume](uttypevolume.md): A type that represents the root folder of a volume or mount point.
- [UTTypeDiskImage](uttypediskimage.md): A type that represents a data item that’s mountable as a volume.

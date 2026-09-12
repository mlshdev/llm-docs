> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/symboliclinkdestination()](https://developer.apple.com/documentation/foundation/filewrapper/symboliclinkdestination())

# symbolicLinkDestination() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Provides the pathname referenced by the file wrapper object, which must be a symbolic-link file wrapper.

> Use [symbolicLinkDestinationURL](symboliclinkdestinationurl.md) instead.

## Declaration

```swift
func symbolicLinkDestination() -> String
```

<a id="return-value"></a>

## Return Value

Pathname the file wrapper references (the destination of the symbolic link the file wrapper represents).

<a id="Discussion"></a>

## Discussion

Beginning with OS X v10.6, the preferred method of referring to files is with a `file://` URL. Therefore, this method has been deprecated in favor of [symbolicLinkDestinationURL](symboliclinkdestinationurl.md).

This method raises `NSInternalInconsistencyException` if the receiver is not a symbolic-link file wrapper.

## See Also

### Accessing File-Wrapper Information

- [fileWrappers](filewrappers.md): The file wrappers contained by a directory file wrapper.
- [addFileWrapper(\_:)](addfilewrapper%28__%29.md): Adds a child file wrapper to the receiver, which must be a directory file wrapper.
- [removeFileWrapper(\_:)](removefilewrapper%28__%29.md): Removes a child file wrapper from the receiver, which must be a directory file wrapper.
- [addFile(withPath:)](addfile%28withpath_%29.md): Deprecated. Creates a file wrapper from a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [addRegularFile(withContents:preferredFilename:)](addregularfile%28withcontents_preferredfilename_%29.md): Creates a regular-file file wrapper with the given contents and adds it to the receiver, which must be a directory file wrapper.
- [addSymbolicLink(withDestination:preferredFilename:)](addsymboliclink%28withdestination_preferredfilename_%29.md): Deprecated. Creates a symbolic-link file wrapper pointing to a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [keyForChildFileWrapper(\_:)](keyforchildfilewrapper%28__%29.md): Returns the dictionary key used by a directory to identify a given file wrapper.
- [symbolicLinkDestinationURL](symboliclinkdestinationurl.md): The URL referenced by the file wrapper object, which must be a symbolic-link file wrapper.

# symbolicLinkDestination (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Provides the pathname referenced by the file wrapper object, which must be a symbolic-link file wrapper.

> Use [symbolicLinkDestinationURL](symboliclinkdestinationurl.md) instead.

## Declaration

```objectivec
- (NSString *) symbolicLinkDestination;
```

<a id="return-value"></a>

## Return Value

Pathname the file wrapper references (the destination of the symbolic link the file wrapper represents).

<a id="Discussion"></a>

## Discussion

Beginning with OS X v10.6, the preferred method of referring to files is with a `file://` URL. Therefore, this method has been deprecated in favor of [symbolicLinkDestinationURL](symboliclinkdestinationurl.md).

This method raises `NSInternalInconsistencyException` if the receiver is not a symbolic-link file wrapper.

## See Also

### Accessing File-Wrapper Information

- [fileWrappers](filewrappers.md): The file wrappers contained by a directory file wrapper.
- [addFileWrapper:](addfilewrapper%28__%29.md): Adds a child file wrapper to the receiver, which must be a directory file wrapper.
- [removeFileWrapper:](removefilewrapper%28__%29.md): Removes a child file wrapper from the receiver, which must be a directory file wrapper.
- [addFileWithPath:](addfile%28withpath_%29.md): Deprecated. Creates a file wrapper from a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [addRegularFileWithContents:preferredFilename:](addregularfile%28withcontents_preferredfilename_%29.md): Creates a regular-file file wrapper with the given contents and adds it to the receiver, which must be a directory file wrapper.
- [addSymbolicLinkWithDestination:preferredFilename:](addsymboliclink%28withdestination_preferredfilename_%29.md): Deprecated. Creates a symbolic-link file wrapper pointing to a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [keyForFileWrapper:](keyforchildfilewrapper%28__%29.md): Returns the dictionary key used by a directory to identify a given file wrapper.
- [symbolicLinkDestinationURL](symboliclinkdestinationurl.md): The URL referenced by the file wrapper object, which must be a symbolic-link file wrapper.

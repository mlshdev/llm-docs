> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundle/loadnibfile:externalnametable:withzone:-c.type.method](https://developer.apple.com/documentation/foundation/nsbundle/loadnibfile:externalnametable:withzone:-c.type.method)

# loadNibFile:externalNameTable:withZone:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Unarchives the contents of the nib file and links them to objects in your program.

> Use the [loadNibNamed:owner:topLevelObjects:](../bundle/loadnibnamed%28__owner_toplevelobjects_%29.md) method instead.

## Declaration

```objectivec
+ (BOOL) loadNibFile:(NSString *) fileName externalNameTable:(NSDictionary *) context withZone:(NSZone *) zone;
```

## Parameters

- `fileName`: The location of the nib file specified as an absolute path in the file system.
- `context`: A name table whose keys identify objects associated with your program or the nib file. The newly unarchived objects from the nib file use this table to connect to objects in your program. For example,  the nib file uses the object associated with the `NSNibOwner` constant as the nib file’s owning object. If you associate an empty `NSMutableArray` object with the `NSNibTopLevelObjects` constant, on output, the array contains the top level objects from the nib file. For descriptions of these constants, see [NSNib](https://developer.apple.com/documentation/appkit/nsnib).
- `zone`: The memory zone in which to allocate the nib file objects.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the nib file was loaded successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Loading nib files

- [loadNibNamed:owner:options:](../bundle/loadnibnamed%28__owner_options_%29.md): Deprecated. Unarchives the contents of a nib file located in the receiver’s bundle.
- [loadNibNamed:owner:topLevelObjects:](../bundle/loadnibnamed%28__owner_toplevelobjects_%29.md): Loads a nib from the bundle with the specified file name and owner.
- [loadNibNamed:owner:](loadnibnamed_owner_.md): Deprecated. Unarchives the contents of the nib file and links them to a specific owner object.
- [loadNibFile:externalNameTable:withZone:](loadnibfile_externalnametable_withzone_-c.method.md): Deprecated. Unarchives the contents of a nib file located in the receiver’s bundle.

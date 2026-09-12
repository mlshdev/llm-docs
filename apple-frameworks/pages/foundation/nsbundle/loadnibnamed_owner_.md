> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundle/loadnibnamed:owner:](https://developer.apple.com/documentation/foundation/nsbundle/loadnibnamed:owner:)

# loadNibNamed:owner:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Unarchives the contents of the nib file and links them to a specific owner object.

> Use the [loadNibNamed:owner:topLevelObjects:](../bundle/loadnibnamed%28__owner_toplevelobjects_%29.md) method instead.

## Declaration

```objectivec
+ (BOOL) loadNibNamed:(NSString *) nibName owner:(id) owner;
```

## Parameters

- `nibName`: The name of the nib file, which need not include the `.nib` extension. The file name should not include path information. The object in the `owner` parameter determines the location in which to look for the nib file.
- `owner`: The object to assign as the nib File’s Owner. If the class of this object has an associated bundle, that bundle is searched for the specified nib file; otherwise, this method looks in the main bundle.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the nib file was loaded successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Loading nib files

- [loadNibNamed:owner:options:](../bundle/loadnibnamed%28__owner_options_%29.md): Deprecated. Unarchives the contents of a nib file located in the receiver’s bundle.
- [loadNibNamed:owner:topLevelObjects:](../bundle/loadnibnamed%28__owner_toplevelobjects_%29.md): Loads a nib from the bundle with the specified file name and owner.
- [loadNibFile:externalNameTable:withZone:](loadnibfile_externalnametable_withzone_-c.type.method.md): Deprecated. Unarchives the contents of the nib file and links them to objects in your program.
- [loadNibFile:externalNameTable:withZone:](loadnibfile_externalnametable_withzone_-c.method.md): Deprecated. Unarchives the contents of a nib file located in the receiver’s bundle.

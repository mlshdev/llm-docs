> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/autosavedcontentsfileurl](https://developer.apple.com/documentation/appkit/nsdocument/autosavedcontentsfileurl)

# autosavedContentsFileURL (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The location of the most recently autosaved document contents.

## Declaration

```swift
nonisolated var autosavedContentsFileURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the location where you want the document to store autosave files. The URL you specify should specify an absolute path, not a relative path.

## See Also

### Configuring the Autosave Behavior

- [autosavesInPlace](autosavesinplace.md): A Boolean value that indicates whether the document subclass supports autosaving in place.
- [autosavesDrafts](autosavesdrafts.md): A Boolean value that indicates whether the document subclass supports autosaving of drafts.
- [preservesVersions](preservesversions.md): A Boolean value that indicates whether the document subclass supports version management.
- [autosavingFileType](autosavingfiletype.md): The document type to use for an autosave operation.
- [autosavingIsImplicitlyCancellable](autosavingisimplicitlycancellable.md): A Boolean value that indicates whether you can cancel an in-progress autosave operation.

# autosavedContentsFileURL (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The location of the most recently autosaved document contents.

## Declaration

```objectivec
@property (copy, nullable) NSURL * autosavedContentsFileURL;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the location where you want the document to store autosave files. The URL you specify should specify an absolute path, not a relative path.

## See Also

### Configuring the Autosave Behavior

- [autosavesInPlace](autosavesinplace.md): A Boolean value that indicates whether the document subclass supports autosaving in place.
- [autosavesDrafts](autosavesdrafts.md): A Boolean value that indicates whether the document subclass supports autosaving of drafts.
- [preservesVersions](preservesversions.md): A Boolean value that indicates whether the document subclass supports version management.
- [autosavingFileType](autosavingfiletype.md): The document type to use for an autosave operation.
- [autosavingIsImplicitlyCancellable](autosavingisimplicitlycancellable.md): A Boolean value that indicates whether you can cancel an in-progress autosave operation.

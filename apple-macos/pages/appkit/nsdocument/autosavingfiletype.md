> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/autosavingfiletype](https://developer.apple.com/documentation/appkit/nsdocument/autosavingfiletype)

# autosavingFileType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The document type to use for an autosave operation.

## Declaration

```swift
nonisolated var autosavingFileType: String? { get }
```

<a id="Discussion"></a>

## Discussion

This properties contains a string that identifies the document type for autosave files. The default implementation just returns the value provided by the [fileType](filetype.md) property. You can override this property and return `nil` to completely disable autosaving of individual documents (because the [NSDocumentController](../nsdocumentcontroller.md) object does not call the  [autosave(withDelegate:didAutosave:contextInfo:)](autosave%28withdelegate_didautosave_contextinfo_%29.md) method of a document that has no autosaving file type). You can also override it if your app defines a document type that is specifically designed for autosaving, for example, one that efficiently represents document content changes instead of complete document contents.

Overriding this property can result in incorrect behavior during reopening of autosaved documents. The `NSDocument` method [init(for:withContentsOf:ofType:)](init%28for_withcontentsof_oftype_%29.md), which is invoked during reopening of autosaved documents after a crash, takes two URLs, but only the type name of the autosaved contents file. The default implementation updates the [fileType](filetype.md) property with that type name, but that may not be the right thing to do if this property contains something other than [fileType](filetype.md) during document autosaving. If you override `autosavingFileType`, you probably need to override [init(for:withContentsOf:ofType:)](init%28for_withcontentsof_oftype_%29.md) too, and make the override update [fileType](filetype.md) with the type of the actual document file, after invoking `super`. See TextEdit’s `Document` class for an example of how to do this.

## See Also

### Configuring the Autosave Behavior

- [autosavesInPlace](autosavesinplace.md): A Boolean value that indicates whether the document subclass supports autosaving in place.
- [autosavesDrafts](autosavesdrafts.md): A Boolean value that indicates whether the document subclass supports autosaving of drafts.
- [preservesVersions](preservesversions.md): A Boolean value that indicates whether the document subclass supports version management.
- [autosavedContentsFileURL](autosavedcontentsfileurl.md): The location of the most recently autosaved document contents.
- [autosavingIsImplicitlyCancellable](autosavingisimplicitlycancellable.md): A Boolean value that indicates whether you can cancel an in-progress autosave operation.

# autosavingFileType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The document type to use for an autosave operation.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * autosavingFileType;
```

<a id="Discussion"></a>

## Discussion

This properties contains a string that identifies the document type for autosave files. The default implementation just returns the value provided by the [fileType](filetype.md) property. You can override this property and return `nil` to completely disable autosaving of individual documents (because the [NSDocumentController](../nsdocumentcontroller.md) object does not call the  [autosaveDocumentWithDelegate:didAutosaveSelector:contextInfo:](autosave%28withdelegate_didautosave_contextinfo_%29.md) method of a document that has no autosaving file type). You can also override it if your app defines a document type that is specifically designed for autosaving, for example, one that efficiently represents document content changes instead of complete document contents.

Overriding this property can result in incorrect behavior during reopening of autosaved documents. The `NSDocument` method [initForURL:withContentsOfURL:ofType:error:](init%28for_withcontentsof_oftype_%29.md), which is invoked during reopening of autosaved documents after a crash, takes two URLs, but only the type name of the autosaved contents file. The default implementation updates the [fileType](filetype.md) property with that type name, but that may not be the right thing to do if this property contains something other than [fileType](filetype.md) during document autosaving. If you override `autosavingFileType`, you probably need to override [initForURL:withContentsOfURL:ofType:error:](init%28for_withcontentsof_oftype_%29.md) too, and make the override update [fileType](filetype.md) with the type of the actual document file, after invoking `super`. See TextEdit’s `Document` class for an example of how to do this.

## See Also

### Configuring the Autosave Behavior

- [autosavesInPlace](autosavesinplace.md): A Boolean value that indicates whether the document subclass supports autosaving in place.
- [autosavesDrafts](autosavesdrafts.md): A Boolean value that indicates whether the document subclass supports autosaving of drafts.
- [preservesVersions](preservesversions.md): A Boolean value that indicates whether the document subclass supports version management.
- [autosavedContentsFileURL](autosavedcontentsfileurl.md): The location of the most recently autosaved document contents.
- [autosavingIsImplicitlyCancellable](autosavingisimplicitlycancellable.md): A Boolean value that indicates whether you can cancel an in-progress autosave operation.

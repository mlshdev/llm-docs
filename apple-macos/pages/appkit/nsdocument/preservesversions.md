> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/preservesversions](https://developer.apple.com/documentation/appkit/nsdocument/preservesversions)

# preservesVersions (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the document subclass supports version management.

## Declaration

```swift
class var preservesVersions: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiving subclass of [NSDocument](../nsdocument.md) supports Versions; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns `[self autosavesInPlace]`. You can override it and return [false](https://developer.apple.com/documentation/swift/false) to declare that `NSDocument` should not preserve old document versions.

Returning [false](https://developer.apple.com/documentation/swift/false) from this method disables version browsing and [revertToSaved(\_:)](reverttosaved%28__%29.md), which rely on version preservation when autosaving in place. Returning [true](https://developer.apple.com/documentation/swift/true) from this method when [autosavesInPlace](autosavesinplace.md) returns [false](https://developer.apple.com/documentation/swift/false) will result in undefined behavior.

## See Also

### Configuring the Autosave Behavior

- [autosavesInPlace](autosavesinplace.md): A Boolean value that indicates whether the document subclass supports autosaving in place.
- [autosavesDrafts](autosavesdrafts.md): A Boolean value that indicates whether the document subclass supports autosaving of drafts.
- [autosavedContentsFileURL](autosavedcontentsfileurl.md): The location of the most recently autosaved document contents.
- [autosavingFileType](autosavingfiletype.md): The document type to use for an autosave operation.
- [autosavingIsImplicitlyCancellable](autosavingisimplicitlycancellable.md): A Boolean value that indicates whether you can cancel an in-progress autosave operation.

# preservesVersions (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the document subclass supports version management.

## Declaration

```objectivec
@property (class, readonly) BOOL preservesVersions;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiving subclass of [NSDocument](../nsdocument.md) supports Versions; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns `[self autosavesInPlace]`. You can override it and return [false](https://developer.apple.com/documentation/swift/false) to declare that `NSDocument` should not preserve old document versions.

Returning [false](https://developer.apple.com/documentation/swift/false) from this method disables version browsing and [revertDocumentToSaved:](reverttosaved%28__%29.md), which rely on version preservation when autosaving in place. Returning [true](https://developer.apple.com/documentation/swift/true) from this method when [autosavesInPlace](autosavesinplace.md) returns [false](https://developer.apple.com/documentation/swift/false) will result in undefined behavior.

## See Also

### Configuring the Autosave Behavior

- [autosavesInPlace](autosavesinplace.md): A Boolean value that indicates whether the document subclass supports autosaving in place.
- [autosavesDrafts](autosavesdrafts.md): A Boolean value that indicates whether the document subclass supports autosaving of drafts.
- [autosavedContentsFileURL](autosavedcontentsfileurl.md): The location of the most recently autosaved document contents.
- [autosavingFileType](autosavingfiletype.md): The document type to use for an autosave operation.
- [autosavingIsImplicitlyCancellable](autosavingisimplicitlycancellable.md): A Boolean value that indicates whether you can cancel an in-progress autosave operation.

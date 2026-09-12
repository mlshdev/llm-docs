> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/autosavingisimplicitlycancellable](https://developer.apple.com/documentation/appkit/nsdocument/autosavingisimplicitlycancellable)

# autosavingIsImplicitlyCancellable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether you can cancel an in-progress autosave operation.

## Declaration

```swift
var autosavingIsImplicitlyCancellable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if autosaving is in progress but nothing bad would happen if it were cancelled. For example, when periodic autosaving is being done only for crash protection, which doesn’t need to be done all of the time, this property is set to [true](https://developer.apple.com/documentation/swift/true). When autosaving is being done because the document is being closed, the property is set to [false](https://developer.apple.com/documentation/swift/false).

When the value is [true](https://developer.apple.com/documentation/swift/true), your document-writing code can invoke [unblockUserInteraction()](unblockuserinteraction%28%29.md) after recording the fact that changes to the document model made by the user should first cancel the rest of the writing. Your code that makes changes to the document model then must always do that cancellation first. If your writing code is implicitly cancelled in this way, it should set the [NSError](https://developer.apple.com/documentation/foundation/nserror) object passed by reference to the writing method to [NSUserCancelledError](https://developer.apple.com/documentation/foundation/nsusercancellederror-swift.var) in [NSCocoaErrorDomain](https://developer.apple.com/documentation/foundation/nscocoaerrordomain).

## See Also

### Configuring the Autosave Behavior

- [autosavesInPlace](autosavesinplace.md): A Boolean value that indicates whether the document subclass supports autosaving in place.
- [autosavesDrafts](autosavesdrafts.md): A Boolean value that indicates whether the document subclass supports autosaving of drafts.
- [preservesVersions](preservesversions.md): A Boolean value that indicates whether the document subclass supports version management.
- [autosavedContentsFileURL](autosavedcontentsfileurl.md): The location of the most recently autosaved document contents.
- [autosavingFileType](autosavingfiletype.md): The document type to use for an autosave operation.

# autosavingIsImplicitlyCancellable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether you can cancel an in-progress autosave operation.

## Declaration

```objectivec
@property (readonly) BOOL autosavingIsImplicitlyCancellable;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if autosaving is in progress but nothing bad would happen if it were cancelled. For example, when periodic autosaving is being done only for crash protection, which doesn’t need to be done all of the time, this property is set to [true](https://developer.apple.com/documentation/swift/true). When autosaving is being done because the document is being closed, the property is set to [false](https://developer.apple.com/documentation/swift/false).

When the value is [true](https://developer.apple.com/documentation/swift/true), your document-writing code can invoke [unblockUserInteraction](unblockuserinteraction%28%29.md) after recording the fact that changes to the document model made by the user should first cancel the rest of the writing. Your code that makes changes to the document model then must always do that cancellation first. If your writing code is implicitly cancelled in this way, it should set the [NSError](https://developer.apple.com/documentation/foundation/nserror) object passed by reference to the writing method to [NSUserCancelledError](https://developer.apple.com/documentation/foundation/nsusercancellederror-swift.var) in [NSCocoaErrorDomain](https://developer.apple.com/documentation/foundation/nscocoaerrordomain).

## See Also

### Configuring the Autosave Behavior

- [autosavesInPlace](autosavesinplace.md): A Boolean value that indicates whether the document subclass supports autosaving in place.
- [autosavesDrafts](autosavesdrafts.md): A Boolean value that indicates whether the document subclass supports autosaving of drafts.
- [preservesVersions](preservesversions.md): A Boolean value that indicates whether the document subclass supports version management.
- [autosavedContentsFileURL](autosavedcontentsfileurl.md): The location of the most recently autosaved document contents.
- [autosavingFileType](autosavingfiletype.md): The document type to use for an autosave operation.

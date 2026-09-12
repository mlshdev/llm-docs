> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/autosavesinplace](https://developer.apple.com/documentation/appkit/nsdocument/autosavesinplace)

# autosavesInPlace (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the document subclass supports autosaving in place.

## Declaration

```swift
nonisolated class var autosavesInPlace: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver supports autosaving in place; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false). You can override it and return [true](https://developer.apple.com/documentation/swift/true) to declare that your subclass of `NSDocument` can do autosaving in place. You should not invoke this method to find out whether autosaving in place is actually being done at any particular moment. You should instead use the [NSDocument.SaveOperationType](saveoperationtype.md) parameter that the system passes to your overrides of save and write methods.

AppKit invokes this method at a variety of times, and not always on the main thread. For example, [autosave(withImplicitCancellability:completionHandler:)](autosave%28withimplicitcancellability_completionhandler_%29.md) invokes this method as part of determining whether the autosaving will be performed in place ([NSDocument.SaveOperationType.autosaveInPlaceOperation](saveoperationtype/autosaveinplaceoperation.md)) or in a separate autosave directory ([NSDocument.SaveOperationType.autosaveElsewhereOperation](saveoperationtype/autosaveelsewhereoperation.md)). As another example, the [canClose(withDelegate:shouldClose:contextInfo:)](canclose%28withdelegate_shouldclose_contextinfo_%29.md) method and the [NSDocumentController](../nsdocumentcontroller.md) machinery for handling unsaved changes at app termination time both invoke this method as part of determining whether alerts about unsaved changes should be presented to the user.

## See Also

### Configuring the Autosave Behavior

- [autosavesDrafts](autosavesdrafts.md): A Boolean value that indicates whether the document subclass supports autosaving of drafts.
- [preservesVersions](preservesversions.md): A Boolean value that indicates whether the document subclass supports version management.
- [autosavedContentsFileURL](autosavedcontentsfileurl.md): The location of the most recently autosaved document contents.
- [autosavingFileType](autosavingfiletype.md): The document type to use for an autosave operation.
- [autosavingIsImplicitlyCancellable](autosavingisimplicitlycancellable.md): A Boolean value that indicates whether you can cancel an in-progress autosave operation.

# autosavesInPlace (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the document subclass supports autosaving in place.

## Declaration

```objectivec
@property (class, readonly) BOOL autosavesInPlace;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver supports autosaving in place; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false). You can override it and return [true](https://developer.apple.com/documentation/swift/true) to declare that your subclass of `NSDocument` can do autosaving in place. You should not invoke this method to find out whether autosaving in place is actually being done at any particular moment. You should instead use the [NSSaveOperationType](saveoperationtype.md) parameter that the system passes to your overrides of save and write methods.

AppKit invokes this method at a variety of times, and not always on the main thread. For example, [autosaveWithImplicitCancellability:completionHandler:](autosave%28withimplicitcancellability_completionhandler_%29.md) invokes this method as part of determining whether the autosaving will be performed in place ([NSAutosaveInPlaceOperation](saveoperationtype/autosaveinplaceoperation.md)) or in a separate autosave directory ([NSAutosaveElsewhereOperation](saveoperationtype/autosaveelsewhereoperation.md)). As another example, the [canCloseDocumentWithDelegate:shouldCloseSelector:contextInfo:](canclose%28withdelegate_shouldclose_contextinfo_%29.md) method and the [NSDocumentController](../nsdocumentcontroller.md) machinery for handling unsaved changes at app termination time both invoke this method as part of determining whether alerts about unsaved changes should be presented to the user.

## See Also

### Configuring the Autosave Behavior

- [autosavesDrafts](autosavesdrafts.md): A Boolean value that indicates whether the document subclass supports autosaving of drafts.
- [preservesVersions](preservesversions.md): A Boolean value that indicates whether the document subclass supports version management.
- [autosavedContentsFileURL](autosavedcontentsfileurl.md): The location of the most recently autosaved document contents.
- [autosavingFileType](autosavingfiletype.md): The document type to use for an autosave operation.
- [autosavingIsImplicitlyCancellable](autosavingisimplicitlycancellable.md): A Boolean value that indicates whether you can cancel an in-progress autosave operation.

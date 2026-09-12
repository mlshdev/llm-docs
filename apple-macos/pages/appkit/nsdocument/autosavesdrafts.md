> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/autosavesdrafts](https://developer.apple.com/documentation/appkit/nsdocument/autosavesdrafts)

# autosavesDrafts (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.8+

A Boolean value that indicates whether the document subclass supports autosaving of drafts.

## Declaration

```swift
class var autosavesDrafts: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiving subclass of [NSDocument](../nsdocument.md) supports autosaving of drafts; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The system expects that an [NSDocument](../nsdocument.md) subclass that returns [true](https://developer.apple.com/documentation/swift/true) from this property can properly handle save operations that use the [NSDocument.SaveOperationType.autosaveAsOperation](saveoperationtype/autosaveasoperation.md) save operation type.

The default implementation of this property returns [true](https://developer.apple.com/documentation/swift/true). To opt out of autosaving in your [NSDocument](../nsdocument.md) subclass, override this property to return [false](https://developer.apple.com/documentation/swift/false).

AppKit invokes this property at various times. For example, when calling the [updateChangeCount(\_:)](updatechangecount%28__%29.md) method with [NSDocument.ChangeType.changeDone](changetype/changedone.md), but without the [NSDocument.ChangeType.changeDiscardable](changetype/changediscardable.md) change type, `NSDocument` uses [NSDocument.SaveOperationType.autosaveAsOperation](saveoperationtype/autosaveasoperation.md) on the next autosave. The operation writes the document’s contents to a new file or file package, then changes the document’s current location to point to the new file or file package.

Don’t invoke this property to find out whether autosaving of a draft might occur.

## See Also

### Configuring the Autosave Behavior

- [autosavesInPlace](autosavesinplace.md): A Boolean value that indicates whether the document subclass supports autosaving in place.
- [preservesVersions](preservesversions.md): A Boolean value that indicates whether the document subclass supports version management.
- [autosavedContentsFileURL](autosavedcontentsfileurl.md): The location of the most recently autosaved document contents.
- [autosavingFileType](autosavingfiletype.md): The document type to use for an autosave operation.
- [autosavingIsImplicitlyCancellable](autosavingisimplicitlycancellable.md): A Boolean value that indicates whether you can cancel an in-progress autosave operation.

# autosavesDrafts (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.8+

A Boolean value that indicates whether the document subclass supports autosaving of drafts.

## Declaration

```objectivec
@property (class, readonly) BOOL autosavesDrafts;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiving subclass of [NSDocument](../nsdocument.md) supports autosaving of drafts; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The system expects that an [NSDocument](../nsdocument.md) subclass that returns [true](https://developer.apple.com/documentation/swift/true) from this property can properly handle save operations that use the [NSAutosaveAsOperation](saveoperationtype/autosaveasoperation.md) save operation type.

The default implementation of this property returns [true](https://developer.apple.com/documentation/swift/true). To opt out of autosaving in your [NSDocument](../nsdocument.md) subclass, override this property to return [false](https://developer.apple.com/documentation/swift/false).

AppKit invokes this property at various times. For example, when calling the [updateChangeCount:](updatechangecount%28__%29.md) method with [NSChangeDone](changetype/changedone.md), but without the [NSChangeDiscardable](changetype/changediscardable.md) change type, `NSDocument` uses [NSAutosaveAsOperation](saveoperationtype/autosaveasoperation.md) on the next autosave. The operation writes the document’s contents to a new file or file package, then changes the document’s current location to point to the new file or file package.

Don’t invoke this property to find out whether autosaving of a draft might occur.

## See Also

### Configuring the Autosave Behavior

- [autosavesInPlace](autosavesinplace.md): A Boolean value that indicates whether the document subclass supports autosaving in place.
- [preservesVersions](preservesversions.md): A Boolean value that indicates whether the document subclass supports version management.
- [autosavedContentsFileURL](autosavedcontentsfileurl.md): The location of the most recently autosaved document contents.
- [autosavingFileType](autosavingfiletype.md): The document type to use for an autosave operation.
- [autosavingIsImplicitlyCancellable](autosavingisimplicitlycancellable.md): A Boolean value that indicates whether you can cancel an in-progress autosave operation.

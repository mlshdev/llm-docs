> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/changetype](https://developer.apple.com/documentation/appkit/nsdocument/changetype)

# NSDocument.ChangeType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Values that indicate a document’s edit status.

## Declaration

```swift
enum ChangeType
```

<a id="overview"></a>

## Overview

These constants indicate how a document should operate on its change count and are passed to the [updateChangeCount(\_:)](updatechangecount%28__%29.md) method.

## Topics

### Constants

- [NSDocument.ChangeType.changeDone](changetype/changedone.md): Increment change count.
- [NSDocument.ChangeType.changeUndone](changetype/changeundone.md): Decrement change count.
- [NSDocument.ChangeType.changeCleared](changetype/changecleared.md): Set change count to 0.
- [NSDocument.ChangeType.changeReadOtherContents](changetype/changereadothercontents.md): The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.
- [NSDocument.ChangeType.changeAutosaved](changetype/changeautosaved.md): The document’s contents have been autosaved.
- [NSDocument.ChangeType.changeRedone](changetype/changeredone.md): A single change has been redone.
- [NSDocument.ChangeType.changeDiscardable](changetype/changediscardable.md): A discardable change has been done.

### Initializers

- [init(rawValue:)](changetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Updating the Document Change Count

- [updateChangeCount(withToken:for:)](updatechangecount%28withtoken_for_%29.md): Updates the document’s change count settings after a successful save operation.
- [updateChangeCount(\_:)](updatechangecount%28__%29.md): Updates the receiver’s change count according to the given change type.
- [changeCountToken(for:)](changecounttoken%28for_%29.md): Returns an object that encapsulates the current record of document changes at the beginning of a save operation.

# NSDocumentChangeType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Values that indicate a document’s edit status.

## Declaration

```objectivec
enum NSDocumentChangeType : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants indicate how a document should operate on its change count and are passed to the [updateChangeCount:](updatechangecount%28__%29.md) method.

## Topics

### Constants

- [NSChangeDone](changetype/changedone.md): Increment change count.
- [NSChangeUndone](changetype/changeundone.md): Decrement change count.
- [NSChangeCleared](changetype/changecleared.md): Set change count to 0.
- [NSChangeReadOtherContents](changetype/changereadothercontents.md): The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.
- [NSChangeAutosaved](changetype/changeautosaved.md): The document’s contents have been autosaved.
- [NSChangeRedone](changetype/changeredone.md): A single change has been redone.
- [NSChangeDiscardable](changetype/changediscardable.md): A discardable change has been done.

## See Also

### Updating the Document Change Count

- [updateChangeCountWithToken:forSaveOperation:](updatechangecount%28withtoken_for_%29.md): Updates the document’s change count settings after a successful save operation.
- [updateChangeCount:](updatechangecount%28__%29.md): Updates the receiver’s change count according to the given change type.
- [changeCountTokenForSaveOperation:](changecounttoken%28for_%29.md): Returns an object that encapsulates the current record of document changes at the beginning of a save operation.

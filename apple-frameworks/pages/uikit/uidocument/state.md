> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/state](https://developer.apple.com/documentation/uikit/uidocument/state)

# UIDocument.State (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that specify the document state.

## Declaration

```swift
struct State
```

<a id="overview"></a>

## Overview

A [UIDocument](../uidocument.md) object stores the current state of the document in the [documentState](documentstate.md) property. To receive notifications about changes in document state, observe the [stateChangedNotification](statechangednotification.md) notification.

## Topics

### Constants

- [normal](state/normal.md): The document is open, editing is enabled, and there are no conflicts or errors associated with it.
- [closed](state/closed.md): There was an error in reading the document.
- [inConflict](state/inconflict.md): Conflicts exist for the document file located at the file URL.
- [savingError](state/savingerror.md): There was an error in saving or reverting the document.
- [editingDisabled](state/editingdisabled.md): The document is busy and it isn’t currently safe for user edits.
- [progressAvailable](state/progressavailable.md): The document is being downloaded or uploaded and progress information is available.

### Initializers

- [init(rawValue:)](state/init%28rawvalue_%29.md): Creates a document state structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [UIDocument.ChangeKind](changekind.md): Constants that specify the kind of change to a document.
- [UIDocument.SaveOperation](saveoperation.md): Constants that specify the type of save operation.
- [userActivityURLKey](useractivityurlkey.md): The key that identifies the document associated with a user activity.

# UIDocumentState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that specify the document state.

## Declaration

```objectivec
enum UIDocumentState : NSUInteger;
```

<a id="overview"></a>

## Overview

A [UIDocument](../uidocument.md) object stores the current state of the document in the [documentState](documentstate.md) property. To receive notifications about changes in document state, observe the [UIDocumentStateChangedNotification](statechangednotification.md) notification.

## Topics

### Constants

- [UIDocumentStateNormal](state/normal.md): The document is open, editing is enabled, and there are no conflicts or errors associated with it.
- [UIDocumentStateClosed](state/closed.md): There was an error in reading the document.
- [UIDocumentStateInConflict](state/inconflict.md): Conflicts exist for the document file located at the file URL.
- [UIDocumentStateSavingError](state/savingerror.md): There was an error in saving or reverting the document.
- [UIDocumentStateEditingDisabled](state/editingdisabled.md): The document is busy and it isn’t currently safe for user edits.
- [UIDocumentStateProgressAvailable](state/progressavailable.md): The document is being downloaded or uploaded and progress information is available.

## See Also

### Constants

- [UIDocumentChangeKind](changekind.md): Constants that specify the kind of change to a document.
- [UIDocumentSaveOperation](saveoperation.md): Constants that specify the type of save operation.
- [NSUserActivityDocumentURLKey](useractivityurlkey.md): The key that identifies the document associated with a user activity.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/changekind](https://developer.apple.com/documentation/uikit/uidocument/changekind)

# UIDocument.ChangeKind (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that specify the kind of change to a document.

## Declaration

```swift
enum ChangeKind
```

<a id="overview"></a>

## Overview

You specify one of these constants as a parameter of the [updateChangeCount(\_:)](updatechangecount%28__%29.md) method.

## Topics

### Constants

- [UIDocument.ChangeKind.done](changekind/done.md): A change has been made to the document.
- [UIDocument.ChangeKind.undone](changekind/undone.md): A change to the document has been undone.
- [UIDocument.ChangeKind.redone](changekind/redone.md): An undone change to the document has been redone.
- [UIDocument.ChangeKind.cleared](changekind/cleared.md): The document is cleared of outstanding changes.

### Initializers

- [init(rawValue:)](changekind/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UIDocument.SaveOperation](saveoperation.md): Constants that specify the type of save operation.
- [UIDocument.State](state.md): Constants that specify the document state.
- [userActivityURLKey](useractivityurlkey.md): The key that identifies the document associated with a user activity.

# UIDocumentChangeKind (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that specify the kind of change to a document.

## Declaration

```objectivec
enum UIDocumentChangeKind : NSInteger;
```

<a id="overview"></a>

## Overview

You specify one of these constants as a parameter of the [updateChangeCount:](updatechangecount%28__%29.md) method.

## Topics

### Constants

- [UIDocumentChangeDone](changekind/done.md): A change has been made to the document.
- [UIDocumentChangeUndone](changekind/undone.md): A change to the document has been undone.
- [UIDocumentChangeRedone](changekind/redone.md): An undone change to the document has been redone.
- [UIDocumentChangeCleared](changekind/cleared.md): The document is cleared of outstanding changes.

## See Also

### Constants

- [UIDocumentSaveOperation](saveoperation.md): Constants that specify the type of save operation.
- [UIDocumentState](state.md): Constants that specify the document state.
- [NSUserActivityDocumentURLKey](useractivityurlkey.md): The key that identifies the document associated with a user activity.

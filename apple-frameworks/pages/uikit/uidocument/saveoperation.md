> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/saveoperation](https://developer.apple.com/documentation/uikit/uidocument/saveoperation)

# UIDocument.SaveOperation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that specify the type of save operation.

## Declaration

```swift
enum SaveOperation
```

<a id="overview"></a>

## Overview

You specify one of these constants as a parameter in the following methods: [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md), [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md), [writeContents(\_:to:for:originalContentsURL:)](writecontents%28__to_for_originalcontentsurl_%29.md), [fileAttributesToWrite(to:for:)](fileattributestowrite%28to_for_%29.md), [fileNameExtension(forType:saveOperation:)](filenameextension%28fortype_saveoperation_%29.md), [changeCountToken(for:)](changecounttoken%28for_%29.md), and [updateChangeCount(withToken:for:)](updatechangecount%28withtoken_for_%29.md).

## Topics

### Constants

- [UIDocument.SaveOperation.forCreating](saveoperation/forcreating.md): The document is being saved for the first time.
- [UIDocument.SaveOperation.forOverwriting](saveoperation/foroverwriting.md): The document is being saved by overwriting the current version.

### Initializers

- [init(rawValue:)](saveoperation/init%28rawvalue_%29.md)

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

- [UIDocument.ChangeKind](changekind.md): Constants that specify the kind of change to a document.
- [UIDocument.State](state.md): Constants that specify the document state.
- [userActivityURLKey](useractivityurlkey.md): The key that identifies the document associated with a user activity.

# UIDocumentSaveOperation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that specify the type of save operation.

## Declaration

```objectivec
enum UIDocumentSaveOperation : NSInteger;
```

<a id="overview"></a>

## Overview

You specify one of these constants as a parameter in the following methods: [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md), [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md), [writeContents:toURL:forSaveOperation:originalContentsURL:error:](writecontents%28__to_for_originalcontentsurl_%29.md), [fileAttributesToWriteToURL:forSaveOperation:error:](fileattributestowrite%28to_for_%29.md), [fileNameExtensionForType:saveOperation:](filenameextension%28fortype_saveoperation_%29.md), [changeCountTokenForSaveOperation:](changecounttoken%28for_%29.md), and [updateChangeCountWithToken:forSaveOperation:](updatechangecount%28withtoken_for_%29.md).

## Topics

### Constants

- [UIDocumentSaveForCreating](saveoperation/forcreating.md): The document is being saved for the first time.
- [UIDocumentSaveForOverwriting](saveoperation/foroverwriting.md): The document is being saved by overwriting the current version.

## See Also

### Constants

- [UIDocumentChangeKind](changekind.md): Constants that specify the kind of change to a document.
- [UIDocumentState](state.md): Constants that specify the document state.
- [NSUserActivityDocumentURLKey](useractivityurlkey.md): The key that identifies the document associated with a user activity.

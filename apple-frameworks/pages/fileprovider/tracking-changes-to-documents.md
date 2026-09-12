> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/tracking-changes-to-documents](https://developer.apple.com/documentation/fileprovider/tracking-changes-to-documents)

# Tracking Changes to Documents (Swift)

**Framework:** File Provider  
**Kind:** Article

Track and report changes to open documents.

<a id="overview"></a>

## Overview

The File Provider extension must report any  changes to a document’s content while the user is viewing the document.

![An illustration showing an external update to a document.](https://developer.apple.com/images/com.apple.fileprovider/media-2943054@2x.png)

When an app opens a document managed by your File Provider extension (using either an [NSFilePresenter](../foundation/nsfilepresenter.md) or [UIDocument](../uikit/uidocument.md) object), the system requests an enumerator for that document. This enumerator is used only for tracking changes to the document from other processes (for example, updates from another device).

The document enumerator remains active as long as the document is open. Any calls to its [enumerateChanges(for:from:)](nsfileproviderenumerator/enumeratechanges%28for_from_%29.md) method should return only information about the specified document.

These changes are forwarded to the [NSFilePresenter](../foundation/nsfilepresenter.md) or [UIDocument](../uikit/uidocument.md) that is monitoring the document. The app then updates its user interface as needed.

# Tracking Changes to Documents (Objective-C)

**Framework:** File Provider  
**Kind:** Article

Track and report changes to open documents.

<a id="overview"></a>

## Overview

The File Provider extension must report any  changes to a document’s content while the user is viewing the document.

![An illustration showing an external update to a document.](https://developer.apple.com/images/com.apple.fileprovider/media-2943054@2x.png)

When an app opens a document managed by your File Provider extension (using either an [NSFilePresenter](../foundation/nsfilepresenter.md) or [UIDocument](../uikit/uidocument.md) object), the system requests an enumerator for that document. This enumerator is used only for tracking changes to the document from other processes (for example, updates from another device).

The document enumerator remains active as long as the document is open. Any calls to its [enumerateChangesForObserver:fromSyncAnchor:](nsfileproviderenumerator/enumeratechanges%28for_from_%29.md) method should return only information about the specified document.

These changes are forwarded to the [NSFilePresenter](../foundation/nsfilepresenter.md) or [UIDocument](../uikit/uidocument.md) that is monitoring the document. The app then updates its user interface as needed.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/useractivityurlkey](https://developer.apple.com/documentation/uikit/uidocument/useractivityurlkey)

# userActivityURLKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The key that identifies the document associated with a user activity.

## Declaration

```swift
class let userActivityURLKey: String
```

<a id="Discussion"></a>

## Discussion

You use this key in the [userInfo](../../foundation/nsuseractivity/userinfo.md) dictionary of an [NSUserActivity](../../foundation/nsuseractivity.md) object. Its value is the URL of the document associated with the user activity.

When the `NSUbiquitousDocumentUserActivityType` key is present in a [CFBundleDocumentTypes](../../bundleresources/information-property-list/cfbundledocumenttypes.md) entry, AppKit automatically creates an [NSUserActivity](../../foundation/nsuseractivity.md) object for documents in iCloud, using the given activity type.

## See Also

### Constants

- [UIDocument.ChangeKind](changekind.md): Constants that specify the kind of change to a document.
- [UIDocument.SaveOperation](saveoperation.md): Constants that specify the type of save operation.
- [UIDocument.State](state.md): Constants that specify the document state.

# NSUserActivityDocumentURLKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The key that identifies the document associated with a user activity.

## Declaration

```objectivec
extern NSString * const NSUserActivityDocumentURLKey;
```

<a id="Discussion"></a>

## Discussion

You use this key in the [userInfo](../../foundation/nsuseractivity/userinfo.md) dictionary of an [NSUserActivity](../../foundation/nsuseractivity.md) object. Its value is the URL of the document associated with the user activity.

When the `NSUbiquitousDocumentUserActivityType` key is present in a [CFBundleDocumentTypes](../../bundleresources/information-property-list/cfbundledocumenttypes.md) entry, AppKit automatically creates an [NSUserActivity](../../foundation/nsuseractivity.md) object for documents in iCloud, using the given activity type.

## See Also

### Constants

- [UIDocumentChangeKind](changekind.md): Constants that specify the kind of change to a document.
- [UIDocumentSaveOperation](saveoperation.md): Constants that specify the type of save operation.
- [UIDocumentState](state.md): Constants that specify the document state.

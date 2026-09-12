> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuseractivitydocumenturlkey](https://developer.apple.com/documentation/appkit/nsuseractivitydocumenturlkey)

# NSUserActivityDocumentURLKey (Swift)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.10+

The key that identifies the document associated with a user activity.

## Declaration

```swift
let NSUserActivityDocumentURLKey: String
```

<a id="Discussion"></a>

## Discussion

You use this key in the [userInfo](https://developer.apple.com/documentation/foundation/nsuseractivity/userinfo) dictionary of an [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) object. Its value is the URL of the document associated with the user activity.

When the `NSUbiquitousDocumentUserActivityType` key is present in a [CFBundleDocumentTypes](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundledocumenttypes) entry, AppKit automatically creates an [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) object for documents in iCloud, using the given activity type.

## See Also

### Supporting User Activities

- [userActivity](nsdocument/useractivity.md): An object that encapsulates a user activity the document supports.
- [updateUserActivityState(\_:)](nsdocument/updateuseractivitystate%28__%29.md): Updates the state of the given user activity.

# NSUserActivityDocumentURLKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.10+

The key that identifies the document associated with a user activity.

## Declaration

```objectivec
extern NSString * const NSUserActivityDocumentURLKey;
```

<a id="Discussion"></a>

## Discussion

You use this key in the [userInfo](https://developer.apple.com/documentation/foundation/nsuseractivity/userinfo) dictionary of an [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) object. Its value is the URL of the document associated with the user activity.

When the `NSUbiquitousDocumentUserActivityType` key is present in a [CFBundleDocumentTypes](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundledocumenttypes) entry, AppKit automatically creates an [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) object for documents in iCloud, using the given activity type.

## See Also

### Supporting User Activities

- [userActivity](nsdocument/useractivity.md): An object that encapsulates a user activity the document supports.
- [updateUserActivityState:](nsdocument/updateuseractivitystate%28__%29.md): Updates the state of the given user activity.

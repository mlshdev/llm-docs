> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidererrornonexistentitemidentifierkey](https://developer.apple.com/documentation/fileprovider/nsfileprovidererrornonexistentitemidentifierkey)

# NSFileProviderErrorNonExistentItemIdentifierKey (Swift)

**Framework:** File Provider  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

The key for accessing the specified item’s identifier when the item doesn’t exist.

## Declaration

```swift
let NSFileProviderErrorNonExistentItemIdentifierKey: String
```

<a id="Discussion"></a>

## Discussion

Use this key to access the item’s identifier from a [noSuchItem](nsfileprovidererror/nosuchitem.md) error’s [userInfo](../foundation/nserror/userinfo.md) dictionary.

## See Also

### Errors

- [NSFileProviderError](nsfileprovidererror.md): A structure that contains information about File Provider extension errors.
- [NSFileProviderError.Code](nsfileprovidererror/code.md): The error codes for the File Provider extension.
- [NSFileProviderErrorDomain](nsfileprovidererrordomain.md): The error domain for the File Provider extension.
- [NSFileProviderErrorItemKey](nsfileprovidererroritemkey.md): The key for accessing information about sync-related errors.
- [NSFileProviderErrorCollidingItemKey](nsfileprovidererrorcollidingitemkey.md): Deprecated. The key for accessing the existing item from a filename collision error’s user info dictionary.

# NSFileProviderErrorNonExistentItemIdentifierKey (Objective-C)

**Framework:** File Provider  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

The key for accessing the specified item’s identifier when the item doesn’t exist.

## Declaration

```objectivec
extern NSErrorUserInfoKey const NSFileProviderErrorNonExistentItemIdentifierKey;
```

<a id="Discussion"></a>

## Discussion

Use this key to access the item’s identifier from a [noSuchItem](nsfileprovidererror/nosuchitem.md) error’s [userInfo](../foundation/nserror/userinfo.md) dictionary.

## See Also

### Errors

- [NSFileProviderErrorCode](nsfileprovidererror/code.md): The error codes for the File Provider extension.
- [NSFileProviderErrorDomain](nsfileprovidererrordomain.md): The error domain for the File Provider extension.
- [NSFileProviderErrorItemKey](nsfileprovidererroritemkey.md): The key for accessing information about sync-related errors.
- [NSFileProviderErrorCollidingItemKey](nsfileprovidererrorcollidingitemkey.md): Deprecated. The key for accessing the existing item from a filename collision error’s user info dictionary.

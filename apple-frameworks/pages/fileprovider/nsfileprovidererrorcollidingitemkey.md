> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidererrorcollidingitemkey](https://developer.apple.com/documentation/fileprovider/nsfileprovidererrorcollidingitemkey)

# NSFileProviderErrorCollidingItemKey (Swift)

**Framework:** File Provider  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 8.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

The key for accessing the existing item from a filename collision error’s user info dictionary.

> Use [NSFileProviderErrorItemKey](nsfileprovidererroritemkey.md) instead.

## Declaration

```swift
let NSFileProviderErrorCollidingItemKey: String
```

## See Also

### Errors

- [NSFileProviderError](nsfileprovidererror.md): A structure that contains information about File Provider extension errors.
- [NSFileProviderError.Code](nsfileprovidererror/code.md): The error codes for the File Provider extension.
- [NSFileProviderErrorDomain](nsfileprovidererrordomain.md): The error domain for the File Provider extension.
- [NSFileProviderErrorItemKey](nsfileprovidererroritemkey.md): The key for accessing information about sync-related errors.
- [NSFileProviderErrorNonExistentItemIdentifierKey](nsfileprovidererrornonexistentitemidentifierkey.md): The key for accessing the specified item’s identifier when the item doesn’t exist.

# NSFileProviderErrorCollidingItemKey (Objective-C)

**Framework:** File Provider  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

The key for accessing the existing item from a filename collision error’s user info dictionary.

> Use [NSFileProviderErrorItemKey](nsfileprovidererroritemkey.md) instead.

## Declaration

```objectivec
extern NSErrorUserInfoKey const NSFileProviderErrorCollidingItemKey;
```

## See Also

### Errors

- [NSFileProviderErrorCode](nsfileprovidererror/code.md): The error codes for the File Provider extension.
- [NSFileProviderErrorDomain](nsfileprovidererrordomain.md): The error domain for the File Provider extension.
- [NSFileProviderErrorItemKey](nsfileprovidererroritemkey.md): The key for accessing information about sync-related errors.
- [NSFileProviderErrorNonExistentItemIdentifierKey](nsfileprovidererrornonexistentitemidentifierkey.md): The key for accessing the specified item’s identifier when the item doesn’t exist.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidererroritemkey](https://developer.apple.com/documentation/fileprovider/nsfileprovidererroritemkey)

# NSFileProviderErrorItemKey (Swift)

**Framework:** File Provider  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

The key for accessing information about sync-related errors.

## Declaration

```swift
let NSFileProviderErrorItemKey: String
```

<a id="Discussion"></a>

## Discussion

If a specific item caused the error, the system sets the [NSFileProviderErrorItemKey](nsfileprovidererroritemkey.md) key to the item’s identifier, and it sets the [NSUnderlyingErrorKey](../foundation/nsunderlyingerrorkey.md) key to the error encountered by the item.

## See Also

### Errors

- [NSFileProviderError](nsfileprovidererror.md): A structure that contains information about File Provider extension errors.
- [NSFileProviderError.Code](nsfileprovidererror/code.md): The error codes for the File Provider extension.
- [NSFileProviderErrorDomain](nsfileprovidererrordomain.md): The error domain for the File Provider extension.
- [NSFileProviderErrorNonExistentItemIdentifierKey](nsfileprovidererrornonexistentitemidentifierkey.md): The key for accessing the specified item’s identifier when the item doesn’t exist.
- [NSFileProviderErrorCollidingItemKey](nsfileprovidererrorcollidingitemkey.md): Deprecated. The key for accessing the existing item from a filename collision error’s user info dictionary.

# NSFileProviderErrorItemKey (Objective-C)

**Framework:** File Provider  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · macOS 10.15+ · visionOS 1.0+

The key for accessing information about sync-related errors.

## Declaration

```objectivec
extern NSErrorUserInfoKey const NSFileProviderErrorItemKey;
```

<a id="Discussion"></a>

## Discussion

If a specific item caused the error, the system sets the [NSFileProviderErrorItemKey](nsfileprovidererroritemkey.md) key to the item’s identifier, and it sets the [NSUnderlyingErrorKey](../foundation/nsunderlyingerrorkey.md) key to the error encountered by the item.

## See Also

### Errors

- [NSFileProviderErrorCode](nsfileprovidererror/code.md): The error codes for the File Provider extension.
- [NSFileProviderErrorDomain](nsfileprovidererrordomain.md): The error domain for the File Provider extension.
- [NSFileProviderErrorNonExistentItemIdentifierKey](nsfileprovidererrornonexistentitemidentifierkey.md): The key for accessing the specified item’s identifier when the item doesn’t exist.
- [NSFileProviderErrorCollidingItemKey](nsfileprovidererrorcollidingitemkey.md): Deprecated. The key for accessing the existing item from a filename collision error’s user info dictionary.

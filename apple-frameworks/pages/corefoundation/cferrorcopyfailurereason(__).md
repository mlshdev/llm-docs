> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cferrorcopyfailurereason(_:)](https://developer.apple.com/documentation/corefoundation/cferrorcopyfailurereason(_:))

# CFErrorCopyFailureReason(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a human-presentable failure reason for a given error.

## Declaration

```swift
func CFErrorCopyFailureReason(_ err: CFError!) -> CFString!
```

## Parameters

- `err`: The CFError to examine. If this is not a valid CFError, the behavior is undefined.

<a id="return-value"></a>

## Return Value

A localized, human-presentable failure reason for `err`, or `NULL` if no user-presentable string is available. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The failure reason is a complete sentence which describes why the operation failed. In many cases this will be just the “because” part of the description (but as a complete sentence, which makes localization easier). For example, an error description “Could not save file ‘Letter’ in folder ‘Documents’ because the volume ‘MyDisk’ doesn’t have enough space.” might have a corresponding failure reason, “The volume ‘MyDisk’ doesn’t have enough space.”

By default, this function looks for a value for the [kCFErrorLocalizedFailureReasonKey](kcferrorlocalizedfailurereasonkey.md) key in the user info dictionary. Toll-free bridged instances of `NSError` might provide additional behaviors for manufacturing this value.

When you create a CFError, you should try to make sure the return value is human-presentable and localized by providing a value for [kCFErrorLocalizedFailureReasonKey](kcferrorlocalizedfailurereasonkey.md) in the user info dictionary.

## See Also

### Getting Information About an Error

- [CFErrorGetDomain(\_:)](cferrorgetdomain%28__%29.md): Returns the error domain for a given CFError.
- [CFErrorGetCode(\_:)](cferrorgetcode%28__%29.md): Returns the error code for a given CFError.
- [CFErrorCopyUserInfo(\_:)](cferrorcopyuserinfo%28__%29.md): Returns the user info dictionary for a given CFError.
- [CFErrorCopyDescription(\_:)](cferrorcopydescription%28__%29.md): Returns a human-presentable description for a given error.
- [CFErrorCopyRecoverySuggestion(\_:)](cferrorcopyrecoverysuggestion%28__%29.md): Returns a human presentable recovery suggestion for a given error.

# CFErrorCopyFailureReason (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a human-presentable failure reason for a given error.

## Declaration

```objectivec
extern CFStringRefCFErrorCopyFailureReason(CFErrorRef err);
```

## Parameters

- `err`: The CFError to examine. If this is not a valid CFError, the behavior is undefined.

<a id="return-value"></a>

## Return Value

A localized, human-presentable failure reason for `err`, or `NULL` if no user-presentable string is available. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The failure reason is a complete sentence which describes why the operation failed. In many cases this will be just the “because” part of the description (but as a complete sentence, which makes localization easier). For example, an error description “Could not save file ‘Letter’ in folder ‘Documents’ because the volume ‘MyDisk’ doesn’t have enough space.” might have a corresponding failure reason, “The volume ‘MyDisk’ doesn’t have enough space.”

By default, this function looks for a value for the [kCFErrorLocalizedFailureReasonKey](kcferrorlocalizedfailurereasonkey.md) key in the user info dictionary. Toll-free bridged instances of `NSError` might provide additional behaviors for manufacturing this value.

When you create a CFError, you should try to make sure the return value is human-presentable and localized by providing a value for [kCFErrorLocalizedFailureReasonKey](kcferrorlocalizedfailurereasonkey.md) in the user info dictionary.

## See Also

### Getting Information About an Error

- [CFErrorGetDomain](cferrorgetdomain%28__%29.md): Returns the error domain for a given CFError.
- [CFErrorGetCode](cferrorgetcode%28__%29.md): Returns the error code for a given CFError.
- [CFErrorCopyUserInfo](cferrorcopyuserinfo%28__%29.md): Returns the user info dictionary for a given CFError.
- [CFErrorCopyDescription](cferrorcopydescription%28__%29.md): Returns a human-presentable description for a given error.
- [CFErrorCopyRecoverySuggestion](cferrorcopyrecoverysuggestion%28__%29.md): Returns a human presentable recovery suggestion for a given error.

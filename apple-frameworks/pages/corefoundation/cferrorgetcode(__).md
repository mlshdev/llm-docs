> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cferrorgetcode(_:)](https://developer.apple.com/documentation/corefoundation/cferrorgetcode(_:))

# CFErrorGetCode(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the error code for a given CFError.

## Declaration

```swift
func CFErrorGetCode(_ err: CFError!) -> CFIndex
```

## Parameters

- `err`: The error to examine. If this is not a valid CFError, the behavior is undefined.

<a id="return-value"></a>

## Return Value

The error code of `err`.

<a id="Discussion"></a>

## Discussion

Note that this function returns the error code for the specified CFError, not an error return for the current call.

## See Also

### Getting Information About an Error

- [CFErrorGetDomain(\_:)](cferrorgetdomain%28__%29.md): Returns the error domain for a given CFError.
- [CFErrorCopyUserInfo(\_:)](cferrorcopyuserinfo%28__%29.md): Returns the user info dictionary for a given CFError.
- [CFErrorCopyDescription(\_:)](cferrorcopydescription%28__%29.md): Returns a human-presentable description for a given error.
- [CFErrorCopyFailureReason(\_:)](cferrorcopyfailurereason%28__%29.md): Returns a human-presentable failure reason for a given error.
- [CFErrorCopyRecoverySuggestion(\_:)](cferrorcopyrecoverysuggestion%28__%29.md): Returns a human presentable recovery suggestion for a given error.

# CFErrorGetCode (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the error code for a given CFError.

## Declaration

```objectivec
extern CFIndex CFErrorGetCode(CFErrorRef err);
```

## Parameters

- `err`: The error to examine. If this is not a valid CFError, the behavior is undefined.

<a id="return-value"></a>

## Return Value

The error code of `err`.

<a id="Discussion"></a>

## Discussion

Note that this function returns the error code for the specified CFError, not an error return for the current call.

## See Also

### Getting Information About an Error

- [CFErrorGetDomain](cferrorgetdomain%28__%29.md): Returns the error domain for a given CFError.
- [CFErrorCopyUserInfo](cferrorcopyuserinfo%28__%29.md): Returns the user info dictionary for a given CFError.
- [CFErrorCopyDescription](cferrorcopydescription%28__%29.md): Returns a human-presentable description for a given error.
- [CFErrorCopyFailureReason](cferrorcopyfailurereason%28__%29.md): Returns a human-presentable failure reason for a given error.
- [CFErrorCopyRecoverySuggestion](cferrorcopyrecoverysuggestion%28__%29.md): Returns a human presentable recovery suggestion for a given error.

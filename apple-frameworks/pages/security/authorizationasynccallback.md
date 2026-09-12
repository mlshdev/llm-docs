> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationasynccallback](https://developer.apple.com/documentation/security/authorizationasynccallback)

# AuthorizationAsyncCallback (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A block used as a callback for the asynchronous version of copying authorization rights.

## Declaration

```swift
typealias AuthorizationAsyncCallback = (OSStatus, UnsafeMutablePointer<AuthorizationRights>?) -> Void
```

## Parameters

- `err`: A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md). This is equivalent to the return value from the [AuthorizationCopyRights(\_:\_:\_:\_:\_:)](authorizationcopyrights%28__________%29.md) function.
- `blockAuthorizedRights`: The authorized rights. This is equivalent to the authorizedRights parameter of the [AuthorizationCopyRights(\_:\_:\_:\_:\_:)](authorizationcopyrights%28__________%29.md) function. Free this object using the [AuthorizationFreeItemSet(\_:)](authorizationfreeitemset%28__%29.md) function when you are done with it.

<a id="Discussion"></a>

## Discussion

Use a block of this type as the callback parameter to the [AuthorizationCopyRightsAsync(\_:\_:\_:\_:\_:)](authorizationcopyrightsasync%28__________%29.md) function.

# AuthorizationAsyncCallback (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A block used as a callback for the asynchronous version of copying authorization rights.

## Declaration

```objectivec
typedef void (^)(int, AuthorizationItemSet *) AuthorizationAsyncCallback;
```

## Parameters

- `err`: A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md). This is equivalent to the return value from the [AuthorizationCopyRights](authorizationcopyrights%28__________%29.md) function.
- `blockAuthorizedRights`: The authorized rights. This is equivalent to the authorizedRights parameter of the [AuthorizationCopyRights](authorizationcopyrights%28__________%29.md) function. Free this object using the [AuthorizationFreeItemSet](authorizationfreeitemset%28__%29.md) function when you are done with it.

<a id="Discussion"></a>

## Discussion

Use a block of this type as the callback parameter to the [AuthorizationCopyRightsAsync](authorizationcopyrightsasync%28__________%29.md) function.

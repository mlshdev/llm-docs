> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationfreeitemset(_:)](https://developer.apple.com/documentation/security/authorizationfreeitemset(_:))

# AuthorizationFreeItemSet(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Frees the memory associated with a set of authorization items.

## Declaration

```swift
func AuthorizationFreeItemSet(_ set: UnsafeMutablePointer<AuthorizationItemSet>) -> OSStatus
```

## Parameters

- `set`: A pointer to the authorization set to free.

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

When your application no longer needs the authorization item sets created by the Security Server in the [AuthorizationCopyRights(\_:\_:\_:\_:\_:)](authorizationcopyrights%28__________%29.md) and [AuthorizationCopyInfo(\_:\_:\_:)](authorizationcopyinfo%28______%29.md) functions, call this function to free it.

# AuthorizationFreeItemSet (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Frees the memory associated with a set of authorization items.

## Declaration

```objectivec
OSStatus AuthorizationFreeItemSet(AuthorizationItemSet *set);
```

## Parameters

- `set`: A pointer to the authorization set to free.

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

When your application no longer needs the authorization item sets created by the Security Server in the [AuthorizationCopyRights](authorizationcopyrights%28__________%29.md) and [AuthorizationCopyInfo](authorizationcopyinfo%28______%29.md) functions, call this function to free it.

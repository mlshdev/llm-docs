> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationrightremove(_:_:)](https://developer.apple.com/documentation/security/authorizationrightremove(_:_:))

# AuthorizationRightRemove(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes a right from the policy database.

## Declaration

```swift
func AuthorizationRightRemove(_ authRef: AuthorizationRef, _ rightName: UnsafePointer<CChar>) -> OSStatus
```

## Parameters

- `authRef`: A valid authorization reference used to authorize modifications.
- `rightName`: An ASCII character string representing the right name. This function does not accept wildcard right names.

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

The right you remove must be an explicit right with no wildcards. Wildcard rights are for use by system administrators for site configuration.

# AuthorizationRightRemove (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes a right from the policy database.

## Declaration

```objectivec
OSStatus AuthorizationRightRemove(AuthorizationRef authRef, const char *rightName);
```

## Parameters

- `authRef`: A valid authorization reference used to authorize modifications.
- `rightName`: An ASCII character string representing the right name. This function does not accept wildcard right names.

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

The right you remove must be an explicit right with no wildcards. Wildcard rights are for use by system administrators for site configuration.

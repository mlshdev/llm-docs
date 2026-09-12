> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationplugininterface/mechanismdestroy](https://developer.apple.com/documentation/security/authorizationplugininterface/mechanismdestroy)

# MechanismDestroy

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Destroys an authorization mechanism.

## Declaration

```objectivec
int (*)(void *) MechanismDestroy;
```

## Parameters

- `inMechanism`: An authorization mechanism reference that you returned when your [MechanismCreate](mechanismcreate.md) function was called to create the mechanism.

<a id="return-value"></a>

## Return Value

A result code. Return [errAuthorizationSuccess](../errauthorizationsuccess.md) (no error) if the function completes successfully and [errAuthorizationInternal](../errauthorizationinternal.md) (Security Server internal error) if any error occurs.

<a id="Discussion"></a>

## Discussion

When the authorization engine calls your [MechanismDestroy](mechanismdestroy.md) function, you must release all resources owned by your mechanism and do any other cleanup necessary (such as deleting temporary files).

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationplugininterface/mechanismdeactivate](https://developer.apple.com/documentation/security/authorizationplugininterface/mechanismdeactivate)

# MechanismDeactivate

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Deactivates an authorization mechanism.

## Declaration

```objectivec
int (*)(void *) MechanismDeactivate;
```

## Parameters

- `inMechanism`: An authorization mechanism reference that you returned when your [MechanismCreate](mechanismcreate.md) function was called to create the mechanism.

<a id="return-value"></a>

## Return Value

A result code. Return [errAuthorizationSuccess](../errauthorizationsuccess.md) (no error) if the function completes successfully and [errAuthorizationInternal](../errauthorizationinternal.md) (Security Server internal error) if any error occurs.

<a id="Discussion"></a>

## Discussion

The authorization engine calls the [MechanismDeactivate](mechanismdeactivate.md) function of each active mechanism when you call the [RequestInterrupt](../authorizationcallbacks/requestinterrupt.md) function. To deactivate your mechanism, you must stop any processing that is currently underway; for example, you should terminate any threads or UI processes that you initiated.

After you have terminated all processing, you must call the [DidDeactivate](../authorizationcallbacks/diddeactivate.md) function; the authorization engine waits for you to call this function before it resumes operation.

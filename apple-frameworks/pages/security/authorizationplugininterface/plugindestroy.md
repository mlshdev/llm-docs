> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationplugininterface/plugindestroy](https://developer.apple.com/documentation/security/authorizationplugininterface/plugindestroy)

# PluginDestroy

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Notifies the plug-in that it is about to be unloaded.

## Declaration

```objectivec
int (*)(void *) PluginDestroy;
```

## Parameters

- `inPlugin`: The authorization plug-in reference you assigned to the plug-in in the [AuthorizationPluginCreate](../authorizationplugincreate.md) function.

<a id="return-value"></a>

## Return Value

A result code. Return [errAuthorizationSuccess](../errauthorizationsuccess.md) (no error) if the function completes successfully and [errAuthorizationInternal](../errauthorizationinternal.md) (Security Server internal error) if any error occurs.

<a id="Discussion"></a>

## Discussion

When this function is called, your plug-in should release any resources it is holding and do any other cleanup necessary (such as deleting temporary files) before it is unloaded.

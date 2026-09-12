> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationplugincreate](https://developer.apple.com/documentation/security/authorizationplugincreate)

# AuthorizationPluginCreate

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the plug-in and exchanges interfaces with the authorization engine.

## Declaration

```objectivec
OSStatus AuthorizationPluginCreate(const AuthorizationCallbacks *callbacks, AuthorizationPluginRef*outPlugin, const AuthorizationPluginInterface **outPluginInterface);
```

## Parameters

- `callbacks`: A pointer to an [AuthorizationCallbacks](authorizationcallbacks.md) structure containing entry points to the Security Server.
- `outPlugin`: On input, a pointer that you can assign, on output, to a reference value that you define. The authorization engine passes this reference back to you in any subsequent calls to your functions `outPluginInterface->MechanismCreate` ([MechanismCreate](authorizationplugininterface/mechanismcreate.md)) and `outPluginInterface->PluginDestroy` ([MechanismDestroy](authorizationplugininterface/mechanismdestroy.md)) so that you can identify the instance of the plug-in affected.
- `outPluginInterface`: On input, a pointer that you assign, on output, to a structure containing entry points in the plug-in. This structure remains valid until the authorization engine calls `outPluginInterface->PluginDestroy`.

<a id="return-value"></a>

## Return Value

A result code. Returns [errAuthorizationSuccess](errauthorizationsuccess.md) (no error) if the function completes successfully and [errAuthorizationInternal](errauthorizationinternal.md) (Security Server internal error) if any error occurs.

## Mentioned In

- [Extending authorization services with plug-ins](extending-authorization-services-with-plug-ins.md)

<a id="Discussion"></a>

## Discussion

This function is the main entry point to the plug-in. The authorization engine calls this function only once. The plug-in receives an [AuthorizationCallbacks](authorizationcallbacks.md) structure containing the entry points to the Security Server’s functions and returns an [AuthorizationPluginInterface](authorizationplugininterface.md) structure containing the entry points to all of the plug-in’s routines. Both of these structures contain version numbers. The authorization engine matches the version of its interface to the version in your plug-in’s [AuthorizationPluginInterface](authorizationplugininterface.md) structure in order to ensure that older plug-ins will continue to function correctly after the Security Server is updated.

If your plug-in is running in macOS 10.5 or later and displays a window before the user has logged in, ensure you set the [canBecomeVisibleWithoutLogin](https://developer.apple.com/documentation/appkit/nswindow/canbecomevisiblewithoutlogin) property of [NSWindow](https://developer.apple.com/documentation/appkit/nswindow) to `true`.

> **Important**

>  Authorization plug-ins that put up a GUI or otherwise connect to the window server cannot run as privileged. Note that running GUI code as root is a bad idea in general, because GUI code links in many libraries, any of which could contain security vulnerabilities.

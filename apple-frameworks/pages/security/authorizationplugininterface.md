> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationplugininterface](https://developer.apple.com/documentation/security/authorizationplugininterface)

# AuthorizationPluginInterface

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interface that must be implemented by your plug-in.

## Declaration

```objectivec
typedef struct AuthorizationPluginInterface { ... } AuthorizationPluginInterface;
```

## Mentioned In

- [Extending authorization services with plug-ins](extending-authorization-services-with-plug-ins.md)

<a id="Overview"></a>

## Overview

Your plug-in passes this interface to the authorization engine through the [AuthorizationPluginCreate](authorizationplugincreate.md) function.

## Topics

### Instance Properties

- [MechanismCreate](authorizationplugininterface/mechanismcreate.md): Creates an authorization mechanism.
- [MechanismDeactivate](authorizationplugininterface/mechanismdeactivate.md): Deactivates an authorization mechanism.
- [MechanismDestroy](authorizationplugininterface/mechanismdestroy.md): Destroys an authorization mechanism.
- [MechanismInvoke](authorizationplugininterface/mechanisminvoke.md): Invokes an authorization mechanism to perform an authorization operation.
- [PluginDestroy](authorizationplugininterface/plugindestroy.md): Notifies the plug-in that it is about to be unloaded.
- [version](authorizationplugininterface/version.md): The plug-in interface version.

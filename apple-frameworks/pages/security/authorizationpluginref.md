> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationpluginref](https://developer.apple.com/documentation/security/authorizationpluginref)

# AuthorizationPluginRef

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A handle passed by the plug-in to the authorization engine when the plug-in is initiated.

## Declaration

```objectivec
typedef void * AuthorizationPluginRef;
```

<a id="Discussion"></a>

## Discussion

Your [AuthorizationPluginCreate](authorizationplugincreate.md) function assigns this value and returns it to the authorization engine. The authorization engine passes this reference back to you in any subsequent calls to your [MechanismCreate](authorizationplugininterface/mechanismcreate.md) and [PluginDestroy](authorizationplugininterface/plugindestroy.md) functions.

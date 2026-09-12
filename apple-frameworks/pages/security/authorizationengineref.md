> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationengineref](https://developer.apple.com/documentation/security/authorizationengineref)

# AuthorizationEngineRef

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Handle passed from the authorization engine to an instance of a mechanism in a plug-in.

## Declaration

```objectivec
typedef struct __OpaqueAuthorizationEngine * AuthorizationEngineRef;
```

<a id="Discussion"></a>

## Discussion

The authorization engine passes one of these opaque handles to your plug-in when it calls your [MechanismCreate](authorizationplugininterface/mechanismcreate.md) function. Your mechanism must pass this handle back to the authorization engine when you call one of the engine’s callback functions, as defined in the [AuthorizationCallbacks](authorizationcallbacks.md) structure.

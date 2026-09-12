> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationcallbacks/gettktokenwatcher](https://developer.apple.com/documentation/security/authorizationcallbacks/gettktokenwatcher)

# GetTKTokenWatcher

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constructs a token watcher.

## Declaration

```objectivec
int (*)(struct __OpaqueAuthorizationEngine *, const void **) GetTKTokenWatcher;
```

## Parameters

- `inEngine`: An opaque handle that’s passed to your plug-in when the authorization engine calls your [MechanismCreate](../authorizationplugininterface/mechanismcreate.md) function.
- `outValue`: A pointer the function uses to return the [TKTokenWatcher](../../cryptotokenkit/tktokenwatcher.md) instance.

<a id="Discussion"></a>

## Discussion

The caller owns the returned token watcher and is responsible for releasing it.

> **Important**

>  This function is only available when the callback [version](version.md) is 3 or higher.

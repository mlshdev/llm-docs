> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationcallbacks/getlacontext](https://developer.apple.com/documentation/security/authorizationcallbacks/getlacontext)

# GetLAContext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constructs a local authentication context.

## Declaration

```objectivec
int (*)(struct __OpaqueAuthorizationEngine *, const void **) GetLAContext;
```

## Parameters

- `inEngine`: An opaque handle that’s passed to your plug-in when the authorization engine calls your [MechanismCreate](../authorizationplugininterface/mechanismcreate.md) function.
- `outValue`: A pointer the function uses to return the [LAContext](../../localauthentication/lacontext.md) instance.

<a id="Discussion"></a>

## Discussion

If a PIN is available, you can use the context for token operations that would normally require a PIN.

You can also use this context for keychain item accesses, for example using the [SecItemCopyMatching](../secitemcopymatching%28____%29.md) function, that include the [kSecUseAuthenticationContext](../ksecuseauthenticationcontext.md) key in the query dictionary.

The caller owns the returned context and is responsible for releasing it.

> **Important**

>  This function is only available when the callback [version](version.md) is 2 or higher.

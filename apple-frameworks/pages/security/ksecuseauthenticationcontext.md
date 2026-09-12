> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecuseauthenticationcontext](https://developer.apple.com/documentation/security/ksecuseauthenticationcontext)

# kSecUseAuthenticationContext (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates a local authentication context to use.

## Declaration

```swift
let kSecUseAuthenticationContext: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [LAContext](../localauthentication/lacontext.md), and represents a reusable local authentication context that should be used for keychain item authentication, according to the following rules:

- If this key is not specified, and if the item requires authentication, a new context will be created, used once, and discarded.
- If this key is specified with a context that has been previously authenticated, the operation will succeed without asking user for authentication.
- If this key is specified with a context that has not been previously authenticated, the system attempts authentication on the context. If successful, the context may be reused in subsequent keychain operations.

# kSecUseAuthenticationContext (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates a local authentication context to use.

## Declaration

```objectivec
extern CFStringRef const kSecUseAuthenticationContext;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [LAContext](../localauthentication/lacontext.md), and represents a reusable local authentication context that should be used for keychain item authentication, according to the following rules:

- If this key is not specified, and if the item requires authentication, a new context will be created, used once, and discarded.
- If this key is specified with a context that has been previously authenticated, the operation will succeed without asking user for authentication.
- If this key is specified with a context that has not been previously authenticated, the system attempts authentication on the context. If successful, the context may be reused in subsequent keychain operations.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaincallback](https://developer.apple.com/documentation/security/seckeychaincallback)

# SecKeychainCallback (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.2+ (deprecated in 10.10)

A customized callback function that keychain services call when a keychain event has occurred.

> SecKeychain is deprecated

## Declaration

```swift
typealias SecKeychainCallback = (SecKeychainEvent, UnsafeMutablePointer<SecKeychainCallbackInfo>, UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `keychainEvent`: The keychain event that occurred. The type of event that can trigger your callback depends on the bit mask you passed in the `eventMask` parameter of the function [SecKeychainAddCallback(\_:\_:\_:)](seckeychainaddcallback%28______%29.md). See [SecKeychainEvent](seckeychainevent.md) for a list of possible values.
- `info`: A pointer to a structure of type [SecKeychainCallbackInfo](seckeychaincallbackinfo.md). This structure provides your callback with information about the keychain event.
- `context`: A pointer to application-defined storage that your application previously passed to the function [SecKeychainAddCallback(\_:\_:\_:)](seckeychainaddcallback%28______%29.md). You can use this value to provide information that the callback function needs in order to properly handle the event, such as an object on which the callback function should call a method.

<a id="return-value"></a>

## Return Value

A result code. See `Codes`.

<a id="Discussion"></a>

## Discussion

You would declare your keychain callback function like this if you were to name it `MyKeychainCallback`:

Listing 1. Declaring a keychain callback function

```objc
OSStatus MyKeychainCallback (
    SecKeychainEvent keychainEvent,
    SecKeychainCallbackInfo *info,
    void *context
);
```

To add your callback function, use the [SecKeychainAddCallback(\_:\_:\_:)](seckeychainaddcallback%28______%29.md) function. To remove your callback function, use the [SecKeychainRemoveCallback(\_:)](seckeychainremovecallback%28__%29.md) function.

# SecKeychainCallback (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.2+ (deprecated in 10.10)

A customized callback function that keychain services call when a keychain event has occurred.

> SecKeychain is deprecated

## Declaration

```objectivec
typedef int (*)(enum SecKeychainEvent, struct SecKeychainCallbackInfo *, void *) SecKeychainCallback;
```

## Parameters

- `keychainEvent`: The keychain event that occurred. The type of event that can trigger your callback depends on the bit mask you passed in the `eventMask` parameter of the function [SecKeychainAddCallback](seckeychainaddcallback%28______%29.md). See [SecKeychainEvent](seckeychainevent.md) for a list of possible values.
- `info`: A pointer to a structure of type [SecKeychainCallbackInfo](seckeychaincallbackinfo.md). This structure provides your callback with information about the keychain event.
- `context`: A pointer to application-defined storage that your application previously passed to the function [SecKeychainAddCallback](seckeychainaddcallback%28______%29.md). You can use this value to provide information that the callback function needs in order to properly handle the event, such as an object on which the callback function should call a method.

<a id="return-value"></a>

## Return Value

A result code. See `Codes`.

<a id="Discussion"></a>

## Discussion

You would declare your keychain callback function like this if you were to name it `MyKeychainCallback`:

Listing 1. Declaring a keychain callback function

```objc
OSStatus MyKeychainCallback (
    SecKeychainEvent keychainEvent,
    SecKeychainCallbackInfo *info,
    void *context
);
```

To add your callback function, use the [SecKeychainAddCallback](seckeychainaddcallback%28______%29.md) function. To remove your callback function, use the [SecKeychainRemoveCallback](seckeychainremovecallback%28__%29.md) function.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaincallbackinfo](https://developer.apple.com/documentation/security/seckeychaincallbackinfo)

# SecKeychainCallbackInfo (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

Information about a keychain event that keychain services deliver to your app via a callback function.

## Declaration

```swift
struct SecKeychainCallbackInfo
```

<a id="overview"></a>

## Overview

This structure contains information about the keychain event of which your application wants to be notified. Keychain services pass a pointer to this structure in the `info` parameter of your callback function. For information on how to write a keychain event callback function, see [SecKeychainCallback](seckeychaincallback.md).

## Topics

### Instance Properties

- [item](seckeychaincallbackinfo/item.md): A reference to the keychain item in which the event occurred. If the event did not involve an item, this field is not valid.
- [keychain](seckeychaincallbackinfo/keychain.md): A reference to the keychain in which the event occurred. If the event did not involve a keychain, this field is not valid.
- [pid](seckeychaincallbackinfo/pid.md): The ID of the process that generated this event.
- [version](seckeychaincallbackinfo/version.md): The version of this structure.

### Initializers

- [init(version:item:keychain:pid:)](seckeychaincallbackinfo/init%28version_item_keychain_pid_%29.md): Creates a new keychain callback information structure.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# SecKeychainCallbackInfo (Objective-C)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

Information about a keychain event that keychain services deliver to your app via a callback function.

## Declaration

```objectivec
struct SecKeychainCallbackInfo;
```

<a id="overview"></a>

## Overview

This structure contains information about the keychain event of which your application wants to be notified. Keychain services pass a pointer to this structure in the `info` parameter of your callback function. For information on how to write a keychain event callback function, see [SecKeychainCallback](seckeychaincallback.md).

## Topics

### Instance Properties

- [item](seckeychaincallbackinfo/item.md): A reference to the keychain item in which the event occurred. If the event did not involve an item, this field is not valid.
- [keychain](seckeychaincallbackinfo/keychain.md): A reference to the keychain in which the event occurred. If the event did not involve a keychain, this field is not valid.
- [pid](seckeychaincallbackinfo/pid.md): The ID of the process that generated this event.
- [version](seckeychaincallbackinfo/version.md): The version of this structure.

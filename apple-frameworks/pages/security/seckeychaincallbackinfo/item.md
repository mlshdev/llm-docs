> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaincallbackinfo/item](https://developer.apple.com/documentation/security/seckeychaincallbackinfo/item)

# item (Swift)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A reference to the keychain item in which the event occurred. If the event did not involve an item, this field is not valid.

## Declaration

```swift
var item: Unmanaged<SecKeychainItem>
```

# item (Objective-C)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A reference to the keychain item in which the event occurred. If the event did not involve an item, this field is not valid.

## Declaration

```objectivec
SecKeychainItemRef item;
```

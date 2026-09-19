> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeychaincallbackinfo/item

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

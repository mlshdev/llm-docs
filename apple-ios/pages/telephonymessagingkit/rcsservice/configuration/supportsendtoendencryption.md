> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/configuration/supportsendtoendencryption](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/configuration/supportsendtoendencryption)

# supportsEndToEndEncryption

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A Boolean value indicating whether the RCS service supports end-to-end encryption.

## Declaration

```swift
let supportsEndToEndEncryption: Bool
```

<a id="discussion"></a>

## Discussion

Before your app sends a message or performs a request that may be end-to-end encrypted, ensure that the RCS service supports end-to-end encryption by checking this property.

> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/remotecapabilities/supportsendtoendencryption](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/remotecapabilities/supportsendtoendencryption)

# supportsEndToEndEncryption

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A Boolean value indicating whether the remote end supports end-to-end encryption.

## Declaration

```swift
let supportsEndToEndEncryption: Bool
```

<a id="discussion"></a>

## Discussion

Before your app sends a message or performs a request that may be end-to-end encrypted, ensure that the remote end supports end-to-end encryption by checking this property.

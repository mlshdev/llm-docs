> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appclip/apactivationpayloaderror/disallowed](https://developer.apple.com/documentation/appclip/apactivationpayloaderror/disallowed)

# disallowed

**Framework:** App Clips  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The user denied location access, or the source of the App Clip invocation wasn’t an NFC tag or visual code.

## Declaration

```swift
static var disallowed: APActivationPayloadError.Code { get }
```

## See Also

### Interpreting errors

- [doesNotMatch](doesnotmatch.md): The provided URL doesn’t match the invocation URL you registered for the App Clip.
- [APActivationPayloadError.Code](code.md): Error codes that an App Clip activation payload returns.

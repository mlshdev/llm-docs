> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcshandle/phonenumber(_:)

# phoneNumber(\_:)

**Framework:** TelephonyMessagingKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+

Initializes a URI handle instance with the given phone number.

## Declaration

```swift
static func phoneNumber(_ phoneNumber: String) -> RCSHandle?
```

## Parameters

- `phoneNumber`: The phone number of the destination. Don’t include `tel` or `sip` prefixes.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applicensedeliverysdk/aldlicenseattribute/duration](https://developer.apple.com/documentation/applicensedeliverysdk/aldlicenseattribute/duration)

# duration

**Framework:** App License Delivery SDK  
**Kind:** Instance Property

The maximum amount of time, in seconds, that iOS considers the license valid.

## Declaration

```swift
var duration: UInt64
```

## Mentioned In

- [Licensing alternative distribution apps](../licensing-alternative-distribution-apps.md)
- [Renewing and revoking app licenses](../renewing-and-revoking-app-licenses.md)

<a id="discussion"></a>

## Discussion

The alternative app marketplace determines a value for this property at its discretion. iOS doesn’t let an app launch if the duration of its license lapses.

A value of `0` indicates that the license doesn’t expire. To revoke a license, see [Renewing and revoking app licenses](../renewing-and-revoking-app-licenses.md).

For an example that sets this property, see [Licensing alternative distribution apps](../licensing-alternative-distribution-apps.md).

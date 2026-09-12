> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotmanager/safaridomains](https://developer.apple.com/documentation/networkextension/nehotspotmanager/safaridomains)

# safariDomains

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

An array of domain strings for use with Safari-based hotspot authentication.

## Declaration

```swift
final var safariDomains: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

The containing app can specify these domains when it intends to use the [SFSafariViewController](../../safariservices/sfsafariviewcontroller.md) class for interacting with the hotspot service provider’s web application during hotspot authentication.

> **Note**

> You can specify a maximum of ten domains for this property.

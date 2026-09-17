> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webpage/navigationpreferences/preferredhttpsnavigationpolicy

# preferredHTTPSNavigationPolicy

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Used when performing a top-level navigation to a webpage.

## Declaration

```swift
var preferredHTTPSNavigationPolicy: WebPage.NavigationPreferences.UpgradeToHTTPSPolicy
```

<a id="discussion"></a>

## Discussion

The default value is `.keepAsRequested`. The stated preference is ignored on subframe navigation, and it may be ignored based on system configuration. The `WebPage.Configuration.upgradeKnownHostsToHTTPS` property supersedes this property for known hosts.

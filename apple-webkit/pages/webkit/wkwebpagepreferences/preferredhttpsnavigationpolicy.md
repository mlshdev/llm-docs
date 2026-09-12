> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebpagepreferences/preferredhttpsnavigationpolicy](https://developer.apple.com/documentation/webkit/wkwebpagepreferences/preferredhttpsnavigationpolicy)

# preferredHTTPSNavigationPolicy (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · visionOS 2.2+

## Declaration

```swift
var preferredHTTPSNavigationPolicy: WKWebpagePreferences.UpgradeToHTTPSPolicy { get set }
```

<a id="discussion"></a>

## Discussion

A WKWebpagePreferencesUpgradeToHTTPSPolicy indicating the desired mode used when performing a top-level navigation to a webpage.

The default value is WKWebpagePreferencesUpgradeToHTTPSPolicyKeepAsRequested. The stated preference is ignored on subframe navigation, and it may be ignored based on system configuration. The upgradeKnownHostsToHTTPS property on WKWebViewConfiguration supercedes this policy for known hosts.

# preferredHTTPSNavigationPolicy (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · visionOS 2.2+

## Declaration

```objectivec
@property (nonatomic) WKWebpagePreferencesUpgradeToHTTPSPolicy preferredHTTPSNavigationPolicy;
```

<a id="discussion"></a>

## Discussion

A WKWebpagePreferencesUpgradeToHTTPSPolicy indicating the desired mode used when performing a top-level navigation to a webpage.

The default value is WKWebpagePreferencesUpgradeToHTTPSPolicyKeepAsRequested. The stated preference is ignored on subframe navigation, and it may be ignored based on system configuration. The upgradeKnownHostsToHTTPS property on WKWebViewConfiguration supercedes this policy for known hosts.

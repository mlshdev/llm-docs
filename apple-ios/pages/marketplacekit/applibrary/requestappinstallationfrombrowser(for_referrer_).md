> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/marketplacekit/applibrary/requestappinstallationfrombrowser(for:referrer:)

# requestAppInstallationFromBrowser(for:referrer:)

**Framework:** MarketplaceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Forwards an app installation request from the developer’s webpage.

## Declaration

```swift
nonisolated final func requestAppInstallationFromBrowser(for url: URL, referrer: URL) async throws
```

## Parameters

- `url`: The unparsed `marketplace-kit` URL that triggers the installation request.
- `referrer`: The origin of the top frame that contains the alternative marketplace installation URL.

## Mentioned In

- [Enabling alternative distribution app installation in a browser](../enabling-alternative-distribution-app-installation-in-a-browser.md)

<a id="discussion"></a>

## Discussion

Web browsers that render with [BrowserEngineKit](https://developer.apple.com/documentation/browserenginekit) rather than [WebKit](https://developer.apple.com/documentation/webkit) call this method to forward the installation of an app from the developer’s webpage. Your browser listens for [MarketplaceKitURIScheme](../marketplacekiturischeme.md) invocations to field such requests.

For more information, see [Enabling alternative distribution app installation in a browser](../enabling-alternative-distribution-app-installation-in-a-browser.md).

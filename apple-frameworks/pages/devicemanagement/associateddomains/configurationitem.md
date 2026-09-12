> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/associateddomains/configurationitem](https://developer.apple.com/documentation/devicemanagement/associateddomains/configurationitem)

# AssociatedDomains.ConfigurationItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.15+

A dictionary that maps apps to their associated domains.

## Declaration

```
object AssociatedDomains.ConfigurationItem
```

## Properties

- `ApplicationIdentifier` — `string` (required): The app identifier to associate the domains with.
- `AssociatedDomains` — `[string]` (required): The domains to associate with the app. Each string is in the form of `service:domain`. Use fully qualified hostnames, such as `www.example.com`. See [Supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains) for more information.
- `EnableDirectDownloads` — `boolean`: If `true`, the system enables direct download of data for this domain instead of through a CDN. Set the entitlement value for this domain to `service:domain?mode=managed`; otherwise, the system ignores this value.

  Available: macOS 11+  
  **Default:** `false`

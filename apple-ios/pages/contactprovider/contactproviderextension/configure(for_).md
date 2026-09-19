> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactproviderextension/configure(for:)

# configure(for:)

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Configures the extension instance for a domain.

## Declaration

```swift
func configure(for domain: any ContactProviderDomain)
```

<a id="discussion"></a>

## Discussion

The system configures the extension for a domain before any enumeration begins.

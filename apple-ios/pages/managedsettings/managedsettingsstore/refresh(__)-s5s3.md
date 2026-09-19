> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/managedsettingsstore/refresh(_:)-s5s3

# refresh(\_:)

**Framework:** Managed Settings  
**Kind:** Type Method  
**Availability:** iOS 26.5+ · iPadOS 26.5+ · Mac Catalyst 26.5+

Refresh expired WebDomainTokens

## Declaration

```swift
static func refresh(_ tokens: inout [WebDomainToken]) throws
```

## Parameters

- `tokens`: The web domain tokens to refresh

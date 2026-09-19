> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/managedsettingsstore/refresh(_:)-65mti

# refresh(\_:)

**Framework:** Managed Settings  
**Kind:** Type Method  
**Availability:** iOS 26.5+ · iPadOS 26.5+ · Mac Catalyst 26.5+

Refresh expired ApplicationTokens

## Declaration

```swift
static func refresh(_ tokens: inout [ApplicationToken]) throws
```

## Parameters

- `tokens`: The application tokens to refresh

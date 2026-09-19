> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/managedsettingsstore/refresh(_:)-4v4xe

# refresh(\_:)

**Framework:** Managed Settings  
**Kind:** Type Method  
**Availability:** iOS 26.5+ · iPadOS 26.5+ · Mac Catalyst 26.5+

Refresh expired ActivityCategoryTokens

## Declaration

```swift
static func refresh(_ tokens: inout [ActivityCategoryToken]) throws
```

## Parameters

- `tokens`: The activity category tokens to refresh

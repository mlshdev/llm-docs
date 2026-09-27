> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorymessage/builder/buildblock(_:)

# buildBlock(\_:)

**Framework:** Accessory Transport Extension  
**Kind:** Type Method  
**Availability:** iOS 26.5+

Builds an accessory message from one or more payload components.

## Declaration

```swift
static func buildBlock(_ components: AccessoryMessage...) -> AccessoryMessage
```

## Parameters

- `components`: A variadic list of payload objects.

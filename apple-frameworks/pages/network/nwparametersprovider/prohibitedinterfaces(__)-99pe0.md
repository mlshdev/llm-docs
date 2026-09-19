> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwparametersprovider/prohibitedinterfaces(_:)-99pe0

# prohibitedInterfaces(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Prohibit certain interfaces from being used to connect, listen, and browse.

## Declaration

```swift
func prohibitedInterfaces(_ interfaces: [NWInterface]) -> Self
```

## Parameters

- `interfaces`: An array of interfaces to prohibit.

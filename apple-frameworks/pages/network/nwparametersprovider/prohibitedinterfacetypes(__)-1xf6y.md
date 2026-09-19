> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwparametersprovider/prohibitedinterfacetypes(_:)-1xf6y

# prohibitedInterfaceTypes(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Prohibit certain interface types from being used to connect, listen, and browse.

## Declaration

```swift
func prohibitedInterfaceTypes(_ types: [NWInterface.InterfaceType]) -> Self
```

## Parameters

- `types`: An array of interface types to prohibit.

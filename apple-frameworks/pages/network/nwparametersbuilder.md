> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwparametersbuilder

# NWParametersBuilder

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An opaque class that is responsible for creating and configuring NWParameters based on the parameterized protocol stack.

## Declaration

```swift
struct NWParametersBuilder<Top, each P> where Top : NetworkProtocolOptions, repeat each P : NetworkProtocolOptions
```

## Topics

### Initializers

- [init(\_:)](nwparametersbuilder/init%28__%29.md)
- [init(auto:)](nwparametersbuilder/init%28auto_%29.md)

### Instance Methods

- [wifiAware(\_:)](nwparametersbuilder/wifiaware%28__%29.md): Conforms when `Top` conforms to `NetworkProtocolOptions` and `each P` conforms to `NetworkProtocolOptions`. Configure Wi-Fi Aware properties on an `NetworkConnection`

### Type Methods

- [parameters(\_:)](nwparametersbuilder/parameters%28__%29.md)
- [parameters(initialParameters:\_:)](nwparametersbuilder/parameters%28initialparameters___%29.md)

## Relationships

### Conforms To

- [NWParametersProvider](nwparametersprovider.md)

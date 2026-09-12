> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedapp/managedappconfigurationprovider](https://developer.apple.com/documentation/managedapp/managedappconfigurationprovider)

# ManagedAppConfigurationProvider

**Framework:** ManagedApp  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · macOS 27.0+ · visionOS 2.4+

A class that provides configurations that an MDM admin provisions for a managed app or extension.

## Declaration

```swift
class ManagedAppConfigurationProvider
```

<a id="overview"></a>

## Overview

This class provides objects of a type you define, which decodes and validates the configuration that the framework receives from the MDM server.

The framework ingests the configuration in the form of a property list that the MDM server provides and passes to your type as a [Decoder](https://developer.apple.com/documentation/swift/decoder). Your type conforms to [Decodable](https://developer.apple.com/documentation/swift/decodable) and parses the configuration according to your specification that the server admin conforms to when creating the property list.

If the decoder encounters a problem, it throws an error that the MDM admin can find in the device’s event log.

## Topics

### Initializing a configuration provider

- [init()](managedappconfigurationprovider/init%28%29.md): Initializes a configuration provider.

### Accessing configurations

- [configurations(\_:)](managedappconfigurationprovider/configurations%28__%29.md): Provides an asynchronous sequence of configurations that the MDM admin specifies.

## See Also

### Configuration

- [Specifying and decoding a configuration](specifying-and-decoding-a-configuration.md): Publish a configuration specification and implement a decoder that parses and validates configuration provided by an MDM admin.

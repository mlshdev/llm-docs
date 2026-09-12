> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/setprivacycontext(_:)](https://developer.apple.com/documentation/network/nwparameters/setprivacycontext(_:))

# setPrivacyContext(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Associates a privacy context with any connections or listeners that use the parameters.

## Declaration

```swift
final func setPrivacyContext(_ privacyContext: NWParameters.PrivacyContext)
```

<a id="Discussion"></a>

## Discussion

The privacy context allows using separate caches for different sets of connections, as well as restricting how connection-specific information is logged and shared on the network.

## See Also

### Configuring Privacy Settings

- [NWParameters.PrivacyContext](privacycontext.md): An object that defines the privacy requirements for a set of connections.

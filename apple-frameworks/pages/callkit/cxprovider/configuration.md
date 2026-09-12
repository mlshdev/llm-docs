> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxprovider/configuration](https://developer.apple.com/documentation/callkit/cxprovider/configuration)

# configuration (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The configuration of the provider.

## Declaration

```swift
@NSCopying var configuration: CXProviderConfiguration { get set }
```

<a id="Discussion"></a>

## Discussion

This property returns a copy of the provider configuration. To change the configuration of the provider, you must set this property to a  new [CXProviderConfiguration](../cxproviderconfiguration.md) object.

# configuration (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The configuration of the provider.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) CXProviderConfiguration * configuration;
```

<a id="Discussion"></a>

## Discussion

This property returns a copy of the provider configuration. To change the configuration of the provider, you must set this property to a  new [CXProviderConfiguration](../cxproviderconfiguration.md) object.

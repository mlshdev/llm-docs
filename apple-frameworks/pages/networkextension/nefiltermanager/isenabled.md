> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltermanager/isenabled](https://developer.apple.com/documentation/networkextension/nefiltermanager/isenabled)

# isEnabled (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A Boolean used to toggle the enabled state of the filter.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) and saving the configuration will disable all other network content filters on the system, and will start the filter’s Filter Provider extensions. Setting this property to false and saving the configuration will disable the filter and stop the filter’s Filter Provider extensions.

## See Also

### Accessing filter configuration properties

- [providerConfiguration](providerconfiguration.md): A [NEFilterProviderConfiguration](../nefilterproviderconfiguration.md) object containing the filter configuration settings.
- [localizedDescription](localizeddescription.md): A string containing a description of the filter configuration.

# enabled (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A Boolean used to toggle the enabled state of the filter.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) and saving the configuration will disable all other network content filters on the system, and will start the filter’s Filter Provider extensions. Setting this property to false and saving the configuration will disable the filter and stop the filter’s Filter Provider extensions.

## See Also

### Accessing filter configuration properties

- [providerConfiguration](providerconfiguration.md): A [NEFilterProviderConfiguration](../nefilterproviderconfiguration.md) object containing the filter configuration settings.
- [localizedDescription](localizeddescription.md): A string containing a description of the filter configuration.

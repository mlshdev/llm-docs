> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltermanager/providerconfiguration](https://developer.apple.com/documentation/networkextension/nefiltermanager/providerconfiguration)

# providerConfiguration (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A [NEFilterProviderConfiguration](../nefilterproviderconfiguration.md) object containing the filter configuration settings.

## Declaration

```swift
var providerConfiguration: NEFilterProviderConfiguration? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is nil after calling `loadFromPreferencesWithCompletionHandler:`, then the filter configuration does not exist in the Network Extension preferences.

## See Also

### Accessing filter configuration properties

- [isEnabled](isenabled.md): A Boolean used to toggle the enabled state of the filter.
- [localizedDescription](localizeddescription.md): A string containing a description of the filter configuration.

# providerConfiguration (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A [NEFilterProviderConfiguration](../nefilterproviderconfiguration.md) object containing the filter configuration settings.

## Declaration

```objectivec
@property (strong, nullable) NEFilterProviderConfiguration * providerConfiguration;
```

<a id="Discussion"></a>

## Discussion

If this property is nil after calling `loadFromPreferencesWithCompletionHandler:`, then the filter configuration does not exist in the Network Extension preferences.

## See Also

### Accessing filter configuration properties

- [enabled](isenabled.md): A Boolean used to toggle the enabled state of the filter.
- [localizedDescription](localizeddescription.md): A string containing a description of the filter configuration.

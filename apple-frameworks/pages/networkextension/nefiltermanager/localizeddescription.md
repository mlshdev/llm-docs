> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltermanager/localizeddescription](https://developer.apple.com/documentation/networkextension/nefiltermanager/localizeddescription)

# localizedDescription (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A string containing a description of the filter configuration.

## Declaration

```swift
var localizedDescription: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is set to nil at the time that the configuration is created, it will be automatically set to the display name of the calling app.

## See Also

### Accessing filter configuration properties

- [isEnabled](isenabled.md): A Boolean used to toggle the enabled state of the filter.
- [providerConfiguration](providerconfiguration.md): A [NEFilterProviderConfiguration](../nefilterproviderconfiguration.md) object containing the filter configuration settings.

# localizedDescription (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A string containing a description of the filter configuration.

## Declaration

```objectivec
@property (copy, nullable) NSString * localizedDescription;
```

<a id="Discussion"></a>

## Discussion

If this property is set to nil at the time that the configuration is created, it will be automatically set to the display name of the calling app.

## See Also

### Accessing filter configuration properties

- [enabled](isenabled.md): A Boolean used to toggle the enabled state of the filter.
- [providerConfiguration](providerconfiguration.md): A [NEFilterProviderConfiguration](../nefilterproviderconfiguration.md) object containing the filter configuration settings.

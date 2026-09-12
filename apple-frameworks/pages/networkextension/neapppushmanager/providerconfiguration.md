> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushmanager/providerconfiguration](https://developer.apple.com/documentation/networkextension/neapppushmanager/providerconfiguration)

# providerConfiguration (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A dictionary that contains vendor-specific key-value pairs, that you use to configure a provider.

## Declaration

```swift
var providerConfiguration: [String : Any] { get set }
```

<a id="Discussion"></a>

## Discussion

The dictionary’s values must only use data types supported by [PropertyListSerialization](../../foundation/propertylistserialization.md); you can’t use custom types for the values.

The manager passes this dictionary as-is to the [NEAppPushProvider](../neapppushprovider.md) when the provider starts.

## See Also

### Inspecting provider properties

- [providerBundleIdentifier](providerbundleidentifier.md): A string that contains the bundle identifier of the push provider.

# providerConfiguration (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A dictionary that contains vendor-specific key-value pairs, that you use to configure a provider.

## Declaration

```objectivec
@property (copy) NSDictionary<NSString *,id> * providerConfiguration;
```

<a id="Discussion"></a>

## Discussion

The dictionary’s values must only use data types supported by [NSPropertyListSerialization](../../foundation/propertylistserialization.md); you can’t use custom types for the values.

The manager passes this dictionary as-is to the [NEAppPushProvider](../neapppushprovider.md) when the provider starts.

## See Also

### Inspecting provider properties

- [providerBundleIdentifier](providerbundleidentifier.md): A string that contains the bundle identifier of the push provider.

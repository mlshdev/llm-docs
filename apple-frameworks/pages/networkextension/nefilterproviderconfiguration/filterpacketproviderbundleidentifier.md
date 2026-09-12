> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterproviderconfiguration/filterpacketproviderbundleidentifier](https://developer.apple.com/documentation/networkextension/nefilterproviderconfiguration/filterpacketproviderbundleidentifier)

# filterPacketProviderBundleIdentifier (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The bundle identifier of the filter packet provider system extension.

## Declaration

```swift
var filterPacketProviderBundleIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, then the framework uses the bundle identifier of the [NEFilterPacketProvider](../nefilterpacketprovider.md) extension in the calling app’s bundle. In this case, make sure the calling app’s bundle contains only one [NEFilterPacketProvider](../nefilterpacketprovider.md), so there’s no ambiguity about which one to use.

This property only applies to system extensions, since macOS doesn’t support implementing a filter packet provider as an app extension.

## See Also

### Accessing bundle identifiers

- [filterDataProviderBundleIdentifier](filterdataproviderbundleidentifier.md): The bundle identifier of the filter data provider system extension.

# filterPacketProviderBundleIdentifier (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The bundle identifier of the filter packet provider system extension.

## Declaration

```objectivec
@property (copy, nullable) NSString * filterPacketProviderBundleIdentifier;
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, then the framework uses the bundle identifier of the [NEFilterPacketProvider](../nefilterpacketprovider.md) extension in the calling app’s bundle. In this case, make sure the calling app’s bundle contains only one [NEFilterPacketProvider](../nefilterpacketprovider.md), so there’s no ambiguity about which one to use.

This property only applies to system extensions, since macOS doesn’t support implementing a filter packet provider as an app extension.

## See Also

### Accessing bundle identifiers

- [filterDataProviderBundleIdentifier](filterdataproviderbundleidentifier.md): The bundle identifier of the filter data provider system extension.

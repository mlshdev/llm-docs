> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterproviderconfiguration/filterdataproviderbundleidentifier](https://developer.apple.com/documentation/networkextension/nefilterproviderconfiguration/filterdataproviderbundleidentifier)

# filterDataProviderBundleIdentifier (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The bundle identifier of the filter data provider system extension.

## Declaration

```swift
var filterDataProviderBundleIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, then the framework uses the bundle identifier of the [NEFilterDataProvider](../nefilterdataprovider.md) extension in the calling app’s bundle. In this case, make sure the calling app’s bundle contains only one [NEFilterDataProvider](../nefilterdataprovider.md), so there’s no ambiguity about which one to use.

This property only applies to system extensions, since macOS doesn’t support implementing a filter data provider as an app extension.

## See Also

### Accessing bundle identifiers

- [filterPacketProviderBundleIdentifier](filterpacketproviderbundleidentifier.md): The bundle identifier of the filter packet provider system extension.

# filterDataProviderBundleIdentifier (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The bundle identifier of the filter data provider system extension.

## Declaration

```objectivec
@property (copy, nullable) NSString * filterDataProviderBundleIdentifier;
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, then the framework uses the bundle identifier of the [NEFilterDataProvider](../nefilterdataprovider.md) extension in the calling app’s bundle. In this case, make sure the calling app’s bundle contains only one [NEFilterDataProvider](../nefilterdataprovider.md), so there’s no ambiguity about which one to use.

This property only applies to system extensions, since macOS doesn’t support implementing a filter data provider as an app extension.

## See Also

### Accessing bundle identifiers

- [filterPacketProviderBundleIdentifier](filterpacketproviderbundleidentifier.md): The bundle identifier of the filter packet provider system extension.

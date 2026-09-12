> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser(_:didremoveunconfiguredaccessories:)](https://developer.apple.com/documentation/externalaccessory/eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser(_:didremoveunconfiguredaccessories:))

# accessoryBrowser(\_:didRemoveUnconfiguredAccessories:) (Swift)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates that the browser removed an unconfigured accessory from the search results.

## Declaration

```swift
func accessoryBrowser(_ browser: EAWiFiUnconfiguredAccessoryBrowser, didRemoveUnconfiguredAccessories accessories: Set<EAWiFiUnconfiguredAccessory>)
```

## Parameters

- `browser`: The instance of [EAWiFiUnconfiguredAccessoryBrowser](../eawifiunconfiguredaccessorybrowser.md) that is generating the event.
- `accessories`: The set of [EAWiFiUnconfiguredAccessory](../eawifiunconfiguredaccessory.md) objects that have been removed from the scan results since the last update. The browser removes only accessories that match the filter predicate you specified at the start of the search.

<a id="Discussion"></a>

## Discussion

This method is called when the browser removes an accessory from the primary list of unconfigured accessories represented in its [unconfiguredAccessories](../eawifiunconfiguredaccessorybrowser/unconfiguredaccessories.md) property. A delegate can implement this method to present to the user the current list of unconfigured accessories. Because this method is called every time an unconfigured accessory is removed from the list, you might use this callback as a prompt to check the list of accessories in [unconfiguredAccessories](../eawifiunconfiguredaccessorybrowser/unconfiguredaccessories.md).

## See Also

### Getting Updates About the Search Process

- [accessoryBrowser(\_:didFindUnconfiguredAccessories:)](accessorybrowser%28__didfindunconfiguredaccessories_%29.md): Indicates that the browser found a new unconfigured accessory that matches the filter predicate defined at the start of the search.

# accessoryBrowser:didRemoveUnconfiguredAccessories: (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates that the browser removed an unconfigured accessory from the search results.

## Declaration

```objectivec
- (void) accessoryBrowser:(EAWiFiUnconfiguredAccessoryBrowser *) browser didRemoveUnconfiguredAccessories:(NSSet<EAWiFiUnconfiguredAccessory *> *) accessories;
```

## Parameters

- `browser`: The instance of [EAWiFiUnconfiguredAccessoryBrowser](../eawifiunconfiguredaccessorybrowser.md) that is generating the event.
- `accessories`: The set of [EAWiFiUnconfiguredAccessory](../eawifiunconfiguredaccessory.md) objects that have been removed from the scan results since the last update. The browser removes only accessories that match the filter predicate you specified at the start of the search.

<a id="Discussion"></a>

## Discussion

This method is called when the browser removes an accessory from the primary list of unconfigured accessories represented in its [unconfiguredAccessories](../eawifiunconfiguredaccessorybrowser/unconfiguredaccessories.md) property. A delegate can implement this method to present to the user the current list of unconfigured accessories. Because this method is called every time an unconfigured accessory is removed from the list, you might use this callback as a prompt to check the list of accessories in [unconfiguredAccessories](../eawifiunconfiguredaccessorybrowser/unconfiguredaccessories.md).

## See Also

### Getting Updates About the Search Process

- [accessoryBrowser:didFindUnconfiguredAccessories:](accessorybrowser%28__didfindunconfiguredaccessories_%29.md): Indicates that the browser found a new unconfigured accessory that matches the filter predicate defined at the start of the search.

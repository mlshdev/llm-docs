> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eawifiunconfiguredaccessorybrowser/startsearchingforunconfiguredaccessories(matching:)](https://developer.apple.com/documentation/externalaccessory/eawifiunconfiguredaccessorybrowser/startsearchingforunconfiguredaccessories(matching:))

# startSearchingForUnconfiguredAccessories(matching:) (Swift)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Starts the search for unconfigured accessories that match the specified predicate.

## Declaration

```swift
func startSearchingForUnconfiguredAccessories(matching predicate: NSPredicate?)
```

## Parameters

- `predicate`: The desired filter for unconfigured accessory results conforming to the [EAWiFiUnconfiguredAccessoryBrowserDelegate](../eawifiunconfiguredaccessorybrowserdelegate.md) protocol.

<a id="Discussion"></a>

## Discussion

This method starts a Wi-Fi scan for unconfigured accessories. Note that searching is a power and resource intensive process and must only be used when actively searching for accessories. As soon as the desired accessories have been located, you should immediately stop a search.

## See Also

### Finding and Configuring Accessories

- [configureAccessory(\_:withConfigurationUIOn:)](configureaccessory%28__withconfigurationuion_%29.md): Begins the configuration process for the specified accessory.
- [stopSearchingForUnconfiguredAccessories()](stopsearchingforunconfiguredaccessories%28%29.md): Stops the search for unconfigured accessories.
- [unconfiguredAccessories](unconfiguredaccessories.md): The set of unconfigured accessories that have been discovered.

# startSearchingForUnconfiguredAccessoriesMatchingPredicate: (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Starts the search for unconfigured accessories that match the specified predicate.

## Declaration

```objectivec
- (void) startSearchingForUnconfiguredAccessoriesMatchingPredicate:(NSPredicate *) predicate;
```

## Parameters

- `predicate`: The desired filter for unconfigured accessory results conforming to the [EAWiFiUnconfiguredAccessoryBrowserDelegate](../eawifiunconfiguredaccessorybrowserdelegate.md) protocol.

<a id="Discussion"></a>

## Discussion

This method starts a Wi-Fi scan for unconfigured accessories. Note that searching is a power and resource intensive process and must only be used when actively searching for accessories. As soon as the desired accessories have been located, you should immediately stop a search.

## See Also

### Finding and Configuring Accessories

- [configureAccessory:withConfigurationUIOnViewController:](configureaccessory%28__withconfigurationuion_%29.md): Begins the configuration process for the specified accessory.
- [stopSearchingForUnconfiguredAccessories](stopsearchingforunconfiguredaccessories%28%29.md): Stops the search for unconfigured accessories.
- [unconfiguredAccessories](unconfiguredaccessories.md): The set of unconfigured accessories that have been discovered.

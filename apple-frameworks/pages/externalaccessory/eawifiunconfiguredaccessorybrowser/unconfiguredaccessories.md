> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eawifiunconfiguredaccessorybrowser/unconfiguredaccessories](https://developer.apple.com/documentation/externalaccessory/eawifiunconfiguredaccessorybrowser/unconfiguredaccessories)

# unconfiguredAccessories (Swift)

**Framework:** External Accessory  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The set of unconfigured accessories that have been discovered.

## Declaration

```swift
var unconfiguredAccessories: Set<EAWiFiUnconfiguredAccessory> { get }
```

<a id="Discussion"></a>

## Discussion

The set of accessories in this property represents a snapshot that includes only those objects that match the filter predicate defined when starting the search. You can think of this property as representing the primary list of unconfigured accessories that have been found. Note that the [accessoryBrowser(\_:didFindUnconfiguredAccessories:)](../eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didfindunconfiguredaccessories_%29.md) delegate method is called when accessories are added to this list; similarly, [accessoryBrowser(\_:didRemoveUnconfiguredAccessories:)](../eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didremoveunconfiguredaccessories_%29.md) is called when accessories are removed from this list.

## See Also

### Finding and Configuring Accessories

- [configureAccessory(\_:withConfigurationUIOn:)](configureaccessory%28__withconfigurationuion_%29.md): Begins the configuration process for the specified accessory.
- [startSearchingForUnconfiguredAccessories(matching:)](startsearchingforunconfiguredaccessories%28matching_%29.md): Starts the search for unconfigured accessories that match the specified predicate.
- [stopSearchingForUnconfiguredAccessories()](stopsearchingforunconfiguredaccessories%28%29.md): Stops the search for unconfigured accessories.

# unconfiguredAccessories (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The set of unconfigured accessories that have been discovered.

## Declaration

```objectivec
@property (atomic, copy, readonly) NSSet<EAWiFiUnconfiguredAccessory *> * unconfiguredAccessories;
```

<a id="Discussion"></a>

## Discussion

The set of accessories in this property represents a snapshot that includes only those objects that match the filter predicate defined when starting the search. You can think of this property as representing the primary list of unconfigured accessories that have been found. Note that the [accessoryBrowser:didFindUnconfiguredAccessories:](../eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didfindunconfiguredaccessories_%29.md) delegate method is called when accessories are added to this list; similarly, [accessoryBrowser:didRemoveUnconfiguredAccessories:](../eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didremoveunconfiguredaccessories_%29.md) is called when accessories are removed from this list.

## See Also

### Finding and Configuring Accessories

- [configureAccessory:withConfigurationUIOnViewController:](configureaccessory%28__withconfigurationuion_%29.md): Begins the configuration process for the specified accessory.
- [startSearchingForUnconfiguredAccessoriesMatchingPredicate:](startsearchingforunconfiguredaccessories%28matching_%29.md): Starts the search for unconfigured accessories that match the specified predicate.
- [stopSearchingForUnconfiguredAccessories](stopsearchingforunconfiguredaccessories%28%29.md): Stops the search for unconfigured accessories.

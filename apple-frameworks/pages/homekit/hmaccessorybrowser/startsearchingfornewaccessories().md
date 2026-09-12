> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorybrowser/startsearchingfornewaccessories()](https://developer.apple.com/documentation/homekit/hmaccessorybrowser/startsearchingfornewaccessories())

# startSearchingForNewAccessories() (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Starts searching for accessories not yet associated with a home.

## Declaration

```swift
func startSearchingForNewAccessories()
```

<a id="Discussion"></a>

## Discussion

HomeKit notifies your accessory browser delegate by calling the [accessoryBrowser(\_:didFindNewAccessory:)](../hmaccessorybrowserdelegate/accessorybrowser%28__didfindnewaccessory_%29.md) and [accessoryBrowser(\_:didRemoveNewAccessory:)](../hmaccessorybrowserdelegate/accessorybrowser%28__didremovenewaccessory_%29.md) methods when it detects accessories being added or removed, respectively.

When you start a search, HomeKit clears the [discoveredAccessories](discoveredaccessories.md) array of content from the previous search.

## See Also

### Discovering accessories

- [discoveredAccessories](discoveredaccessories.md): An array of accessories discovered during a search.
- [stopSearchingForNewAccessories()](stopsearchingfornewaccessories%28%29.md): Stops searching for new accessories.

# startSearchingForNewAccessories (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

Starts searching for accessories not yet associated with a home.

## Declaration

```objectivec
- (void) startSearchingForNewAccessories;
```

<a id="Discussion"></a>

## Discussion

HomeKit notifies your accessory browser delegate by calling the [accessoryBrowser:didFindNewAccessory:](../hmaccessorybrowserdelegate/accessorybrowser%28__didfindnewaccessory_%29.md) and [accessoryBrowser:didRemoveNewAccessory:](../hmaccessorybrowserdelegate/accessorybrowser%28__didremovenewaccessory_%29.md) methods when it detects accessories being added or removed, respectively.

When you start a search, HomeKit clears the [discoveredAccessories](discoveredaccessories.md) array of content from the previous search.

## See Also

### Discovering accessories

- [discoveredAccessories](discoveredaccessories.md): An array of accessories discovered during a search.
- [stopSearchingForNewAccessories](stopsearchingfornewaccessories%28%29.md): Stops searching for new accessories.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorybrowser/discoveredaccessories](https://developer.apple.com/documentation/homekit/hmaccessorybrowser/discoveredaccessories)

# discoveredAccessories (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

An array of accessories discovered during a search.

## Declaration

```swift
var discoveredAccessories: [HMAccessory] { get }
```

<a id="Discussion"></a>

## Discussion

When you start a new search by calling the [startSearchingForNewAccessories()](startsearchingfornewaccessories%28%29.md) method, HomeKit clears the [discoveredAccessories](discoveredaccessories.md) array. It then modifies the array as it discovers new accessories until you end the search by calling the [stopSearchingForNewAccessories()](stopsearchingfornewaccessories%28%29.md) method.

## See Also

### Discovering accessories

- [startSearchingForNewAccessories()](startsearchingfornewaccessories%28%29.md): Starts searching for accessories not yet associated with a home.
- [stopSearchingForNewAccessories()](stopsearchingfornewaccessories%28%29.md): Stops searching for new accessories.

# discoveredAccessories (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

An array of accessories discovered during a search.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMAccessory *> * discoveredAccessories;
```

<a id="Discussion"></a>

## Discussion

When you start a new search by calling the [startSearchingForNewAccessories](startsearchingfornewaccessories%28%29.md) method, HomeKit clears the [discoveredAccessories](discoveredaccessories.md) array. It then modifies the array as it discovers new accessories until you end the search by calling the [stopSearchingForNewAccessories](stopsearchingfornewaccessories%28%29.md) method.

## See Also

### Discovering accessories

- [startSearchingForNewAccessories](startsearchingfornewaccessories%28%29.md): Starts searching for accessories not yet associated with a home.
- [stopSearchingForNewAccessories](stopsearchingfornewaccessories%28%29.md): Stops searching for new accessories.

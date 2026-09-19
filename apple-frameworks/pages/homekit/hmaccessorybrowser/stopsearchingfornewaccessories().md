> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmaccessorybrowser/stopsearchingfornewaccessories()

# stopSearchingForNewAccessories() (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Stops searching for new accessories.

## Declaration

```swift
func stopSearchingForNewAccessories()
```

<a id="Discussion"></a>

## Discussion

After you call this method, HomeKit stops sending updates to your browser delegate. Scanning may continue for system reasons or if other delegates are still active, but the [discoveredAccessories](discoveredaccessories.md) array remains unchanged after you stop the search until your app calls the [startSearchingForNewAccessories()](startsearchingfornewaccessories%28%29.md) method again.

## See Also

### Discovering accessories

- [discoveredAccessories](discoveredaccessories.md): An array of accessories discovered during a search.
- [startSearchingForNewAccessories()](startsearchingfornewaccessories%28%29.md): Starts searching for accessories not yet associated with a home.

# stopSearchingForNewAccessories (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

Stops searching for new accessories.

## Declaration

```objectivec
- (void) stopSearchingForNewAccessories;
```

<a id="Discussion"></a>

## Discussion

After you call this method, HomeKit stops sending updates to your browser delegate. Scanning may continue for system reasons or if other delegates are still active, but the [discoveredAccessories](discoveredaccessories.md) array remains unchanged after you stop the search until your app calls the [startSearchingForNewAccessories](startsearchingfornewaccessories%28%29.md) method again.

## See Also

### Discovering accessories

- [discoveredAccessories](discoveredaccessories.md): An array of accessories discovered during a search.
- [startSearchingForNewAccessories](startsearchingfornewaccessories%28%29.md): Starts searching for accessories not yet associated with a home.

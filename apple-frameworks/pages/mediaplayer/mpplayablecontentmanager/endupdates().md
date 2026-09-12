> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentmanager/endupdates()](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentmanager/endupdates())

# endUpdates() (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Ends a synchronized update.

> Use CarPlay framework

## Declaration

```swift
func endUpdates()
```

<a id="Discussion"></a>

## Discussion

Call this method upon completion of the batch updates. If you call this method in the middle of an update, all updates stop and you’ll need to apply remaining updates at a later time.

## See Also

### Updating data

- [beginUpdates()](beginupdates%28%29.md): Deprecated. Updates several Media Player content items at once.
- [reloadData()](reloaddata%28%29.md): Deprecated. Reloads the data from the data source.

# endUpdates (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Ends a synchronized update.

> Use CarPlay framework

## Declaration

```objectivec
- (void) endUpdates;
```

<a id="Discussion"></a>

## Discussion

Call this method upon completion of the batch updates. If you call this method in the middle of an update, all updates stop and you’ll need to apply remaining updates at a later time.

## See Also

### Updating data

- [beginUpdates](beginupdates%28%29.md): Deprecated. Updates several Media Player content items at once.
- [reloadData](reloaddata%28%29.md): Deprecated. Reloads the data from the data source.

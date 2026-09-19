> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpplayablecontentmanager/beginupdates()

# beginUpdates() (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Updates several Media Player content items at once.

> Use CarPlay framework

## Declaration

```swift
func beginUpdates()
```

<a id="Discussion"></a>

## Discussion

Call this method to start a synchronized batch update of `MPContentItems` objects.

## See Also

### Updating data

- [endUpdates()](endupdates%28%29.md): Deprecated. Ends a synchronized update.
- [reloadData()](reloaddata%28%29.md): Deprecated. Reloads the data from the data source.

# beginUpdates (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Updates several Media Player content items at once.

> Use CarPlay framework

## Declaration

```objectivec
- (void) beginUpdates;
```

<a id="Discussion"></a>

## Discussion

Call this method to start a synchronized batch update of `MPContentItems` objects.

## See Also

### Updating data

- [endUpdates](endupdates%28%29.md): Deprecated. Ends a synchronized update.
- [reloadData](reloaddata%28%29.md): Deprecated. Reloads the data from the data source.

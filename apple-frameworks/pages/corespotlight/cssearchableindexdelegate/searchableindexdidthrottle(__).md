> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindexdelegate/searchableindexdidthrottle(_:)](https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate/searchableindexdidthrottle(_:))

# searchableIndexDidThrottle(\_:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Tells the delegate that indexing is being throttled.

## Declaration

```swift
optional func searchableIndexDidThrottle(_ searchableIndex: CSSearchableIndex)
```

## Parameters

- `searchableIndex`: The indexing that’s being throttled.

<a id="Discussion"></a>

## Discussion

To save power, the system can reduce the amount of time it spends indexing your app’s items. For example, the system might throttle indexing if the device is running on battery only. The system calls this method to let you know when throttling occurs, so you can prioritize the items you want to index.

## See Also

### Monitoring Spotlight status

- [searchableIndexDidFinishThrottle(\_:)](searchableindexdidfinishthrottle%28__%29.md): Tells the delegate that the index throttling has finished.

# searchableIndexDidThrottle: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Tells the delegate that indexing is being throttled.

## Declaration

```objectivec
- (void) searchableIndexDidThrottle:(CSSearchableIndex *) searchableIndex;
```

## Parameters

- `searchableIndex`: The indexing that’s being throttled.

<a id="Discussion"></a>

## Discussion

To save power, the system can reduce the amount of time it spends indexing your app’s items. For example, the system might throttle indexing if the device is running on battery only. The system calls this method to let you know when throttling occurs, so you can prioritize the items you want to index.

## See Also

### Monitoring Spotlight status

- [searchableIndexDidFinishThrottle:](searchableindexdidfinishthrottle%28__%29.md): Tells the delegate that the index throttling has finished.

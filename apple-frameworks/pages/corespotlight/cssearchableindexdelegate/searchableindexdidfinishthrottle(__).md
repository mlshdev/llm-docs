> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindexdelegate/searchableindexdidfinishthrottle(_:)](https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate/searchableindexdidfinishthrottle(_:))

# searchableIndexDidFinishThrottle(\_:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Tells the delegate that the index throttling has finished.

## Declaration

```swift
optional func searchableIndexDidFinishThrottle(_ searchableIndex: CSSearchableIndex)
```

## Parameters

- `searchableIndex`: The index that was throttled.

<a id="Discussion"></a>

## Discussion

If the system previously throttled the indexing process for your app, it calls this method when throttling ends. For example, it might call this method after someone plugs in their device to charge it. Use this method to resume your app’s standard indexing behavior.

## See Also

### Monitoring Spotlight status

- [searchableIndexDidThrottle(\_:)](searchableindexdidthrottle%28__%29.md): Tells the delegate that indexing is being throttled.

# searchableIndexDidFinishThrottle: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Tells the delegate that the index throttling has finished.

## Declaration

```objectivec
- (void) searchableIndexDidFinishThrottle:(CSSearchableIndex *) searchableIndex;
```

## Parameters

- `searchableIndex`: The index that was throttled.

<a id="Discussion"></a>

## Discussion

If the system previously throttled the indexing process for your app, it calls this method when throttling ends. For example, it might call this method after someone plugs in their device to charge it. Use this method to resume your app’s standard indexing behavior.

## See Also

### Monitoring Spotlight status

- [searchableIndexDidThrottle:](searchableindexdidthrottle%28__%29.md): Tells the delegate that indexing is being throttled.

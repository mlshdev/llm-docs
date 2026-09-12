> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebhistory/deletehistory(during:)](https://developer.apple.com/documentation/screentime/stwebhistory/deletehistory(during:))

# deleteHistory(during:) (Swift)

**Framework:** Screen Time  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

Deletes web history that occurred during the date interval you specify.

## Declaration

```swift
func deleteHistory(during interval: DateInterval)
```

## Parameters

- `interval`: The date interval of web history you want to delete.

## See Also

### Instance methods

- [deleteAllHistory()](deleteallhistory%28%29.md): Deletes all web history associated with the bundle identifier you specified during initialization.
- [deleteHistory(for:)](deletehistory%28for_%29.md): Deletes all the web history for the URL you specify.

# deleteHistoryDuringInterval: (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

Deletes web history that occurred during the date interval you specify.

## Declaration

```objectivec
- (void) deleteHistoryDuringInterval:(NSDateInterval *) interval;
```

## Parameters

- `interval`: The date interval of web history you want to delete.

## See Also

### Instance methods

- [deleteAllHistory](deleteallhistory%28%29.md): Deletes all web history associated with the bundle identifier you specified during initialization.
- [deleteHistoryForURL:](deletehistory%28for_%29.md): Deletes all the web history for the URL you specify.

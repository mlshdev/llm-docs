> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebhistory/deletehistory(for:)](https://developer.apple.com/documentation/screentime/stwebhistory/deletehistory(for:))

# deleteHistory(for:) (Swift)

**Framework:** Screen Time  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

Deletes all the web history for the URL you specify.

## Declaration

```swift
func deleteHistory(for url: URL)
```

## Parameters

- `url`: The URL associated with the web history to delete.

<a id="discussion"></a>

## Discussion

The framework references the entire URL to determine which web-usage data to delete.

## See Also

### Instance methods

- [deleteAllHistory()](deleteallhistory%28%29.md): Deletes all web history associated with the bundle identifier you specified during initialization.
- [deleteHistory(during:)](deletehistory%28during_%29.md): Deletes web history that occurred during the date interval you specify.

# deleteHistoryForURL: (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

Deletes all the web history for the URL you specify.

## Declaration

```objectivec
- (void) deleteHistoryForURL:(NSURL *) url;
```

## Parameters

- `url`: The URL associated with the web history to delete.

<a id="discussion"></a>

## Discussion

The framework references the entire URL to determine which web-usage data to delete.

## See Also

### Instance methods

- [deleteAllHistory](deleteallhistory%28%29.md): Deletes all web history associated with the bundle identifier you specified during initialization.
- [deleteHistoryDuringInterval:](deletehistory%28during_%29.md): Deletes web history that occurred during the date interval you specify.

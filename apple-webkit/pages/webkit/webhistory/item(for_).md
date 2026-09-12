> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistory/item(for:)](https://developer.apple.com/documentation/webkit/webhistory/item(for:))

# item(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the web history item that corresponds to the specified web location.

## Declaration

```swift
func item(for URL: URL!) -> WebHistoryItem!
```

## Parameters

- `URL`: The location, as a URL, of the webpage that was visited.

<a id="return-value"></a>

## Return Value

The web history item that represents visits to the specified URL, or `nil` if none was found.

## See Also

### Getting Web History Items

- [orderedItemsLastVisited(onDay:)](ordereditemslastvisited%28onday_%29.md): Deprecated. Returns web history items that were last visited on the specified date.
- [orderedLastVisitedDays](orderedlastvisiteddays.md): Deprecated. An array of all calendar days represented in the web history.

# itemForURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the web history item that corresponds to the specified web location.

## Declaration

```objectivec
- (WebHistoryItem *) itemForURL:(NSURL *) URL;
```

## Parameters

- `URL`: The location, as a URL, of the webpage that was visited.

<a id="return-value"></a>

## Return Value

The web history item that represents visits to the specified URL, or `nil` if none was found.

## See Also

### Getting Web History Items

- [orderedItemsLastVisitedOnDay:](ordereditemslastvisited%28onday_%29.md): Deprecated. Returns web history items that were last visited on the specified date.
- [orderedLastVisitedDays](orderedlastvisiteddays.md): Deprecated. An array of all calendar days represented in the web history.

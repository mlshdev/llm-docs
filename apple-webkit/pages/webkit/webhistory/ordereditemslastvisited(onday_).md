> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistory/ordereditemslastvisited(onday:)](https://developer.apple.com/documentation/webkit/webhistory/ordereditemslastvisited(onday:))

# orderedItemsLastVisited(onDay:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns web history items that were last visited on the specified date.

## Declaration

```swift
func orderedItemsLastVisited(onDay calendarDate: NSCalendarDate!) -> [Any]!
```

## Parameters

- `calendarDate`: The date on which the web history items were last visited.

<a id="return-value"></a>

## Return Value

An array of web history items that were last visited on the specified date.

## See Also

### Getting Web History Items

- [orderedLastVisitedDays](orderedlastvisiteddays.md): Deprecated. An array of all calendar days represented in the web history.
- [item(for:)](item%28for_%29.md): Deprecated. Returns the web history item that corresponds to the specified web location.

# orderedItemsLastVisitedOnDay: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns web history items that were last visited on the specified date.

## Declaration

```objectivec
- (NSArray *) orderedItemsLastVisitedOnDay:(NSCalendarDate *) calendarDate;
```

## Parameters

- `calendarDate`: The date on which the web history items were last visited.

<a id="return-value"></a>

## Return Value

An array of web history items that were last visited on the specified date.

## See Also

### Getting Web History Items

- [orderedLastVisitedDays](orderedlastvisiteddays.md): Deprecated. An array of all calendar days represented in the web history.
- [itemForURL:](item%28for_%29.md): Deprecated. Returns the web history item that corresponds to the specified web location.

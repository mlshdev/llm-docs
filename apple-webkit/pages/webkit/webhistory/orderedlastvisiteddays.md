> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistory/orderedlastvisiteddays](https://developer.apple.com/documentation/webkit/webhistory/orderedlastvisiteddays)

# orderedLastVisitedDays (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

An array of all calendar days represented in the web history.

## Declaration

```swift
var orderedLastVisitedDays: [Any]! { get }
```

## See Also

### Getting Web History Items

- [orderedItemsLastVisited(onDay:)](ordereditemslastvisited%28onday_%29.md): Deprecated. Returns web history items that were last visited on the specified date.
- [item(for:)](item%28for_%29.md): Deprecated. Returns the web history item that corresponds to the specified web location.

# orderedLastVisitedDays (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

An array of all calendar days represented in the web history.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray * orderedLastVisitedDays;
```

## See Also

### Getting Web History Items

- [orderedItemsLastVisitedOnDay:](ordereditemslastvisited%28onday_%29.md): Deprecated. Returns web history items that were last visited on the specified date.
- [itemForURL:](item%28for_%29.md): Deprecated. Returns the web history item that corresponds to the specified web location.

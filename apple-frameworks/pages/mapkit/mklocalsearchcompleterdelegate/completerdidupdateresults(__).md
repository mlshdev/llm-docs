> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearchcompleterdelegate/completerdidupdateresults(_:)](https://developer.apple.com/documentation/mapkit/mklocalsearchcompleterdelegate/completerdidupdateresults(_:))

# completerDidUpdateResults(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

Tells the method when the specified search completer updates its array of search completions.

## Declaration

```swift
optional func completerDidUpdateResults(_ completer: MKLocalSearchCompleter)
```

## Parameters

- `completer`: The search completer object with updated results.

<a id="Discussion"></a>

## Discussion

After receiving results from a query, the search completer updates its [results](../mklocalsearchcompleter/results.md) property with the new [MKLocalSearchCompletion](../mklocalsearchcompletion.md) objects and calls this method. Use this method to update your app’s interface based on the new search results. For example, you might update a table that you use to display search results to the user.

## See Also

### Getting the search results

- [completer(\_:didFailWithError:)](completer%28__didfailwitherror_%29.md): Tells the method when the specified search completer is unable to generate a list of search results.

# completerDidUpdateResults: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

Tells the method when the specified search completer updates its array of search completions.

## Declaration

```objectivec
- (void) completerDidUpdateResults:(MKLocalSearchCompleter *) completer;
```

## Parameters

- `completer`: The search completer object with updated results.

<a id="Discussion"></a>

## Discussion

After receiving results from a query, the search completer updates its [results](../mklocalsearchcompleter/results.md) property with the new [MKLocalSearchCompletion](../mklocalsearchcompletion.md) objects and calls this method. Use this method to update your app’s interface based on the new search results. For example, you might update a table that you use to display search results to the user.

## See Also

### Getting the search results

- [completer:didFailWithError:](completer%28__didfailwitherror_%29.md): Tells the method when the specified search completer is unable to generate a list of search results.

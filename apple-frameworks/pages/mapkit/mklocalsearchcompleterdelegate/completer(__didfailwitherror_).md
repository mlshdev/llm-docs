> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearchcompleterdelegate/completer(_:didfailwitherror:)](https://developer.apple.com/documentation/mapkit/mklocalsearchcompleterdelegate/completer(_:didfailwitherror:))

# completer(\_:didFailWithError:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

Tells the method when the specified search completer is unable to generate a list of search results.

## Declaration

```swift
optional func completer(_ completer: MKLocalSearchCompleter, didFailWithError error: any Error)
```

## Parameters

- `completer`: The search completer object reporting the error.
- `error`: The error object containing the reason for the failure.

<a id="Discussion"></a>

## Discussion

Use this object to process any errors that occur while generating search results. Even when an error occurs, the search completer starts a new search if it already has a new search string. Depending on the error, you might do nothing or let the user know that you were unable to obtain a list of search completions.

## See Also

### Getting the search results

- [completerDidUpdateResults(\_:)](completerdidupdateresults%28__%29.md): Tells the method when the specified search completer updates its array of search completions.

# completer:didFailWithError: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

Tells the method when the specified search completer is unable to generate a list of search results.

## Declaration

```objectivec
- (void) completer:(MKLocalSearchCompleter *) completer didFailWithError:(NSError *) error;
```

## Parameters

- `completer`: The search completer object reporting the error.
- `error`: The error object containing the reason for the failure.

<a id="Discussion"></a>

## Discussion

Use this object to process any errors that occur while generating search results. Even when an error occurs, the search completer starts a new search if it already has a new search string. Depending on the error, you might do nothing or let the user know that you were unable to obtain a list of search completions.

## See Also

### Getting the search results

- [completerDidUpdateResults:](completerdidupdateresults%28__%29.md): Tells the method when the specified search completer updates its array of search completions.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/showsearchresults(forquerystring:)](https://developer.apple.com/documentation/appkit/nsworkspace/showsearchresults(forquerystring:))

# showSearchResults(forQueryString:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Displays a Spotlight search results window in Finder for the specified query string.

## Declaration

```swift
func showSearchResults(forQueryString queryString: String) -> Bool
```

## Parameters

- `queryString`: The string to search for.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method communicated successfully with Finder; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Finder becomes the active app, if possible. The user can further refine the search via the Finder user interface.

You can safely call this method from any thread of your app.

# showSearchResultsForQueryString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Displays a Spotlight search results window in Finder for the specified query string.

## Declaration

```objectivec
- (BOOL) showSearchResultsForQueryString:(NSString *) queryString;
```

## Parameters

- `queryString`: The string to search for.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method communicated successfully with Finder; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Finder becomes the active app, if possible. The user can further refine the search via the Finder user interface.

You can safely call this method from any thread of your app.

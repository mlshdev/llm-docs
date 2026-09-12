> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearch/issearching](https://developer.apple.com/documentation/mapkit/mklocalsearch/issearching)

# isSearching (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the search is in progress.

## Declaration

```swift
var isSearching: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The search object sets the value of this property to [true](https://developer.apple.com/documentation/swift/true) when you initiate a search. It remains in that state until the search object delivers search results (or an appropriate error), at which time the search object sets the value of the property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Performing the search

- [start(completionHandler:)](start%28completionhandler_%29.md): Starts the search and delivers the results to the specified completion handler.
- [MKLocalSearch.CompletionHandler](completionhandler.md): A completion handler block for a search operation.
- [cancel()](cancel%28%29.md): Cancels an in-progress search operation.

# searching (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the search is in progress.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isSearching) BOOL searching;
```

<a id="Discussion"></a>

## Discussion

The search object sets the value of this property to [true](https://developer.apple.com/documentation/swift/true) when you initiate a search. It remains in that state until the search object delivers search results (or an appropriate error), at which time the search object sets the value of the property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Performing the search

- [startWithCompletionHandler:](start%28completionhandler_%29.md): Starts the search and delivers the results to the specified completion handler.
- [MKLocalSearchCompletionHandler](completionhandler.md): A completion handler block for a search operation.
- [cancel](cancel%28%29.md): Cancels an in-progress search operation.

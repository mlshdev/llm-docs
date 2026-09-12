> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odquerydelegate/query(_:foundresults:error:)](https://developer.apple.com/documentation/opendirectory/odquerydelegate/query(_:foundresults:error:))

# query(\_:foundResults:error:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

The delegate method called as results are returned from a query scheduled in a run loop.

## Declaration

```swift
func query(_ inQuery: ODQuery!, foundResults inResults: [Any]!, error inError: (any Error)!)
```

## Parameters

- `inQuery`: The query.
- `inResults`: Partial results returned from the query.
- `inError`: An error reference for error details.

<a id="Discussion"></a>

## Discussion

This method is called as soon as any results become available. Results must be retained or copied. If both `inResults` and `inError` are `nil`, the query has completed.

# query:foundResults:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

The delegate method called as results are returned from a query scheduled in a run loop.

## Declaration

```objectivec
- (void) query:(ODQuery *) inQuery foundResults:(NSArray *) inResults error:(NSError *) inError;
```

## Parameters

- `inQuery`: The query.
- `inResults`: Partial results returned from the query.
- `inError`: An error reference for error details.

<a id="Discussion"></a>

## Discussion

This method is called as soon as any results become available. Results must be retained or copied. If both `inResults` and `inError` are `nil`, the query has completed.

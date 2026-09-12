> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snresultsobserving/request(_:didfailwitherror:)](https://developer.apple.com/documentation/soundanalysis/snresultsobserving/request(_:didfailwitherror:))

# request(\_:didFailWithError:) (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Provides any errors that occur during processing of the request.

## Declaration

```swift
optional func request(_ request: any SNRequest, didFailWithError error: any Error)
```

## Parameters

- `request`: The request that produces the error.
- `error`: The error that occurs during the request.

<a id="Discussion"></a>

## Discussion

The analyzer stops processing a specific request when it encounters an error, and doesn’t call [requestDidComplete(\_:)](requestdidcomplete%28__%29.md).

## See Also

### Handling Requests

- [request(\_:didProduce:)](request%28__didproduce_%29.md): Provides a new analysis result to your app with the specified time range.
- [SNResult](../snresult.md): A protocol that represents sound analysis results.
- [requestDidComplete(\_:)](requestdidcomplete%28__%29.md): Notifies your app when the analysis request completes normally.

# request:didFailWithError: (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Provides any errors that occur during processing of the request.

## Declaration

```objectivec
- (void) request:(id<SNRequest>) request didFailWithError:(NSError *) error;
```

## Parameters

- `request`: The request that produces the error.
- `error`: The error that occurs during the request.

<a id="Discussion"></a>

## Discussion

The analyzer stops processing a specific request when it encounters an error, and doesn’t call [requestDidComplete:](requestdidcomplete%28__%29.md).

## See Also

### Handling Requests

- [request:didProduceResult:](request%28__didproduce_%29.md): Provides a new analysis result to your app with the specified time range.
- [SNResult](../snresult.md): A protocol that represents sound analysis results.
- [requestDidComplete:](requestdidcomplete%28__%29.md): Notifies your app when the analysis request completes normally.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snresultsobserving/request(_:didproduce:)](https://developer.apple.com/documentation/soundanalysis/snresultsobserving/request(_:didproduce:))

# request(\_:didProduce:) (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Provides a new analysis result to your app with the specified time range.

## Declaration

```swift
func request(_ request: any SNRequest, didProduce result: any SNResult)
```

## Parameters

- `request`: The request that produces the result.
- `result`: The result of the analysis request.

<a id="Discussion"></a>

## Discussion

The analyzer calls this function each time a new analysis result is available. Different types of analyses may produce results at different rates, spanning different time ranges.

## See Also

### Handling Requests

- [SNResult](../snresult.md): A protocol that represents sound analysis results.
- [request(\_:didFailWithError:)](request%28__didfailwitherror_%29.md): Provides any errors that occur during processing of the request.
- [requestDidComplete(\_:)](requestdidcomplete%28__%29.md): Notifies your app when the analysis request completes normally.

# request:didProduceResult: (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Provides a new analysis result to your app with the specified time range.

## Declaration

```objectivec
- (void) request:(id<SNRequest>) request didProduceResult:(id<SNResult>) result;
```

## Parameters

- `request`: The request that produces the result.
- `result`: The result of the analysis request.

<a id="Discussion"></a>

## Discussion

The analyzer calls this function each time a new analysis result is available. Different types of analyses may produce results at different rates, spanning different time ranges.

## See Also

### Handling Requests

- [SNResult](../snresult.md): A protocol that represents sound analysis results.
- [request:didFailWithError:](request%28__didfailwitherror_%29.md): Provides any errors that occur during processing of the request.
- [requestDidComplete:](requestdidcomplete%28__%29.md): Notifies your app when the analysis request completes normally.

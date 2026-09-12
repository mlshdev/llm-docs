> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snresultsobserving/requestdidcomplete(_:)](https://developer.apple.com/documentation/soundanalysis/snresultsobserving/requestdidcomplete(_:))

# requestDidComplete(\_:) (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Notifies your app when the analysis request completes normally.

## Declaration

```swift
optional func requestDidComplete(_ request: any SNRequest)
```

## Parameters

- `request`: The request that’s completing.

<a id="Discussion"></a>

## Discussion

The analyzer calls this method when it finishes processing the request.

## See Also

### Handling Requests

- [request(\_:didProduce:)](request%28__didproduce_%29.md): Provides a new analysis result to your app with the specified time range.
- [SNResult](../snresult.md): A protocol that represents sound analysis results.
- [request(\_:didFailWithError:)](request%28__didfailwitherror_%29.md): Provides any errors that occur during processing of the request.

# requestDidComplete: (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Notifies your app when the analysis request completes normally.

## Declaration

```objectivec
- (void) requestDidComplete:(id<SNRequest>) request;
```

## Parameters

- `request`: The request that’s completing.

<a id="Discussion"></a>

## Discussion

The analyzer calls this method when it finishes processing the request.

## See Also

### Handling Requests

- [request:didProduceResult:](request%28__didproduce_%29.md): Provides a new analysis result to your app with the specified time range.
- [SNResult](../snresult.md): A protocol that represents sound analysis results.
- [request:didFailWithError:](request%28__didfailwitherror_%29.md): Provides any errors that occur during processing of the request.

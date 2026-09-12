> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snresult](https://developer.apple.com/documentation/soundanalysis/snresult)

# SNResult (Swift)

**Framework:** Sound Analysis  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A protocol that represents sound analysis results.

## Declaration

```swift
protocol SNResult : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Don’t create types that adopt `SNResult`. Only Sound Analysis framework types adopt the protocol.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SNClassificationResult](snclassificationresult.md)

## See Also

### Handling Requests

- [request(\_:didProduce:)](snresultsobserving/request%28__didproduce_%29.md): Provides a new analysis result to your app with the specified time range.
- [request(\_:didFailWithError:)](snresultsobserving/request%28__didfailwitherror_%29.md): Provides any errors that occur during processing of the request.
- [requestDidComplete(\_:)](snresultsobserving/requestdidcomplete%28__%29.md): Notifies your app when the analysis request completes normally.

# SNResult (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A protocol that represents sound analysis results.

## Declaration

```objectivec
@protocol SNResult <NSObject>
```

<a id="overview"></a>

## Overview

Don’t create types that adopt `SNResult`. Only Sound Analysis framework types adopt the protocol.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SNClassificationResult](snclassificationresult.md)

## See Also

### Handling Requests

- [request:didProduceResult:](snresultsobserving/request%28__didproduce_%29.md): Provides a new analysis result to your app with the specified time range.
- [request:didFailWithError:](snresultsobserving/request%28__didfailwitherror_%29.md): Provides any errors that occur during processing of the request.
- [requestDidComplete:](snresultsobserving/requestdidcomplete%28__%29.md): Notifies your app when the analysis request completes normally.

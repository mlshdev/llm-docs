> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wirelessinsights/servicepredictionerror/connectionerror

# ServicePredictionError.connectionError

**Framework:** WirelessInsights  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An unexpected error occurred while setting up the event stream.

## Declaration

```swift
case connectionError
```

<a id="discussion"></a>

## Discussion

Handle this error by retrying at a later time.

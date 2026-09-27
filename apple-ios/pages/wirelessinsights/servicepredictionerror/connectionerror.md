> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
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

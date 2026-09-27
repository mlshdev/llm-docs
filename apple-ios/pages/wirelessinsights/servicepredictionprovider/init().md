> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wirelessinsights/servicepredictionprovider/init()

# init()

**Framework:** WirelessInsights  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a service prediction provider.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

Retain a reference to this instance for as long as you need to receive events from the [servicePredictions](servicepredictions.md) asychronous sequence.

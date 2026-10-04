> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nehotspotmanager/evaluatedssids

# evaluatedSSIDs

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

An array of pre-evaluated Wi-Fi SSID strings.

## Declaration

```swift
final var evaluatedSSIDs: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

The system doesn’t call [NEHotspotEvaluationProvider](../nehotspotevaluationprovider.md) to evaluate any Wi-Fi network whose SSID is found in this array.

> **Note**

> You can specify a maximum of two SSIDs for this property.

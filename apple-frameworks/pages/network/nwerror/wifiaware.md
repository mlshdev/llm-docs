> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwerror/wifiaware

# wifiAware

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The underlying error that occurred, if applicable.

## Declaration

```swift
var wifiAware: WAError? { get }
```

<a id="discussion"></a>

## Discussion

If the underlying connection is over Wi-Fi Aware and an error occurred, provide details on the specific error. Otherwise `nil`.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwerror/wifiaware](https://developer.apple.com/documentation/network/nwerror/wifiaware)

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

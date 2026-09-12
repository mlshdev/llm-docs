> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwpath/wifiaware](https://developer.apple.com/documentation/network/nwpath/wifiaware)

# wifiAware

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Current status and performance information for Wi-Fi Aware, or `nil` if this path is not over Wi-Fi Aware.

## Declaration

```swift
var wifiAware: WAPath? { get async throws }
```

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the path could not be retrieved, or if the App does not have access to Wi-Fi Aware.

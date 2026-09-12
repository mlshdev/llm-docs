> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkbrowser/state/failed(_:)](https://developer.apple.com/documentation/network/networkbrowser/state/failed(_:))

# NetworkBrowser.State.failed(\_:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The browser has irrecoverably failed. Do not call `start()` on the browser to restart it. Instead, `cancel()` the browser and create a new browser.

## Declaration

```swift
case failed(NWError)
```

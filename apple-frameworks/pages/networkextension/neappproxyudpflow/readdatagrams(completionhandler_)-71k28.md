> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neappproxyudpflow/readdatagrams(completionhandler:)-71k28

# readDatagrams(completionHandler:)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```swift
func readDatagrams(completionHandler: @escaping ([(Data, NWEndpoint)]?, (any Error)?) -> Void)
```

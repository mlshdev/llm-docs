> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neappproxyudpflow/writedatagrams(_:completionhandler:)

# writeDatagrams(\_:completionHandler:)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```swift
func writeDatagrams(_ array: [(Data, NWEndpoint)], completionHandler: @escaping ((any Error)?) -> Void)
```

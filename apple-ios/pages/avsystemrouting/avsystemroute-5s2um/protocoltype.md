> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroute-5s2um/protocoltype](https://developer.apple.com/documentation/avsystemrouting/avsystemroute-5s2um/protocoltype)

# protocolType

**Framework:** AVSystemRouting  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The communication protocol the active route uses.

## Declaration

```swift
final var protocolType: UTType { get }
```

<a id="discussion"></a>

## Discussion

The protocol’s `identifier` property enables your app to adapt its behavior based on the selected protocol. The protocol’s display name and icon can also be obtained from the `UTType`.

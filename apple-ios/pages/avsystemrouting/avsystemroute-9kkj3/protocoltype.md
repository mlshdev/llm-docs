> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroute-9kkj3/protocoltype](https://developer.apple.com/documentation/avsystemrouting/avsystemroute-9kkj3/protocoltype)

# protocolType

**Interface language:** Objective-C

**Framework:** AVSystemRouting  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The communication protocol the active route uses.

## Declaration

```objectivec
@property (copy, readonly) UTType * protocolType;
```

<a id="discussion"></a>

## Discussion

The protocol’s `identifier` property enables your app to adapt its behavior based on the selected protocol. The protocol’s display name and icon can also be obtained from the `UTType`.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/formrelativeposition](https://developer.apple.com/documentation/coreservices/formrelativeposition)

# formRelativePosition

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var formRelativePosition: Int { get }
```

<a id="discussion"></a>

## Discussion

Specifies an element position either immediately before or immediately after a container, not inside it. The key data is specified by a descriptor of type `typeEnumerated` whose data consists of one of the constants `kAENext` and `kAEPrevious`, which are described in [AEDisposeToken(\_:)](1446783-aedisposetoken.md).

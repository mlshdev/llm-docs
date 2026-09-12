> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/remotecallargument/effectivelabel](https://developer.apple.com/documentation/distributed/remotecallargument/effectivelabel)

# effectiveLabel

**Framework:** Distributed  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The effective label of this argument. This reflects the semantics of call sites of function declarations without explicit label definitions in Swift.

## Declaration

```swift
var effectiveLabel: String { get }
```

<a id="discussion"></a>

## Discussion

For example, for a method declared like `func hi(a: String)` the effective label is `a` while for a method like `func hi(a b: String)` or `func hi(_ b: String)` the label is the explicitly declared one, so `a` and `_` respectively.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/predicate/hasdefspecifier](https://developer.apple.com/documentation/usdkit/usdprim/predicate/hasdefspecifier)

# hasDefSpecifier

**Framework:** USDKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

True if the prim has a def specifier.

## Declaration

```swift
static var hasDefSpecifier: USDPrim.Predicate { get }
```

<a id="discussion"></a>

## Discussion

This flag is set if the prim’s [specifier](../specifier-swift.property.md) is [USDPrim.Specifier.def](../specifier-swift.enum/def.md).

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/attribute/init(_:)-8mm8c](https://developer.apple.com/documentation/usdkit/usdprim/attribute/init(_:)-8mm8c)

# init(\_:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Casts a property handle to an attribute handle.

## Declaration

```swift
init?(_ object: USDPrim.Property)
```

<a id="discussion"></a>

## Discussion

Returns `nil` if the property is not an attribute.

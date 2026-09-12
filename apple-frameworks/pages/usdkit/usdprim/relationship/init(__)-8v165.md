> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/relationship/init(_:)-8v165](https://developer.apple.com/documentation/usdkit/usdprim/relationship/init(_:)-8v165)

# init(\_:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Casts a property handle to a relationship handle.

## Declaration

```swift
init?(_ object: USDPrim.Property)
```

<a id="discussion"></a>

## Discussion

Returns `nil` if the property is not a relationship.

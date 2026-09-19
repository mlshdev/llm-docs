> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/property/init(_:)-2927p

# init(\_:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Casts an object handle to a property handle.

## Declaration

```swift
init?(_ object: USDStage.Object)
```

<a id="discussion"></a>

## Discussion

Returns `nil` if the object is not an attribute or a relationship.

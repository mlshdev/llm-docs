> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/removeapischema(_:)

# removeAPISchema(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Removes a single-apply API schema from this prim.

## Declaration

```swift
func removeAPISchema(_ schemaIdentifier: USDToken) throws
```

## Parameters

- `schemaIdentifier`: The identifier of the API schema to remove.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the schema cannot be removed.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/variantset/withedittarget(layer:_:)

# withEditTarget(layer:\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Performs the closure with the stage’s edit target set to author into the currently selected variant.

## Declaration

```swift
func withEditTarget<R>(layer: USDLayer? = nil, _ body: (USDStage.EditTarget) throws -> R) rethrows -> R
```

## Parameters

- `layer`: The layer to target, or `nil` for the current edit target’s layer.
- `body`: A closure that performs edits within the variant.

<a id="return-value"></a>

## Return Value

The value returned by `body`.

<a id="discussion"></a>

## Discussion

The previous edit target is restored when the closure returns.

> **Throws**

> Errors from `body` are rethrown.

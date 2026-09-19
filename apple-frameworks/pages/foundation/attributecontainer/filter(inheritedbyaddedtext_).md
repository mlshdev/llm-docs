> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributecontainer/filter(inheritedbyaddedtext:)

# filter(inheritedByAddedText:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a copy of the attribute container with only attributes that specify the provided inheritance behavior.

## Declaration

```swift
func filter(inheritedByAddedText: Bool) -> AttributeContainer
```

## Parameters

- `inheritedByAddedText`: An `inheritedByAddedText` value to filter. Attributes matching this value are included in the returned container.

<a id="return-value"></a>

## Return Value

A copy of the attribute container with only attributes whose `inheritedByAddedText` property matches the provided value.

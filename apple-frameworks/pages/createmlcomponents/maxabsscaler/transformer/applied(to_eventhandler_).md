> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/maxabsscaler/transformer/applied(to:eventhandler:)

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Scales the input values by `1 / maximumAbsoluteValue`.

## Declaration

```swift
func applied(to input: Element, eventHandler: EventHandler? = nil) -> Element
```

## Parameters

- `input`: A floating-point value.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

A scaled value.

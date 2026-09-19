> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/datefeatureextractor/applied(to:eventhandler:)

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Extracts features of a particular date.

## Declaration

```swift
func applied(to date: Date, eventHandler: EventHandler? = nil) -> [Scalar]
```

## Parameters

- `date`: The date.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An array of feature values.

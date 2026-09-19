> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/incar/chargingconnectortype/init(rawvalue:)

# init(rawValue:)

**Framework:** Intents  
**Kind:** Initializer

Creates a charging connector type using the provided string.

## Declaration

```swift
init(rawValue: String)
```

## Parameters

- `rawValue`: The charging connector type’s string representation.

<a id="Discussion"></a>

## Discussion

If there isn’t a value of the type that corresponds to the specified `rawValue`, this initializer returns `nil`.

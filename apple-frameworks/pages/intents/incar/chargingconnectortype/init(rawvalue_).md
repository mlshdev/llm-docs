> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incar/chargingconnectortype/init(rawvalue:)](https://developer.apple.com/documentation/intents/incar/chargingconnectortype/init(rawvalue:))

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

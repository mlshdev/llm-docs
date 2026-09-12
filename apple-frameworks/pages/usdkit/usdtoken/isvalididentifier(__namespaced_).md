> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdtoken/isvalididentifier(_:namespaced:)](https://developer.apple.com/documentation/usdkit/usdtoken/isvalididentifier(_:namespaced:))

# isValidIdentifier(\_:namespaced:)

**Framework:** USDKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a Boolean value that indicates whether the given string is a valid USD identifier.

## Declaration

```swift
static func isValidIdentifier(_ name: String, namespaced: Bool = false) -> Bool
```

## Parameters

- `name`: The string to evaluate.
- `namespaced`: Pass `true` to allow the `:` namespace separator.

<a id="return-value"></a>

## Return Value

`true` if `name` is a valid identifier; otherwise, `false`.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/spec/isvalidname(_:)](https://developer.apple.com/documentation/usdkit/usdprim/spec/isvalidname(_:))

# isValidName(\_:)

**Framework:** USDKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a Boolean value that indicates whether `name` is a valid prim name.

## Declaration

```swift
static func isValidName(_ name: USDToken) -> Bool
```

## Parameters

- `name`: The candidate name.

<a id="return-value"></a>

## Return Value

`true` if `name` is a valid prim name; otherwise, `false`.

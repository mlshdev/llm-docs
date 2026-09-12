> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/property/spec/rename(to:)](https://developer.apple.com/documentation/usdkit/usdprim/property/spec/rename(to:))

# rename(to:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the property’s name.

## Declaration

```swift
func rename(to name: USDToken) throws
```

## Parameters

- `name`: The new name to assign.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the new name is invalid or already used by a sibling.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/spec/fieldcollection/clearfield(_:)](https://developer.apple.com/documentation/usdkit/usdlayer/spec/fieldcollection/clearfield(_:))

# clearField(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Clears the authored value for `name`.

## Declaration

```swift
@discardableResult func clearField(_ name: USDToken) -> Bool
```

## Parameters

- `name`: The field name to clear.

<a id="return-value"></a>

## Return Value

`true` if the field had been authored.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/spec/fieldcollection/setfield(_:to:)-26nys](https://developer.apple.com/documentation/usdkit/usdlayer/spec/fieldcollection/setfield(_:to:)-26nys)

# setField(\_:to:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the field `name` to `value`.

## Declaration

```swift
@discardableResult func setField(_ name: USDToken, to value: USDValue) -> Bool
```

## Parameters

- `name`: The field name.
- `value`: The new value.

<a id="return-value"></a>

## Return Value

`true` on success.

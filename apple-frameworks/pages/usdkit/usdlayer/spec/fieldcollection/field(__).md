> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/spec/fieldcollection/field(_:)](https://developer.apple.com/documentation/usdkit/usdlayer/spec/fieldcollection/field(_:))

# field(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the value of `name`, or `nil` if the field is unauthored.

## Declaration

```swift
func field(_ name: USDToken) -> USDValue?
```

## Parameters

- `name`: The field name to look up.

<a id="return-value"></a>

## Return Value

The field’s value, or `nil` if unauthored.

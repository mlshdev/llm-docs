> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/encoder/unkeyedcontainer()](https://developer.apple.com/documentation/swift/encoder/unkeyedcontainer())

# unkeyedContainer()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an encoding container appropriate for holding multiple unkeyed values.

## Declaration

```swift
func unkeyedContainer() -> any UnkeyedEncodingContainer
```

<a id="return-value"></a>

## Return Value

A new empty unkeyed container.

<a id="discussion"></a>

## Discussion

You must use only one kind of top-level encoding container. This method must not be called after a call to `container(keyedBy:)` or after encoding a value through a call to `singleValueContainer()`

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unmanaged/takeretainedvalue()](https://developer.apple.com/documentation/swift/unmanaged/takeretainedvalue())

# takeRetainedValue()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the value of this unmanaged reference as a managed reference and consumes an unbalanced retain of it.

## Declaration

```swift
func takeRetainedValue() -> Instance
```

<a id="return-value"></a>

## Return Value

The object referenced by this `Unmanaged` instance.

<a id="discussion"></a>

## Discussion

This is useful when a function returns an unmanaged reference and you know that you’re responsible for releasing the result.

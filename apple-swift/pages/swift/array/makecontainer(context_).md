> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/makecontainer(context:)](https://developer.apple.com/documentation/swift/array/makecontainer(context:))

# makeContainer(context:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a container that represents this array of intent values.

## Declaration

```swift
func makeContainer(context: IntentValueContainer.ConversionContext) -> IntentValueContainer
```

## Parameters

- `context`: The context to use for the conversion.

<a id="return-value"></a>

## Return Value

An intent value container representing this array.

<a id="discussion"></a>

## Discussion

This method converts each element in the array to its container representation and wraps them in an `ArrayContainerElement`.

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/optional/makecontainer(context:)](https://developer.apple.com/documentation/swift/optional/makecontainer(context:))

# makeContainer(context:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a container that represents this optional intent value.

## Declaration

```swift
func makeContainer(context: IntentValueContainer.ConversionContext) -> IntentValueContainer
```

## Parameters

- `context`: The context to use for the conversion.

<a id="return-value"></a>

## Return Value

An intent value container representing this optional value.

<a id="discussion"></a>

## Discussion

If the optional is `nil`, it creates a container that resolves to a null vlaue. If the optional isn’t `nil`, it delegates the conversation to the wrapped value’s container creation.

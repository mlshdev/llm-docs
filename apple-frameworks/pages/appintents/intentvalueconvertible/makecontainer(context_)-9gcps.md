> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentvalueconvertible/makecontainer(context:)-9gcps](https://developer.apple.com/documentation/appintents/intentvalueconvertible/makecontainer(context:)-9gcps)

# makeContainer(context:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an intent value container that represents this wrapper.

## Declaration

```swift
func makeContainer(context: IntentValueContainer.ConversionContext) -> IntentValueContainer
```

## Parameters

- `context`: The context to use for the conversion.

<a id="return-value"></a>

## Return Value

An intent value container representing this wrapper.

<a id="discussion"></a>

## Discussion

This implementation delegates to the base value’s container creation method, ensuring that the wrapper behaves consistently with its underlying type.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentvalueconvertible/makecontainer(context:)](https://developer.apple.com/documentation/appintents/intentvalueconvertible/makecontainer(context:))

# makeContainer(context:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an intent value container that represents this value.

## Declaration

```swift
func makeContainer(context: IntentValueContainer.ConversionContext) -> IntentValueContainer
```

## Parameters

- `context`: The context to use for the conversion.

<a id="return-value"></a>

## Return Value

An intent value container representing this value.

<a id="discussion"></a>

## Discussion

This method converts the value to a type-erased container that App Intents can use. The container encapsulates the value and provides mechanisms for type-safe access and conversion.

## Default Implementations

### IntentValueConvertible Implementations

- [makeContainer(context:)](makecontainer%28context_%29-9gcps.md): Creates an intent value container that represents this wrapper.

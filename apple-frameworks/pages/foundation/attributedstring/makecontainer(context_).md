> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/makecontainer(context:)](https://developer.apple.com/documentation/foundation/attributedstring/makecontainer(context:))

# makeContainer(context:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a container that represents the attributed string.

## Declaration

```swift
func makeContainer(context: IntentValueContainer.ConversionContext) -> IntentValueContainer
```

## Parameters

- `context`: The context to use for the conversion.

<a id="return-value"></a>

## Return Value

An intent value container representing this attributed string.

<a id="discussion"></a>

## Discussion

This method converts the `AttributedString` to an `NSAttributedString` and wraps it in an intent value container.

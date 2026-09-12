> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentvaluecontainer/makeexpression()](https://developer.apple.com/documentation/appintents/intentvaluecontainer/makeexpression())

# makeExpression()

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an intent value expression that represents this container.

## Declaration

```swift
func makeExpression() -> IntentValueExpression
```

<a id="return-value"></a>

## Return Value

An intent value expression representing this container.

<a id="discussion"></a>

## Discussion

This method creates an expression that wraps this container directly, allowing for lazy evaluation during the conversion process.

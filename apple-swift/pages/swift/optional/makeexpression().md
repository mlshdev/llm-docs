> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/optional/makeexpression()](https://developer.apple.com/documentation/swift/optional/makeexpression())

# makeExpression()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an expression that represents this optional intent value.

## Declaration

```swift
func makeExpression() -> IntentValueExpression
```

<a id="return-value"></a>

## Return Value

An intent value expression representing this optional value.

<a id="discussion"></a>

## Discussion

This method handles both the `.some` and `.none` cases:

- For `.none`, it creates a pending expression that will resolve to a null value
- For `.some`, it delegates to the wrapped value’s expression creation

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/makeexpression()](https://developer.apple.com/documentation/swift/array/makeexpression())

# makeExpression()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a pending expression of an array of intent values.

## Declaration

```swift
func makeExpression() -> IntentValueExpression
```

<a id="return-value"></a>

## Return Value

An intent value expression representing this array.

<a id="discussion"></a>

## Discussion

The system evaluates the expression when needed, allowing for lazy conversion of the array’s elements.

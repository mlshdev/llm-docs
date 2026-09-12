> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintegerresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inintegerresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 11.0+ · tvOS 14.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```swift
@nonobjc static func confirmationRequired(with valueToConfirm: Int?) -> Self
```

## Parameters

- `valueToConfirm`: The value that resolves the request but that must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INIntegerResolutionResult](../inintegerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the property to a single value but want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.

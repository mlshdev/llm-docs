> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/resolver/resolve(from:context:)](https://developer.apple.com/documentation/appintents/resolver/resolve(from:context:))

# resolve(from:context:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Converts the specified value into the expected data type.

## Declaration

```swift
func resolve(from input: Self.Input, context: IntentParameterContext<Self.Output>) async throws -> Self.Output?
```

## Parameters

- `input`: The value to convert.
- `context`: Contextual resolution information, including resolution source and information about the associated parameter if applicable.

<a id="return-value"></a>

## Return Value

The converted value, or `nil` if conversion fails.

## See Also

### Resolving the type

- [Input](input.md)
- [Output](output.md)

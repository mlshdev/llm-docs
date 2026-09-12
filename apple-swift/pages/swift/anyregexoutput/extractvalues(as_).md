> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyregexoutput/extractvalues(as:)](https://developer.apple.com/documentation/swift/anyregexoutput/extractvalues(as:))

# extractValues(as:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns strongly-typed match output by converting this type-erased output to the specified type, if possible.

## Declaration

```swift
func extractValues<Output>(as outputType: Output.Type = Output.self) -> Output?
```

## Parameters

- `outputType`: The expected output type.

<a id="return-value"></a>

## Return Value

The output, if the underlying value can be converted to `outputType`; otherwise, `nil`.

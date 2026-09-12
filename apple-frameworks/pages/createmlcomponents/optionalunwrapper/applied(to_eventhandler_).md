> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/optionalunwrapper/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/optionalunwrapper/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Unwraps an optional element or throws if the value is `nil`.

## Declaration

```swift
func applied(to input: Element?, eventHandler: EventHandler? = nil) throws -> Element
```

## Parameters

- `input`: The optional input.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The unwrapped value.

<a id="discussion"></a>

## Discussion

> **Throws**

> `MissingValueError` if the input is `nil`.

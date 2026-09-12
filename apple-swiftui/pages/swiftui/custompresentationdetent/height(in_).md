> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/custompresentationdetent/height(in:)](https://developer.apple.com/documentation/swiftui/custompresentationdetent/height(in:))

# height(in:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Calculates and returns a height based on the context.

## Declaration

```swift
static func height(in context: Self.Context) -> CGFloat?
```

## Parameters

- `context`: Information that can help to determine the height of the detent.

<a id="return-value"></a>

## Return Value

The height of the detent, or `nil` if the detent should be inactive based on the `context` input.

## See Also

### Getting the height

- [CustomPresentationDetent.Context](context.md): Information that you can use to calculate the height of a custom detent.

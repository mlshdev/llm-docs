> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/customattribute(_:)](https://developer.apple.com/documentation/swiftui/text/customattribute(_:))

# customAttribute(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Adds a custom attribute to the text view.

## Declaration

```swift
func customAttribute<T>(_ value: T) -> Text where T : TextAttribute
```

## Parameters

- `value`: The attribute to attach.

<a id="return-value"></a>

## Return Value

A version of the text view with `value` attached.

<a id="discussion"></a>

## Discussion

Only one attribute of each type may be attached to each text view, with inner attributes taking precedence.

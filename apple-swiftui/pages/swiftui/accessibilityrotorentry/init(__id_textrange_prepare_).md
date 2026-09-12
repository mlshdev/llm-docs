> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilityrotorentry/init(_:id:textrange:prepare:)](https://developer.apple.com/documentation/swiftui/accessibilityrotorentry/init(_:id:textrange:prepare:))

# init(\_:id:textRange:prepare:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Create a Rotor entry with a specific label and identifier, with an optional range.

## Declaration

```swift
@export(implementation) init(_ label: LocalizedStringResource, id: ID, textRange: Range<String.Index>? = nil, prepare: @escaping () -> Void = {})
```

## Parameters

- `label`: Localized string used to show this Rotor entry to users.
- `id`: Used to find the UI element associated with this Rotor entry. This identifier should be used within a `scrollView`, either in a `ForEach` or using an `id` call.
- `textRange`: Optional range of text associated with this Rotor entry. This should be a range within text that is set as the accessibility label or accessibility value of the associated element.
- `prepare`: Optional closure to run before a Rotor entry is navigated to, to prepare the UI as needed. This can be used to bring the UI element on-screen if it isn’t already, and SwiftUI is not able to automatically scroll to it.

## See Also

### Creating a rotor entry

- [init(\_:textRange:prepare:)](init%28__textrange_prepare_%29.md): Create a Rotor entry with a specific label and range. This Rotor entry will be associated with the Accessibility element that owns the Rotor.

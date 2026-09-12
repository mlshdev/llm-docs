> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilityrotorentry/init(_:textrange:prepare:)](https://developer.apple.com/documentation/swiftui/accessibilityrotorentry/init(_:textrange:prepare:))

# init(\_:textRange:prepare:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Create a Rotor entry with a specific label and range. This Rotor entry will be associated with the Accessibility element that owns the Rotor.

## Declaration

```swift
@export(implementation) init(_ label: LocalizedStringResource, textRange: Range<String.Index>, prepare: @escaping () -> Void = {}) where ID == Never
```

## Parameters

- `label`: Localized string used to show this Rotor entry to users. If no label is specified, the Rotor entry will be labeled based on the text at that range.
- `prepare`: Optional closure to run before a Rotor entry is navigated to, to prepare the UI as needed. This can be used to bring the UI element or text on-screen if it isn’t already, and SwiftUI not able to automatically scroll to it.

## See Also

### Creating a rotor entry

- [init(\_:id:textRange:prepare:)](init%28__id_textrange_prepare_%29.md): Create a Rotor entry with a specific label and identifier, with an optional range.

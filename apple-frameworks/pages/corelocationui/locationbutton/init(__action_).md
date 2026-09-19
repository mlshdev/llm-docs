> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocationui/locationbutton/init(_:action:)

# init(\_:action:)

**Framework:** CoreLocationUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

Creates a location button with the specified title and action.

## Declaration

```swift
nonisolated init(_ title: LocationButton.Title? = .currentLocation, action: @escaping () -> Void)
```

## Parameters

- `title`: The text that the button displays. For possible values, see [LocationButton.Title](title.md).
- `action`: The action that initiates every time the user taps the button.

## See Also

### Creating a location button

- [LocationButton.Title](title.md): Constants that specify the text of a button title.

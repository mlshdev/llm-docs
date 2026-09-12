> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/placemarkdisplaystyle](https://developer.apple.com/documentation/appintents/intentparameter/placemarkdisplaystyle)

# IntentParameter.PlacemarkDisplayStyle

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Describes a location’s display style in Shortcuts and Siri Suggestions.

## Declaration

```swift
enum PlacemarkDisplayStyle
```

## Topics

### Getting the display styles

- [IntentParameter.PlacemarkDisplayStyle.name](placemarkdisplaystyle/name.md): A display style that shows only the location’s city.
- [IntentParameter.PlacemarkDisplayStyle.address](placemarkdisplaystyle/address.md): A display style that shows the location’s full address.
- [IntentParameter.PlacemarkDisplayStyle.city](placemarkdisplaystyle/city.md): A display style that shows only the location’s city.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Accessing the display style

- [displayStyle](displaystyle.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `CLPlacemark`.

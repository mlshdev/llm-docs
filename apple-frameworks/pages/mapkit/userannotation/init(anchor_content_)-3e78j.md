> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/userannotation/init(anchor:content:)-3e78j](https://developer.apple.com/documentation/mapkit/userannotation/init(anchor:content:)-3e78j)

# init(anchor:content:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Create an annotation that displays the person’s current location of the user using a custom view.

## Declaration

```swift
@MainActor @preconcurrency init(anchor: UnitPoint = .center, @ViewBuilder content: @escaping () -> Content)
```

## Parameters

- `anchor`: How to anchor the user location indicator around the person’s location. The default is [center](https://developer.apple.com/documentation/swiftui/unitpoint/center).
- `content`: The custom view used to indicate the person’s location.

## See Also

### Creating a user annotation

- [init()](init%28%29.md): Creates an annotation that displays the person’s current location.
- [init(anchor:)](init%28anchor_%29.md): Creates an annotation that displays the person’s current location using the system styled user location indicator with the specified anchor point.
- [init(anchor:content:)](init%28anchor_content_%29-8u3r4.md): Creates an annotation that displays a person’s current location using the system styled user location indicator with the specified anchor point using a custom view.

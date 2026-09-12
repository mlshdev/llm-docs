> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/userannotation/init(anchor:content:)-8u3r4](https://developer.apple.com/documentation/mapkit/userannotation/init(anchor:content:)-8u3r4)

# init(anchor:content:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates an annotation that displays a person’s current location using the system styled user location indicator with the specified anchor point using a custom view.

## Declaration

```swift
@MainActor @preconcurrency init(anchor: UnitPoint = .center, @ViewBuilder content: @escaping (UserLocation) -> Content)
```

## Parameters

- `anchor`: A UnitPoint value that describes how to anchor the user location indicator to the person’s location. The default is [center](https://developer.apple.com/documentation/swiftui/unitpoint/center).
- `content`: The custom view to show at the person’s location.

<a id="return-value"></a>

## Return Value

Returns  a [UserAnnotation](../userannotation.md) that displays a persons current location using the specified anchor location.

## See Also

### Creating a user annotation

- [init()](init%28%29.md): Creates an annotation that displays the person’s current location.
- [init(anchor:)](init%28anchor_%29.md): Creates an annotation that displays the person’s current location using the system styled user location indicator with the specified anchor point.
- [init(anchor:content:)](init%28anchor_content_%29-3e78j.md): Create an annotation that displays the person’s current location of the user using a custom view.

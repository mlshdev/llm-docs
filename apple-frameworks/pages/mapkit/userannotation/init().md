> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/userannotation/init()](https://developer.apple.com/documentation/mapkit/userannotation/init())

# init()

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates an annotation that displays the person’s current location.

## Declaration

```swift
@MainActor @preconcurrency init() where Content == DefaultUserAnnotationContent
```

## See Also

### Creating a user annotation

- [init(anchor:)](init%28anchor_%29.md): Creates an annotation that displays the person’s current location using the system styled user location indicator with the specified anchor point.
- [init(anchor:content:)](init%28anchor_content_%29-8u3r4.md): Creates an annotation that displays a person’s current location using the system styled user location indicator with the specified anchor point using a custom view.
- [init(anchor:content:)](init%28anchor_content_%29-3e78j.md): Create an annotation that displays the person’s current location of the user using a custom view.

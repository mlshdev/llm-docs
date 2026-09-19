> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/displayrepresentation/image-swift.struct/displaystyle/circular

# circular

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Display this representation in a circle.

## Declaration

```swift
static var circular: DisplayRepresentation.Image.DisplayStyle { get }
```

<a id="discussion"></a>

## Discussion

Use this for situations where an entity is represented within your app as a circle, such as the colorful circles that are used to represent destinations in Apple Maps. When using this style, provide a full-bleed image, and the system will attempt to render your image within a circle mask when possible.

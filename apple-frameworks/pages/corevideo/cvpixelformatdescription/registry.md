> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelformatdescription/registry](https://developer.apple.com/documentation/corevideo/cvpixelformatdescription/registry)

# CVPixelFormatDescription.Registry

**Framework:** Core Video  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Registry of all pixel formats.

## Declaration

```swift
final class Registry
```

## Topics

### Instance Properties

- [formatDescriptions](registry/formatdescriptions.md): Get all registered pixel format descriptions.

### Instance Methods

- [register(\_:)](registry/register%28__%29.md): Register a new pixel format with CoreVideo.

### Subscripts

- [subscript(\_:)](registry/subscript%28__%29.md): Get the pixel format description for specified format.

### Type Properties

- [shared](registry/shared.md): Global pixel format registry.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

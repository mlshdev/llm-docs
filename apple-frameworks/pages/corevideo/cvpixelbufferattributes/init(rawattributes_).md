> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvpixelbufferattributes/init(rawattributes:)

# init(rawAttributes:)

**Framework:** Core Video  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create an instance using a freeform attribute dictionary

## Declaration

```swift
init(rawAttributes: [String : any Sendable])
```

<a id="discussion"></a>

## Discussion

This dictionary should only contain the pixel buffer attributes that [CVPixelBufferCreate(\_:\_:\_:\_:\_:\_:)](../cvpixelbuffercreate%28____________%29.md) function accepts.

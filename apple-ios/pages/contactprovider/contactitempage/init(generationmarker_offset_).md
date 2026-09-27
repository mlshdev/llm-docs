> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactitempage/init(generationmarker:offset:)

# init(generationMarker:offset:)

**Framework:** ContactProvider  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Creates a contact item page with the given generation marker and offset.

## Declaration

```swift
init(generationMarker: Data, offset: Int)
```

## Parameters

- `generationMarker`: A marker that indicates when enumeration of content started.
- `offset`: An offset from the generation marker.

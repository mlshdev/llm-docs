> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactitemsyncanchor/init(generationmarker:offset:)

# init(generationMarker:offset:)

**Framework:** ContactProvider  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Creates a sync anchor with the given generation marker and offset.

## Declaration

```swift
init(generationMarker: Data, offset: Int)
```

## Parameters

- `generationMarker`: A marker that indicates the database generation being enumerated for changes.
- `offset`: An offset from the generation marker.

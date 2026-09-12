> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemsyncanchor/init(generationmarker:offset:)](https://developer.apple.com/documentation/contactprovider/contactitemsyncanchor/init(generationmarker:offset:))

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

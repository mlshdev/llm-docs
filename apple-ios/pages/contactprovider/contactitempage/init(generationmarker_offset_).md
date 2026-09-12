> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitempage/init(generationmarker:offset:)](https://developer.apple.com/documentation/contactprovider/contactitempage/init(generationmarker:offset:))

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

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcontentbuilder/buildblock(_:)-5ewn9](https://developer.apple.com/documentation/mapkit/mapcontentbuilder/buildblock(_:)-5ewn9)

# buildBlock(\_:)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a map content block that contains a single content result.

## Declaration

```swift
static func buildBlock<C>(_ content: C) -> C where C : MapContent
```

## Parameters

- `content`: The view content to add to the block.

<a id="return-value"></a>

## Return Value

Returns the [MapContent](../mapcontent.md) with the single element you provided.

## See Also

### Map content builders

- [buildBlock()](buildblock%28%29.md): Creates an empty map content block that contains no statements.

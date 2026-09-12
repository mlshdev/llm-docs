> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderstages/init(rawvalue:)](https://developer.apple.com/documentation/metal/mtlrenderstages/init(rawvalue:))

# init(rawValue:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Creates a render stage from a raw value.

## Declaration

```swift
init(rawValue: UInt)
```

## Parameters

- `rawValue`: A bit field value of a render stage as an integer.

<a id="discussion"></a>

## Discussion

Use of the [MTLRenderStages](../mtlrenderstages.md) type’s static properties, such as [mesh](mesh.md), [vertex](vertex.md), or [fragment](fragment.md) instead of creating a render stage instance yourself with this initializer.

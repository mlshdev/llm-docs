> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/partresult](https://developer.apple.com/documentation/hvf/partresult)

# PartResult

**Framework:** hvf  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

The result returned from a part loader

## Declaration

```swift
enum PartResult
```

## Topics

### Enumeration Cases

- [PartResult.composite(\_:)](partresult/composite%28__%29.md): The result is a Composite; data is in the CompositeWriter
- [PartResult.notFound](partresult/notfound.md): The requested part number was not found
- [PartResult.shape(\_:)](partresult/shape%28__%29.md): The result is a Shape; data is in the ShapeWriter

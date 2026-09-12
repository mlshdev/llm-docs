> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/partgenerator](https://developer.apple.com/documentation/hvf/partgenerator)

# PartGenerator

**Framework:** hvf  
**Kind:** Protocol  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Protocol for returning a writer object to create Shape or Composite data

## Declaration

```swift
protocol PartGenerator
```

## Topics

### Instance Methods

- [makeComposite(\_:)](partgenerator/makecomposite%28__%29.md): Create a new Composite, and return a CompositeWriter to fill it in
- [makeShape(\_:)](partgenerator/makeshape%28__%29.md): Create a new Shape, and return a ShapeWriter to fill it in

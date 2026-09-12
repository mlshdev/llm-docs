> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/custompartloader](https://developer.apple.com/documentation/hvf/custompartloader)

# CustomPartLoader

**Framework:** hvf  
**Kind:** Type Alias  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Closure which loads parts from an arbitrary source The first parameter is the part index which uniquely identifiers a part; these are assigned by the loader The second parameter is a PartGenerator the loader uses to get a ShapeWriter or CompositeWriter to create the requested part The result is the generated part, passed back in a PartResult

## Declaration

```swift
typealias CustomPartLoader = (Int, any PartGenerator) -> PartResult
```

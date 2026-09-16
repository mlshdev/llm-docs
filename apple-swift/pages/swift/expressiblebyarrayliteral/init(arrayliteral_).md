> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/expressiblebyarrayliteral/init(arrayliteral:)

# init(arrayLiteral:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an instance initialized with the given elements.

## Declaration

```swift
init(arrayLiteral elements: Self.ArrayLiteralElement...)
```

## Default Implementations

### ExpressibleByArrayLiteral Implementations

- [init(arrayLiteral:)](init%28arrayliteral_%29-9x660.md): Creates a vector from the specified elements.
- [init(arrayLiteral:)](init%28arrayliteral_%29-q0d7.md): Conforms when `ArrayLiteralElement` is `Self.Element`. Creates a set containing the elements of the given array literal.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skwarpgeometrygrid/gridbyreplacingdestpositions:](https://developer.apple.com/documentation/spritekit/skwarpgeometrygrid/gridbyreplacingdestpositions:)

# gridByReplacingDestPositions:

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a copy of the receiver with the destination positions replaced by a specified array.

## Declaration

```objectivec
- (instancetype) gridByReplacingDestPositions:(const vector_float2 *) destPositions;
```

<a id="Discussion"></a>

## Discussion

## See Also

### Accessing or Setting Grid Vertices

- [destPositionAtIndex:](destposition%28at_%29.md): Returns the destination position of a vertex.
- [sourcePositionAtIndex:](sourceposition%28at_%29.md): Returns the source position of a vertex.
- [gridByReplacingSourcePositions:](gridbyreplacingsourcepositions_.md): Returns a copy of the receiver with the source positions replaced by a specified array.

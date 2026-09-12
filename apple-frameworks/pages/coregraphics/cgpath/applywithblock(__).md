> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/applywithblock(_:)](https://developer.apple.com/documentation/coregraphics/cgpath/applywithblock(_:))

# applyWithBlock(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```swift
func applyWithBlock(_ block: (UnsafePointer<CGPathElement>) -> Void)
```

## See Also

### Instance Methods

- [componentsSeparated(using:)](componentsseparated%28using_%29.md)
- [flattened(threshold:)](flattened%28threshold_%29.md)
- [intersection(\_:using:)](intersection%28__using_%29.md)
- [intersects(\_:using:)](intersects%28__using_%29.md)
- [lineIntersection(\_:using:)](lineintersection%28__using_%29.md)
- [lineSubtracting(\_:using:)](linesubtracting%28__using_%29.md)
- [normalized(using:)](normalized%28using_%29.md)
- [subtracting(\_:using:)](subtracting%28__using_%29.md)
- [symmetricDifference(\_:using:)](symmetricdifference%28__using_%29.md)
- [union(\_:using:)](union%28__using_%29.md)

# CGPathApplyWithBlock (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
extern void CGPathApplyWithBlock(CGPathRef path, CGPathApplyBlock block);
```

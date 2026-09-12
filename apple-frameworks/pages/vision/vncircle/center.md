> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncircle/center](https://developer.apple.com/documentation/vision/vncircle/center)

# center (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The circle’s center point.

## Declaration

```swift
var center: VNPoint { get }
```

## See Also

### Inspecting a Circle

- [diameter](diameter.md): The circle’s diameter.
- [radius](radius.md): The circle’s radius.
- [contains(\_:)](contains%28__%29.md): Determines if this circle, including its boundary, contains the specified point.
- [contains(\_:inCircumferentialRingOfWidth:)](contains%28__incircumferentialringofwidth_%29.md): Determines if a ring around this circle’s circumference contains the specified point.

# center (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The circle’s center point.

## Declaration

```objectivec
@property (strong, readonly) VNPoint * center;
```

## See Also

### Inspecting a Circle

- [diameter](diameter.md): The circle’s diameter.
- [radius](radius.md): The circle’s radius.
- [containsPoint:](contains%28__%29.md): Determines if this circle, including its boundary, contains the specified point.
- [containsPoint:inCircumferentialRingOfWidth:](contains%28__incircumferentialringofwidth_%29.md): Determines if a ring around this circle’s circumference contains the specified point.

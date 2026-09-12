> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnpoint3d/init(position:)](https://developer.apple.com/documentation/vision/vnpoint3d/init(position:))

# init(position:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a point object with the position you specify.

## Declaration

```swift
init?(position: simd_float4x4)
```

## Parameters

- `position`: The three-dimensional position.

## See Also

### Creating a Point

- [init(coder:)](init%28coder_%29.md)

# initWithPosition: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a point object with the position you specify.

## Declaration

```objectivec
- (instancetype) initWithPosition:(simd_float4x4) position;
```

## Parameters

- `position`: The three-dimensional position.

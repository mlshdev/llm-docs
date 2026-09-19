> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlsizemake(_:_:_:)

# MTLSizeMake(\_:\_:\_:) (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a size instance with values for its width, height, and depth properties.

## Declaration

```swift
func MTLSizeMake(_ width: Int, _ height: Int, _ depth: Int) -> MTLSize
```

## Parameters

- `width`: A value for the x-axis dimension.
- `height`: A value for the y-axis dimension. Pass `1` for sizes with one dimension.
- `depth`: A value for the z-axis dimension. Pass `1` for sizes with one or two dimensions.

## See Also

### Creating a size instance

- [init()](mtlsize/init%28%29.md): Creates a default size instance by setting the initial values for its width, height, and depth properties to zero.
- [init(width:height:depth:)](mtlsize/init%28width_height_depth_%29.md): Creates a size instance with values for its width, height, and depth properties.

# MTLSizeMake (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a size instance with values for its width, height, and depth properties.

## Declaration

```objectivec
static MTLSize MTLSizeMake(NSUInteger width, NSUInteger height, NSUInteger depth);
```

## Parameters

- `width`: A value for the x-axis dimension.
- `height`: A value for the y-axis dimension. Pass `1` for sizes with one dimension.
- `depth`: A value for the z-axis dimension. Pass `1` for sizes with one or two dimensions.

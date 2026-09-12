> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectelement/weight](https://developer.apple.com/documentation/photosui/phprojectelement/weight)

# weight (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A value between 0 and 1 representing relative significance of the element in its section.

## Declaration

```swift
var weight: Double { get }
```

<a id="Discussion"></a>

## Discussion

Values range from `0.0` to `1.0` where a higher number represents higher overall significance within the project section. The default value is `0.5`.

Projects that allow a user to reduce the number of elements in a section can use this hint to determine which elements are most important to preserving context.

## See Also

### Describing Project Elements

- [placement](placement.md): A rectangle defining where an element is placed in grid space coordinates.

# weight (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A value between 0 and 1 representing relative significance of the element in its section.

## Declaration

```objectivec
@property (nonatomic, readonly) double weight;
```

<a id="Discussion"></a>

## Discussion

Values range from `0.0` to `1.0` where a higher number represents higher overall significance within the project section. The default value is `0.5`.

Projects that allow a user to reduce the number of elements in a section can use this hint to determine which elements are most important to preserving context.

## See Also

### Describing Project Elements

- [placement](placement.md): A rectangle defining where an element is placed in grid space coordinates.

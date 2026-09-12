> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselection/init(_:affinity:granularity:)](https://developer.apple.com/documentation/uikit/nstextselection/init(_:affinity:granularity:))

# init(\_:affinity:granularity:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a new text selection with the ranges, selection affinity, and granularity you provide.

## Declaration

```swift
init(_ textRanges: [NSTextRange], affinity: NSTextSelection.Affinity, granularity: NSTextSelection.Granularity)
```

## Parameters

- `textRanges`: An array of text ranges.
- `affinity`: One of the available [NSTextSelection.Affinity](affinity-swift.enum.md) options.
- `granularity`: One of the available [NSTextSelection.Granularity](granularity-swift.enum.md) options.

## See Also

### Creating a text selection

- [init(\_:affinity:)](init%28__affinity_%29.md): Creates a new text selection with the location and selection affinity you provide.
- [init(range:affinity:granularity:)](init%28range_affinity_granularity_%29.md): Creates a new text selection with the range, selection affinity, and granularity you provide.
- [init(coder:)](init%28coder_%29.md): Creates a test selection from data in an unarchiver.

# initWithRanges:affinity:granularity: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a new text selection with the ranges, selection affinity, and granularity you provide.

## Declaration

```objectivec
- (instancetype) initWithRanges:(NSArray<NSTextRange *> *) textRanges affinity:(NSTextSelectionAffinity) affinity granularity:(NSTextSelectionGranularity) granularity;
```

## Parameters

- `textRanges`: An array of text ranges.
- `affinity`: One of the available [NSTextSelectionAffinity](affinity-swift.enum.md) options.
- `granularity`: One of the available [NSTextSelectionGranularity](granularity-swift.enum.md) options.

## See Also

### Creating a text selection

- [initWithLocation:affinity:](init%28__affinity_%29.md): Creates a new text selection with the location and selection affinity you provide.
- [initWithRange:affinity:granularity:](init%28range_affinity_granularity_%29.md): Creates a new text selection with the range, selection affinity, and granularity you provide.
- [initWithCoder:](init%28coder_%29.md): Creates a test selection from data in an unarchiver.

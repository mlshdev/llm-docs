> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselection/init(range:affinity:granularity:)](https://developer.apple.com/documentation/appkit/nstextselection/init(range:affinity:granularity:))

# init(range:affinity:granularity:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a new text selection with the range, selection affinity, and granularity you provide.

## Declaration

```swift
convenience init(range: NSTextRange, affinity: NSTextSelection.Affinity, granularity: NSTextSelection.Granularity)
```

## Parameters

- `range`: The range of the selection.
- `affinity`: One of the available [NSTextSelection.Affinity](affinity-swift.enum.md) options.
- `granularity`: One of the available [NSTextSelection.Granularity](granularity-swift.enum.md) options.

## See Also

### Creating a text selection

- [init(\_:affinity:)](init%28__affinity_%29.md): Creates a new text selection with the location and selection affinity you provide.
- [init(\_:affinity:granularity:)](init%28__affinity_granularity_%29.md): Creates a new text selection with the ranges, selection affinity, and granularity you provide.
- [init(coder:)](init%28coder_%29.md): Creates a test selection from data in an unarchiver.

# initWithRange:affinity:granularity: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a new text selection with the range, selection affinity, and granularity you provide.

## Declaration

```objectivec
- (instancetype) initWithRange:(NSTextRange *) range affinity:(NSTextSelectionAffinity) affinity granularity:(NSTextSelectionGranularity) granularity;
```

## Parameters

- `range`: The range of the selection.
- `affinity`: One of the available [NSTextSelectionAffinity](affinity-swift.enum.md) options.
- `granularity`: One of the available [NSTextSelectionGranularity](granularity-swift.enum.md) options.

## See Also

### Creating a text selection

- [initWithLocation:affinity:](init%28__affinity_%29.md): Creates a new text selection with the location and selection affinity you provide.
- [initWithRanges:affinity:granularity:](init%28__affinity_granularity_%29.md): Creates a new text selection with the ranges, selection affinity, and granularity you provide.
- [initWithCoder:](init%28coder_%29.md): Creates a test selection from data in an unarchiver.

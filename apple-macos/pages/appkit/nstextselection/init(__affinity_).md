> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselection/init(_:affinity:)](https://developer.apple.com/documentation/appkit/nstextselection/init(_:affinity:))

# init(\_:affinity:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a new text selection with the location and selection affinity you provide.

## Declaration

```swift
convenience init(_ location: any NSTextLocation, affinity: NSTextSelection.Affinity)
```

## Parameters

- `location`: The text location
- `affinity`: One of the possible [NSTextSelection.Affinity](affinity-swift.enum.md) options.

## See Also

### Creating a text selection

- [init(range:affinity:granularity:)](init%28range_affinity_granularity_%29.md): Creates a new text selection with the range, selection affinity, and granularity you provide.
- [init(\_:affinity:granularity:)](init%28__affinity_granularity_%29.md): Creates a new text selection with the ranges, selection affinity, and granularity you provide.
- [init(coder:)](init%28coder_%29.md): Creates a test selection from data in an unarchiver.

# initWithLocation:affinity: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a new text selection with the location and selection affinity you provide.

## Declaration

```objectivec
- (instancetype) initWithLocation:(id<NSTextLocation>) location affinity:(NSTextSelectionAffinity) affinity;
```

## Parameters

- `location`: The text location
- `affinity`: One of the possible [NSTextSelectionAffinity](affinity-swift.enum.md) options.

## See Also

### Creating a text selection

- [initWithRange:affinity:granularity:](init%28range_affinity_granularity_%29.md): Creates a new text selection with the range, selection affinity, and granularity you provide.
- [initWithRanges:affinity:granularity:](init%28__affinity_granularity_%29.md): Creates a new text selection with the ranges, selection affinity, and granularity you provide.
- [initWithCoder:](init%28coder_%29.md): Creates a test selection from data in an unarchiver.

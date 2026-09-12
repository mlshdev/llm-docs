> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselection/init(coder:)](https://developer.apple.com/documentation/appkit/nstextselection/init(coder:))

# init(coder:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a test selection from data in an unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: A coder that subclasses [NSCoder](https://developer.apple.com/documentation/foundation/nscoder).

## See Also

### Creating a text selection

- [init(\_:affinity:)](init%28__affinity_%29.md): Creates a new text selection with the location and selection affinity you provide.
- [init(range:affinity:granularity:)](init%28range_affinity_granularity_%29.md): Creates a new text selection with the range, selection affinity, and granularity you provide.
- [init(\_:affinity:granularity:)](init%28__affinity_granularity_%29.md): Creates a new text selection with the ranges, selection affinity, and granularity you provide.

# initWithCoder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a test selection from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: A coder that subclasses [NSCoder](https://developer.apple.com/documentation/foundation/nscoder).

## See Also

### Creating a text selection

- [initWithLocation:affinity:](init%28__affinity_%29.md): Creates a new text selection with the location and selection affinity you provide.
- [initWithRange:affinity:granularity:](init%28range_affinity_granularity_%29.md): Creates a new text selection with the range, selection affinity, and granularity you provide.
- [initWithRanges:affinity:granularity:](init%28__affinity_granularity_%29.md): Creates a new text selection with the ranges, selection affinity, and granularity you provide.

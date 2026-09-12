> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselection/init(coder:)](https://developer.apple.com/documentation/uikit/nstextselection/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a test selection from data in an unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: A coder that subclasses [NSCoder](../../foundation/nscoder.md).

## See Also

### Creating a text selection

- [init(\_:affinity:)](init%28__affinity_%29.md): Creates a new text selection with the location and selection affinity you provide.
- [init(range:affinity:granularity:)](init%28range_affinity_granularity_%29.md): Creates a new text selection with the range, selection affinity, and granularity you provide.
- [init(\_:affinity:granularity:)](init%28__affinity_granularity_%29.md): Creates a new text selection with the ranges, selection affinity, and granularity you provide.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a test selection from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: A coder that subclasses [NSCoder](../../foundation/nscoder.md).

## See Also

### Creating a text selection

- [initWithLocation:affinity:](init%28__affinity_%29.md): Creates a new text selection with the location and selection affinity you provide.
- [initWithRange:affinity:granularity:](init%28range_affinity_granularity_%29.md): Creates a new text selection with the range, selection affinity, and granularity you provide.
- [initWithRanges:affinity:granularity:](init%28__affinity_granularity_%29.md): Creates a new text selection with the ranges, selection affinity, and granularity you provide.

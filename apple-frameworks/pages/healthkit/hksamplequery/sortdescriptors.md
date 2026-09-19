> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hksamplequery/sortdescriptors

# sortDescriptors (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The sort descriptors that specify the order of the results returned by this query.

## Declaration

```swift
var sortDescriptors: [NSSortDescriptor]? { get }
```

## See Also

### Getting Property Data

- [limit](limit.md): The maximum number of samples that this query returns.

# sortDescriptors (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The sort descriptors that specify the order of the results returned by this query.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSSortDescriptor *> * sortDescriptors;
```

## See Also

### Getting Property Data

- [limit](limit.md): The maximum number of samples that this query returns.

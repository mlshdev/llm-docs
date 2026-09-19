> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlmodelcollection/entry/isequal(to:)

# isEqual(to:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Returns a Boolean value that indicates whether the two entries are equal.

> Use Background Assets or NSURLSession instead.

## Declaration

```swift
func isEqual(to entry: MLModelCollection.Entry) -> Bool
```

## Parameters

- `entry`: Another model collection entry.

# isEqualToModelCollectionEntry: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+ (deprecated in 1.1)

Returns a Boolean value that indicates whether the two entries are equal.

> Use Background Assets or NSURLSession instead.

## Declaration

```objectivec
- (BOOL) isEqualToModelCollectionEntry:(MLModelCollectionEntry *) entry;
```

## Parameters

- `entry`: Another model collection entry.

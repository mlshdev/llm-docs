> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/compare(byrank:)](https://developer.apple.com/documentation/corespotlight/cssearchableitem/compare(byrank:))

# compare(byRank:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Compares two items by rank and returns the result.

## Declaration

```swift
func compare(byRank other: CSSearchableItem) -> ComparisonResult
```

## Parameters

- `other`: The other item to compare against the current one.

<a id="return-value"></a>

## Return Value

A comparison result that indicates the ranked order of the items.

<a id="Discussion"></a>

## Discussion

Call this function when you want to compare the current item with the one you specify. The method compares the ranks of the items.

# compareByRank: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Compares two items by rank and returns the result.

## Declaration

```objectivec
- (NSComparisonResult) compareByRank:(CSSearchableItem *) other;
```

## Parameters

- `other`: The other item to compare against the current one.

<a id="return-value"></a>

## Return Value

A comparison result that indicates the ranked order of the items.

<a id="Discussion"></a>

## Discussion

Call this function when you want to compare the current item with the one you specify. The method compares the ranks of the items.

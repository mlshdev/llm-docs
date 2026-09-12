> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssuggestion/compare(_:)](https://developer.apple.com/documentation/corespotlight/cssuggestion/compare(_:))

# compare(\_:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Compares the suggestion with a second specified suggestion.

## Declaration

```swift
func compare(_ other: CSSuggestion) -> ComparisonResult
```

## Parameters

- `other`: The suggestion to compare to this suggestion.

<a id="return-value"></a>

## Return Value

Returns an `NSComparisonResult`.

## See Also

### Comparing suggestions

- [compare(byRank:)](compare%28byrank_%29.md)

# compare: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Compares the suggestion with a second specified suggestion.

## Declaration

```objectivec
- (NSComparisonResult) compare:(CSSuggestion *) other;
```

## Parameters

- `other`: The suggestion to compare to this suggestion.

<a id="return-value"></a>

## Return Value

Returns an `NSComparisonResult`.

## See Also

### Comparing suggestions

- [compareByRank:](compare%28byrank_%29.md)

> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsscrubberdatasource/numberofitems(for:)

# numberOfItems(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Asks the data source for the number of items in the scrubber.

## Declaration

```swift
@MainActor func numberOfItems(for scrubber: NSScrubber) -> Int
```

## Parameters

- `scrubber`: The scrubber whose item count is being requested.

<a id="return-value"></a>

## Return Value

The number of items in the scrubber.

# numberOfItemsForScrubber: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Asks the data source for the number of items in the scrubber.

## Declaration

```objectivec
- (NSInteger) numberOfItemsForScrubber:(NSScrubber *) scrubber;
```

## Parameters

- `scrubber`: The scrubber whose item count is being requested.

<a id="return-value"></a>

## Return Value

The number of items in the scrubber.

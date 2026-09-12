> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberdatasource/scrubber(_:viewforitemat:)](https://developer.apple.com/documentation/appkit/nsscrubberdatasource/scrubber(_:viewforitemat:))

# scrubber(\_:viewForItemAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Asks the data source object for the view the corresponds to the specified item in the scrubber.

## Declaration

```swift
@MainActor func scrubber(_ scrubber: NSScrubber, viewForItemAt index: Int) -> NSScrubberItemView
```

## Parameters

- `scrubber`: The scrubber requesting the view.
- `index`: The index that specifies the location of the item in the scrubber.

<a id="return-value"></a>

## Return Value

A configured item view object.

# scrubber:viewForItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Asks the data source object for the view the corresponds to the specified item in the scrubber.

## Declaration

```objectivec
- (NSScrubberItemView *) scrubber:(NSScrubber *) scrubber viewForItemAtIndex:(NSInteger) index;
```

## Parameters

- `scrubber`: The scrubber requesting the view.
- `index`: The index that specifies the location of the item in the scrubber.

<a id="return-value"></a>

## Return Value

A configured item view object.

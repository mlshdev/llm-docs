> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsscrubberlayoutattributes/init(foritemat:)

# init(forItemAt:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12.2+

Creates a new layout attributes object for the specified scrubber item index.

## Declaration

```swift
convenience init(forItemAt index: Int)
```

## Parameters

- `index`: The index of the scrubber item that this layout attributes object represents.

<a id="return-value"></a>

## Return Value

A layout attributes object configured for the specified index.

# layoutAttributesForItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.12.2+

Creates a new layout attributes object for the specified scrubber item index.

## Declaration

```objectivec
+ (instancetype) layoutAttributesForItemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the scrubber item that this layout attributes object represents.

<a id="return-value"></a>

## Return Value

A layout attributes object configured for the specified index.

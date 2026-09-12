> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextrange/contains(_:)-7hvi0](https://developer.apple.com/documentation/appkit/nstextrange/contains(_:)-7hvi0)

# contains(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Determines if the text location you specify is in the current text range.

## Declaration

```swift
func contains(_ location: any NSTextLocation) -> Bool
```

## Parameters

- `location`: An [NSTextLocation](../nstextlocation.md).

<a id="return-value"></a>

## Return Value

Returns `true` if the location is in the range otherwise `false` .

## See Also

### Finding text within the text range

- [contains(\_:)](contains%28__%29-5j4y2.md): Determines if the text range you specify is in the current text range.

# containsLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Determines if the text location you specify is in the current text range.

## Declaration

```objectivec
- (BOOL) containsLocation:(id<NSTextLocation>) location;
```

## Parameters

- `location`: An [NSTextLocation](../nstextlocation.md).

<a id="return-value"></a>

## Return Value

Returns `true` if the location is in the range otherwise `false` .

## See Also

### Finding text within the text range

- [containsRange:](contains%28__%29-5j4y2.md): Determines if the text range you specify is in the current text range.

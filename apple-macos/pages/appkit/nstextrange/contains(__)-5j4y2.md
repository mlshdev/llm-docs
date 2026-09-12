> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextrange/contains(_:)-5j4y2](https://developer.apple.com/documentation/appkit/nstextrange/contains(_:)-5j4y2)

# contains(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Determines if the text range you specify is in the current text range.

## Declaration

```swift
func contains(_ textRange: NSTextRange) -> Bool
```

## Parameters

- `textRange`: An [NSTextRange](../nstextrange.md).

<a id="return-value"></a>

## Return Value

Returns `true` if the range you provide is in the current range; otherwise `false`.

## See Also

### Finding text within the text range

- [contains(\_:)](contains%28__%29-7hvi0.md): Determines if the text location you specify is in the current text range.

# containsRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Determines if the text range you specify is in the current text range.

## Declaration

```objectivec
- (BOOL) containsRange:(NSTextRange *) textRange;
```

## Parameters

- `textRange`: An [NSTextRange](../nstextrange.md).

<a id="return-value"></a>

## Return Value

Returns `true` if the range you provide is in the current range; otherwise `false`.

## See Also

### Finding text within the text range

- [containsLocation:](contains%28__%29-7hvi0.md): Determines if the text location you specify is in the current text range.

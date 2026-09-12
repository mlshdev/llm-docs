> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextrange/contains(_:)-5j4y2](https://developer.apple.com/documentation/uikit/nstextrange/contains(_:)-5j4y2)

# contains(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

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

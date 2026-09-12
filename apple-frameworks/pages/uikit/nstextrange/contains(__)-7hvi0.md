> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextrange/contains(_:)-7hvi0](https://developer.apple.com/documentation/uikit/nstextrange/contains(_:)-7hvi0)

# contains(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

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

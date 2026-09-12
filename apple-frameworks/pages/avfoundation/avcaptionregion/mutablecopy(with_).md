> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionregion/mutablecopy(with:)](https://developer.apple.com/documentation/avfoundation/avcaptionregion/mutablecopy(with:))

# mutableCopy(with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a mutable copy of a caption region.

## Declaration

```swift
func mutableCopy(with zone: NSZone? = nil) -> Any
```

## Parameters

- `zone`: The system ignores this parameter. Objective-C doesn’t no longer supports memory zones.

<a id="return-value"></a>

## Return Value

A copy of the region.

<a id="Discussion"></a>

## Discussion

This method throws an exception if the caption region contains an identifier.

## See Also

### Processing regions

- [encode(with:)](encode%28with_%29.md): Encodes the region using the specified encoder.
- [isEqual(\_:)](isequal%28__%29.md): Returns a Boolean value that indicates whether an object equals another.

# mutableCopyWithZone: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a mutable copy of a caption region.

## Declaration

```objectivec
- (id) mutableCopyWithZone:(NSZone *) zone;
```

## Parameters

- `zone`: The system ignores this parameter. Objective-C doesn’t no longer supports memory zones.

<a id="return-value"></a>

## Return Value

A copy of the region.

<a id="Discussion"></a>

## Discussion

This method throws an exception if the caption region contains an identifier.

## See Also

### Processing regions

- [encodeWithCoder:](encode%28with_%29.md): Encodes the region using the specified encoder.
- [isEqual:](isequal%28__%29.md): Returns a Boolean value that indicates whether an object equals another.

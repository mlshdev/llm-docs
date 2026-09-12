> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoisemap/setvalue(_:at:)](https://developer.apple.com/documentation/gameplaykit/gknoisemap/setvalue(_:at:))

# setValue(\_:at:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Sets the value at the specified position in the noise map.

## Declaration

```swift
func setValue(_ value: Float, at position: vector_int2)
```

## Parameters

- `value`: The new value to set.
- `position`: A position in the noise map’s integer grid.

<a id="Discussion"></a>

## Discussion

## See Also

### Accessing Noise Values

- [value(at:)](value%28at_%29.md): Returns the value at the specified position in the noise map’s discrete sample grid.
- [interpolatedValue(at:)](interpolatedvalue%28at_%29.md): Returns the value at the specified position in the noise map, interpolating results for positions not on the discrete sample grid.

# setValue:atPosition: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Sets the value at the specified position in the noise map.

## Declaration

```objectivec
- (void) setValue:(float) value atPosition:(vector_int2) position;
```

## Parameters

- `value`: The new value to set.
- `position`: A position in the noise map’s integer grid.

<a id="Discussion"></a>

## Discussion

## See Also

### Accessing Noise Values

- [valueAtPosition:](value%28at_%29.md): Returns the value at the specified position in the noise map’s discrete sample grid.
- [interpolatedValueAtPosition:](interpolatedvalue%28at_%29.md): Returns the value at the specified position in the noise map, interpolating results for positions not on the discrete sample grid.

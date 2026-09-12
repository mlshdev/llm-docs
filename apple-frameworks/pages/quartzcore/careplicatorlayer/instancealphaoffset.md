> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/careplicatorlayer/instancealphaoffset](https://developer.apple.com/documentation/quartzcore/careplicatorlayer/instancealphaoffset)

# instanceAlphaOffset (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Defines the offset added to the alpha component of the color for each replicated instance. Animatable.

## Declaration

```swift
var instanceAlphaOffset: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The `instanceAlphaOffset` is added to the alpha color component of instance `k-1` to produce the modulation color of instance k.

Default is `0.0`.

## See Also

### Accessing Instance Color Values

- [instanceColor](instancecolor.md): Defines the color used to multiply the source object. Animatable.
- [instanceRedOffset](instanceredoffset.md): Defines the offset added to the red component of the color for each replicated instance. Animatable.
- [instanceGreenOffset](instancegreenoffset.md): Defines the offset added to the green component of the color for each replicated instance. Animatable.
- [instanceBlueOffset](instanceblueoffset.md): Defines the offset added to the blue component of the color for each replicated instance. Animatable.

# instanceAlphaOffset (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Defines the offset added to the alpha component of the color for each replicated instance. Animatable.

## Declaration

```objectivec
@property float instanceAlphaOffset;
```

<a id="Discussion"></a>

## Discussion

The `instanceAlphaOffset` is added to the alpha color component of instance `k-1` to produce the modulation color of instance k.

Default is `0.0`.

## See Also

### Accessing Instance Color Values

- [instanceColor](instancecolor.md): Defines the color used to multiply the source object. Animatable.
- [instanceRedOffset](instanceredoffset.md): Defines the offset added to the red component of the color for each replicated instance. Animatable.
- [instanceGreenOffset](instancegreenoffset.md): Defines the offset added to the green component of the color for each replicated instance. Animatable.
- [instanceBlueOffset](instanceblueoffset.md): Defines the offset added to the blue component of the color for each replicated instance. Animatable.

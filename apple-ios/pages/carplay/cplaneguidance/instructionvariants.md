> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplaneguidance/instructionvariants](https://developer.apple.com/documentation/carplay/cplaneguidance/instructionvariants)

# instructionVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An array of strings that represent the instruction for this lane guidance, arranged from most- to least-preferred.

## Declaration

```swift
var instructionVariants: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

You need to provide at least one variant. Provide the variant strings as localized, displayable content.

## See Also

### Properties

- [lanes](lanes.md): An array of lane objects, each describing a single lane.

# instructionVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An array of strings that represent the instruction for this lane guidance, arranged from most- to least-preferred.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * instructionVariants;
```

<a id="Discussion"></a>

## Discussion

You need to provide at least one variant. Provide the variant strings as localized, displayable content.

## See Also

### Properties

- [lanes](lanes.md): An array of lane objects, each describing a single lane.

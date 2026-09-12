> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplaneguidance/lanes](https://developer.apple.com/documentation/carplay/cplaneguidance/lanes)

# lanes (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An array of lane objects, each describing a single lane.

## Declaration

```swift
var lanes: [CPLane] { get set }
```

## See Also

### Properties

- [instructionVariants](instructionvariants.md): An array of strings that represent the instruction for this lane guidance, arranged from most- to least-preferred.

# lanes (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An array of lane objects, each describing a single lane.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<CPLane *> * lanes;
```

## See Also

### Properties

- [instructionVariants](instructionvariants.md): An array of strings that represent the instruction for this lane guidance, arranged from most- to least-preferred.

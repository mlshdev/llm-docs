> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cisampler/definition](https://developer.apple.com/documentation/coreimage/cisampler/definition)

# definition (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

The domain of definition (DOD) of the sampler

## Declaration

```swift
var definition: CIFilterShape { get }
```

<a id="Discussion"></a>

## Discussion

The DOD contains all nontransparent pixels produced by referencing the sampler.

## See Also

### Getting Information About the Sampler Object

- [extent](extent.md): The rectangle that specifies the extent of the sampler

# definition (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

The domain of definition (DOD) of the sampler

## Declaration

```objectivec
@property (readonly) CIFilterShape * definition;
```

<a id="Discussion"></a>

## Discussion

The DOD contains all nontransparent pixels produced by referencing the sampler.

## See Also

### Getting Information About the Sampler Object

- [extent](extent.md): The rectangle that specifies the extent of the sampler

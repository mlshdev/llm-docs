> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltergenerator/filtergenerator](https://developer.apple.com/documentation/coreimage/cifiltergenerator/filtergenerator)

# filterGenerator

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Creates and returns an empty filter generator object.

## Declaration

```objectivec
+ (CIFilterGenerator *) filterGenerator;
```

<a id="return-value"></a>

## Return Value

A [CIFilterGenerator](../cifiltergenerator.md) object.

<a id="Discussion"></a>

## Discussion

You use the returned object to connect two or more [CIFilter](../cifilter-swift.class.md) objects and input images. It is also valid to have only one [CIFilter](../cifilter-swift.class.md) object in a filter generator.

## See Also

### Related Documentation

- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)
- [Core Image Filter Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/uid/TP40004346)

### Creating Filter Generator Objects

- [filterGeneratorWithContentsOfURL:](filtergeneratorwithcontentsofurl_.md): Creates and returns a filter generator object and initializes it with the contents of a filter generator file.

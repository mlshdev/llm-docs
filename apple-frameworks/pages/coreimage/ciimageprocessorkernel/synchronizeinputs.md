> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorkernel/synchronizeinputs](https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/synchronizeinputs)

# synchronizeInputs (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Override this class property to return false if you want your processor to be given input objects that have not been synchronized for CPU access.

## Declaration

```swift
class var synchronizeInputs: Bool { get }
```

<a id="discussion"></a>

## Discussion

Generally, if your subclass uses the GPU your should override this method to return false. If not overridden, true is returned.

## See Also

### Type Properties

- [outputFormat](outputformat.md): Override this class property if you want your processor’s output to be in a specific pixel format.
- [outputIsOpaque](outputisopaque.md): Override this class property if your processor’s output stores 1.0 into the alpha channel of all pixels within the output extent.

# synchronizeInputs (Objective-C)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Override this class property to return false if you want your processor to be given input objects that have not been synchronized for CPU access.

## Declaration

```objectivec
@property (class, readonly) bool synchronizeInputs;
```

<a id="discussion"></a>

## Discussion

Generally, if your subclass uses the GPU your should override this method to return false. If not overridden, true is returned.

## See Also

### Type Properties

- [outputFormat](outputformat.md): Override this class property if you want your processor’s output to be in a specific pixel format.
- [outputIsOpaque](outputisopaque.md): Override this class property if your processor’s output stores 1.0 into the alpha channel of all pixels within the output extent.

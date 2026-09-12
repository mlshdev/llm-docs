> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorkernel/outputisopaque](https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/outputisopaque)

# outputIsOpaque (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Override this class property if your processor’s output stores 1.0 into the alpha channel of all pixels within the output extent.

## Declaration

```swift
class var outputIsOpaque: Bool { get }
```

<a id="discussion"></a>

## Discussion

If not overridden, false is returned.

## See Also

### Type Properties

- [outputFormat](outputformat.md): Override this class property if you want your processor’s output to be in a specific pixel format.
- [synchronizeInputs](synchronizeinputs.md): Override this class property to return false if you want your processor to be given input objects that have not been synchronized for CPU access.

# outputIsOpaque (Objective-C)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Override this class property if your processor’s output stores 1.0 into the alpha channel of all pixels within the output extent.

## Declaration

```objectivec
@property (class, readonly) bool outputIsOpaque;
```

<a id="discussion"></a>

## Discussion

If not overridden, false is returned.

## See Also

### Type Properties

- [outputFormat](outputformat.md): Override this class property if you want your processor’s output to be in a specific pixel format.
- [synchronizeInputs](synchronizeinputs.md): Override this class property to return false if you want your processor to be given input objects that have not been synchronized for CPU access.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/apply(_:arguments:options:)](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/apply(_:arguments:options:))

# apply(\_:arguments:options:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Produces a [CIImage](../ciimage.md) object by applying arguments to a kernel function and using options to control how the kernel function is evaluated.

## Declaration

```swift
func apply(_ k: CIKernel, arguments args: [Any]?, options dict: [String : Any]? = nil) -> CIImage?
```

## Parameters

- `k`: A `CIKernel` object that contains a kernel function.
- `args`: The arguments that are type compatible with the function signature of the kernel function.
- `dict`: A dictionary that contains options (key-value pairs) to control how the kernel function is evaluated.

<a id="return-value"></a>

## Return Value

The [CIImage](../ciimage.md) object produced by a filter.

<a id="Discussion"></a>

## Discussion

If you are implementing a custom filter, this method needs to be called from within the [outputImage](outputimage.md) method in order to apply your kernel function to the [CIImage](../ciimage.md) object. You can pass any of the keys defined in [Options for Applying a Filter](../options-for-applying-a-filter.md), along with appropriate values, into the options dictionary.

# apply:arguments:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Produces a [CIImage](../ciimage.md) object by applying arguments to a kernel function and using options to control how the kernel function is evaluated.

## Declaration

```objectivec
- (CIImage *) apply:(CIKernel *) k arguments:(NSArray *) args options:(NSDictionary<NSString *,id> *) dict;
```

## Parameters

- `k`: A `CIKernel` object that contains a kernel function.
- `args`: The arguments that are type compatible with the function signature of the kernel function.
- `dict`: A dictionary that contains options (key-value pairs) to control how the kernel function is evaluated.

<a id="return-value"></a>

## Return Value

The [CIImage](../ciimage.md) object produced by a filter.

<a id="Discussion"></a>

## Discussion

If you are implementing a custom filter, this method needs to be called from within the [outputImage](outputimage.md) method in order to apply your kernel function to the [CIImage](../ciimage.md) object. You can pass any of the keys defined in [Options for Applying a Filter](../options-for-applying-a-filter.md), along with appropriate values, into the options dictionary.

## See Also

### Related Documentation

- [apply:](apply_.md): Produces a [CIImage](../ciimage.md) object by applying a kernel function.

### Applying a filter

- [apply:](apply_.md): Produces a [CIImage](../ciimage.md) object by applying a kernel function.

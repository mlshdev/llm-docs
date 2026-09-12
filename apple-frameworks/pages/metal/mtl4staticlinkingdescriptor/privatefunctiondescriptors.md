> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4staticlinkingdescriptor/privatefunctiondescriptors](https://developer.apple.com/documentation/metal/mtl4staticlinkingdescriptor/privatefunctiondescriptors)

# privateFunctionDescriptors (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides an array of private functions to link at the Metal IR level.

## Declaration

```swift
var privateFunctionDescriptors: [MTL4FunctionDescriptor]? { get set }
```

<a id="discussion"></a>

## Discussion

You specify private functions to link separately from [functionDescriptors](functiondescriptors.md) because pipelines don’t export private functions as [MTLFunctionHandle](../mtlfunctionhandle.md) instances.

> **Note**

> You can link private functions even when your [MTLDevice](../mtldevice.md) doesn’t support function pointers.

# privateFunctionDescriptors (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides an array of private functions to link at the Metal IR level.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<MTL4FunctionDescriptor *> * privateFunctionDescriptors;
```

<a id="discussion"></a>

## Discussion

You specify private functions to link separately from [functionDescriptors](functiondescriptors.md) because pipelines don’t export private functions as [MTLFunctionHandle](../mtlfunctionhandle.md) instances.

> **Note**

> You can link private functions even when your [MTLDevice](../mtldevice.md) doesn’t support function pointers.

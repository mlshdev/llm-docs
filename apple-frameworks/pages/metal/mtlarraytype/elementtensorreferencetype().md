> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlarraytype/elementtensorreferencetype()](https://developer.apple.com/documentation/metal/mtlarraytype/elementtensorreferencetype())

# elementTensorReferenceType() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides a description of the underlying tensor type when this array holds tensors as its elements.

## Declaration

```swift
func elementTensorReferenceType() -> MTLTensorReferenceType?
```

<a id="return-value"></a>

## Return Value

A description of the tensor type that this array holds, or `nil` if this struct member doesn’t hold a tensor.

# elementTensorReferenceType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides a description of the underlying tensor type when this array holds tensors as its elements.

## Declaration

```objectivec
- (MTLTensorReferenceType *) elementTensorReferenceType;
```

<a id="return-value"></a>

## Return Value

A description of the tensor type that this array holds, or `nil` if this struct member doesn’t hold a tensor.

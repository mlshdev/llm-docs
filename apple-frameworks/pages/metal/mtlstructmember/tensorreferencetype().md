> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstructmember/tensorreferencetype()](https://developer.apple.com/documentation/metal/mtlstructmember/tensorreferencetype())

# tensorReferenceType() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides a description of the underlying tensor type when this struct member holds a tensor.

## Declaration

```swift
func tensorReferenceType() -> MTLTensorReferenceType?
```

<a id="return-value"></a>

## Return Value

A description of the tensor type that this struct member holds, or `nil` if this struct member doesn’t hold a tensor.

# tensorReferenceType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides a description of the underlying tensor type when this struct member holds a tensor.

## Declaration

```objectivec
- (MTLTensorReferenceType *) tensorReferenceType;
```

<a id="return-value"></a>

## Return Value

A description of the tensor type that this struct member holds, or `nil` if this struct member doesn’t hold a tensor.

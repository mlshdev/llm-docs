> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/valuetransformer/allowsreversetransformation()](https://developer.apple.com/documentation/foundation/valuetransformer/allowsreversetransformation())

# allowsReverseTransformation() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the receiver can reverse a transformation.

## Declaration

```swift
class func allowsReverseTransformation() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver supports reverse value transformations, otherwise [false](https://developer.apple.com/documentation/swift/false).

The default is [true](https://developer.apple.com/documentation/swift/true).

<a id="discussion"></a>

## Discussion

Subclasses should override this method to return [false](https://developer.apple.com/documentation/swift/false) if they do not support reverse value transformations.

## See Also

### Getting Information About a Transformer

- [transformedValueClass()](transformedvalueclass%28%29.md): Returns the class of the value returned by the receiver for a forward transformation.

# allowsReverseTransformation (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the receiver can reverse a transformation.

## Declaration

```objectivec
+ (BOOL) allowsReverseTransformation;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver supports reverse value transformations, otherwise [false](https://developer.apple.com/documentation/swift/false).

The default is [true](https://developer.apple.com/documentation/swift/true).

<a id="discussion"></a>

## Discussion

Subclasses should override this method to return [false](https://developer.apple.com/documentation/swift/false) if they do not support reverse value transformations.

## See Also

### Getting Information About a Transformer

- [transformedValueClass](transformedvalueclass%28%29.md): Returns the class of the value returned by the receiver for a forward transformation.

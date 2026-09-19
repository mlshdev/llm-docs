> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/valuetransformer/transformedvalueclass()

# transformedValueClass() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the class of the value returned by the receiver for a forward transformation.

## Declaration

```swift
class func transformedValueClass() -> AnyClass
```

<a id="return-value"></a>

## Return Value

The class of the value returned by the receiver for a forward transformation.

<a id="Discussion"></a>

## Discussion

A subclass should override this method to return the appropriate class.

## See Also

### Getting Information About a Transformer

- [allowsReverseTransformation()](allowsreversetransformation%28%29.md): Returns a Boolean value that indicates whether the receiver can reverse a transformation.

# transformedValueClass (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the class of the value returned by the receiver for a forward transformation.

## Declaration

```objectivec
+ (Class) transformedValueClass;
```

<a id="return-value"></a>

## Return Value

The class of the value returned by the receiver for a forward transformation.

<a id="Discussion"></a>

## Discussion

A subclass should override this method to return the appropriate class.

## See Also

### Getting Information About a Transformer

- [allowsReverseTransformation](allowsreversetransformation%28%29.md): Returns a Boolean value that indicates whether the receiver can reverse a transformation.

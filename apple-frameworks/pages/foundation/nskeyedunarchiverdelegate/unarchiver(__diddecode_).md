> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiverdelegate/unarchiver(_:diddecode:)](https://developer.apple.com/documentation/foundation/nskeyedunarchiverdelegate/unarchiver(_:diddecode:))

# unarchiver(\_:didDecode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate that a given object has been decoded.

## Declaration

```swift
optional func unarchiver(_ unarchiver: NSKeyedUnarchiver, didDecode object: consuming Any?) -> Any?
```

## Parameters

- `unarchiver`: An unarchiver for which the receiver is the delegate.
- `object`: The object that has been decoded. `object` may be `nil`.

<a id="return-value"></a>

## Return Value

The object to use in place of `object`. The delegate can either return `object` or return a different object to replace the decoded one. In apps using ARC, the delegate should only return `nil` if `object` itself is `nil`. In apps not using ARC, the delegate can return `nil` to indicate that the decoded value is unchanged—that is, `object` will be decoded.

<a id="Discussion"></a>

## Discussion

This method is called after `object` has been sent [init(coder:)](../nscoding/init%28coder_%29.md) and [awakeAfter(using:)](../../objectivec/nsobject-swift.class/awakeafter%28using_%29.md).

The delegate may use this method to keep track of the decoded objects.

## See Also

### Decoding Objects

- [unarchiver(\_:cannotDecodeObjectOfClassName:originalClasses:)](unarchiver%28__cannotdecodeobjectofclassname_originalclasses_%29.md): Informs the delegate that the class with a given name is not available during decoding.
- [unarchiver(\_:willReplace:with:)](unarchiver%28__willreplace_with_%29.md): Informs the delegate that one object is being substituted for another.

# unarchiver:didDecodeObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate that a given object has been decoded.

## Declaration

```objectivec
- (id) unarchiver:(NSKeyedUnarchiver *) unarchiver didDecodeObject:(id) object;
```

## Parameters

- `unarchiver`: An unarchiver for which the receiver is the delegate.
- `object`: The object that has been decoded. `object` may be `nil`.

<a id="return-value"></a>

## Return Value

The object to use in place of `object`. The delegate can either return `object` or return a different object to replace the decoded one. In apps using ARC, the delegate should only return `nil` if `object` itself is `nil`. In apps not using ARC, the delegate can return `nil` to indicate that the decoded value is unchanged—that is, `object` will be decoded.

<a id="Discussion"></a>

## Discussion

This method is called after `object` has been sent [initWithCoder:](../nscoding/init%28coder_%29.md) and [awakeAfterUsingCoder:](../../objectivec/nsobject-swift.class/awakeafter%28using_%29.md).

The delegate may use this method to keep track of the decoded objects.

## See Also

### Decoding Objects

- [unarchiver:cannotDecodeObjectOfClassName:originalClasses:](unarchiver%28__cannotdecodeobjectofclassname_originalclasses_%29.md): Informs the delegate that the class with a given name is not available during decoding.
- [unarchiver:willReplaceObject:withObject:](unarchiver%28__willreplace_with_%29.md): Informs the delegate that one object is being substituted for another.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/applyingtransform(_:reverse:)](https://developer.apple.com/documentation/foundation/nsstring/applyingtransform(_:reverse:))

# applyingTransform(\_:reverse:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string by applying a specified transform to the string.

## Declaration

```swift
func applyingTransform(_ transform: StringTransform, reverse: Bool) -> String?
```

<a id="Discussion"></a>

## Discussion

You can use this method to, for example, transliterate text from one script to another, strip diacritics or combining marks, and get the unicode names of characters.

> **Note**

>  The constants defined by the [StringTransform](../stringtransform.md) type offer a subset of the functionality provided by the underlying ICU transform functionality. To apply an ICU transform defined in the [ICU User Guide](http://userguide.icu-project.org/transforms/general) that doesn’t have a corresponding [StringTransform](../stringtransform.md) constant, create an instance of  [NSMutableString](../nsmutablestring.md) and call the [applyTransform(\_:reverse:range:updatedRange:)](../nsmutablestring/applytransform%28__reverse_range_updatedrange_%29.md) method instead.

.

## See Also

### Related Documentation

- [applyTransform(\_:reverse:range:updatedRange:)](../nsmutablestring/applytransform%28__reverse_range_updatedrange_%29.md): Transliterates the receiver by applying a specified ICU string transform.

### Transforming Strings

- [StringTransform](../stringtransform.md): Constants representing an ICU string transform.

# stringByApplyingTransform:reverse: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string by applying a specified transform to the string.

## Declaration

```objectivec
- (NSString *) stringByApplyingTransform:(NSStringTransform) transform reverse:(BOOL) reverse;
```

<a id="Discussion"></a>

## Discussion

You can use this method to, for example, transliterate text from one script to another, strip diacritics or combining marks, and get the unicode names of characters.

> **Note**

>  The constants defined by the [NSStringTransform](../stringtransform.md) type offer a subset of the functionality provided by the underlying ICU transform functionality. To apply an ICU transform defined in the [ICU User Guide](http://userguide.icu-project.org/transforms/general) that doesn’t have a corresponding [NSStringTransform](../stringtransform.md) constant, create an instance of  [NSMutableString](../nsmutablestring.md) and call the [applyTransform:reverse:range:updatedRange:](../nsmutablestring/applytransform%28__reverse_range_updatedrange_%29.md) method instead.

.

## See Also

### Related Documentation

- [applyTransform:reverse:range:updatedRange:](../nsmutablestring/applytransform%28__reverse_range_updatedrange_%29.md): Transliterates the receiver by applying a specified ICU string transform.

### Transforming Strings

- [NSStringTransform](../stringtransform.md): Constants representing an ICU string transform.

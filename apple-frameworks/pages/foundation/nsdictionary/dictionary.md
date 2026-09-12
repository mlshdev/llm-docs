> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/dictionary](https://developer.apple.com/documentation/foundation/nsdictionary/dictionary)

# dictionary

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an empty dictionary.

## Declaration

```objectivec
+ (instancetype) dictionary;
```

<a id="return-value"></a>

## Return Value

A new empty dictionary.

<a id="Discussion"></a>

## Discussion

This method is declared primarily for use with mutable subclasses of [NSDictionary](../nsdictionary.md).

If you don’t want a temporary object, you can also create an empty dictionary using `alloc` and [init](init%28%29.md).

## See Also

### Related Documentation

- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)
- [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i)

### Creating an Empty Dictionary

- [init](init%28%29.md): Initializes a newly allocated dictionary.

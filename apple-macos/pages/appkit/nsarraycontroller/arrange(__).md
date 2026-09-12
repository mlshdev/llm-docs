> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/arrange(_:)](https://developer.apple.com/documentation/appkit/nsarraycontroller/arrange(_:))

# arrange(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a given array, appropriately sorted and filtered.

## Declaration

```swift
func arrange(_ objects: [Any]) -> [Any]
```

<a id="return-value"></a>

## Return Value

An array containing `objects` filtered using the receiver’s filter predicate (see [filterPredicate](filterpredicate.md)) and sorted according to the receiver’s [sortDescriptors](sortdescriptors.md).

<a id="Discussion"></a>

## Discussion

Subclasses should override this method to use a different sort mechanism, provide custom object arrangement, or (typically only prior to OS X version 10.4, which provides a filter predicate) filter the objects.

## See Also

### Arranging Objects

- [arrangedObjects](arrangedobjects.md): An array containing the receiver’s content objects arranged using [arrange(\_:)](arrange%28__%29.md).
- [rearrangeObjects()](rearrangeobjects%28%29.md): Triggers filtering of the receiver’s content.

# arrangeObjects: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a given array, appropriately sorted and filtered.

## Declaration

```objectivec
- (NSArray *) arrangeObjects:(NSArray *) objects;
```

<a id="return-value"></a>

## Return Value

An array containing `objects` filtered using the receiver’s filter predicate (see [filterPredicate](filterpredicate.md)) and sorted according to the receiver’s [sortDescriptors](sortdescriptors.md).

<a id="Discussion"></a>

## Discussion

Subclasses should override this method to use a different sort mechanism, provide custom object arrangement, or (typically only prior to OS X version 10.4, which provides a filter predicate) filter the objects.

## See Also

### Arranging Objects

- [arrangedObjects](arrangedobjects.md): An array containing the receiver’s content objects arranged using [arrangeObjects:](arrange%28__%29.md).
- [rearrangeObjects](rearrangeobjects%28%29.md): Triggers filtering of the receiver’s content.

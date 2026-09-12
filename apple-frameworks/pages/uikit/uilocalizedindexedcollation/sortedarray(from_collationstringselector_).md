> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalizedindexedcollation/sortedarray(from:collationstringselector:)](https://developer.apple.com/documentation/uikit/uilocalizedindexedcollation/sortedarray(from:collationstringselector:))

# sortedArray(from:collationStringSelector:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sorts the objects within a section by their localized titles.

## Declaration

```swift
func sortedArray(from array: [Any], collationStringSelector selector: Selector) -> [Any]
```

## Parameters

- `array`: An array containing the model objects for a section.
- `selector`: The selector of a method implemented by the objects in `array` that returns the string to use for sorting the objects. The method represented by the selector must take no arguments and return an [NSString](../../foundation/nsstring.md) object. For example, you might specify the selector for a name property of the object.

<a id="return-value"></a>

## Return Value

A new array containing the sorted items from the original `array` parameter.

<a id="Discussion"></a>

## Discussion

The table-view controller creates the array of objects for a section (`array`) as part of iterating through its model objects with calls to the [section(for:collationStringSelector:)](section%28for_collationstringselector_%29.md) method. This method should be called on each local section array.

## See Also

### Preparing the sections and section indexes

- [section(for:collationStringSelector:)](section%28for_collationstringselector_%29.md): Returns an integer identifying the section in which a model object belongs.

# sortedArrayFromArray:collationStringSelector: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sorts the objects within a section by their localized titles.

## Declaration

```objectivec
- (NSArray *) sortedArrayFromArray:(NSArray *) array collationStringSelector:(SEL) selector;
```

## Parameters

- `array`: An array containing the model objects for a section.
- `selector`: The selector of a method implemented by the objects in `array` that returns the string to use for sorting the objects. The method represented by the selector must take no arguments and return an [NSString](../../foundation/nsstring.md) object. For example, you might specify the selector for a name property of the object.

<a id="return-value"></a>

## Return Value

A new array containing the sorted items from the original `array` parameter.

<a id="Discussion"></a>

## Discussion

The table-view controller creates the array of objects for a section (`array`) as part of iterating through its model objects with calls to the [sectionForObject:collationStringSelector:](section%28for_collationstringselector_%29.md) method. This method should be called on each local section array.

## See Also

### Preparing the sections and section indexes

- [sectionForObject:collationStringSelector:](section%28for_collationstringselector_%29.md): Returns an integer identifying the section in which a model object belongs.

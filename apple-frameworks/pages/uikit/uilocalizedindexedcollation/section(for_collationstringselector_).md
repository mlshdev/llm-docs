> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalizedindexedcollation/section(for:collationstringselector:)](https://developer.apple.com/documentation/uikit/uilocalizedindexedcollation/section(for:collationstringselector:))

# section(for:collationStringSelector:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an integer identifying the section in which a model object belongs.

## Declaration

```swift
func section(for object: Any, collationStringSelector selector: Selector) -> Int
```

## Parameters

- `object`: A model object of the application that is part of the data model for the table view.
- `selector`: The selector of a method of `object` that returns the string to use for sorting. The method represented by the selection must take no arguments and return an [NSString](../../foundation/nsstring.md) object. For example, you might specify the selector for a `name` property of the object.

<a id="return-value"></a>

## Return Value

An integer that identifies the section in which the model object belongs. The numbers returned indicate a sequential ordering.

<a id="Discussion"></a>

## Discussion

The table-view controller should iterate through all model objects for the table view and call this method for each object. If the application provides a `Localizable.strings` file for the current language preference, the indexed-collation object localizes each string returned by the method identified by `selector`. It uses this localized name when collating titles. The controller should use the returned integer to identify a local “section” array in which it should insert `object`.

## See Also

### Preparing the sections and section indexes

- [sortedArray(from:collationStringSelector:)](sortedarray%28from_collationstringselector_%29.md): Sorts the objects within a section by their localized titles.

# sectionForObject:collationStringSelector: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an integer identifying the section in which a model object belongs.

## Declaration

```objectivec
- (NSInteger) sectionForObject:(id) object collationStringSelector:(SEL) selector;
```

## Parameters

- `object`: A model object of the application that is part of the data model for the table view.
- `selector`: The selector of a method of `object` that returns the string to use for sorting. The method represented by the selection must take no arguments and return an [NSString](../../foundation/nsstring.md) object. For example, you might specify the selector for a `name` property of the object.

<a id="return-value"></a>

## Return Value

An integer that identifies the section in which the model object belongs. The numbers returned indicate a sequential ordering.

<a id="Discussion"></a>

## Discussion

The table-view controller should iterate through all model objects for the table view and call this method for each object. If the application provides a `Localizable.strings` file for the current language preference, the indexed-collation object localizes each string returned by the method identified by `selector`. It uses this localized name when collating titles. The controller should use the returned integer to identify a local “section” array in which it should insert `object`.

## See Also

### Preparing the sections and section indexes

- [sortedArrayFromArray:collationStringSelector:](sortedarray%28from_collationstringselector_%29.md): Sorts the objects within a section by their localized titles.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/description(withlocale:indent:)](https://developer.apple.com/documentation/foundation/nsorderedset/description(withlocale:indent:))

# description(withLocale:indent:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string that represents the contents of the ordered set, formatted as a property list.

## Declaration

```swift
func description(withLocale locale: Any?, indent level: Int) -> String
```

## Parameters

- `locale`: An [NSLocale](../nslocale.md) object or an `NSDictionary` object that specifies options used for formatting each of the array’s elements (where recognized). Specify `nil` if you don’t want the elements formatted.
- `level`: Specifies a level of indentation, to make the output more readable: the indentation is (4 spaces) \* `level`.

<a id="return-value"></a>

## Return Value

A string that represents the contents of the ordered set, formatted as a property list.

<a id="Discussion"></a>

## Discussion

The returned `NSString` object contains the string representations of each of the ordered set’s elements, in order, from first to last. To obtain the string representation of a given element, `descriptionWithLocale:indent:` proceeds as follows:

- If the element is an `NSString` object, it is used as is.
- If the element responds to `descriptionWithLocale:indent:`, that method is invoked to obtain the element’s string representation.
- If the element responds to `descriptionWithLocale:`, that method is invoked to obtain the element’s string representation.
- If none of the above conditions is met, the element’s string representation is obtained by invoking its `description` method

## See Also

### Describing a Set

- [description](description.md): A string that represents the contents of the ordered set, formatted as a property list.
- [description(withLocale:)](description%28withlocale_%29.md): Returns a string that represents the contents of the ordered set, formatted as a property list.

# descriptionWithLocale:indent: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string that represents the contents of the ordered set, formatted as a property list.

## Declaration

```objectivec
- (NSString *) descriptionWithLocale:(id) locale indent:(NSUInteger) level;
```

## Parameters

- `locale`: An [NSLocale](../nslocale.md) object or an `NSDictionary` object that specifies options used for formatting each of the array’s elements (where recognized). Specify `nil` if you don’t want the elements formatted.
- `level`: Specifies a level of indentation, to make the output more readable: the indentation is (4 spaces) \* `level`.

<a id="return-value"></a>

## Return Value

A string that represents the contents of the ordered set, formatted as a property list.

<a id="Discussion"></a>

## Discussion

The returned `NSString` object contains the string representations of each of the ordered set’s elements, in order, from first to last. To obtain the string representation of a given element, `descriptionWithLocale:indent:` proceeds as follows:

- If the element is an `NSString` object, it is used as is.
- If the element responds to `descriptionWithLocale:indent:`, that method is invoked to obtain the element’s string representation.
- If the element responds to `descriptionWithLocale:`, that method is invoked to obtain the element’s string representation.
- If none of the above conditions is met, the element’s string representation is obtained by invoking its `description` method

## See Also

### Describing a Set

- [description](description.md): A string that represents the contents of the ordered set, formatted as a property list.
- [descriptionWithLocale:](description%28withlocale_%29.md): Returns a string that represents the contents of the ordered set, formatted as a property list.

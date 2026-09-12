> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/description(withlocale:)](https://developer.apple.com/documentation/foundation/nsarray/description(withlocale:))

# description(withLocale:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string that represents the contents of the array, formatted as a property list.

## Declaration

```swift
func description(withLocale locale: Any?) -> String
```

## Parameters

- `locale`: An `NSLocale` object or an `NSDictionary` object that specifies options used for formatting each of the array’s elements (where recognized). Specify `nil` if you don’t want the elements formatted.

<a id="return-value"></a>

## Return Value

A string that represents the contents of the array, formatted as a property list.

<a id="Discussion"></a>

## Discussion

For a description of how `locale` is applied to each element in the receiving array, see [description(withLocale:indent:)](description%28withlocale_indent_%29.md).

## See Also

### Creating a Description

- [description](description.md): A string that represents the contents of the array, formatted as a property list.
- [description(withLocale:indent:)](description%28withlocale_indent_%29.md): Returns a string that represents the contents of the array, formatted as a property list.

# descriptionWithLocale: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string that represents the contents of the array, formatted as a property list.

## Declaration

```objectivec
- (NSString *) descriptionWithLocale:(id) locale;
```

## Parameters

- `locale`: An `NSLocale` object or an `NSDictionary` object that specifies options used for formatting each of the array’s elements (where recognized). Specify `nil` if you don’t want the elements formatted.

<a id="return-value"></a>

## Return Value

A string that represents the contents of the array, formatted as a property list.

<a id="Discussion"></a>

## Discussion

For a description of how `locale` is applied to each element in the receiving array, see [descriptionWithLocale:indent:](description%28withlocale_indent_%29.md).

## See Also

### Creating a Description

- [description](description.md): A string that represents the contents of the array, formatted as a property list.
- [descriptionWithLocale:indent:](description%28withlocale_indent_%29.md): Returns a string that represents the contents of the array, formatted as a property list.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnumber/description(withlocale:)](https://developer.apple.com/documentation/foundation/nsnumber/description(withlocale:))

# description(withLocale:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string that represents the contents of the number object for a given locale.

## Declaration

```swift
func description(withLocale locale: Any?) -> String
```

## Parameters

- `locale`: An object containing locale information with which to format the description. Use `nil` if you don’t want the description formatted.

<a id="return-value"></a>

## Return Value

A string that represents the contents of the number object formatted using the locale information in `locale`.

<a id="Discussion"></a>

## Discussion

For example, if you have an `NSNumber` object that has the integer value 522, sending it the [description(withLocale:)](description%28withlocale_%29.md) message returns the string “522”.

To obtain the string representation, this method invokes `NSString`’s   [initWithFormat:locale:](../nsstring/initwithformat_locale_.md) method, supplying the format based on the type the `NSNumber` object was created with:

| Data Type | Format Specification |
| --- | --- |
| char | %i |
| double | %0.16g |
| float | %0.7g |
| int | %i |
| long | %li |
| long long | %lli |
| short | %hi |
| unsigned char | %u |
| unsigned int | %u |
| unsigned long | %lu |
| unsigned long long | %llu |
| unsigned short | %hu |

## See Also

### Retrieving String Representations

- [stringValue](stringvalue.md): The number object’s value expressed as a human-readable string.

# descriptionWithLocale: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string that represents the contents of the number object for a given locale.

## Declaration

```objectivec
- (NSString *) descriptionWithLocale:(id) locale;
```

## Parameters

- `locale`: An object containing locale information with which to format the description. Use `nil` if you don’t want the description formatted.

<a id="return-value"></a>

## Return Value

A string that represents the contents of the number object formatted using the locale information in `locale`.

<a id="Discussion"></a>

## Discussion

For example, if you have an `NSNumber` object that has the integer value 522, sending it the [descriptionWithLocale:](description%28withlocale_%29.md) message returns the string “522”.

To obtain the string representation, this method invokes `NSString`’s   [initWithFormat:locale:](../nsstring/initwithformat_locale_.md) method, supplying the format based on the type the `NSNumber` object was created with:

| Data Type | Format Specification |
| --- | --- |
| char | %i |
| double | %0.16g |
| float | %0.7g |
| int | %i |
| long | %li |
| long long | %lli |
| short | %hi |
| unsigned char | %u |
| unsigned int | %u |
| unsigned long | %lu |
| unsigned long long | %llu |
| unsigned short | %hu |

## See Also

### Retrieving String Representations

- [stringValue](stringvalue.md): The number object’s value expressed as a human-readable string.

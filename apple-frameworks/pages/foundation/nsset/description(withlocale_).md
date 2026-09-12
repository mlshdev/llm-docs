> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/description(withlocale:)](https://developer.apple.com/documentation/foundation/nsset/description(withlocale:))

# description(withLocale:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string that represents the contents of the set, formatted as a property list.

## Declaration

```swift
func description(withLocale locale: Any?) -> String
```

## Parameters

- `locale`: On iOS and macOS 10.5 and later, either an instance of `NSDictionary` or an `NSLocale` object may be used for `locale`.In OS X v10.4 and earlier it must be an instance of `NSDictionary`.

<a id="return-value"></a>

## Return Value

A string that represents the contents of the set, formatted as a property list.

<a id="Discussion"></a>

## Discussion

This method sends each of the set’s members  `descriptionWithLocale:` with `locale` passed as the sole parameter. If the set’s members do not respond to `descriptionWithLocale:`, this method sends [description](../../objectivec/nsobjectprotocol/description.md) instead.

## See Also

### Describing a Set

- [description](description.md): A string that represents the contents of the set, formatted as a property list.

# descriptionWithLocale: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string that represents the contents of the set, formatted as a property list.

## Declaration

```objectivec
- (NSString *) descriptionWithLocale:(id) locale;
```

## Parameters

- `locale`: On iOS and macOS 10.5 and later, either an instance of `NSDictionary` or an `NSLocale` object may be used for `locale`.In OS X v10.4 and earlier it must be an instance of `NSDictionary`.

<a id="return-value"></a>

## Return Value

A string that represents the contents of the set, formatted as a property list.

<a id="Discussion"></a>

## Discussion

This method sends each of the set’s members  `descriptionWithLocale:` with `locale` passed as the sole parameter. If the set’s members do not respond to `descriptionWithLocale:`, this method sends [description](../../objectivec/nsobjectprotocol/description.md) instead.

## See Also

### Describing a Set

- [description](description.md): A string that represents the contents of the set, formatted as a property list.

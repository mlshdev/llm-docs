> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/numbervalue](https://developer.apple.com/documentation/avfoundation/avmetadataitem/numbervalue)

# numberValue (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The value of the metadata item as a number.

> Load the value of [numberValue](../avpartialasyncproperty/numbervalue.md) asynchronously instead.

## Declaration

```swift
var numberValue: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the system can’t represent the value as a number.

## See Also

### Accessing values

- [value](value.md): Deprecated. The value of the metadata item.
- [extraAttributes](extraattributes.md): Deprecated. A dictionary of additional attributes for a metadata item.
- [stringValue](stringvalue.md): Deprecated. The value of the metadata item as a string.
- [dateValue](datevalue.md): Deprecated. The value of the metadata item as a date.
- [dataValue](datavalue.md): Deprecated. The value of the metadata item as a data value.

# numberValue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The value of the metadata item as a number.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * numberValue;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the system can’t represent the value as a number.

## See Also

### Accessing values

- [value](value.md): Deprecated. The value of the metadata item.
- [extraAttributes](extraattributes.md): Deprecated. A dictionary of additional attributes for a metadata item.
- [stringValue](stringvalue.md): Deprecated. The value of the metadata item as a string.
- [dateValue](datevalue.md): Deprecated. The value of the metadata item as a date.
- [dataValue](datavalue.md): Deprecated. The value of the metadata item as a data value.
- [loadValuesAsynchronouslyForKeys:completionHandler:](loadvaluesasynchronouslyforkeys_completionhandler_.md): Tells the object to load the values of any of the specified keys that aren’t already loaded.
- [statusOfValueForKey:error:](statusofvalueforkey_error_.md): Reports whether the value for a given key is immediately available without blocking.

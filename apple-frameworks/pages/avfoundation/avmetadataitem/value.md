> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/value](https://developer.apple.com/documentation/avfoundation/avmetadataitem/value)

# value (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The value of the metadata item.

> Load [value](../avpartialasyncproperty/value.md) instead.

## Declaration

```swift
@NSCopying var value: (any NSCopying & NSObjectProtocol)? { get }
```

## See Also

### Accessing values

- [extraAttributes](extraattributes.md): Deprecated. A dictionary of additional attributes for a metadata item.
- [stringValue](stringvalue.md): Deprecated. The value of the metadata item as a string.
- [numberValue](numbervalue.md): Deprecated. The value of the metadata item as a number.
- [dateValue](datevalue.md): Deprecated. The value of the metadata item as a date.
- [dataValue](datavalue.md): Deprecated. The value of the metadata item as a data value.

# value (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The value of the metadata item.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) id<NSCopying,NSObject> value;
```

## See Also

### Accessing values

- [extraAttributes](extraattributes.md): Deprecated. A dictionary of additional attributes for a metadata item.
- [stringValue](stringvalue.md): Deprecated. The value of the metadata item as a string.
- [numberValue](numbervalue.md): Deprecated. The value of the metadata item as a number.
- [dateValue](datevalue.md): Deprecated. The value of the metadata item as a date.
- [dataValue](datavalue.md): Deprecated. The value of the metadata item as a data value.
- [loadValuesAsynchronouslyForKeys:completionHandler:](loadvaluesasynchronouslyforkeys_completionhandler_.md): Tells the object to load the values of any of the specified keys that aren’t already loaded.
- [statusOfValueForKey:error:](statusofvalueforkey_error_.md): Reports whether the value for a given key is immediately available without blocking.

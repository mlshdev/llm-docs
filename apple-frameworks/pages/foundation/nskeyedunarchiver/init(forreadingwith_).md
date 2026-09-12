> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/init(forreadingwith:)](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/init(forreadingwith:))

# init(forReadingWith:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

Initializes an archiver to decode data from the specified location.

> Use [init(forReadingFrom:)](init%28forreadingfrom_%29.md) instead.

## Declaration

```swift
init(forReadingWith data: Data)
```

## Parameters

- `data`: An archive previously encoded by [NSKeyedArchiver](../nskeyedarchiver.md).

<a id="return-value"></a>

## Return Value

An [NSKeyedUnarchiver](../nskeyedunarchiver.md) object initialized for for decoding `data`.

<a id="Discussion"></a>

## Discussion

When you finish decoding data, you should invoke [finishDecoding()](finishdecoding%28%29.md).

This method throws an exception if `data` is not a valid archive.

## See Also

### Related Documentation

- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)

### Creating a Keyed Unarchiver

- [init(forReadingFrom:)](init%28forreadingfrom_%29.md): Initializes an archiver to decode data from the specified location.
- [init()](init%28%29.md): Deprecated. Initializes an archiver to decode data.

# initForReadingWithData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

Initializes an archiver to decode data from the specified location.

> Use [initForReadingFromData:error:](init%28forreadingfrom_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initForReadingWithData:(NSData *) data;
```

## Parameters

- `data`: An archive previously encoded by [NSKeyedArchiver](../nskeyedarchiver.md).

<a id="return-value"></a>

## Return Value

An [NSKeyedUnarchiver](../nskeyedunarchiver.md) object initialized for for decoding `data`.

<a id="Discussion"></a>

## Discussion

When you finish decoding data, you should invoke [finishDecoding](finishdecoding%28%29.md).

This method throws an exception if `data` is not a valid archive.

## See Also

### Related Documentation

- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)

### Creating a Keyed Unarchiver

- [initForReadingFromData:error:](init%28forreadingfrom_%29.md): Initializes an archiver to decode data from the specified location.
- [init](init%28%29.md): Deprecated. Initializes an archiver to decode data.

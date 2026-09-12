> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/init(forwritingwith:)](https://developer.apple.com/documentation/foundation/nskeyedarchiver/init(forwritingwith:))

# init(forWritingWith:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

Initializes an archiver to encode data into a given a mutable-data object.

> Use [init(requiringSecureCoding:)](init%28requiringsecurecoding_%29.md) instead.

## Declaration

```swift
init(forWritingWith data: NSMutableData)
```

## Parameters

- `data`: The mutable-data object into which the archive is written.

<a id="Discussion"></a>

## Discussion

When you finish encoding data, you must invoke [finishEncoding()](finishencoding%28%29.md) at which point `data` is filled. The format of the receiver is `NSPropertyListBinaryFormat_v1_0`.

## See Also

### Related Documentation

- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)

### Creating a Keyed Archiver

- [init(requiringSecureCoding:)](init%28requiringsecurecoding_%29.md): Creates an archiver to encode data, and optionally disables secure coding.
- [init()](init%28%29.md): Deprecated. Initializes an archiver to encode data.

# initForWritingWithMutableData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

Initializes an archiver to encode data into a given a mutable-data object.

> Use [initRequiringSecureCoding:](init%28requiringsecurecoding_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initForWritingWithMutableData:(NSMutableData *) data;
```

## Parameters

- `data`: The mutable-data object into which the archive is written.

<a id="Discussion"></a>

## Discussion

When you finish encoding data, you must invoke [finishEncoding](finishencoding%28%29.md) at which point `data` is filled. The format of the receiver is `NSPropertyListBinaryFormat_v1_0`.

## See Also

### Related Documentation

- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)

### Creating a Keyed Archiver

- [initRequiringSecureCoding:](init%28requiringsecurecoding_%29.md): Creates an archiver to encode data, and optionally disables secure coding.
- [init](init%28%29.md): Deprecated. Initializes an archiver to encode data.

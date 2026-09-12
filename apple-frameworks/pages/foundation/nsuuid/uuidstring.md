> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuuid/uuidstring](https://developer.apple.com/documentation/foundation/nsuuid/uuidstring)

# uuidString (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The UUID as a string.

## Declaration

```swift
var uuidString: String { get }
```

<a id="Discussion"></a>

## Discussion

A string containing a formatted UUID for example `E621E1F8-C36C-495A-93FC-0C247A3E6E5F`.

Use this property when you need a string representation of the `NSUUID` object—for example, to compare with a [CFUUID](../../corefoundation/cfuuid.md) object.

## See Also

### Get UUID Values

- [getBytes(\_:)](getbytes%28__%29.md): Returns the UUID as bytes.

# UUIDString (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The UUID as a string.

## Declaration

```objectivec
@property (copy, readonly) NSString * UUIDString;
```

<a id="Discussion"></a>

## Discussion

A string containing a formatted UUID for example `E621E1F8-C36C-495A-93FC-0C247A3E6E5F`.

Use this property when you need a string representation of the `NSUUID` object—for example, to compare with a [CFUUIDRef](../../corefoundation/cfuuid.md) object.

## See Also

### Get UUID Values

- [getUUIDBytes:](getbytes%28__%29.md): Returns the UUID as bytes.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata/append(_:)](https://developer.apple.com/documentation/foundation/nsmutabledata/append(_:))

# append(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Appends the content of another data object to the receiver.

## Declaration

```swift
func append(_ other: Data)
```

## Parameters

- `other`: The data object whose content is to be appended to the contents of the receiver.

## See Also

### Adding Bytes

- [append(\_:length:)](append%28__length_%29.md): Appends to the receiver a given number of bytes from a given buffer.
- [increaseLength(by:)](increaselength%28by_%29.md): Increases the length of the receiver by a given number of bytes.

# appendData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Appends the content of another data object to the receiver.

## Declaration

```objectivec
- (void) appendData:(NSData *) other;
```

## Parameters

- `other`: The data object whose content is to be appended to the contents of the receiver.

## See Also

### Adding Bytes

- [appendBytes:length:](append%28__length_%29.md): Appends to the receiver a given number of bytes from a given buffer.
- [increaseLengthBy:](increaselength%28by_%29.md): Increases the length of the receiver by a given number of bytes.

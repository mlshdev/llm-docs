> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tkbertlvrecord/data(fortag:)](https://developer.apple.com/documentation/cryptotokenkit/tkbertlvrecord/data(fortag:))

# data(forTag:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Encodes a specified tag using BER-TLV tag encoding rules.

## Declaration

```swift
class func data(forTag tag: TKTLVTag) -> Data
```

## Parameters

- `tag`: The tag value to encode.

<a id="return-value"></a>

## Return Value

A data object that encodes a tag value using BER-TLV encoding.

# dataForTag: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Encodes a specified tag using BER-TLV tag encoding rules.

## Declaration

```objectivec
+ (NSData *) dataForTag:(TKTLVTag) tag;
```

## Parameters

- `tag`: The tag value to encode.

<a id="return-value"></a>

## Return Value

A data object that encodes a tag value using BER-TLV encoding.

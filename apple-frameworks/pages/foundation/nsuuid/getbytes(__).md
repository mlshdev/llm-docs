> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuuid/getbytes(_:)](https://developer.apple.com/documentation/foundation/nsuuid/getbytes(_:))

# getBytes(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the UUID as bytes.

## Declaration

```swift
func getBytes(_ uuid: UnsafeMutablePointer<UInt8>)
```

## Parameters

- `uuid`: The value of uuid represented as raw bytes.

## See Also

### Get UUID Values

- [uuidString](uuidstring.md): The UUID as a string.

# getUUIDBytes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the UUID as bytes.

## Declaration

```objectivec
- (void) getUUIDBytes:(uuid_t) uuid;
```

## Parameters

- `uuid`: The value of uuid represented as raw bytes.

## See Also

### Get UUID Values

- [UUIDString](uuidstring.md): The UUID as a string.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfuuidgetuuidbytes(_:)](https://developer.apple.com/documentation/corefoundation/cfuuidgetuuidbytes(_:))

# CFUUIDGetUUIDBytes(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value of a UUID object as raw bytes.

## Declaration

```swift
func CFUUIDGetUUIDBytes(_ uuid: CFUUID!) -> CFUUIDBytes
```

## Parameters

- `uuid`: The CFUUID object to examine.

<a id="return-value"></a>

## Return Value

The value of `uuid` represented as raw bytes.

## See Also

### Getting Information About CFUUID Objects

- [CFUUIDCreateString(\_:\_:)](cfuuidcreatestring%28____%29.md): Returns the string representation of a specified CFUUID object.
- [CFUUIDGetConstantUUIDWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cfuuidgetconstantuuidwithbytes%28__________________________________%29.md): Returns a CFUUID object from raw UUID bytes.

# CFUUIDGetUUIDBytes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value of a UUID object as raw bytes.

## Declaration

```objectivec
extern CFUUIDBytes CFUUIDGetUUIDBytes(CFUUIDRef uuid);
```

## Parameters

- `uuid`: The CFUUID object to examine.

<a id="return-value"></a>

## Return Value

The value of `uuid` represented as raw bytes.

## See Also

### Getting Information About CFUUID Objects

- [CFUUIDCreateString](cfuuidcreatestring%28____%29.md): Returns the string representation of a specified CFUUID object.
- [CFUUIDGetConstantUUIDWithBytes](cfuuidgetconstantuuidwithbytes%28__________________________________%29.md): Returns a CFUUID object from raw UUID bytes.

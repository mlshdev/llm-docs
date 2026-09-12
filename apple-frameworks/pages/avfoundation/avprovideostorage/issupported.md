> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avprovideostorage/issupported](https://developer.apple.com/documentation/avfoundation/avprovideostorage/issupported)

# isSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Whether Pro Video Storage is supported in its current configuration.

## Declaration

```swift
class var isSupported: Bool { get }
```

<a id="return-value"></a>

## Return Value

`YES` if the device and OS support Pro Video Storage functionality; otherwise, `NO`.

## See Also

### Getting the shared storage

- [shared](shared.md): Returns the singleton instance for Pro Video Storage.

# supported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Whether Pro Video Storage is supported in its current configuration.

## Declaration

```objectivec
@property (class, readonly, getter=isSupported) BOOL supported;
```

<a id="return-value"></a>

## Return Value

`YES` if the device and OS support Pro Video Storage functionality; otherwise, `NO`.

## See Also

### Getting the shared storage

- [sharedStorage](shared.md): Returns the singleton instance for Pro Video Storage.

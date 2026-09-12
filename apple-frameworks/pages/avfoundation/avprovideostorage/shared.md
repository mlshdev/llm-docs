> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avprovideostorage/shared](https://developer.apple.com/documentation/avfoundation/avprovideostorage/shared)

# shared (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Returns the singleton instance for Pro Video Storage.

## Declaration

```swift
class var shared: AVProVideoStorage? { get }
```

<a id="return-value"></a>

## Return Value

An instance of the Pro Video Storage class if supported; otherwise, `nil`.

## See Also

### Getting the shared storage

- [isSupported](issupported.md): Whether Pro Video Storage is supported in its current configuration.

# sharedStorage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Returns the singleton instance for Pro Video Storage.

## Declaration

```objectivec
@property (class, readonly, nullable) AVProVideoStorage * sharedStorage;
```

<a id="return-value"></a>

## Return Value

An instance of the Pro Video Storage class if supported; otherwise, `nil`.

## See Also

### Getting the shared storage

- [supported](issupported.md): Whether Pro Video Storage is supported in its current configuration.

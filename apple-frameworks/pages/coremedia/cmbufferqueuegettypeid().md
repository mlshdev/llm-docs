> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuegettypeid()](https://developer.apple.com/documentation/coremedia/cmbufferqueuegettypeid())

# CMBufferQueueGetTypeID() (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the type identifier of buffer queue objects.

## Declaration

```swift
func CMBufferQueueGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

CFTypeID of `CMBufferQueue` objects.

<a id="Discussion"></a>

## Discussion

You can check if a `CFTypeRef` object is actually a `CMBufferQueue` by comparing [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md)(object) with [CMBufferQueueGetTypeID()](cmbufferqueuegettypeid%28%29.md)().

# CMBufferQueueGetTypeID (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the type identifier of buffer queue objects.

## Declaration

```objectivec
extern CFTypeID CMBufferQueueGetTypeID();
```

<a id="return-value"></a>

## Return Value

CFTypeID of `CMBufferQueue` objects.

<a id="Discussion"></a>

## Discussion

You can check if a `CFTypeRef` object is actually a `CMBufferQueue` by comparing [CFGetTypeID](../corefoundation/cfgettypeid%28__%29.md)(object) with [CMBufferQueueGetTypeID](cmbufferqueuegettypeid%28%29.md)().

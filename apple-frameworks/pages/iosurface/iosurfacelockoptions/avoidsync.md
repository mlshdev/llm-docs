> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iosurface/iosurfacelockoptions/avoidsync](https://developer.apple.com/documentation/iosurface/iosurfacelockoptions/avoidsync)

# avoidSync (Swift)

**Framework:** IOSurface  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
static var avoidSync: IOSurfaceLockOptions { get }
```

<a id="Discussion"></a>

## Discussion

If you want to detect/avoid a potentially expensive paging operation (such as readback from a GPU to system memory) when you lock the buffer, you may include this flag. If locking the buffer requires a readback, the lock will fail with an error return of `kIOReturnCannotLock`.

## See Also

### Options

- [readOnly](readonly.md)

# kIOSurfaceLockAvoidSync (Objective-C)

**Framework:** IOSurface  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
kIOSurfaceLockAvoidSync
```

<a id="Discussion"></a>

## Discussion

If you want to detect/avoid a potentially expensive paging operation (such as readback from a GPU to system memory) when you lock the buffer, you may include this flag. If locking the buffer requires a readback, the lock will fail with an error return of `kIOReturnCannotLock`.

## See Also

### Options

- [kIOSurfaceLockReadOnly](readonly.md)

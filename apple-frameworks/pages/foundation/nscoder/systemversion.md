> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/systemversion](https://developer.apple.com/documentation/foundation/nscoder/systemversion)

# systemVersion (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The system version in effect for the archive.

## Declaration

```swift
var systemVersion: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

During encoding, the current version. During decoding, the version that was in effect when the data was encoded.

Subclasses that implement decoding must override this property to return the system version of the data being decoded.

## See Also

### Getting Version Information

- [version(forClassName:)](version%28forclassname_%29.md): This method is present for historical reasons and is not used with keyed archivers.

# systemVersion (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The system version in effect for the archive.

## Declaration

```objectivec
@property (readonly) unsigned int systemVersion;
```

<a id="Discussion"></a>

## Discussion

During encoding, the current version. During decoding, the version that was in effect when the data was encoded.

Subclasses that implement decoding must override this property to return the system version of the data being decoded.

## See Also

### Getting Version Information

- [versionForClassName:](version%28forclassname_%29.md): This method is present for historical reasons and is not used with keyed archivers.

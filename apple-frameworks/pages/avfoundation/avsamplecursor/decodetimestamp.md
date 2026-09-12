> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursor/decodetimestamp](https://developer.apple.com/documentation/avfoundation/avsamplecursor/decodetimestamp)

# decodeTimeStamp (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The decode timestamp of the sample at the current position of the cursor.

## Declaration

```swift
var decodeTimeStamp: CMTime { get }
```

## See Also

### Getting timestamps

- [presentationTimeStamp](presentationtimestamp.md): The presentation timestamp of the sample at the current position of the cursor.

# decodeTimeStamp (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The decode timestamp of the sample at the current position of the cursor.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime decodeTimeStamp;
```

## See Also

### Getting timestamps

- [presentationTimeStamp](presentationtimestamp.md): The presentation timestamp of the sample at the current position of the cursor.

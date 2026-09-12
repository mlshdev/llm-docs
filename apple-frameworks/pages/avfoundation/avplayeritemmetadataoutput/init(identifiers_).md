> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemmetadataoutput/init(identifiers:)](https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutput/init(identifiers:))

# init(identifiers:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an instance of AVPlayerItemMetadataOutput.

## Declaration

```swift
init(identifiers: [String]?)
```

## Parameters

- `identifiers`: A array of metadata identifiers indicating the metadata items that the output should provide.

<a id="return-value"></a>

## Return Value

An AVPlayerItemMetadataOutput instance.

<a id="Discussion"></a>

## Discussion

Pass `nil` to receive all of the timed metadata from all enabled `AVPlayerItemTracks` that carry timed metadata.

# initWithIdentifiers: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an instance of AVPlayerItemMetadataOutput.

## Declaration

```objectivec
- (instancetype) initWithIdentifiers:(NSArray<NSString *> *) identifiers;
```

## Parameters

- `identifiers`: A array of metadata identifiers indicating the metadata items that the output should provide.

<a id="return-value"></a>

## Return Value

An AVPlayerItemMetadataOutput instance.

<a id="Discussion"></a>

## Discussion

Pass `nil` to receive all of the timed metadata from all enabled `AVPlayerItemTracks` that carry timed metadata.

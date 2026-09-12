> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/metadata](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/metadata)

# metadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A dictionary of metadata keys and values to embed in photo file output.

## Declaration

```swift
var metadata: [String : Any] { get set }
```

<a id="Discussion"></a>

## Discussion

The capture output automatically writes metadata including image orientation, Exif camera properties, and Live Photo metadata, but you can override those values or specify additional metadata using the keys and values listed in `CGImageProperties`. (Setting this property with any other keys raises an exception.)

# metadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A dictionary of metadata keys and values to embed in photo file output.

## Declaration

```objectivec
@property (nonatomic, copy) NSDictionary<NSString *,id> * metadata;
```

<a id="Discussion"></a>

## Discussion

The capture output automatically writes metadata including image orientation, Exif camera properties, and Live Photo metadata, but you can override those values or specify additional metadata using the keys and values listed in `CGImageProperties`. (Setting this property with any other keys raises an exception.)

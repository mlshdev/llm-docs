> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadatafaceobject/faceid](https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject/faceid)

# faceID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

The unique ID for this face metadata object.

## Declaration

```swift
var faceID: Int { get }
```

<a id="Discussion"></a>

## Discussion

Each time a face enters the picture, it is assigned a new unique identifier, which you can use to reference the face in your code. Face IDs are not reused, and the same face leaving and entering the picture again is assigned a new identifier.

# faceID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

The unique ID for this face metadata object.

## Declaration

```objectivec
@property (readonly) NSInteger faceID;
```

<a id="Discussion"></a>

## Discussion

Each time a face enters the picture, it is assigned a new unique identifier, which you can use to reference the face in your code. Face IDs are not reused, and the same face leaving and entering the picture again is assigned a new identifier.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesynchronizedmetadataobjectdata/metadataobjects](https://developer.apple.com/documentation/avfoundation/avcapturesynchronizedmetadataobjectdata/metadataobjects)

# metadataObjects (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The list of metadata objects captured at this synchronization timestamp.

## Declaration

```swift
var metadataObjects: [AVMetadataObject] { get }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Because [AVMetadataObject](../avmetadataobject.md) is an abstract class, the objects in this array are always instances of a concrete subclass.

This array is equivalent to that provided by the [metadataOutput(\_:didOutput:from:)](../avcapturemetadataoutputobjectsdelegate/metadataoutput%28__didoutput_from_%29.md) delegate method when using a metadata capture output without a data output synchronizer.

# metadataObjects (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The list of metadata objects captured at this synchronization timestamp.

## Declaration

```objectivec
@property (readonly) NSArray<AVMetadataObject *> * metadataObjects;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Because [AVMetadataObject](../avmetadataobject.md) is an abstract class, the objects in this array are always instances of a concrete subclass.

This array is equivalent to that provided by the [captureOutput:didOutputMetadataObjects:fromConnection:](../avcapturemetadataoutputobjectsdelegate/metadataoutput%28__didoutput_from_%29.md) delegate method when using a metadata capture output without a data output synchronizer.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureancillarydatauserkey/rdd18useritems](https://developer.apple.com/documentation/avfoundation/avcaptureancillarydatauserkey/rdd18useritems)

# rdd18UserItems (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

An AVCaptureAncillaryDataEncoder key corresponding with RDD18 user defined metadata

## Declaration

```swift
static let rdd18UserItems: AVCaptureAncillaryDataUserKey
```

<a id="discussion"></a>

## Discussion

Clients may inspect the user metadata with `AVCaptureAncillaryDataEncoder\currentUserDefinedAncillaryData` and set it with `AVCaptureAncillaryDataEncoder\setRDD18AncillaryData:forTag:error:` `AVCaptureAncillaryDataEncoder\setRDD18AncillaryDataString:forTag:error:` or remove it with `AVCaptureAncillaryDataEncoder\removeRDD18AncillaryDataForTag:`

# AVCaptureAncillaryDataUserKeyRDD18UserItems (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

An AVCaptureAncillaryDataEncoder key corresponding with RDD18 user defined metadata

## Declaration

```objectivec
extern AVCaptureAncillaryDataUserKey const AVCaptureAncillaryDataUserKeyRDD18UserItems;
```

<a id="discussion"></a>

## Discussion

Clients may inspect the user metadata with `AVCaptureAncillaryDataEncoder\currentUserDefinedAncillaryData` and set it with `AVCaptureAncillaryDataEncoder\setRDD18AncillaryData:forTag:error:` `AVCaptureAncillaryDataEncoder\setRDD18AncillaryDataString:forTag:error:` or remove it with `AVCaptureAncillaryDataEncoder\removeRDD18AncillaryDataForTag:`

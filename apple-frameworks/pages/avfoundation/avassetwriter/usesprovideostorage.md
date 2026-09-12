> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/usesprovideostorage](https://developer.apple.com/documentation/avfoundation/avassetwriter/usesprovideostorage)

# usesProVideoStorage (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Indicates whether to use pre-allocated storage.

## Declaration

```swift
var usesProVideoStorage: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `NO`. See more detailed description of ProVideoStorage in `AVProVideoStorage.h`.

An exception will be thrown if clients try to set `YES` if the value of the `proVideoStorageSupported` property is `NO`.

An exception will be thrown if clients try to set this property after `-startWriting` has been called on the receiver.

# usesProVideoStorage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Indicates whether to use pre-allocated storage.

## Declaration

```objectivec
@property (nonatomic) BOOL usesProVideoStorage;
```

<a id="discussion"></a>

## Discussion

The default value is `NO`. See more detailed description of ProVideoStorage in `AVProVideoStorage.h`.

An exception will be thrown if clients try to set `YES` if the value of the `proVideoStorageSupported` property is `NO`.

An exception will be thrown if clients try to set this property after `-startWriting` has been called on the receiver.

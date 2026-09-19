> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccameraitem/userdata

# userData (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A mutable dictionary to store arbitrary key-value pairs associated with a camera item.

## Declaration

```swift
var userData: NSMutableDictionary? { get }
```

<a id="Discussion"></a>

## Discussion

View objects can bind to this object to store “house-keeping” information.

# userData (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A mutable dictionary to store arbitrary key-value pairs associated with a camera item.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSMutableDictionary * userData;
```

<a id="Discussion"></a>

## Discussion

View objects can bind to this object to store “house-keeping” information.

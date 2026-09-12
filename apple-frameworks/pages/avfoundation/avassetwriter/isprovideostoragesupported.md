> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/isprovideostoragesupported](https://developer.apple.com/documentation/avfoundation/avassetwriter/isprovideostoragesupported)

# isProVideoStorageSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Indicates whether the receiver supports writing to pre-allocated storage on this device for high data rate video capture formats such as ProRes.

## Declaration

```swift
var isProVideoStorageSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

Check this value prior to setting the `usesProVideoStorage` property to avoid exceptions when pre-allocated storage is not supported.

# proVideoStorageSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Indicates whether the receiver supports writing to pre-allocated storage on this device for high data rate video capture formats such as ProRes.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isProVideoStorageSupported) BOOL proVideoStorageSupported;
```

<a id="discussion"></a>

## Discussion

Check this value prior to setting the `usesProVideoStorage` property to avoid exceptions when pre-allocated storage is not supported.

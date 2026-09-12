> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/isobservationenabled](https://developer.apple.com/documentation/avfoundation/avplayer/isobservationenabled)

# isObservationEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

AVPlayer and other AVFoundation types can optionally be observed using Swift Observation.

## Declaration

```swift
nonisolated class var isObservationEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When set to YES, new instances of AVPlayer, AVQueuePlayer, AVPlayerItem, and AVPlayerItemTrack are observable with Swift Observation. The default value is NO (not observable).  An exception is thrown if this property is set YES after initializing any objects of these types, or if it is set to NO after any observable objects are initialized.  In other words, all objects of these types must either be observable or not observable in an application instance.

For more information regarding management of class objects in SwiftUI, please refer to https://developer.apple.com/documentation/swiftui/state.

# observationEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

AVPlayer and other AVFoundation types can optionally be observed using Swift Observation.

## Declaration

```objectivec
@property (class, readwrite, getter=isObservationEnabled) BOOL observationEnabled;
```

<a id="discussion"></a>

## Discussion

When set to YES, new instances of AVPlayer, AVQueuePlayer, AVPlayerItem, and AVPlayerItemTrack are observable with Swift Observation. The default value is NO (not observable).  An exception is thrown if this property is set YES after initializing any objects of these types, or if it is set to NO after any observable objects are initialized.  In other words, all objects of these types must either be observable or not observable in an application instance.

For more information regarding management of class objects in SwiftUI, please refer to https://developer.apple.com/documentation/swiftui/state.

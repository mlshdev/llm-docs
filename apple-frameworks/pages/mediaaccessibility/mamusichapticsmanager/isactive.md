> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/mamusichapticsmanager/isactive](https://developer.apple.com/documentation/mediaaccessibility/mamusichapticsmanager/isactive)

# isActive (Swift)

**Framework:** Media Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that indicates whether the system setting for Music Haptics is on.

## Declaration

```swift
var isActive: Bool { get }
```

## See Also

### Checking if Music Haptics is on

- [activeStatusDidChangeNotification](activestatusdidchangenotification.md): A notification that posts when the value of the Music Haptics system setting changes.

# isActive (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that indicates whether the system setting for Music Haptics is on.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isActive;
```

## See Also

### Checking if Music Haptics is on

- [MAMusicHapticsManagerActiveStatusDidChangeNotification](activestatusdidchangenotification.md): A notification that posts when the value of the Music Haptics system setting changes.

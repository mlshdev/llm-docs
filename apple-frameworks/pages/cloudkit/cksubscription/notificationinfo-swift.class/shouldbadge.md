> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksubscription/notificationinfo-swift.class/shouldbadge

# shouldBadge (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that determines whether an app’s icon badge increments its value.

## Declaration

```swift
var shouldBadge: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Set it to [true](https://developer.apple.com/documentation/swift/true) to cause the system to increment the badge value whenever it receives the corresponding push notification.

# shouldBadge (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that determines whether an app’s icon badge increments its value.

## Declaration

```objectivec
@property (assign) BOOL shouldBadge;
```

<a id="discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Set it to [true](https://developer.apple.com/documentation/swift/true) to cause the system to increment the badge value whenever it receives the corresponding push notification.

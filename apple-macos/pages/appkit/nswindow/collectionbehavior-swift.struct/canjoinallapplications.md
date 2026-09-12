> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/collectionbehavior-swift.struct/canjoinallapplications](https://developer.apple.com/documentation/appkit/nswindow/collectionbehavior-swift.struct/canjoinallapplications)

# canJoinAllApplications (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 13.0+

The behavior marking this window as one that can join all apps for both Stage Manager and full screen.

## Declaration

```swift
static var canJoinAllApplications: NSWindow.CollectionBehavior { get }
```

<a id="Discussion"></a>

## Discussion

Windows marked with this behavior don’t participate in Stage Manager layout but can join the windows of other apps in full screen spaces when eligible.

Use this collection behavior for floating windows and system overlays. To opt out of joining other apps’ full screen spaces use [fullScreenPrimary](fullscreenprimary.md).

> **Note**

>  This property is mutually exclusive. Set only one of [primary](primary.md), [auxiliary](auxiliary.md), or [canJoinAllApplications](canjoinallapplications.md) on a window handled by Stage Manager at a time.

## See Also

### Stage Manager and full screen

- [primary](primary.md): The behavior marking this window as primary for both Stage Manager and full screen.
- [auxiliary](auxiliary.md): The behavior marking this window as auxiliary for both Stage Manager and full screen.

# NSWindowCollectionBehaviorCanJoinAllApplications (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 13.0+

The behavior marking this window as one that can join all apps for both Stage Manager and full screen.

## Declaration

```objectivec
NSWindowCollectionBehaviorCanJoinAllApplications
```

<a id="Discussion"></a>

## Discussion

Windows marked with this behavior don’t participate in Stage Manager layout but can join the windows of other apps in full screen spaces when eligible.

Use this collection behavior for floating windows and system overlays. To opt out of joining other apps’ full screen spaces use [NSWindowCollectionBehaviorFullScreenPrimary](fullscreenprimary.md).

> **Note**

>  This property is mutually exclusive. Set only one of [NSWindowCollectionBehaviorPrimary](primary.md), [NSWindowCollectionBehaviorAuxiliary](auxiliary.md), or [NSWindowCollectionBehaviorCanJoinAllApplications](canjoinallapplications.md) on a window handled by Stage Manager at a time.

## See Also

### Stage Manager and full screen

- [NSWindowCollectionBehaviorPrimary](primary.md): The behavior marking this window as primary for both Stage Manager and full screen.
- [NSWindowCollectionBehaviorAuxiliary](auxiliary.md): The behavior marking this window as auxiliary for both Stage Manager and full screen.

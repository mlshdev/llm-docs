> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/collectionbehavior-swift.struct/primary](https://developer.apple.com/documentation/appkit/nswindow/collectionbehavior-swift.struct/primary)

# primary (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 13.0+

The behavior marking this window as primary for both Stage Manager and full screen.

## Declaration

```swift
static var primary: NSWindow.CollectionBehavior { get }
```

<a id="Discussion"></a>

## Discussion

Marking a window collection behavior as primary means it becomes primary for both Stage Manager and full screen display modes.

To set a different behavior in full screen while keeping Stage Manager primary, set a more specific behavior just for full screen mode (see [fullScreenAuxiliary](fullscreenauxiliary.md)).

**Swift**

```swift
window.collectionBehavior = [.primary, .fullScreenAuxiliary]
```

**Objective-C**

```objc
window.collectionBehavior |= (NSWindowCollectionBehaviorPrimary | NSWindowCollectionBehaviorFullScreenAuxiliary);
```

Use this collection behavior for document or viewer windows.

> **Note**

>  This property is mutually exclusive. Set only one of [primary](primary.md), [auxiliary](auxiliary.md), or [canJoinAllApplications](canjoinallapplications.md) on a window handled by Stage Manager at a time.

## See Also

### Stage Manager and full screen

- [auxiliary](auxiliary.md): The behavior marking this window as auxiliary for both Stage Manager and full screen.
- [canJoinAllApplications](canjoinallapplications.md): The behavior marking this window as one that can join all apps for both Stage Manager and full screen.

# NSWindowCollectionBehaviorPrimary (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 13.0+

The behavior marking this window as primary for both Stage Manager and full screen.

## Declaration

```objectivec
NSWindowCollectionBehaviorPrimary
```

<a id="Discussion"></a>

## Discussion

Marking a window collection behavior as primary means it becomes primary for both Stage Manager and full screen display modes.

To set a different behavior in full screen while keeping Stage Manager primary, set a more specific behavior just for full screen mode (see [NSWindowCollectionBehaviorFullScreenAuxiliary](fullscreenauxiliary.md)).

**Swift**

```swift
window.collectionBehavior = [.primary, .fullScreenAuxiliary]
```

**Objective-C**

```objc
window.collectionBehavior |= (NSWindowCollectionBehaviorPrimary | NSWindowCollectionBehaviorFullScreenAuxiliary);
```

Use this collection behavior for document or viewer windows.

> **Note**

>  This property is mutually exclusive. Set only one of [NSWindowCollectionBehaviorPrimary](primary.md), [NSWindowCollectionBehaviorAuxiliary](auxiliary.md), or [NSWindowCollectionBehaviorCanJoinAllApplications](canjoinallapplications.md) on a window handled by Stage Manager at a time.

## See Also

### Stage Manager and full screen

- [NSWindowCollectionBehaviorAuxiliary](auxiliary.md): The behavior marking this window as auxiliary for both Stage Manager and full screen.
- [NSWindowCollectionBehaviorCanJoinAllApplications](canjoinallapplications.md): The behavior marking this window as one that can join all apps for both Stage Manager and full screen.

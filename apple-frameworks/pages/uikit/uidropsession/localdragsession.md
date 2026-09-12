> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropsession/localdragsession](https://developer.apple.com/documentation/uikit/uidropsession/localdragsession)

# localDragSession (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The drag session that corresponds to this drop session, for in-app drag activities.

## Declaration

```swift
var localDragSession: (any UIDragSession)? { get }
```

<a id="Discussion"></a>

## Discussion

The local drag session is `nil` if the drag activity started in a different app.

# localDragSession (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The drag session that corresponds to this drop session, for in-app drag activities.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<UIDragSession> localDragSession;
```

<a id="Discussion"></a>

## Discussion

The local drag session is `nil` if the drag activity started in a different app.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/allowsaccessrequests](https://developer.apple.com/documentation/cloudkit/ckshare/allowsaccessrequests)

# allowsAccessRequests (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates whether uninvited users can request access to this share.

## Declaration

```swift
var allowsAccessRequests: Bool { get set }
```

<a id="discussion"></a>

## Discussion

By default, this property is `NO`. When this property is `YES`, uninvited users can request access to the share if they discover the share URL. When this property is `NO`, the server prevents uninvited users from requesting access and does not indicate whether the share exists.

Only the share owner or an administrator can modify this property. If another participant attempts to modify this property, CloudKit throws an exception.

# allowsAccessRequests (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates whether uninvited users can request access to this share.

## Declaration

```objectivec
@property (assign, readwrite) BOOL allowsAccessRequests;
```

<a id="discussion"></a>

## Discussion

By default, this property is `NO`. When this property is `YES`, uninvited users can request access to the share if they discover the share URL. When this property is `NO`, the server prevents uninvited users from requesting access and does not indicate whether the share exists.

Only the share owner or an administrator can modify this property. If another participant attempts to modify this property, CloudKit throws an exception.

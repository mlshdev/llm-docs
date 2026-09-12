> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/accessrequester/contact](https://developer.apple.com/documentation/cloudkit/ckshare/accessrequester/contact)

# contact (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A displayable CNContact representing the requester.

## Declaration

```swift
@NSCopying var contact: CNContact { get }
```

<a id="discussion"></a>

## Discussion

If the requester doesn’t exist in the user’s contacts or is not accessible, returns a newly created `CNContact`. This provides formatted requester information suitable for display in the application’s UI.

# contact (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A displayable CNContact representing the requester.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CNContact * contact;
```

<a id="discussion"></a>

## Discussion

If the requester doesn’t exist in the user’s contacts or is not accessible, returns a newly created `CNContact`. This provides formatted requester information suitable for display in the application’s UI.

> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagegriditemconfiguration/isunread

# isUnread (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether the conversation contains unread messages.

## Declaration

```swift
var isUnread: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` if the conversation contains unread messages, or `false` if it doesn’t.

# unread (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether the conversation contains unread messages.

## Declaration

```objectivec
@property (nonatomic, getter=isUnread) BOOL unread;
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` if the conversation contains unread messages, or `false` if it doesn’t.

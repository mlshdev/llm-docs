> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/untextinputnotificationresponse/usertext](https://developer.apple.com/documentation/usernotifications/untextinputnotificationresponse/usertext)

# userText (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The text response provided by the user.

## Declaration

```swift
var userText: String { get }
```

<a id="Discussion"></a>

## Discussion

If the user does not specify any text, this property contains an empty string.

# userText (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The text response provided by the user.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * userText;
```

```objectivec
@property (atomic, copy, readonly) NSString * userText;
```

<a id="Discussion"></a>

## Discussion

If the user does not specify any text, this property contains an empty string.

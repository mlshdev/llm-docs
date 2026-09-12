> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessage/content](https://developer.apple.com/documentation/intents/inmessage/content)

# content (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The text that Siri recites to the message recipient.

## Declaration

```swift
var content: String? { get }
```

## See Also

### Getting the Content

- [audioMessageFile](audiomessagefile.md): Deprecated. An audio recording that Siri plays to the message recipient.

# content (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The text that Siri recites to the message recipient.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * content;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * content;
```

## See Also

### Getting the Content

- [audioMessageFile](audiomessagefile.md): Deprecated. An audio recording that Siri plays to the message recipient.

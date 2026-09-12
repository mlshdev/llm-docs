> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/topic](https://developer.apple.com/documentation/classkit/clscontext/topic)

# topic (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The area of study to which a context relates.

## Declaration

```swift
var topic: CLSContextTopic? { get set }
```

<a id="Discussion"></a>

## Discussion

Set the topic to tell teachers what kind of content a given context covers using one of the values from [CLSContextTopic](../clscontexttopic.md). The topic set on a context applies to that context and any of its descendants for which you haven’t explicitly set a topic. If your entire app covers only a single topic, you only need to set the topic for the [mainAppContext](../clsdatastore/mainappcontext.md).

## See Also

### Managing context presentation

- [displayOrder](displayorder.md): The position of a context relative to its siblings.
- [CLSContextTopic](../clscontexttopic.md): The areas of study to which contexts may relate.

# topic (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The area of study to which a context relates.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CLSContextTopic topic;
```

<a id="Discussion"></a>

## Discussion

Set the topic to tell teachers what kind of content a given context covers using one of the values from [CLSContextTopic](../clscontexttopic.md). The topic set on a context applies to that context and any of its descendants for which you haven’t explicitly set a topic. If your entire app covers only a single topic, you only need to set the topic for the [mainAppContext](../clsdatastore/mainappcontext.md).

## See Also

### Managing context presentation

- [displayOrder](displayorder.md): The position of a context relative to its siblings.
- [CLSContextTopic](../clscontexttopic.md): The areas of study to which contexts may relate.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontexttopic](https://developer.apple.com/documentation/classkit/clscontexttopic)

# CLSContextTopic (Swift)

**Framework:** ClassKit  
**Kind:** Structure  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The areas of study to which contexts may relate.

## Declaration

```swift
struct CLSContextTopic
```

## Mentioned In

- [Building missing contexts](building-missing-contexts.md)

<a id="Discussion"></a>

## Discussion

After initializing a context, you can assign it a topic by setting its [topic](clscontext/topic.md) property. Doing so helps teachers browsing your app’s content to understand what your app offers.

## Topics

### Context Topics

- [artsAndMusic](clscontexttopic/artsandmusic.md): Arts and music.
- [computerScienceAndEngineering](clscontexttopic/computerscienceandengineering.md): Computer science and engineering.
- [healthAndFitness](clscontexttopic/healthandfitness.md): Health and fitness.
- [literacyAndWriting](clscontexttopic/literacyandwriting.md): Literacy and writing.
- [math](clscontexttopic/math.md): Mathematics.
- [science](clscontexttopic/science.md): Science.
- [socialScience](clscontexttopic/socialscience.md): Social science.
- [worldLanguage](clscontexttopic/worldlanguage.md): Language acquisition.

### Initializing a Topic

- [init(rawValue:)](clscontexttopic/init%28rawvalue_%29.md): Initializes a context topic.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing context presentation

- [displayOrder](clscontext/displayorder.md): The position of a context relative to its siblings.
- [topic](clscontext/topic.md): The area of study to which a context relates.

# CLSContextTopic (Objective-C)

**Framework:** ClassKit  
**Kind:** Type Alias  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The areas of study to which contexts may relate.

## Declaration

```objectivec
typedef NSString * CLSContextTopic;
```

## Mentioned In

- [Building missing contexts](building-missing-contexts.md)

<a id="Discussion"></a>

## Discussion

After initializing a context, you can assign it a topic by setting its [topic](clscontext/topic.md) property. Doing so helps teachers browsing your app’s content to understand what your app offers.

## Topics

### Context Topics

- [CLSContextTopicArtsAndMusic](clscontexttopic/artsandmusic.md): Arts and music.
- [CLSContextTopicComputerScienceAndEngineering](clscontexttopic/computerscienceandengineering.md): Computer science and engineering.
- [CLSContextTopicHealthAndFitness](clscontexttopic/healthandfitness.md): Health and fitness.
- [CLSContextTopicLiteracyAndWriting](clscontexttopic/literacyandwriting.md): Literacy and writing.
- [CLSContextTopicMath](clscontexttopic/math.md): Mathematics.
- [CLSContextTopicScience](clscontexttopic/science.md): Science.
- [CLSContextTopicSocialScience](clscontexttopic/socialscience.md): Social science.
- [CLSContextTopicWorldLanguage](clscontexttopic/worldlanguage.md): Language acquisition.

## See Also

### Managing context presentation

- [displayOrder](clscontext/displayorder.md): The position of a context relative to its siblings.
- [topic](clscontext/topic.md): The area of study to which a context relates.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontexttype](https://developer.apple.com/documentation/classkit/clscontexttype)

# CLSContextType (Swift)

**Framework:** ClassKit  
**Kind:** Enumeration  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The kinds of assignable content a context can contain.

## Declaration

```swift
enum CLSContextType
```

<a id="overview"></a>

## Overview

When you initialize a new context with [init(type:identifier:title:)](clscontext/init%28type_identifier_title_%29.md), you specify its [type](clscontext/type.md) to provide an indication of how your content is structured. The type doesn’t affect the context’s behavior, but it does provide an important indicator to teachers trying to understand your app’s content.

## Topics

### Context Types

- [CLSContextType.app](clscontexttype/app.md): An app context.
- [CLSContextType.audio](clscontexttype/audio.md): An audio context.
- [CLSContextType.book](clscontexttype/book.md): A book context.
- [CLSContextType.challenge](clscontexttype/challenge.md): A challenge context.
- [CLSContextType.chapter](clscontexttype/chapter.md): A chapter context.
- [CLSContextType.course](clscontexttype/course.md): A context that represents an entire course.
- [CLSContextType.custom](clscontexttype/custom.md): A context for assignable content that isn’t represented by one of the built-in context types.
- [CLSContextType.document](clscontexttype/document.md): A document context.
- [CLSContextType.exercise](clscontexttype/exercise.md): An exercise context.
- [CLSContextType.game](clscontexttype/game.md): A game context.
- [CLSContextType.lesson](clscontexttype/lesson.md): A lesson context.
- [CLSContextType.level](clscontexttype/level.md): A level context.
- [CLSContextType.none](clscontexttype/none.md): No type is assigned.
- [CLSContextType.page](clscontexttype/page.md): A page context.
- [CLSContextType.quiz](clscontexttype/quiz.md): A quiz context.
- [CLSContextType.section](clscontexttype/section.md): A section context.
- [CLSContextType.task](clscontexttype/task.md): A task context.
- [CLSContextType.video](clscontexttype/video.md): A video context.

### Initializers

- [init(rawValue:)](clscontexttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the context type

- [type](clscontext/type.md): The kind of content a context represents.
- [setType(\_:)](clscontext/settype%28__%29.md): Updates the kind of content that a context represents.
- [customTypeName](clscontext/customtypename.md): An optional name that the system presents to the user if you choose the custom context type.

# CLSContextType (Objective-C)

**Framework:** ClassKit  
**Kind:** Enumeration  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The kinds of assignable content a context can contain.

## Declaration

```objectivec
enum CLSContextType : NSInteger;
```

<a id="overview"></a>

## Overview

When you initialize a new context with [initWithType:identifier:title:](clscontext/init%28type_identifier_title_%29.md), you specify its [type](clscontext/type.md) to provide an indication of how your content is structured. The type doesn’t affect the context’s behavior, but it does provide an important indicator to teachers trying to understand your app’s content.

## Topics

### Context Types

- [CLSContextTypeApp](clscontexttype/app.md): An app context.
- [CLSContextTypeAudio](clscontexttype/audio.md): An audio context.
- [CLSContextTypeBook](clscontexttype/book.md): A book context.
- [CLSContextTypeChallenge](clscontexttype/challenge.md): A challenge context.
- [CLSContextTypeChapter](clscontexttype/chapter.md): A chapter context.
- [CLSContextTypeCourse](clscontexttype/course.md): A context that represents an entire course.
- [CLSContextTypeCustom](clscontexttype/custom.md): A context for assignable content that isn’t represented by one of the built-in context types.
- [CLSContextTypeDocument](clscontexttype/document.md): A document context.
- [CLSContextTypeExercise](clscontexttype/exercise.md): An exercise context.
- [CLSContextTypeGame](clscontexttype/game.md): A game context.
- [CLSContextTypeLesson](clscontexttype/lesson.md): A lesson context.
- [CLSContextTypeLevel](clscontexttype/level.md): A level context.
- [CLSContextTypeNone](clscontexttype/none.md): No type is assigned.
- [CLSContextTypePage](clscontexttype/page.md): A page context.
- [CLSContextTypeQuiz](clscontexttype/quiz.md): A quiz context.
- [CLSContextTypeSection](clscontexttype/section.md): A section context.
- [CLSContextTypeTask](clscontexttype/task.md): A task context.
- [CLSContextTypeVideo](clscontexttype/video.md): A video context.

## See Also

### Managing the context type

- [type](clscontext/type.md): The kind of content a context represents.
- [setType:](clscontext/settype%28__%29.md): Updates the kind of content that a context represents.
- [customTypeName](clscontext/customtypename.md): An optional name that the system presents to the user if you choose the custom context type.

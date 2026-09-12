> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/relevantintent](https://developer.apple.com/documentation/appintents/relevantintent)

# RelevantIntent

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A type that stores an app intent and indicates its relevance to someone.

## Declaration

```swift
struct RelevantIntent
```

<a id="overview"></a>

## Overview

Use a `RelevantIntent` structure to specify an action someone might want to take and the conditions when the system might want to suggest that action. For example, a sports app might create an action to start playback of a game shortly before that game starts. Specify the action using a [WidgetConfigurationIntent](widgetconfigurationintent.md) structure, and register the relevant intent with the system using the [RelevantIntentManager](relevantintentmanager.md) type.

## Topics

### Initializers

- [init(\_:widgetKind:relevance:)](relevantintent/init%28__widgetkind_relevance_%29.md): Creates an instance of this type using the specified app intent and relevance information.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Intent relevance

- [RelevantIntentManager](relevantintentmanager.md): A type you use to suggest app intents and their current relevance to a person.
- [RelevantContext](../relevancekit/relevantcontext.md): Contextual clues the system uses to show relevant widgets in the Smart Stack on watchOS.

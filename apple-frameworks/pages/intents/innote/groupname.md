> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innote/groupname](https://developer.apple.com/documentation/intents/innote/groupname)

# groupName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The user-visible name of the group that contains the note.

> INNote is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var groupName: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

Use groups to organize notes within your app. For example, you might use this property to specify the name of the folder containing the note. Group names should always correspond to the user-visible name of the container, and not to any internal designation.

# groupName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The user-visible name of the group that contains the note.

> INNote is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * groupName;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * groupName;
```

<a id="Discussion"></a>

## Discussion

Use groups to organize notes within your app. For example, you might use this property to specify the name of the folder containing the note. Group names should always correspond to the user-visible name of the container, and not to any internal designation.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintentresponse/creatednote](https://developer.apple.com/documentation/intents/increatenoteintentresponse/creatednote)

# createdNote (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The details of the note that you created.

> INCreateNoteIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var createdNote: INNote? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the content of the note that you created.

# createdNote (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The details of the note that you created.

> INCreateNoteIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INNote * createdNote;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INNote * createdNote;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the content of the note that you created.

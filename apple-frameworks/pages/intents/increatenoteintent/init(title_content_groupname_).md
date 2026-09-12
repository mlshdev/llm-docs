> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintent/init(title:content:groupname:)](https://developer.apple.com/documentation/intents/increatenoteintent/init(title:content:groupname:))

# init(title:content:groupName:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Initializes the intent object with the specified note content.

> INCreateNoteIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
init(title: INSpeakableString?, content: INNoteContent?, groupName: INSpeakableString?)
```

## Parameters

- `title`: The title text to apply to the note.
- `content`: The content of the note.
- `groupName`: The name of the group in which to store the note. Group names correspond to folders or other means of organizing notes within your app.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to create a note. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithTitle:content:groupName: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Initializes the intent object with the specified note content.

> INCreateNoteIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (instancetype) initWithTitle:(INSpeakableString *) title content:(INNoteContent *) content groupName:(INSpeakableString *) groupName;
```

## Parameters

- `title`: The title text to apply to the note.
- `content`: The content of the note.
- `groupName`: The name of the group in which to store the note. Group names correspond to folders or other means of organizing notes within your app.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to create a note. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

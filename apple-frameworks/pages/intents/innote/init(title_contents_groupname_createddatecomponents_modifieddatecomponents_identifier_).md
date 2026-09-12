> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innote/init(title:contents:groupname:createddatecomponents:modifieddatecomponents:identifier:)](https://developer.apple.com/documentation/intents/innote/init(title:contents:groupname:createddatecomponents:modifieddatecomponents:identifier:))

# init(title:contents:groupName:createdDateComponents:modifiedDateComponents:identifier:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Initializes a note object with the specified contents and attributes.

> INNote is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
init(title: INSpeakableString, contents: [INNoteContent], groupName: INSpeakableString?, createdDateComponents: DateComponents?, modifiedDateComponents: DateComponents?, identifier: String?)
```

## Parameters

- `title`: The title text for the note. This string represents the initial text that users see for the note in your interface.
- `contents`: The main content of the note. Use this parameter to specify the text and images that the note contains.
- `groupName`: The container in which the note resides. For example, if your app organizes notes into named folders, use this property to specify the name of the folder.
- `createdDateComponents`: The date on which the note was created.
- `modifiedDateComponents`: The date on which the note was last modified.
- `identifier`: A unique identifier that you associate with the note internally.

<a id="return-value"></a>

## Return Value

An initialized note object or `nil` if the object could not be created.

# initWithTitle:contents:groupName:createdDateComponents:modifiedDateComponents:identifier: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Initializes a note object with the specified contents and attributes.

> INNote is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (instancetype) initWithTitle:(INSpeakableString *) title contents:(NSArray<INNoteContent *> *) contents groupName:(INSpeakableString *) groupName createdDateComponents:(NSDateComponents *) createdDateComponents modifiedDateComponents:(NSDateComponents *) modifiedDateComponents identifier:(NSString *) identifier;
```

## Parameters

- `title`: The title text for the note. This string represents the initial text that users see for the note in your interface.
- `contents`: The main content of the note. Use this parameter to specify the text and images that the note contains.
- `groupName`: The container in which the note resides. For example, if your app organizes notes into named folders, use this property to specify the name of the folder.
- `createdDateComponents`: The date on which the note was created.
- `modifiedDateComponents`: The date on which the note was last modified.
- `identifier`: A unique identifier that you associate with the note internally.

<a id="return-value"></a>

## Return Value

An initialized note object or `nil` if the object could not be created.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intextnotecontent/init(text:)](https://developer.apple.com/documentation/intents/intextnotecontent/init(text:))

# init(text:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Initializes a text-based note with the specified content.

> INTextNoteContent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
init(text: String)
```

## Parameters

- `text`: The text to include in the main content of the note.

<a id="return-value"></a>

## Return Value

An initialized text note object or `nil` if the object could not be created.

# initWithText: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Initializes a text-based note with the specified content.

> INTextNoteContent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text;
```

## Parameters

- `text`: The text to include in the main content of the note.

<a id="return-value"></a>

## Return Value

An initialized text note object or `nil` if the object could not be created.

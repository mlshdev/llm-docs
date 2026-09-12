> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/speechxtnddata](https://developer.apple.com/documentation/applicationservices/speechxtnddata)

# SpeechXtndData (Swift)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a speech extension data structure.

## Declaration

```swift
struct SpeechXtndData
```

<a id="overview"></a>

## Overview

The speech extension data structure allows you to use the [GetSpeechInfo](1552220-getspeechinfo.md) and [SetSpeechInfo](1552223-setspeechinfo.md) functions with selectors defined by particular synthesizers. By requiring that you pass to one of these functions a pointer to a speech extension data structure, synthesizers can permit the exchange of data in any format.

## Topics

### Initializers

- [init()](speechxtnddata/1459302-init.md)
- [init(synthCreator:synthData:)](speechxtnddata/1461482-init.md)

### Instance Properties

- [synthCreator](speechxtnddata/1462619-synthcreator.md): The synthesizer’s creator ID, identical to the value stored in the `synthManufacturer` field of a speech version information structure. You should set this field to the appropriate value before calling `GetSpeechInfo` or `SetSpeechInfo`.
- [synthData](speechxtnddata/1459201-synthdata.md): Synthesizer-specific data. The size and format of the data in this field may vary.

# SpeechXtndData (Objective-C)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a speech extension data structure.

## Declaration

```objectivec
typedef struct SpeechXtndData {
    ...
} SpeechXtndData;
```

<a id="overview"></a>

## Overview

The speech extension data structure allows you to use the [GetSpeechInfo](1552220-getspeechinfo.md) and [SetSpeechInfo](1552223-setspeechinfo.md) functions with selectors defined by particular synthesizers. By requiring that you pass to one of these functions a pointer to a speech extension data structure, synthesizers can permit the exchange of data in any format.

## Topics

### Instance Properties

- [synthCreator](speechxtnddata/1462619-synthcreator.md): The synthesizer’s creator ID, identical to the value stored in the `synthManufacturer` field of a speech version information structure. You should set this field to the appropriate value before calling `GetSpeechInfo` or `SetSpeechInfo`.
- [synthData](speechxtnddata/1459201-synthdata.md): Synthesizer-specific data. The size and format of the data in this field may vary.

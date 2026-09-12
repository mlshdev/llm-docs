> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextselectiondirectionnavigation](https://developer.apple.com/documentation/browserenginekit/betextselectiondirectionnavigation)

# BETextSelectionDirectionNavigation (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A protocol that defines methods for cursor and selection adjustments.

## Declaration

```swift
protocol BETextSelectionDirectionNavigation
```

<a id="overview"></a>

## Overview

This protocol enables your app to request text-cursor movement and selection modifications. In response to a person’s input, the system calls your app in the conditions described by the protocol. Your app performs the requested operation and updates text cursor or selection state accordingly.

## Topics

### Extending the text section

- [extend(in:)](betextselectiondirectionnavigation/extend%28in_%29.md): Extends text selection in the specified directions, such as in response to an arrow key press while shift is held.
- [extend(in:by:)](betextselectiondirectionnavigation/extend%28in_by_%29.md): Moves the selection in the specified directions by granularity, in response to different key combinations:

### Moving the cursor

- [move(in:)](betextselectiondirectionnavigation/move%28in_%29.md): Moves the cursor in the specified directions, such as in response to an arrow key press.
- [move(in:by:)](betextselectiondirectionnavigation/move%28in_by_%29.md): Moves the cursor in the specified directions by granularity, in response to different key combinations:

## Relationships

### Inherited By

- [BETextInput](betextinput.md)

## See Also

### Text selection

- [BESelectionFlags](beselectionflags.md): Flags that indicate different states or characteristics of a text selection.
- [BESelectionTouchPhase](beselectiontouchphase.md): The different phases of touch interaction during text selection operations.

# BETextSelectionDirectionNavigation (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A protocol that defines methods for cursor and selection adjustments.

## Declaration

```objectivec
@protocol BETextSelectionDirectionNavigation
```

<a id="overview"></a>

## Overview

This protocol enables your app to request text-cursor movement and selection modifications. In response to a person’s input, the system calls your app in the conditions described by the protocol. Your app performs the requested operation and updates text cursor or selection state accordingly.

## Topics

### Extending the text section

- [extendInLayoutDirection:](betextselectiondirectionnavigation/extend%28in_%29.md): Extends text selection in the specified directions, such as in response to an arrow key press while shift is held.
- [extendInStorageDirection:byGranularity:](betextselectiondirectionnavigation/extend%28in_by_%29.md): Moves the selection in the specified directions by granularity, in response to different key combinations:

### Moving the cursor

- [moveInLayoutDirection:](betextselectiondirectionnavigation/move%28in_%29.md): Moves the cursor in the specified directions, such as in response to an arrow key press.
- [moveInStorageDirection:byGranularity:](betextselectiondirectionnavigation/move%28in_by_%29.md): Moves the cursor in the specified directions by granularity, in response to different key combinations:

## Relationships

### Inherited By

- [BETextInput](betextinput.md)

## See Also

### Text selection

- [BESelectionFlags](beselectionflags.md): Flags that indicate different states or characteristics of a text selection.
- [BESelectionTouchPhase](beselectiontouchphase.md): The different phases of touch interaction during text selection operations.

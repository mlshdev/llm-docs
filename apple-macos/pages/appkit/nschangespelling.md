> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nschangespelling](https://developer.apple.com/documentation/appkit/nschangespelling)

# NSChangeSpelling (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that responder objects can implement to correct a misspelled word.

## Declaration

```swift
protocol NSChangeSpelling
```

## Topics

### Changing spellings

- [changeSpelling(\_:)](nschangespelling/changespelling%28__%29.md): Replaces the selected word in the receiver with a corrected version from the Spelling panel.

## Relationships

### Conforming Types

- [NSText](nstext.md)
- [NSTextView](nstextview.md)

## See Also

### Spell-checking

- [NSSpellChecker](nsspellchecker.md): An interface to the Cocoa spell-checking service.
- [NSIgnoreMisspelledWords](nsignoremisspelledwords.md): A protocol that enables the Ignore button in the Spelling panel to function properly.

# NSChangeSpelling (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that responder objects can implement to correct a misspelled word.

## Declaration

```objectivec
@protocol NSChangeSpelling
```

## Topics

### Changing spellings

- [changeSpelling:](nschangespelling/changespelling%28__%29.md): Replaces the selected word in the receiver with a corrected version from the Spelling panel.

## Relationships

### Conforming Types

- [NSText](nstext.md)

## See Also

### Spell-checking

- [NSSpellChecker](nsspellchecker.md): An interface to the Cocoa spell-checking service.
- [NSIgnoreMisspelledWords](nsignoremisspelledwords.md): A protocol that enables the Ignore button in the Spelling panel to function properly.

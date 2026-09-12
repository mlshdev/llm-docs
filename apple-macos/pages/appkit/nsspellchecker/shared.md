> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/shared](https://developer.apple.com/documentation/appkit/nsspellchecker/shared)

# shared (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the NSSpellChecker (one per application).

## Declaration

```swift
class var shared: NSSpellChecker { get }
```

<a id="return-value"></a>

## Return Value

The spelling checker shared by this application.

## See Also

### Related Documentation

- [Spell Checking Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SpellCheck/SpellCheck.html#//apple_ref/doc/uid/10000092i)

### Getting the Spell Checker

- [sharedSpellCheckerExists](sharedspellcheckerexists.md): Returns whether the application’s NSSpellChecker has already been created.

# sharedSpellChecker (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the NSSpellChecker (one per application).

## Declaration

```objectivec
@property (class, strong, readonly) NSSpellChecker * sharedSpellChecker;
```

<a id="return-value"></a>

## Return Value

The spelling checker shared by this application.

## See Also

### Related Documentation

- [Spell Checking Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SpellCheck/SpellCheck.html#//apple_ref/doc/uid/10000092i)

### Getting the Spell Checker

- [sharedSpellCheckerExists](sharedspellcheckerexists.md): Returns whether the application’s NSSpellChecker has already been created.

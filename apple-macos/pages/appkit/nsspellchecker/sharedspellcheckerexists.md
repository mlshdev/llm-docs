> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/sharedspellcheckerexists](https://developer.apple.com/documentation/appkit/nsspellchecker/sharedspellcheckerexists)

# sharedSpellCheckerExists (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns whether the application’s NSSpellChecker has already been created.

## Declaration

```swift
class var sharedSpellCheckerExists: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the shared spell checker already exists, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting the Spell Checker

- [shared](shared.md): Returns the NSSpellChecker (one per application).

# sharedSpellCheckerExists (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns whether the application’s NSSpellChecker has already been created.

## Declaration

```objectivec
@property (class, readonly) BOOL sharedSpellCheckerExists;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the shared spell checker already exists, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting the Spell Checker

- [sharedSpellChecker](shared.md): Returns the NSSpellChecker (one per application).

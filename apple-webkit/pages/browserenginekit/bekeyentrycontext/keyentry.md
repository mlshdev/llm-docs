> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bekeyentrycontext/keyentry](https://developer.apple.com/documentation/browserenginekit/bekeyentrycontext/keyentry)

# keyEntry (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

BEKeyEntry for which this context is representing.

## Declaration

```swift
var keyEntry: BEKeyEntry { get }
```

## See Also

### Getting the information about the key event

- [shouldInsertCharacter](shouldinsertcharacter.md): Represents whether a character should be inserted.
- [shouldEvaluateForInputSystemHandling](shouldevaluateforinputsystemhandling.md): Represents whether the key event should be evaluated within the context of a composed input mode.

# keyEntry (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

BEKeyEntry for which this context is representing.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) BEKeyEntry * keyEntry;
```

## See Also

### Getting the information about the key event

- [shouldInsertCharacter](shouldinsertcharacter.md): Represents whether a character should be inserted.
- [shouldEvaluateForInputSystemHandling](shouldevaluateforinputsystemhandling.md): Represents whether the key event should be evaluated within the context of a composed input mode.

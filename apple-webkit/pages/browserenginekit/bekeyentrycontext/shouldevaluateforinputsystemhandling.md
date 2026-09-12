> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bekeyentrycontext/shouldevaluateforinputsystemhandling](https://developer.apple.com/documentation/browserenginekit/bekeyentrycontext/shouldevaluateforinputsystemhandling)

# shouldEvaluateForInputSystemHandling (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Represents whether the key event should be evaluated within the context of a composed input mode.

## Declaration

```swift
var shouldEvaluateForInputSystemHandling: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When using an input mode with composed input, such as Chinese/Japanese/Korean, the markedText will be used to combine multiple key events into a single character.

## See Also

### Getting the information about the key event

- [keyEntry](keyentry.md): BEKeyEntry for which this context is representing.
- [shouldInsertCharacter](shouldinsertcharacter.md): Represents whether a character should be inserted.

# shouldEvaluateForInputSystemHandling (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Represents whether the key event should be evaluated within the context of a composed input mode.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL shouldEvaluateForInputSystemHandling;
```

<a id="discussion"></a>

## Discussion

When using an input mode with composed input, such as Chinese/Japanese/Korean, the markedText will be used to combine multiple key events into a single character.

## See Also

### Getting the information about the key event

- [keyEntry](keyentry.md): BEKeyEntry for which this context is representing.
- [shouldInsertCharacter](shouldinsertcharacter.md): Represents whether a character should be inserted.

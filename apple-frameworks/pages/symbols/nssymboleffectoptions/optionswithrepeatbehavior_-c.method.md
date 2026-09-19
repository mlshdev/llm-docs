> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/symbols/nssymboleffectoptions/optionswithrepeatbehavior:-c.method

# optionsWithRepeatBehavior:

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Return a copy of the options setting a preferred repeat behavior.

## Declaration

```objectivec
- (instancetype) optionsWithRepeatBehavior:(NSSymbolEffectOptionsRepeatBehavior *) behavior;
```

## Parameters

- `behavior`: The preferred behavior when the effect is repeated.

<a id="return-value"></a>

## Return Value

A new options object with the preferred repeat behavior.

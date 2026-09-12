> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/nssymboleffectoptions/optionswithrepeatcount:-c.method](https://developer.apple.com/documentation/symbols/nssymboleffectoptions/optionswithrepeatcount:-c.method)

# optionsWithRepeatCount:

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · tvOS 17.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 10.0+ (deprecated in 27.0)

Creates a set of effect options with a preferred repeat count.

## Declaration

```objectivec
- (instancetype) optionsWithRepeatCount:(NSInteger) count;
```

## Parameters

- `count`: The preferred number of times to play the effect. The function may clamp very large or small values.

<a id="return-value"></a>

## Return Value

A copy of the effect options with the preferred repeat count.

## See Also

### Configuring repeating effects

- [optionsWithRepeating](optionswithrepeating-c.method.md): Deprecated. A set of effect options that prefers to repeat indefinitely.
- [optionsWithRepeating](optionswithrepeating-c.type.method.md): Deprecated. A default set of effect options that prefers to repeat indefinitely.
- [optionsWithNonRepeating](optionswithnonrepeating-c.method.md): A set of effect options that prefers to not repeat.
- [optionsWithNonRepeating](optionswithnonrepeating-c.type.method.md): A default set of effect options that prefers to not repeat.
- [optionsWithRepeatCount:](optionswithrepeatcount_-c.type.method.md): Deprecated. A default set of effect options with a preferred repeat count.

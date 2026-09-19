> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/symbols/nssymboleffectoptions/optionswithspeed:-c.method

# optionsWithSpeed:

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a set of effect options with a preferred speed multiplier.

## Declaration

```objectivec
- (instancetype) optionsWithSpeed:(double) speed;
```

## Parameters

- `speed`: The preferred speed multiplier to play the effect with. The default multiplier is `1.0`. The function may clamp very large or small values.

<a id="return-value"></a>

## Return Value

A copy of the effect options with the preferred speed multiplier.

## See Also

### Configuring effect speed

- [optionsWithSpeed:](optionswithspeed_-c.type.method.md): A default set of effect options with a preferred speed multiplier.

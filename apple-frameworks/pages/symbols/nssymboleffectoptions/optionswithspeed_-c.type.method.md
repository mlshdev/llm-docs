> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/nssymboleffectoptions/optionswithspeed:-c.type.method](https://developer.apple.com/documentation/symbols/nssymboleffectoptions/optionswithspeed:-c.type.method)

# optionsWithSpeed:

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A default set of effect options with a preferred speed multiplier.

## Declaration

```objectivec
+ (instancetype) optionsWithSpeed:(double) speed;
```

## Parameters

- `speed`: The preferred speed multiplier to play the effect with. The default multiplier is `1.0`. The function may clamp very large or small values.

<a id="return-value"></a>

## Return Value

A new instance of effect options with the preferred speed multiplier.

## See Also

### Configuring effect speed

- [optionsWithSpeed:](optionswithspeed_-c.method.md): Creates a set of effect options with a preferred speed multiplier.

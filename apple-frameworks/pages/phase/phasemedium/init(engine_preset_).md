> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasemedium/init(engine:preset:)

# init(engine:preset:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a medium.

## Declaration

```swift
init(engine: PHASEEngine, preset: PHASEMedium.Preset)
```

## Parameters

- `engine`: The framework engine object.
- `preset`: A predefined option for the medium.

## See Also

### Creating a Medium

- [PHASEMedium.Preset](preset.md): Predetermined qualities of an environment that affect how sound transmits.

# initWithEngine:preset: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a medium.

## Declaration

```objectivec
- (instancetype) initWithEngine:(PHASEEngine *) engine preset:(PHASEMediumPreset) preset;
```

## Parameters

- `engine`: The framework engine object.
- `preset`: A predefined option for the medium.

## See Also

### Creating a Medium

- [PHASEMediumPreset](preset.md): Predetermined qualities of an environment that affect how sound transmits.

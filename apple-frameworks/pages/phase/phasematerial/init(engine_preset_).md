> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasematerial/init(engine:preset:)

# init(engine:preset:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a material with the given preset.

## Declaration

```swift
init(engine: PHASEEngine, preset: PHASEMaterialPreset)
```

## Parameters

- `engine`: The object that controls the app’s audio output.
- `preset`: A specific material among preselected options.

# initWithEngine:preset: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a material with the given preset.

## Declaration

```objectivec
- (instancetype) initWithEngine:(PHASEEngine *) engine preset:(PHASEMaterialPreset) preset;
```

## Parameters

- `engine`: The object that controls the app’s audio output.
- `preset`: A specific material among preselected options.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasesource/shapes

# shapes (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An array of shapes that collectively define the audio-emitting surface area of a volumetric source.

## Declaration

```swift
var shapes: [PHASEShape] { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets the contents to the `shapes` argument of the [init(engine:shapes:)](init%28engine_shapes_%29.md) initializer.

# shapes (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An array of shapes that collectively define the audio-emitting surface area of a volumetric source.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<PHASEShape *> * shapes;
```

<a id="Discussion"></a>

## Discussion

The framework sets the contents to the `shapes` argument of the [initWithEngine:shapes:](init%28engine_shapes_%29.md) initializer.

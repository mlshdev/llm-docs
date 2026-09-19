> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseoccluder/init(engine:shapes:)

# init(engine:shapes:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an occluder with the given engine and shapes.

## Declaration

```swift
init(engine: PHASEEngine, shapes: [PHASEShape])
```

## Parameters

- `engine`: The object that controls the app’s audio output.
- `shapes`: A collection of shapes that defines the occluder’s overall shape.

# initWithEngine:shapes: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an occluder with the given engine and shapes.

## Declaration

```objectivec
- (instancetype) initWithEngine:(PHASEEngine *) engine shapes:(NSArray<PHASEShape *> *) shapes;
```

## Parameters

- `engine`: The object that controls the app’s audio output.
- `shapes`: A collection of shapes that defines the occluder’s overall shape.

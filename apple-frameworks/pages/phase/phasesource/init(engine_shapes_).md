> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesource/init(engine:shapes:)](https://developer.apple.com/documentation/phase/phasesource/init(engine:shapes:))

# init(engine:shapes:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a voluminous area in the environment from which sound emanates.

## Declaration

```swift
init(engine: PHASEEngine, shapes: [PHASEShape])
```

## Parameters

- `engine`: The object that controls this class’ associated audio output.
- `shapes`: A list of volumes that emanate sound.

## See Also

### Creating a Source

- [init(engine:)](init%28engine_%29.md): Creates a single point in the environment from which sound emanates.

# initWithEngine:shapes: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a voluminous area in the environment from which sound emanates.

## Declaration

```objectivec
- (instancetype) initWithEngine:(PHASEEngine *) engine shapes:(NSArray<PHASEShape *> *) shapes;
```

## Parameters

- `engine`: The object that controls this class’ associated audio output.
- `shapes`: A list of volumes that emanate sound.

## See Also

### Creating a Source

- [initWithEngine:](init%28engine_%29.md): Creates a single point in the environment from which sound emanates.

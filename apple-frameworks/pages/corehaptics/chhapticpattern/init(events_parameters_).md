> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticpattern/init(events:parameters:)](https://developer.apple.com/documentation/corehaptics/chhapticpattern/init(events:parameters:))

# init(events:parameters:) (Swift)

**Framework:** Core Haptics  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Constructs a haptic pattern from a series of events and parameters.

## Declaration

```swift
init(events: [CHHapticEvent], parameters: [CHHapticDynamicParameter]) throws
```

## Parameters

- `events`: An array of events that make up the haptic pattern.
- `parameters`: An array of dynamic parameters that define how the haptic pattern’s parameters change over time.

## See Also

### Creating a Haptic Pattern

- [init(contentsOf:)](init%28contentsof_%29.md): Creates a haptic pattern with the contents of an AHAP file.
- [init(events:parameterCurves:)](init%28events_parametercurves_%29.md): Constructs a haptic pattern from a series of events and parameter curves.
- [init(dictionary:)](init%28dictionary_%29.md): Creates a haptic pattern from a property list dictionary.
- [CHHapticPattern.Key](key.md): Constants that define the keys you use to create a haptic pattern dictionary.

# initWithEvents:parameters:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Constructs a haptic pattern from a series of events and parameters.

## Declaration

```objectivec
- (instancetype) initWithEvents:(NSArray<CHHapticEvent *> *) events parameters:(NSArray<CHHapticDynamicParameter *> *) parameters error:(NSError **) outError;
```

## Parameters

- `events`: An array of events that make up the haptic pattern.
- `parameters`: An array of dynamic parameters that define how the haptic pattern’s parameters change over time.
- `outError`: Any error that occurs during haptic pattern initialization. If no error occurs, this value is `nil`.

## See Also

### Creating a Haptic Pattern

- [initWithContentsOfURL:error:](init%28contentsof_%29.md): Creates a haptic pattern with the contents of an AHAP file.
- [initWithEvents:parameterCurves:error:](init%28events_parametercurves_%29.md): Constructs a haptic pattern from a series of events and parameter curves.
- [initWithDictionary:error:](init%28dictionary_%29.md): Creates a haptic pattern from a property list dictionary.
- [CHHapticPatternKey](key.md): Constants that define the keys you use to create a haptic pattern dictionary.

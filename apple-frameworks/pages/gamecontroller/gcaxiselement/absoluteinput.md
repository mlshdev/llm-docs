> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcaxiselement/absoluteinput

# absoluteInput (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An input object that provides absolute axis values.

## Declaration

```swift
var absoluteInput: (any GCAxisInput)? { get }
```

## See Also

### Getting the inputs

- [relativeInput](relativeinput.md): An input object that provides relative axis values.

# absoluteInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An input object that provides absolute axis values.

## Declaration

```objectivec
@property (readonly, nullable) id<GCAxisInput> absoluteInput;
```

## See Also

### Getting the inputs

- [relativeInput](relativeinput.md): An input object that provides relative axis values.

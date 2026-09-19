> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlcapturescope/begin()

# begin() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Tells Metal to begin recording command information.

## Declaration

```swift
func begin()
```

## See Also

### Defining capture scope boundaries

- [end()](end%28%29.md): Tells Metal to stop recording command information.

# beginScope (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Tells Metal to begin recording command information.

## Declaration

```objectivec
- (void) beginScope;
```

## See Also

### Defining capture scope boundaries

- [endScope](end%28%29.md): Tells Metal to stop recording command information.

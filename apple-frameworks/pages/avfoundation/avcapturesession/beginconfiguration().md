> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/beginconfiguration()](https://developer.apple.com/documentation/avfoundation/avcapturesession/beginconfiguration())

# beginConfiguration() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Marks the beginning of changes to a running capture session’s configuration to perform in a single atomic update.

## Declaration

```swift
func beginConfiguration()
```

## Mentioned In

- [Setting up a capture session](../setting-up-a-capture-session.md)

<a id="Discussion"></a>

## Discussion

Call this method and [commitConfiguration()](commitconfiguration%28%29.md) to batch multiple configuration operations on a running session into an atomic update.

After you call this method, you can add or remove outputs, alter the [sessionPreset](sessionpreset.md), or configure individual capture input or output properties. The session configuration doesn’t change until you invoke [commitConfiguration()](commitconfiguration%28%29.md), at which the system updates all settings. You can nest [beginConfiguration()](beginconfiguration%28%29.md) and [commitConfiguration()](commitconfiguration%28%29.md) pairs, and the system applies the changes when you call the outermost commit.

## See Also

### Configuring a session

- [commitConfiguration()](commitconfiguration%28%29.md): Commits one or more changes to a running capture session’s configuration in a single atomic update.

# beginConfiguration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Marks the beginning of changes to a running capture session’s configuration to perform in a single atomic update.

## Declaration

```objectivec
- (void) beginConfiguration;
```

## Mentioned In

- [Setting up a capture session](../setting-up-a-capture-session.md)

<a id="Discussion"></a>

## Discussion

Call this method and [commitConfiguration](commitconfiguration%28%29.md) to batch multiple configuration operations on a running session into an atomic update.

After you call this method, you can add or remove outputs, alter the [sessionPreset](sessionpreset.md), or configure individual capture input or output properties. The session configuration doesn’t change until you invoke [commitConfiguration](commitconfiguration%28%29.md), at which the system updates all settings. You can nest [beginConfiguration](beginconfiguration%28%29.md) and [commitConfiguration](commitconfiguration%28%29.md) pairs, and the system applies the changes when you call the outermost commit.

## See Also

### Configuring a session

- [commitConfiguration](commitconfiguration%28%29.md): Commits one or more changes to a running capture session’s configuration in a single atomic update.

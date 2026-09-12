> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arworldtrackingconfiguration/new](https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/new)

# new

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Creates a new world-tracking configuration.

## Declaration

```objectivec
+ (instancetype) new;
```

<a id="Discussion"></a>

## Discussion

To use the configuration in an AR experience, pass it as an argument to your app’s [runWithConfiguration:options:](../arsession/run%28__options_%29.md) function.

## See Also

### Creating a Configuration

- [init](init%28%29.md): Initializes a new world-tracking configuration.
- [initialWorldMap](initialworldmap.md): The state from a previous AR session to attempt to resume with this session configuration.

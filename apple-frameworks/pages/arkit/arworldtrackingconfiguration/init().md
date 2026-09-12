> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arworldtrackingconfiguration/init()](https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/init())

# init() (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Initializes a new world-tracking configuration.

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

To use the configuration in an AR experience, pass it as an argument to your app’s [run(\_:options:)](../arsession/run%28__options_%29.md) function.

## See Also

### Creating a Configuration

- [initialWorldMap](initialworldmap.md): The state from a previous AR session to attempt to resume with this session configuration.

# init (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Initializes a new world-tracking configuration.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="Discussion"></a>

## Discussion

To use the configuration in an AR experience, pass it as an argument to your app’s [runWithConfiguration:options:](../arsession/run%28__options_%29.md) function.

## See Also

### Creating a Configuration

- [new](new.md): Creates a new world-tracking configuration.
- [initialWorldMap](initialworldmap.md): The state from a previous AR session to attempt to resume with this session configuration.

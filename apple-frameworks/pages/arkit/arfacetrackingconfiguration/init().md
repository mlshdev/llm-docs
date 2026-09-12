> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfacetrackingconfiguration/init()](https://developer.apple.com/documentation/arkit/arfacetrackingconfiguration/init())

# init() (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Creates a new face-tracking configuration.

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

To use the configuration in an AR session, pass it to the [ARSession](../arsession.md) [run(\_:options:)](../arsession/run%28__options_%29.md) method.

# init (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Creates a new face-tracking configuration.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="Discussion"></a>

## Discussion

To use the configuration in an AR session, pass it to the [ARSession](../arsession.md) [runWithConfiguration:options:](../arsession/run%28__options_%29.md) method.

## See Also

### Creating a Configuration

- [new](new.md): Allocates and initializes a new face-tracking configuration.

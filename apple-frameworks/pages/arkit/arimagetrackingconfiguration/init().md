> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arimagetrackingconfiguration/init()](https://developer.apple.com/documentation/arkit/arimagetrackingconfiguration/init())

# init() (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+

Initializes a new image-tracking configuration.

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
**Availability:** iOS 12.0+ · iPadOS 12.0+

Initializes a new image-tracking configuration.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="Discussion"></a>

## Discussion

To use the configuration in an AR session, pass it to the [ARSession](../arsession.md) [runWithConfiguration:options:](../arsession/run%28__options_%29.md) method.

## See Also

### Creating a Configuration

- [new](new.md): Creates a new image-tracking configuration.

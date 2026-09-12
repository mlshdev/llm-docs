> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arimagetrackingconfiguration/new](https://developer.apple.com/documentation/arkit/arimagetrackingconfiguration/new)

# new

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+

Creates a new image-tracking configuration.

## Declaration

```objectivec
+ (instancetype) new;
```

<a id="Discussion"></a>

## Discussion

To use the configuration in an AR session, pass it to the [ARSession](../arsession.md) [runWithConfiguration:options:](../arsession/run%28__options_%29.md) method.

## See Also

### Creating a Configuration

- [init](init%28%29.md): Initializes a new image-tracking configuration.

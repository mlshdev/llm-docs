> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arobjectscanningconfiguration/new](https://developer.apple.com/documentation/arkit/arobjectscanningconfiguration/new)

# new

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS

Creates a new object scanning configuration.

## Declaration

```objectivec
+ (instancetype) new;
```

<a id="Discussion"></a>

## Discussion

To use the configuration in an AR session, pass it to the [ARSession](../arsession.md) [runWithConfiguration:options:](../arsession/run%28__options_%29.md) method.

## See Also

### Creating a Configuration

- [init](init%28%29.md): Initializes a new object scanning configuration.

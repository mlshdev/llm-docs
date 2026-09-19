> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arobjectscanningconfiguration/init()

# init() (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS

Initializes a new object scanning configuration.

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
**Availability:** iOS · iPadOS

Initializes a new object scanning configuration.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="Discussion"></a>

## Discussion

To use the configuration in an AR session, pass it to the [ARSession](../arsession.md) [runWithConfiguration:options:](../arsession/run%28__options_%29.md) method.

## See Also

### Creating a Configuration

- [new](new.md): Creates a new object scanning configuration.

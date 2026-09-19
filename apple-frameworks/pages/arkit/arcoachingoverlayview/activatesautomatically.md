> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arcoachingoverlayview/activatesautomatically

# activatesAutomatically (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A flag that indicates whether the coaching view activates automatically, depending on the current session state.

## Declaration

```swift
var activatesAutomatically: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If enabled, the coaching overlay sets [isActive](isactive.md) automatically, depending on whether it needs user intervention to meet the current [goal](goal-swift.property.md). The coaching overlay activates when the session is initializing or when tracking conditions have degraded past a certain threshold.

## See Also

### Activating the View

- [isActive](isactive.md): A flag that indicates whether coaching is in progress.
- [setActive(\_:animated:)](setactive%28__animated_%29.md): Controls whether coaching is in progress.

# activatesAutomatically (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A flag that indicates whether the coaching view activates automatically, depending on the current session state.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL activatesAutomatically;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If enabled, the coaching overlay sets [isActive](isactive.md) automatically, depending on whether it needs user intervention to meet the current [goal](goal-swift.property.md). The coaching overlay activates when the session is initializing or when tracking conditions have degraded past a certain threshold.

## See Also

### Activating the View

- [isActive](isactive.md): A flag that indicates whether coaching is in progress.
- [setActive:animated:](setactive%28__animated_%29.md): Controls whether coaching is in progress.

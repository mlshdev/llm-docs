> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/aranchor/name](https://developer.apple.com/documentation/arkit/aranchor/name)

# name (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

A descriptive name for the anchor.

## Declaration

```swift
var name: String? { get }
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](../managing-session-life-cycle-and-tracking-quality.md)

<a id="Discussion"></a>

## Discussion

To name an anchor, create one with the [init(name:transform:)](init%28name_transform_%29.md) initializer. This property is `nil` for anchors created otherwise.

ARKit does not display the name to users, but your app can use it to identify anchors for debugging.

## See Also

### Creating Anchors

- [init(transform:)](init%28transform_%29.md): Creates a new anchor object with the specified transform.
- [init(name:transform:)](init%28name_transform_%29.md): Creates a new anchor object with the specified transform and a descriptive name.

# name (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

A descriptive name for the anchor.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * name;
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](../managing-session-life-cycle-and-tracking-quality.md)

<a id="Discussion"></a>

## Discussion

To name an anchor, create one with the [initWithName:transform:](init%28name_transform_%29.md) initializer. This property is `nil` for anchors created otherwise.

ARKit does not display the name to users, but your app can use it to identify anchors for debugging.

## See Also

### Creating Anchors

- [initWithTransform:](init%28transform_%29.md): Creates a new anchor object with the specified transform.
- [initWithName:transform:](init%28name_transform_%29.md): Creates a new anchor object with the specified transform and a descriptive name.

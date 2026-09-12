> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/aranchor/init(name:transform:)](https://developer.apple.com/documentation/arkit/aranchor/init(name:transform:))

# init(name:transform:) (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+

Creates a new anchor object with the specified transform and a descriptive name.

## Declaration

```swift
init(name: String, transform: simd_float4x4)
```

## Parameters

- `name`: A descriptive name for the anchor. ARKit does not display the name to users, but your app can use it to identify anchors for debugging.
- `transform`: A matrix encoding the position, orientation, and scale of the anchor relative to the world coordinate space of the AR session the anchor is placed in.

<a id="discussion"></a>

## Discussion

World coordinate space in ARKit always follows a right-handed convention, but is oriented based on the session configuration. For details, see [Understanding World Tracking](../understanding-world-tracking.md).

<a id="Discussion"></a>

## Discussion

Use the [add(anchor:)](../arsession/add%28anchor_%29.md) method to begin tracking your custom anchor in an AR session.

## See Also

### Creating Anchors

- [init(transform:)](init%28transform_%29.md): Creates a new anchor object with the specified transform.
- [name](name.md): A descriptive name for the anchor.

# initWithName:transform: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+

Creates a new anchor object with the specified transform and a descriptive name.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name transform:(simd_float4x4) transform;
```

## Parameters

- `name`: A descriptive name for the anchor. ARKit does not display the name to users, but your app can use it to identify anchors for debugging.
- `transform`: A matrix encoding the position, orientation, and scale of the anchor relative to the world coordinate space of the AR session the anchor is placed in.

<a id="discussion"></a>

## Discussion

World coordinate space in ARKit always follows a right-handed convention, but is oriented based on the session configuration. For details, see [Understanding World Tracking](../understanding-world-tracking.md).

<a id="Discussion"></a>

## Discussion

Use the [addAnchor:](../arsession/add%28anchor_%29.md) method to begin tracking your custom anchor in an AR session.

## See Also

### Creating Anchors

- [initWithTransform:](init%28transform_%29.md): Creates a new anchor object with the specified transform.
- [name](name.md): A descriptive name for the anchor.
